import './styles.css'

function Footer() {
    return (
        <div className="relative flex justify-center items-center w-full xl:h-[705.34px] sm:h-[1100px] overflow-hidden mt-[69.66px]">
            <div>
                <div className="absolute w-[1460px] h-[636.7px] rounded-[150px] bg-[#DFE2FF] rotate-[3.41deg] footer-1"></div>
                <div className="absolute w-[1440px] h-[225px] bg-[#0D165C] mt-[460px] footer-2"></div>
                <div className="absolute w-[1470px] xl:h-[647.14px] sm:h-[1200px] rounded-[150px] bg-[#172176] rotate-[4.99deg]  footer-3"></div>
            </div>
            <div className="flex xl:flex-row sm:flex-col z-30 justify-center items-start pt-[131px] xl:w-full sm:w-10/12 px-[20px]">
                <div className="flex flex-col xl:w-[621px] sm:w-full mt-[19px] ">
                    <div className="flex flex-row h-[63px] xl:w-[492px] sm:w-10/12">
                        <img src="/logo-dark.svg" alt="" />
                        <a className="flex-initial flex flex-wrap ml-[18px] content-center font-bold text-2xl tracking-widest text-white min-w-[161px] mt-[1px]">Beautice</a>
                    </div>
                    <div className="flex flex-col xl:w-[492px] sm:w-full pl-[31px] pt-[35px]">
                        <p className="text-base text-[#D7DBFF] leading-[21px] font-regular tracking-widest text-wrap"><strong className="font-bold">Beautice</strong> is a Beauty Clinic WordPress Theme.</p>
                        <p className="text-sm text-[#D7DBFF] leading-6 font-medium-italic pt-[22.5px] pl-[1px] tracking-widest">Baker Steet 101, NY, United States.</p>
                        <div className="flex flex-row pt-[1px]">
                            <p className="text-sm text-[#D7DBFF] leading-[24px] font-medium-italic tracking-widest">+521 569 8966.</p>
                            <p className="text-sm text-[#D7DBFF] leading-[24px] font-medium-italic pl-[42px] tracking-widest underline">mail@ .com.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-[45px] md:mt-[154px] sm:mt-[50px] max-w-[305px] xl:pb-0 sm:pb-[50px]">
                        <a href="#">
                            <img src="facebook.svg" alt="Facebook" />
                        </a>
                        <a href="#">
                            <img src="twitter.svg" alt="Twitter" />
                        </a>
                        <a href="#">
                            <img src="linkedin.svg" alt="Linkedin" />
                        </a>
                        <a href="#">
                            <img src="youtube.svg" alt="Youtube" />
                        </a>
                        <a href="#">
                            <img src="instagram.svg" alt="Instagram" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex md:flex-row sm:flex-col xl:gap-x-[173px] gap-y-[10px] items-start mt-[3px]">
                        <div className="flex flex-col items-start justity-between w-[131px]">
                            <p className="text-lg text-white font-semibold tracking-widest pb-[10px]">Pages</p>
                            <ul className="list-image-[url(list-image.svg)] list-inside mt-[19px] space-y-[11px]">
                                <li><span className="text-base text-[#D7DBFF] font-regular tracking-widest leading-[24px] relative left-[5px] top-[-1.3px]">Home</span></li>
                                <li><span className="text-base text-[#D7DBFF] font-regular tracking-widest leading-[24px] relative left-[5px] top-[-1.3px]">About</span></li>
                                <li><span className="text-base text-[#D7DBFF] font-regular tracking-widest leading-[24px] relative left-[5px] top-[-1.3px]">Services</span></li>
                                <li><span className="text-base text-[#D7DBFF] font-regular tracking-widest leading-[24px] relative left-[5px] top-[-1.3px]">Gallery</span></li>
                                <li><span className="text-base text-[#D7DBFF] font-regular tracking-widest leading-[24px] relative left-[5px] top-[-1.3px]">Team</span></li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start justity-between w-[215px]">
                            <p className="text-lg text-white font-semibold tracking-widest pb-[10px]">Informations</p>
                            <ul className="list-image-[url(list-image.svg)] list-inside mt-[19px] space-y-[11px]">
                                <li><span className="text-base text-[#D7DBFF] font-regular tracking-widest leading-[24px] relative left-[5px] top-[-1.3px]">Terms & conditions</span></li>
                                <li><span className="text-base text-[#D7DBFF] font-regular tracking-widest leading-[24px] relative left-[5px] top-[-1.3px]">Privacy policy</span></li>
                                <li><span className="text-base text-[#D7DBFF] font-regular tracking-widest leading-[24px] relative left-[5px] top-[-1.3px]">Blog</span></li>
                                <li><span className="text-base text-[#D7DBFF] font-regular tracking-widest leading-[24px] relative left-[5px] top-[-1.3px]">Contact</span></li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-base text-[#D7DBFF] text-right font-regular md:mt-[138.5px] sm:mt-[50px] mr-[-1.5px] tracking-widest">© AltDesain Studio 2021 - All right reserved.</p>
                </div>
            </div>
        </div >
    )
}

export default Footer