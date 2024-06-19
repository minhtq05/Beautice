import { useAuth } from '../hooks/auth'
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoute() {
    console.log("Render ProtectedRoute")
    const auth = useAuth()

    console.log(auth.user)

    if (!auth.user.isAuthenticated) {
        return <Navigate to="/signin" />
    }

    return (
        <Outlet />
    )
}