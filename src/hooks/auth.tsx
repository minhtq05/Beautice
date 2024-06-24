import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Authentication";
import { CookiesProvider, useCookies } from "react-cookie";

type Auth = {
    isAuthenticated: boolean
    username: string
}

type AuthContextType = {
    user: {
        isAuthenticated: boolean
        username: string
    }
    signin: (token: string) => void
    signout: () => void
}

// type ProtectedAuthResponse = {
//     username: string
// }

const AuthContext = createContext<AuthContextType | null>(null)

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthContextType {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    console.log("Render Auth Provider")
    const [user, setUser] = useState<Auth>({
        isAuthenticated: false,
        username: '',
    })
    const [inAuth, setInAuth] = useState<boolean>(true)
    const [token, setToken] = useState<string>('')
    const [cookies, setCookie, removeCookie] = useCookies()

    const handleSignin = (token: string) => {
        setUser({
            isAuthenticated: true,
            username: '',
        })
        setToken(token)
    }

    const handleSignout = () => {
        setUser({
            isAuthenticated: false,
            username: ''
        })
    }

    useEffect(() => {
        const fetchAuth = async () => {
            if (token === '') {
                setInAuth(false)
                const old_token: string | null = cookies.token

                if (old_token) {
                    setToken(old_token)
                    axios.get('http://localhost:3000/protected', {
                        headers: {
                            authorization: old_token
                        }
                    }).then(() => {
                        if (!user.isAuthenticated) {
                            handleSignin(old_token)
                            setCookie('token', old_token)
                        }
                    }).catch((err) => {
                        if (user.isAuthenticated) {
                            handleSignout()
                        }
                        setToken('')
                        removeCookie('token')
                        console.log(err)
                    })
                }
            }
        }
        fetchAuth()
        console.log("Auth Provider mounted")
    }, [])


    const value: AuthContextType = {
        user,
        signin(token: string) {
            handleSignin(token)
            setCookie('token', token)
        },
        signout() {
            handleSignout()
            removeCookie('token')
        },
    }

    return inAuth ? (<Loading />) : (
        <CookiesProvider defaultSetOptions={{ path: "/" }}>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </CookiesProvider>
    )
}