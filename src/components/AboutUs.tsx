import Button from "./Button"
import './styles.css'

function AboutUs() {
    return (
        <div className="flex lg:flex-row sm:flex-col lg:items-start sm:items-center pl-[30px] pr-[30px] justify-center">
            <div className="absolute z-0 about-us mt-[-354.44px]">
                <svg width="947" height="1029" viewBox="0 0 947 1029" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M749.052 139.789C878.799 107.501 904.939 52.9503 948.146 0V686.236C919.482 734.809 858.209 817.18 824.454 854.83C769.386 916.252 635.827 1006.48 527.385 1018.76C447.787 1027.78 183.967 1070.87 61.9698 870.927C-130.695 555.17 180.119 319.118 260.216 280.001C497.01 164.358 657.131 162.663 749.052 139.789Z" fill="url(#paint0_linear_97_96)" />
                    <defs>
                        <linearGradient id="paint0_linear_97_96" x1="478.448" y1="0" x2="478.448" y2="1043.6" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#EAECFF" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="absolute z-0 about-us mt-[-339.19px]">
                <svg width="883" height="960" viewBox="0 0 883 960" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M698.475 130.548C819.394 100.453 843.755 49.6053 884.022 0.249695V639.898C857.309 685.174 800.205 761.952 768.746 797.046C717.425 854.299 592.954 938.401 491.89 949.851C417.708 958.256 171.838 998.417 58.1411 812.05C-121.415 517.73 168.251 297.704 242.898 261.242C463.581 153.449 612.808 151.87 698.475 130.548Z" fill="url(#paint0_linear_97_97)" />
                    <defs>
                        <linearGradient id="paint0_linear_97_97" x1="446.283" y1="0.249695" x2="446.283" y2="973.003" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#E4E7FF" />
                            <stop offset="1" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="flex flex-col sm:w-[380px] md:w-[664px] gap-y-[12px] z-10">
                <p className="text-base text-pink font-semibold ml-[1px] md:text-left sm:text-center">About Us</p>
                <h2 className="text-4xl text-navy-blue font-semibold md:text-left sm:text-center">We are the best beauty clinic</h2>
                <p className="text-base text-grey font-regular tracking-widest max-w-[480px] leading-6 mt-[10px] md:text-left sm:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
                    <br /><br />
                    Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</p>
                <div className="flex flex-row mt-[40.5px] items-center">
                    <Button text="Learn More" href="#" className="w-[200px] h-[58.36px] pb-[2px] pl-[2.5px]" />
                    <a href="#" className="flex flex-row justify-center items-center">
                        <a className="flex justify-center items-center w-[49px] h-[49px] rounded-full bg-navy-blue md:ml-[44px] sm:ml-[10px]" href="#">
                            <svg className="pl-[3px] pt-[1px] w-[20.8px]" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1167 6.61447C14.45 7.38427 14.45 9.30877 13.1167 10.0786L3.80417 15.4551C2.47083 16.2249 0.804168 15.2627 0.804168 13.7231L0.804168 2.96994C0.804169 1.43034 2.47084 0.468091 3.80417 1.23789L13.1167 6.61447Z" fill="white" />
                            </svg>
                        </a>
                        <p className="text-base text-grey font-semibold w-[151px] ml-[13px] tracking-widest mt-[-1px]">Watch Video</p>
                    </a>
                </div>
            </div>
            <img className="lg:w-[476px] sm:w-full mt-[46px] rounded-[50px] z-10" src="/about-us-image.png" alt="Beautice" />
        </div>
    )
}

export default AboutUs

