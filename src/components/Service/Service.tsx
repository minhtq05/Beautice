import { Link } from "react-router-dom"

export default function Service() {
    return (
        <div className="flex flex-col gap-y-[20px] text-4xl color-gradient-to-r from-cyan-500 to-blue-500 w-[100vw] h-[100vh] justify-center items-center">
            <h1 className="font-bold">This is the Service, only logged in users can get into</h1>
            <Link className="font-regular text-base" to="/">Back to from page</Link>
        </div>
    )
}