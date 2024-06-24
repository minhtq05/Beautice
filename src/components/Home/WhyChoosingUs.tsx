
const items = [
    ['1.png', '100%', 'trusted clinic'],
    ['2.png', '99%', 'customer love'],
    ['3.png', '75+', 'asian branch'],
    ['4.png', '1.200+', 'licensed worker'],
]

export default function WhyChoosingUs() {
    return (
        <div className="relative 2xl:w-full w-[1440px] h-[697.5px] flex justify-center z-10">
            <div className="absolute left-0 w-full max-h-[2850px] overflow-y-hidden">
                <img src="./Home/why_choosing_us.png" alt="" className="z-0 w-[100vw]" />
                <img src="./Home/overlay_2.svg" alt="" className="absolute top-0 z-0 w-full" />
            </div>
            <div className="w-[100vw] px-[40px] flex justify-center">
                <div className="relative flex lg:flex-row flex-col max-w-[1108px] w-full z-10 justify-center items-start lg:mt-[272.5px] mt-[160px] h-fit ml-[-24px] gap-y-[30px]">
                    <div className="relative max-w-[486px] w-full mt-[20px]">
                        <h2 className="text-4xl text-white font-semibold">Why choosing us?</h2>
                        <p className="text-base text-[#D8DCFF] font-regular mt-[23px] tracking-widest">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
                        </p>
                    </div>
                    <div className="relative grid grid-cols-2 max-w-[483px] w-full h-[181px] lg:ml-auto gap-x-[55px] gap-y-[41px] mt-[7px]">
                        {
                            items.map(([img, title, p], i) => <WhyChoosingUsItem key={i} img={"./Home/icons/" + img} title={title} p={p} focus={i === 0} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const WhyChoosingUsItem = ({ img, title, p, focus }: { img: string, title: string, p: string, focus?: boolean, key: number }) => {
    return (
        <div className="flex flex-row justify-start">
            <img src={img} alt="" className={"w-[64px] h-[64px] " + (focus ? "mt-[-2px]" : "mt-[-7px]")} />
            <div className="flex flex-col ml-[11px]">
                <p className="lg:text-4xl text-2xl text-white font-semibold leading-[41px]">{title}</p>
                <p className={"text-base " + (focus ? "text-[#FF9ACB]" : "text-light-pink") + " font-semibold leading-[21px] mt-[-2.5px]"}>{p}</p>
            </div>
        </div>
    )

}