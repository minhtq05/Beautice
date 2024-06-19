import { useState } from "react"
import Button from "./Button"
import './styles.css'

function Intro() {
    return (
        <div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute z-0 intro overflow-hidden">
                    <svg className="z-0" width="1267" height="743" viewBox="0 0 1267 743" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1249.55 184.986C1285.57 102.347 1255.64 27.2292 1236.17 0H0V501.363C24.1989 565.474 88.4137 711.849 236.446 736.053C403.097 763.301 515.071 705.366 571.039 649.611C627.008 593.856 705.405 511.222 844.797 461.167C1031.36 394.175 1204.54 288.284 1249.55 184.986Z" fill="url(#paint0_linear_91_46)" />
                        <path d="M1196.79 177.118C1231.28 97.9944 1202.62 26.0711 1183.97 0H0V480.04C23.177 541.424 84.6803 681.574 226.462 704.748C386.076 730.837 493.321 675.367 546.926 621.983C600.531 568.599 675.618 489.48 809.125 441.554C987.808 377.411 1153.67 276.023 1196.79 177.118Z" fill="url(#paint1_linear_91_46)" />
                        <defs>
                            <linearGradient id="paint0_linear_91_46" x1="579.915" y1="154.016" x2="884.629" y2="869.443" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EBEDFF" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_91_46" x1="555.427" y1="147.466" x2="847.117" y2="832.533" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#E4E7FF" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                {/* <div className="absolute z-10 intro-2">
                    <svg width="1213" height="712" viewBox="0 0 1213 712" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1196.79 177.118C1231.28 97.9944 1202.62 26.0711 1183.97 0H0V480.04C23.177 541.424 84.6803 681.574 226.462 704.748C386.076 730.837 493.321 675.367 546.926 621.983C600.531 568.599 675.618 489.48 809.125 441.554C987.808 377.411 1153.67 276.023 1196.79 177.118Z" fill="url(#paint0_linear_91_48)" />
                        <defs>
                            <linearGradient id="paint0_linear_91_48" x1="555.427" y1="147.466" x2="847.117" y2="832.533" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#E4E7FF" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div> */}
            </div>
            <div className="relative flex md:flex-row sm:flex-col z-20 mt-[156px] md:ml-[35.5px] md:px-0 sm:px-[10px] justify-center md:items-start sm:items-center">
                <div className="flex flex-col z-20 md:mt-[56px] md:items-start sm:items-center">
                    <h1 className="font-semibold text-5xl text-navy-blue leading-[125%] max-w-[430px] md:text-left sm:text-center">Clinic & beauty consultant</h1>
                    <p className="font-medium text-base text-navy-blue max-w-[474px] tracking-widest mt-[8.5px] md:text-left sm:text-center">It is a long established fact that a reader will be by the readable content of a page.</p>
                    <Button className="w-[200px] h-[58.36px] mt-[33.5px] pl-[3px] pb-[2.5px] md:text-left sm:text-center shadow-button" href="#" text="More Details" />
                </div>
                <div className="md:ml-[22px] sm:pt-[40px] md:pt-0">
                    <img src="intro-graphic.svg" alt="" />
                </div>
            </div>
            <Carousel numCards={3} />
        </div>
    )
}

function Carousel({ numCards }: { numCards: number }) {
    const [carouselItem, setCarouselItem] = useState(1)

    const changeCarouselItem = (item: number) => {
        setCarouselItem(item)
    }

    return (
        <div className="flex w-full justify-center items-center gap-2 mt-[135.9px] ml-[0.5px] z-10">
            {Array(numCards).fill(0).map((_, i) => <Dot active={i == carouselItem ? true : false} onClick={() => changeCarouselItem(i)} />)}
        </div >
    )
}

function Dot({ active, onClick }: { active: boolean, onClick: () => void }) {
    return (
        <button onClick={onClick} className={`rounded-full z-10 ${active ? "w-[25.31px] h-[8.15px] bg-navy-blue" : "w-[14.82px] h-[3.09px] bg-light-grey mt-[-1px]"}`}></button>
    )
}


export default Intro