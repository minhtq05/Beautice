import { useState } from "react"
import { Link } from "react-router-dom"

const services = [
    ['beauty_consultation.png', 'Beauty consultation'],
    ['skin_treatments.png', 'Skin treatments'],
    ['beauty_product.png', 'Beauty product'],
]

export default function MainServices() {
    const [service, setService] = useState<string>("Skin treatments")

    return (
        <div className="relative w-[100vw] flex flex-col items-center 3xl:bg-white">
            <div className="relative z-10 flex flex-col max-w-[1140px] w-full">
                <div className="flex flex-col items-center mt-[157.8px] gap-y-[12px]">
                    <p className="text-base text-pink font-semibold leading-[125%] pl-[1px]">Main Services</p>
                    <h2 className="text-4xl text-navy-blue font-semibold leading-[125%]">Our focus services</h2>
                    <p className="text-base text-grey font-regular tracking-widest pl-[1.4px] mt-[8px]">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="relative flex justify-center items-center mt-[77px] px-[20px]">
                    <div className="relative grid lg:grid-cols-3 gap-x-[66px] gap-y-[20px] max-w-[915px]">
                        {
                            services.map(([img, title], i) => <ServiceItem key={i} img={"./Home/" + img} title={title} focus={service === title ? true : false} href="/service" />)
                        }
                    </div>
                </div>
            </div>
            <div className="mt-[-166px] h-[294px]">
                <svg width="525" height="352" viewBox="0 0 525 352" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0">
                    <path d="M0 30.0036C15.5403 18.8862 55.6748 22.82 79.7284 68.487C109.796 125.571 142.903 137.116 199.659 137.116C255.821 137.116 299.657 170.468 316.211 218.572C332.765 266.676 395.264 244.869 433.439 262.828C463.979 277.195 483.1 327.822 488.843 351.34" stroke="#E3E6FF" />
                    <path d="M0 6.60509C16.6579 -5.32185 59.6788 -1.10153 85.4623 47.8907C117.692 109.131 153.18 121.516 214.018 121.516C274.22 121.516 321.208 157.297 338.952 208.904C356.697 260.511 423.69 237.116 464.611 256.383C497.347 271.796 517.844 326.109 524 351.34" stroke="#E3E6FF" />
                    <path d="M0 53.4015C14.4227 43.0936 51.6708 46.741 73.9945 89.0827C101.899 142.01 132.626 152.714 185.3 152.714C237.423 152.714 278.107 183.638 293.47 228.239C308.833 272.841 366.837 252.621 402.267 269.273C430.611 282.594 448.357 329.534 453.687 351.339" stroke="#E3E6FF" />
                </svg>
            </div>
        </div>
    )
}

const ServiceItem = ({ img, title, focus, href }: { img: string, title: string, key?: number, focus: boolean, href: string }) => {
    return (
        <div className={"border-[1px] " + (focus ? "border-[#9BA2E0]" : "border-[#E2E2E2]") + " rounded-[25px] flex flex-col items-start w-[261px] h-[303px] py-[30px] pl-[36px] bg-white"}>
            <img src={img} alt="" className="w-[64px]" />
            <p className="text-lg text-navy-blue font-semibold mt-[22px]">{title}</p>
            <p className="text-sm text-grey font-regular max-w-[190px] tracking-widest mt-[12px] leading-[21px]">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            <Link to={href} className="text-sm text-pink font-semibold flex flex-row items-center mt-[15px]">
                Learn more
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-[10px] mt-[3px]">
                    <path d="M7.00938 6.0644L2.75938 10.58C2.46563 10.8921 1.99063 10.8921 1.7 10.58L0.99375 9.82964C0.7 9.51753 0.7 9.01284 0.99375 8.70405L4.00625 5.50327L0.99375 2.30249C0.7 1.99038 0.7 1.48569 0.99375 1.1769L1.69687 0.419873C1.99062 0.107764 2.46562 0.107764 2.75625 0.419873L7.00625 4.9355C7.30312 5.24761 7.30312 5.75229 7.00938 6.0644ZM13.0094 4.9355L8.75937 0.419873C8.46562 0.107764 7.99062 0.107764 7.7 0.419873L6.99375 1.17026C6.7 1.48237 6.7 1.98706 6.99375 2.29585L10.0063 5.49663L6.99375 8.69741C6.7 9.00952 6.7 9.51421 6.99375 9.823L7.7 10.5734C7.99375 10.8855 8.46875 10.8855 8.75937 10.5734L13.0094 6.05776C13.3031 5.75229 13.3031 5.24761 13.0094 4.9355Z" fill="#FF64AE" />
                </svg>
            </Link>
        </div >
    )
}