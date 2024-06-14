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
        <a href={href} className={className + " flex-initial flex flex-wrap justify-center content-center bg-pink font-semibold text-white rounded-full tracking-widest pt-0.5 pl-0.5"}>{text}</a>
    )
}


export default Button