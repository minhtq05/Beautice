import { useEffect } from 'react';
import { useAuth } from '../hooks/auth'
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function ProtectedRoute() {
    console.log("Render ProtectedRoute")
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (!auth.user.isAuthenticated) {
            navigate("/signin", { state: { from: location.pathname } })
        }
        console.log("ProtectedRoute mounted")
    }, [auth, navigate, location])

    return (
        <Outlet />
    )
}