function MainServices() {
    return (
        <div className="relative flex flex-col items-center justify-center mt-[131.5px] w-10/12 z-10">
            <p className="text-base text-pink font-semibold leading-5 ml-[1px] z-10">Main Services</p>
            <h1 className="text-4xl text-navy-blue font-semibold text-center max-w-[450px] mt-[12px] leading-[125%] z-10">Learn services to focus on your beauty</h1>
            <p className="text-base text-grey font-regular text-center max-w-[840px] tracking-widest mt-[19px] z-10">Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
            <div className="relative flex justify-center items-center w-full pb-[133px] z-10">
                <div className="grid justify-items-center lg:grid-cols-3 lg:gap-x-[56px] gap-y-[20px] mt-[84.5px] ml-[1px]">
                    <ServiceItem className="" img="./Index/beauty-consultant-service.svg" title="Beauty consultation" content="Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis." />
                    <ServiceItem img="./Index/skin-treatment-service.svg" title="Skin treatments" content="Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis." />
                    <ServiceItem className="ml-[-2px]" img="./Index/beauty-product-service.svg" title="Beauty product" content="Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis." />
                </div>
            </div>
        </div>
    )
}

function ServiceItem({ img, title, content, className }: { img: string, title: string, content: string, className?: string }) {
    return (
        <div className={`${className} flex flex-col justify-start items-center md:w-[343px] sm:w-[85vw] h-[458px] bg-white rounded-[42px] shadow-base`}>
            <img className="mt-[59px]" src={img} alt="" />
            <h2 className="text-lg text-navy-blue font-semibold text-center mt-[55px]">{title}</h2>
            <p className="text-sm text-grey font-regular text-center max-w-[270px] tracking-widest mt-[18px] leading-[21px] ml-[-1px]">{content}</p>
        </div >
    )
}

export default MainServices
