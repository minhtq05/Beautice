import { Link } from "react-router-dom"

function Button({
    text,
    href,
    className,
}: {
    text: string,
    href: string,
    className: string,
}) {
    return (
        <Link to={href} className={className + " flex-initial flex flex-wrap justify-center content-center bg-pink font-semibold text-white rounded-full tracking-widest pt-0.5 pl-0.5"}>{text}</Link>
    )
}


export default Button