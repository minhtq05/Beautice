function MainServices() {
    return (
        <div className="flex flex-col items-center mt-[131.5px] z-10">
            <p className="text-base text-pink font-semibold leading-5 ml-[1px]">Main Services</p>
            <h1 className="text-4xl text-navy-blue font-semibold text-center max-w-[450px] mt-[12px] leading-[125%]">Learn services to focus on your beauty</h1>
            <p className="text-base text-grey font-regular text-center max-w-[840px] tracking-widest mt-[19px]">Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
            <div className="relative flex justify-center w-full pb-[133px] overflow-x-hidden z-10">
                <div className="grid lg:grid-cols-3 2xl:gap-[56px] xl:gap-[20px] gap-y-[20px] mt-[84.5px] ml-[1px]">
                    <ServiceItem className="" img="/beauty-consultant-service.svg" title="Beauty consultation" content="Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis." />
                    <ServiceItem img="/skin-treatment-service.svg" title="Skin treatments" content="Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis." />
                    <ServiceItem className="ml-[-1px]" img="/beauty-product-service.svg" title="Beauty product" content="Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis." />
                </div>
            </div>
        </div>
    )
}

function ServiceItem({ img, title, content, className }: { img: string, title: string, content: string, className?: string }) {
    return (
        <div className={`${className} flex flex-col justify-start items-center w-[343px] h-[458px] bg-white rounded-[42px] shadow-base`}>
            <img className="mt-[59px]" src={img} alt="" />
            <h2 className="text-lg text-navy-blue font-semibold text-center mt-[55px]">{title}</h2>
            <p className="text-sm text-grey font-regular text-center max-w-[270px] tracking-widest mt-[18px] leading-[21px] ml-[-1px]">{content}</p>
        </div >
    )
}

export default MainServices
