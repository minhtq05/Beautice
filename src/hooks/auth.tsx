import React, { createContext, useContext, useState, useLayoutEffect } from "react";
import axios from "axios";

type AuthContextType = {
    user: {
        isAuthenticated: boolean;
        username: string;
    };
    signin: (token: string) => void
    signout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthContextType {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    console.log("Render Auth")
    const [user, setUser] = useState({
        isAuthenticated: false,
        username: '',
    })

    const handleSignin = (token: string) => {
        console.log("New user signed in with token:", token)
        setUser({
            isAuthenticated: true,
            username: ''
        })
    }

    const handleSignout = () => {
        console.log("User signed out.")
        setUser({
            isAuthenticated: false,
            username: ''
        })
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
            }).catch(() => {
            })
        }
        fetchAuth()
    }, [])

    const value: AuthContextType = {
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
            {children}
        </AuthContext.Provider>
    )
}