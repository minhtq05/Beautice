function ProfessionalTeams() {
    return (
        <div className="flex flex-col justify-center items-center gap-y-[12px] mt-[141px]">
            <p className="text-base text-pink font-semibold text-center">Professional Teams</p>
            <h2 className="text-4xl text-navy-blue font-semibold text-center">The Professional expert</h2>
            <p className="text-base text-grey font-regular tracking-widest mt-[11px] ml-[1px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
            <div className="flex lg:flex-row sm:flex-col lg:mt-[101.5px] lg:h-[626px] justify-center lg:items-start sm:items-center gap-x-[59px] w-full">
                <ExpertCard img="/expert-1.png" title="Surgeon" name="Briyan Nevalli" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit" />
                <ExpertCard main img="/expert-2.png" title="Dermatologist" name="Bella sebastian" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit" />
                <ExpertCard img="/expert-3.png" title="Stylist expert" name="Lilly Adams" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit" />
            </div>
        </div>
    )
}

function ExpertCard({ img, title, name, description, main, className }: { img: string, title: string, name: string, description: string, main?: boolean, className?: string }) {
    return (
        <div className={`${className} flex flex-col justify-start items-center ml-[1px] h-[626px] ${main == true ? "bg-white shadow-base rounded-[42px] w-[424px]" : "w-[270px]"}`} >
            <img className="mt-[91px]" src={img} alt="" />
            <p className="text-base text-pink font-semibold mt-[53px] leading-5 ml-[0.5px]">{title}</p>
            <p className="text-lg text-navy-blue font-semibold mt-[12px]">{name}</p>
            <p className="text-sm text-grey font-regular mt-[17px] max-w-[270px] text-center tracking-widest leading-[21px]">{description}</p>
            <div className="grid grid-cols-3 gap-[34px] mt-[51px]">
                <div className="flex justify-center items-center w-[49px] h-[49px] shadow-sm bg-white rounded-full">
                    <img className="mt-[-2px] ml-[1px]" src="/twitter-light.svg" alt="Twitter" />
                </div>
                <div className="flex justify-center items-center w-[49px] h-[49px] shadow-sm bg-white rounded-full">
                    <img className="ml-[-1px]" src="/facebook-light.svg" alt="Facebook" />
                </div>
                <div className="flex justify-center items-center w-[49px] h-[49px] shadow-sm bg-white rounded-full">
                    <img className="mr-[-1px]" src="/instagram-light.svg" alt="Instagram" />
                </div>
            </div>
        </ div >
    )

}


export default ProfessionalTeams
