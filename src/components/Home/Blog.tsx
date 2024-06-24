import { Link } from "react-router-dom"

const blogs = [
    ["1.png", "How much does a consultation cost at our clinic?"],
    ["2.png", "Watch out! don't choose the wrong beauty product"],
    ["3.png", "About skin care you need to know"],
]

export default function Blog() {
    return (
        <div className="relative w-[100vw] px-[40px] flex flex-col items-center mt-[111px] 3xl:bg-white 3xl:border-t-[200px] 3xl:border-white z-10">
            <div className="relative flex flex-col max-w-[1140px] w-full items-center gap-y-[11.5px]">
                <p className="text-base text-pink font-semibold leading-5">The Blog</p>
                <h2 className="text-4xl text-navy-blue font-semibold leading-[125%] ml-[1px]">Our latest news</h2>
                <p className="text-base text-grey font-regular leading-[34px] tracking-widest mt-[0.3px] ml-[1.5px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="relative w-full grid lg:grid-cols-3 gap-x-[49px] gap-y-[30px] mt-[72.5px] ml-[1px] justify-center overflow-x-scroll rounded-[25px]" >
                    {blogs.map(([img, title], i) => <BlogItem img={img} title={title} key={i} p="A wonderful serenity has taken possession of my entire soul, like these sweet mornings ..." href={"/blog"} />)}
                </div>
            </div>
        </div >
    )
}

const BlogItem = ({ img, title, p, href }: { img: string, title: string, p: string, href: string, key: number }) => {
    return (
        <div className="relative w-[347px] h-[543px] rounded-[25px] bg-white text-wrap shadow-[0px_25px_50px_5px_#F6F7FF]">
            <img src={"./Home/blogs/" + img} alt="" className="w-full h-[249px]" />
            <div className="pl-[38px] mt-[55.5px] pr-[15px]">
                <h1 className="text-lg text-navy-blue font-semibold leading-[125%]">{title}</h1>
                <p className="text-sm text-grey font-regular tracking-widest mt-[13.5px] leading-[21px] max-w-[270px]">{p}</p>
                <Link to={href} className="text-sm text-pink font-semibold flex flex-row items-center mt-[24.5px]">
                    Learn more
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-[10px] mt-[2px]">
                        <path d="M7.00938 6.0644L2.75938 10.58C2.46563 10.8921 1.99063 10.8921 1.7 10.58L0.99375 9.82964C0.7 9.51753 0.7 9.01284 0.99375 8.70405L4.00625 5.50327L0.99375 2.30249C0.7 1.99038 0.7 1.48569 0.99375 1.1769L1.69687 0.419873C1.99062 0.107764 2.46562 0.107764 2.75625 0.419873L7.00625 4.9355C7.30312 5.24761 7.30312 5.75229 7.00938 6.0644ZM13.0094 4.9355L8.75937 0.419873C8.46562 0.107764 7.99062 0.107764 7.7 0.419873L6.99375 1.17026C6.7 1.48237 6.7 1.98706 6.99375 2.29585L10.0063 5.49663L6.99375 8.69741C6.7 9.00952 6.7 9.51421 6.99375 9.823L7.7 10.5734C7.99375 10.8855 8.46875 10.8855 8.75937 10.5734L13.0094 6.05776C13.3031 5.75229 13.3031 5.24761 13.0094 4.9355Z" fill="#FF64AE" />
                    </svg>
                </Link>
            </div >
        </div >
    )
}