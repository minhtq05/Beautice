import { useRouteError } from "react-router-dom"

type RouteError = {
    statusText?: string;
    message?: string;
}

export default function ErrorPage() {
    const error = useRouteError() as RouteError
    console.error(error)

    return (
        <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center">
            <h1>Opps!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}