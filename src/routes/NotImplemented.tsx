import { Link } from "react-router-dom"

export default function NotImplemented(): JSX.Element {
    return (
        <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">This page is not implemented. Please go back to the <Link className="text-red-800" to="/">Front Page</Link></h1>
        </div>
    )
}