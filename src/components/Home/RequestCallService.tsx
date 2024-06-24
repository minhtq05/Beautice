import { Link, Form } from "react-router-dom"

export default function RequestCallService() {
    return (
        <div className="w-[100vw] flex flex-col items-center pt-[172px] px-[40px] 3xl:bg-white z-10">
            <div className="relative flex xl:flex-row flex-col gap-y-[30px] max-w-[1139px] ml-[1px] w-full z-10">
                <div className="relative flex flex-col max-w-[391px] w-full gap-y-[19.5px] xl:mr-auto">
                    <h1 className="text-4xl text-navy-blue font-semibold">Request call services</h1>
                    <p className="text-base text-grey font-regular tracking-widest">Lorem ipsum dolor sit amet, consect adipiscing elit <Link to="/contactus" className="text-navy-blue font-semibold">Contact Us</Link>.</p>
                </div>
                <div className="relative flex flex-col xl:items-end mt-[10px] max-w-[658px] w-full">
                    <Form method="post" action="/dial" className="flex flex-row w-full h-[72.5px]">
                        {/* Need to change later to an actual route*/}
                        <input type="tel" name="phone" id="phone" placeholder="Insert your phone number here ..." className="border-[1px] border-r-0 border-[#D9DDFE] rounded-l-[25px] max-w-[545px] w-full flex flex-rowtext-base font-regular placeholder:text-[#C5C5C5] text-navy-blue placeholder:tracking-widest pl-[36px] pb-[2px]" />
                        <button type="submit" className="w-[113px] h-full rounded-r-[25px] bg-pink flex justify-center items-center pr-[7px] pt-[1px]">
                            <img src="./Home/dial.svg" alt="" />
                        </button>
                    </Form>
                    <p className="text-xs text-grey font-italic tracking-widest mr-[-1px] mt-[9.5px]">Toll free for our coverage areas.</p>
                </div>
            </div>
            <div className="mt-[-166px] h-[228.2px]">
                <svg width="317" height="363" viewBox="0 0 317 363" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 z-0 mt-[-77px]">
                    <path d="M97.5 87.5C58.3 76.7 15.8333 49.6667 -0.5 37.5V293.5C1.5 292.667 9.7 293.1 26.5 301.5C47.5 312 67.5 378 108 358.5C148.5 339 128.5 307.5 216.5 301.5C304.5 295.5 332.5 283 308 259C283.5 235 212.5 195 206.5 156.5C200.5 118 146.5 101 97.5 87.5Z" stroke="#E3E6FF" />
                    <path d="M94.9139 71.37C56.9483 60.9221 15.819 34.77 0 23V270.654C1.93702 269.848 9.87879 270.268 26.1497 278.394C46.4884 288.551 65.8586 352.4 105.083 333.535C144.308 314.671 124.938 284.198 210.166 278.394C295.395 272.589 322.514 260.497 298.785 237.279C275.057 214.062 206.292 175.366 200.481 138.121C194.67 100.876 142.371 84.4299 94.9139 71.37Z" stroke="#E3E6FF" />
                    <path d="M93.0589 48.2917C55.8353 38.0767 15.5098 12.5076 0 1V243.133C1.89916 242.345 9.68572 242.755 25.6387 250.7C45.5799 260.631 64.5715 323.056 103.03 304.613C141.488 286.169 122.496 256.375 206.059 250.7C289.622 245.025 316.21 233.202 292.946 210.502C269.681 187.802 202.261 149.969 196.563 113.554C190.866 77.1396 139.588 61.0605 93.0589 48.2917Z" stroke="#E3E6FF" />
                </svg>
            </div>
        </div >
    )
}