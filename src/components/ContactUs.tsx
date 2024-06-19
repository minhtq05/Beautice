function ContactUs() {
    return (
        <div>
            <div className="absolute contact-us mt-[-185px] w-full max-h-screen overflow-hidden">
                <svg width="1176" height="929" viewBox="0 0 1176 929" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M246.555 126.218C85.6647 97.065 53.2506 47.8098 -0.327515 0V619.615C35.2164 663.473 111.197 737.847 153.055 771.842C221.341 827.301 386.957 908.769 521.429 919.861C620.133 928.002 947.278 966.906 1098.56 786.376C1337.47 501.273 952.05 288.138 852.727 252.818C559.096 148.402 360.54 146.872 246.555 126.218Z" fill="url(#paint0_linear_97_171)" />
                    <path d="M214.806 139.092C74.6061 113.22 46.3605 69.5089 -0.327454 27.0801V576.957C30.6456 615.879 96.855 681.882 133.33 712.05C192.835 761.268 337.153 833.567 454.332 843.41C540.342 850.635 825.417 885.16 957.243 724.949C1165.43 471.935 829.576 282.788 743.025 251.444C487.154 158.779 314.133 157.421 214.806 139.092Z" fill="url(#paint1_linear_97_171)" />
                    <defs>
                        <linearGradient id="paint0_linear_97_171" x1="582.112" y1="0" x2="582.112" y2="942.288" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#EAECFF" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_97_171" x1="507.211" y1="27.0801" x2="507.211" y2="863.313" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#E4E7FF" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            {/* <div className="absolute contact-us mt-[-159px] w-full overflow-x-hidden">
                <svg width="1025" height="825" viewBox="0 0 1025 825" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M214.806 112.092C74.6061 86.2203 46.3605 42.5089 -0.327454 0.0800781V549.957C30.6456 588.879 96.855 654.882 133.33 685.05C192.835 734.268 337.153 806.567 454.332 816.41C540.342 823.635 825.417 858.16 957.243 697.949C1165.43 444.935 829.576 255.788 743.025 224.444C487.154 131.779 314.133 130.421 214.806 112.092Z" fill="url(#paint0_linear_97_173)" />
                    <defs>
                        <linearGradient id="paint0_linear_97_173" x1="507.211" y1="0.0800781" x2="507.211" y2="836.313" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#E4E7FF" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div> */}
            <div className="flex flex-wrap xl:flex-row sm:flex-col justify-center xl:items-start sm:items-center gap-x-[100px] xl:mt-[122.5px] pl-[20px] pr-[20px] sm:max-w-10/12 z-10">
                <img className="md:mt-[180px] sm:mt-[50px] z-10" src="/contact-us.svg" alt="" />
                <div className="flex flex-col justify-start z-10">
                    <p className="text-base text-pink font-semibold mt-[20px] ml-[1px]">Contact Us</p>
                    <h2 className="text-4xl text-navy-blue font-semibold max-w-[420px] mt-[9px] leading-[125%]">Send your inquiry to our expert team</h2>
                    <p className="text-base text-grey font-regular mt-[20px] tracking-widest">Lorem ipsum dolor sit amet nulla turapis tellus.</p>
                    <form action="submit" className="grid grid-cols-2 gap-x-[35.58px] gap-y-[38.32px] mt-[47px] md:max-w-[520px]">
                        <Input type='text' placeholder="First name" />
                        <Input className="md:pl-[27.5px]" type='text' placeholder="Last name" />
                        <Input className="col-span-2" type='text' placeholder="Email address" />
                        <Input className="col-span-2 pt-[1px]" type='text' placeholder="Subject message" />
                        <TextArea className="col-span-2 h-[239.47px]" placeholder="Your inquiry here" rows={9} />
                        <button type="submit" className="flex-initial flex flex-wrap justify-center content-center bg-pink font-semibold text-white rounded-full tracking-widest pb-[2px] w-[248px] h-[58px] mt-[16.5px] ml-[1px] shadow-button">Send Message</button>
                    </form>
                </div>
            </div >
        </div>
    )
}

function Input({ type, placeholder, className }: { type: string, placeholder: string, className?: string }) {
    return (
        <input type={type} placeholder={placeholder} className={`${className} border border-outline md:text-base sm:text-sm text-input-grey font-regular md:pl-[23px] sm:pl-[15px] pb-[3px] h-[61.58px] rounded-[15px] tracking-widest`} />
    )
}

function TextArea({ placeholder, rows, className }: { placeholder: string, rows: number, className?: string }) {
    return (
        <textarea placeholder={placeholder} rows={rows} className={`${className} border border-outline md:text-base sm:text-sm text-input-grey font-regular md:pl-[23px] sm:pl-[15px] rounded-[15px] pt-[25.32px] tracking-widest`} />
    )
}

export default ContactUs
