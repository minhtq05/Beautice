function GotoTop() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <button className="fixed w-[36px] h-[36px] rounded-[5px] bg-[#FF64AE] flex justify-center items-center z-50 bottom-[170px] md:right-[65px] sm:right-[20px]" onClick={() => {
            scrollToTop()
        }}>
            < svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M1.35193 9.17754L0.57146 8.39707C0.240991 8.0666 0.240991 7.53223 0.57146 7.20527L7.40232 0.370898C7.73279 0.0404297 8.26716 0.0404297 8.59412 0.370898L15.425 7.20176C15.7554 7.53223 15.7554 8.0666 15.425 8.39356L14.6445 9.17402C14.3105 9.50801 13.7656 9.50098 13.4386 9.15996L9.40623 4.92715V15.0311C9.40623 15.4986 9.03005 15.8748 8.56248 15.8748H7.43748C6.9699 15.8748 6.59373 15.4986 6.59373 15.0311V4.92715L2.55779 9.16348C2.23083 9.50801 1.68591 9.51504 1.35193 9.17754Z" fill="white" />
            </svg >
        </button >
    )
}

export default GotoTop