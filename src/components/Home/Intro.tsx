import { Link } from "react-router-dom"
import { useState } from "react"

const services = [
    ['beauty_consultation.png', 'Beauty consultation'],
    ['skin_treatments.png', 'Skin treatments'],
    ['beauty_product.png', 'Beauty product'],
]

const WhyChoosingUs = [
    ['1.png', '100%', 'trusted clinic'],
    ['2.png', '99%', 'customer love'],
    ['3.png', '75+', 'asian branch'],
    ['4.png', '1.200+', 'licensed worker'],
]

export default function Intro() {

    return (
        <div className="w-full min-h-[815px] flex flex-col items-center px-[40px]">
            <div className="absolute top-0 xxl:w-fit sm:w-[1920px] h-fit z-0">
                <img src="./Home/intro.png" className="z-0 w-[100vw]" />
                <img src="./Home/overlay.svg" className="absolute top-0 z-0 w-full" />
            </div>
            <div className="relative w-[100vw] flex flex-col items-center h-fit z-10 px-[20px]">
                <div className="relative flex xl:flex-row flex-col max-w-[1140px] w-full lg:mt-[204px] mt-[100px] h-[300px]">
                    <div className="relative flex flex-col max-w-[502px] items-left">
                        <h1 className="font-semibold text-5xl z-10 text-white leading-[125%]">Your beauty center place</h1>
                        <p className="font-medium tracking-widest text-light-pink mt-[13.5px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae lobortis.</p>
                        <Link to="/about" className="font-semibold text-white text-base rounded-[15px] py-[13px] pl-[28px] pr-[29.3px] border-[1px] w-fit mt-[40px] tracking-widest ">More Details</Link>
                    </div>
                    <div className="relative max-w-[800px] w-full flex flex-col justify-start xl:items-end">
                        <div className="mt-[84px] flex flex-row items-center lg:pr-[144px]">
                            <div className="w-[127px] h-[127px] rounded-full border-[2px] shadow-play flex justify-center items-center">
                                <img src="./Home/play.svg" alt="+" className="pt-[2px] pl-[8px]" />
                            </div>
                            <p className="text-base font-semibold tracking-widest ml-[46px] text-white mt-[2px]">Tour Video</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}