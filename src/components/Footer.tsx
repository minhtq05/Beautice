import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import './styles.css'

const Span = tw.span`text-base text-[#D7DBFF] font-regular tracking-widest leading-[24px] relative ml-[4px] top-[-1.3px]`

function Footer() {
    return (
        <div className="relative flex justify-center items-center w-full xl:h-[775px] sm:h-[1169.66px] overflow-hidden 3xl:bg-white z-10">
            <div>
                <div className="absolute sm:w-[1460px] 3xl:w-[calc(100vw+50px)] h-[636.7px] rounded-[150px] bg-[#DFE2FF] sm:rotate-[3.41deg] 3xl:rotate-[1deg] footer-1 mt-[69.66px]"></div>
                <div className="absolute sm:w-[1440px] 3xl:w-full h-[225px] bg-[#0D165C] footer-2 mt-[460px]"></div>
                <div className="absolute sm:w-[1470px] 3xl:w-[calc(100vw+50px)] xl:h-[647.14px] sm:h-[1200px] rounded-[150px] bg-[#172176] sm:rotate-[4.99deg] 3xl:rotate-[2deg] footer-3 mt-[69.66px]"></div>
            </div>
            <div className="flex xl:flex-row sm:flex-col z-30 justify-center items-start pt-[131px] xl:w-full sm:w-10/12 xl:px-[150px] mt-[69.66px]">
                <div className="flex flex-col xl:w-[621px] sm:w-full mt-[19px]">
                    <div className="flex flex-row h-[63px] xl:w-[492px] sm:w-10/12">
                        <img src="./logo-dark.svg" alt="" />
                        <Link className="flex-initial flex flex-wrap ml-[18px] content-center font-bold text-2xl tracking-widest text-white min-w-[161px] mt-[1px]" to="#">Beautice</Link>
                    </div>
                    <div className="flex flex-col xl:w-[492px] sm:w-full pl-[31px] pt-[35px]">
                        <p className="text-base text-[#D7DBFF] leading-[21px] font-regular tracking-widest text-wrap"><strong className="font-bold">Beautice</strong> is a Beauty Clinic WordPress Theme.</p>
                        <p className="text-sm text-[#D7DBFF] leading-6 font-medium-italic pt-[22.5px] pl-[1px] tracking-widest">Baker Steet 101, NY, United States.</p>
                        <div className="flex flex-row pt-[1px]">
                            <p className="text-sm text-[#D7DBFF] leading-[24px] font-medium-italic tracking-widest">+521 569 8966.</p>
                            <p className="text-sm text-[#D7DBFF] leading-[24px] font-medium-italic pl-[42px] tracking-widest underline">mail@company.com.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-[45px] md:mt-[154px] sm:mt-[50px] max-w-[305px] xl:pb-0 sm:pb-[50px]">
                        <Link to="#">
                            <img src="facebook.svg" alt="Facebook" />
                        </Link>
                        <Link to="#">
                            <img src="twitter.svg" alt="Twitter" />
                        </Link>
                        <Link to="#">
                            <img src="linkedin.svg" alt="Linkedin" />
                        </Link>
                        <a href="#">
                            <img src="youtube.svg" alt="Youtube" />
                        </a>
                        <a href="#">
                            <img src="instagram.svg" alt="Instagram" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex md:flex-row sm:flex-col gap-x-[173px] gap-y-[30px] items-start mt-[3px]">
                        <div className="flex flex-col items-start justity-between w-[131px]">
                            <p className="text-lg text-white font-semibold tracking-widest pb-[10px]">Pages</p>
                            <ul className="list-inside mt-[19px] space-y-[11px]">
                                <li><Span>Home</Span></li>
                                <li><Span>About</Span></li>
                                <li><Span>Services</Span></li>
                                <li><Span>Gallery</Span></li>
                                <li><Span>Team</Span></li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start justity-between w-[215px]">
                            <p className="text-lg text-white font-semibold tracking-widest pb-[10px]">Informations</p>
                            <ul className="list-inside mt-[19px] space-y-[11px]">
                                <li><Span>Terms & conditions</Span></li>
                                <li><Span>Privacy policy</Span></li>
                                <li><Span>Blog</Span></li>
                                <li><Span>Contact</Span></li>
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