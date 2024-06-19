import { useAuth } from '../hooks/auth'
import { Outlet, useNavigate } from "react-router-dom";

export default function ProtectedRoute() {
    console.log("Render ProtectedRoute")
    const auth = useAuth()
    const navigate = useNavigate()

    console.log(auth.user)

    if (!auth.user.isAuthenticated) {
        // return <Navigate to="/signin/?redirect=true" />
        return navigate("/signin", { state: { redirect: true } })
    }

    return (
        <Outlet />
    )
}