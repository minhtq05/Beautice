import { createContext, useContext, useState, useLayoutEffect } from "react";
import axios from "axios";

type AuthContextType = {
    user: {
        isAuthenticated: boolean;
        username: string;
    };
    signin: () => void
    signout: () => void
}

const AuthContext = createContext<AuthContextType>()

export function useAuth() {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context
}

export default function AuthProvider({ children }) {
    console.log("Render Auth")
    const [user, setUser] = useState({
        isAuthenticated: false,
        username: '',
    })
    const [token, setToken] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)


    const handleSignin = (token: string) => {
        console.log("New user signed in with token:", token)
        setUser({
            isAuthenticated: true,
            username: ''
        })
        setToken(token)
    }

    const handleSignout = () => {
        console.log("User signed out.")
        setUser({
            isAuthenticated: false,
            username: ''
        })
        setToken(null)
    }

    useLayoutEffect(() => {
        const fetchAuth = async () => {
            const old_token = localStorage.getItem('token')
            axios.get('http://localhost:3000/protected', {
                headers: {
                    authorization: old_token
                }
            }).then(() => {
                setUser({
                    isAuthenticated: true,
                    username: ''
                })
                setToken(old_token)
                setLoading(false)
            }).catch(() => {
            })
        }
        fetchAuth()
    }, [])

    const value = {
        user,
        signin(token: string) {
            handleSignin(token)
            localStorage.setItem("token", token)
        },
        signout() {
            handleSignout()
            localStorage.removeItem('token')
        },
    }

    return (
        <AuthContext.Provider value={value}>
            {console.log("auth:", value.user.isAuthenticated)}
            {children}
        </AuthContext.Provider>
    )
}