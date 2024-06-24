import Button from "../Button"

export default function AboutUs() {
    return (
        <div className="relative z-10 flex flex-col xxl:mt-[158px] lg:mt-[323px] 3xl:mt-[0px] w-full px-[40px] items-center 3xl:bg-white 3xl:border-y-[200px] 3xl:border-white">
            <div className="relative flex xl:flex-row flex-col max-w-[1140px] w-full items-start gap-y-[40px]">
                <div className="relative max-h-[302.67px] overflow-y-hidden flex flex-col mt-[0.5px] xl:mr-auto xl:pr-[20px]">
                    <img src="./Home/about-us.svg" alt="About Us" />
                </div>
                <div className="relative flex flex-col sm:items-center md:items-start max-w-[483px] mt-[0.2px] z-10">
                    <p className="text-base text-pink font-semibold ml-[1px] md:text-left sm:text-center leading-5 mb-[12px]">About Us</p>
                    <h2 className="text-4xl text-navy-blue font-semibold md:text-left sm:text-center leading-[125%] mb-[1px]">We are the best beauty clinic</h2>
                    <p className="text-base text-grey font-regular tracking-widest leading-6 mt-[10px] md:text-left sm:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>
                    <div className="flex md:flex-row sm:flex-col gap-y-[20px] mt-[48px] ml-[1px] items-center">
                        <Button text="Learn More" href="#" className="w-[200px] h-[58.36px] pb-[3px] pl-[2.5px] shadow-button" />
                    </div>
                </div>
            </div>
        </div>
    )
}