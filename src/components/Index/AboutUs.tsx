import { Link } from "react-router-dom"
import Button from "@/components/Button"
import './styles.css'

function AboutUs() {
    return (
        <div className="flex lg:flex-row sm:flex-col lg:items-start sm:items-center pl-[30px] pr-[30px] justify-center w-full">
            <div className="absolute z-0 about-us mt-[-354.44px] overflow-hidden">
                <svg className="z-0" width="947" height="1029" viewBox="0 0 947 1029" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M749.052 139.789C878.799 107.501 904.939 52.9503 948.146 0V686.236C919.482 734.809 858.209 817.18 824.454 854.83C769.386 916.252 635.827 1006.48 527.385 1018.76C447.787 1027.78 183.967 1070.87 61.9698 870.927C-130.695 555.17 180.119 319.118 260.216 280.001C497.01 164.358 657.131 162.663 749.052 139.789Z" fill="url(#paint0_linear_97_95)" />
                    <path d="M762.475 145.548C883.394 115.453 907.755 64.6053 948.022 15.2497V654.898C921.309 700.174 864.205 776.952 832.746 812.046C781.425 869.299 656.954 953.401 555.89 964.851C481.708 973.256 235.838 1013.42 122.141 827.05C-57.4153 532.73 232.251 312.704 306.898 276.242C527.581 168.449 676.808 166.87 762.475 145.548Z" fill="url(#paint1_linear_97_95)" />
                    <defs>
                        <linearGradient id="paint0_linear_97_95" x1="478.448" y1="0" x2="478.448" y2="1043.6" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#EAECFF" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_97_95" x1="510.283" y1="15.2497" x2="510.283" y2="988.003" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#E4E7FF" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="relative flex flex-col sm:items-center md:items-start md:w-[664px] sm:w-full gap-y-[12px] z-10">
                <p className="text-base text-pink font-semibold ml-[1px] md:text-left sm:text-center">About Us</p>
                <h2 className="text-4xl text-navy-blue font-semibold md:text-left sm:text-center">We are the best beauty clinic</h2>
                <p className="text-base text-grey font-regular tracking-widest md:max-w-[480px] sm:w-10/12 leading-6 mt-[10px] md:text-left sm:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
                    <br /><br />
                    Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</p>
                <div className="flex md:flex-row sm:flex-col gap-y-[20px] mt-[40.5px] items-center">
                    <Button text="Learn More" href="#" className="w-[200px] h-[58.36px] pb-[2px] pl-[2.5px] shadow-button" />
                    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="flex flex-row justify-center items-center">
                        <div className="flex justify-center items-center w-[49px] h-[49px] rounded-full bg-navy-blue md:ml-[44px] sm:ml-[10px]">
                            <svg className="pl-[3px] pt-[1px] w-[20.8px]" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1167 6.61447C14.45 7.38427 14.45 9.30877 13.1167 10.0786L3.80417 15.4551C2.47083 16.2249 0.804168 15.2627 0.804168 13.7231L0.804168 2.96994C0.804169 1.43034 2.47084 0.468091 3.80417 1.23789L13.1167 6.61447Z" fill="white" />
                            </svg>
                        </div>
                        <p className="text-base text-grey font-semibold w-[151px] ml-[13px] tracking-widest mt-[-1px]">Watch Video</p>
                    </Link>
                </div>
            </div>
            <img className="lg:w-[476px] sm:w-[85vw] mt-[46px] rounded-[50px] z-10" src="./Index/about-us-image.png" alt="Beautice" />
        </div>
    )
}

export default AboutUs

