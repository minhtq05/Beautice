import { Size, useSize } from "@/hooks/size"
import { useState } from "react"
import { Form } from "react-router-dom"
import { createContext } from "vm"

type Blog = {
    category: string,
    title: string,
    description: string,
    href: string,
}

// const Blogs = createContext()

const blogs: Array<Blog> = [
    {
        category: "Consultant",
        title: "How much does a consultation cost at our clinic?",
        description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the pleasure of my life.",
        href: "./this-post-does-not-exist",
    },
    {
        category: "Beauty",
        title: "Watch out! don't choose the wrong beauty product",
        description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the pleasure of my life.",
        href: "./this-post-does-not-exist",
    },
    {
        category: "Treatments",
        title: "About skin care you need to know",
        description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the pleasure of my life.",
        href: "./this-post-does-not-exist",
    },
]

export default function Blog() {
    return (
        <div className="relative w-full flex flex-col items-center">
            <Label />

        </div>
    )
}

const Label = () => {
    return (
        <div className="relative w-full h-[285px] mt-[36px] bg-[url(./Blog/blog.png)] flex flex-col justify-center items-center px-[40px]">
            <img src="./Blog/blog.png" alt="" className="absolute w-full top-0 z-0" />
            <img src="./Blog/overlay.svg" alt="" className="absolute top-0 w-full z-0" />
            <div className="relative max-w-[1144px] w-full z-10 mt-[1px] ml-[2px]">
                <div className="w-full flex flex-row justify-start">
                    <p className="text-4xl text-white font-semibold mr-auto">Blog</p>
                    <p className="text-base text-[#D9D9D9] font-medium tracking-widest mt-[8.5px] pr-[-10px]">Home • Blog</p>
                </div>
            </div>
        </div>
    )
}

// const BlogList = () => {
//     const { width } = useSize() as Size
//     const [searchBox, setSearchBox] = useState("")

//     return (
//         <div className="max-w-[1140px] w-full flex flex-col">
//             {
//                 width < 1024
//             }
//             <div className="max-w-[1140px] w-full flex flex-row justify-start gap-x-[60px]">
//                 <div className="max-w-[730px] w-full flex flex-col gap-y-[133px]">
//                     {
//                         blogs.map((blog, i))
//                     }
//                 </div>
//                 {
//                     width >= 1024 ?
//                         <div className="max-w-[350px] w-full flex flex-col">
//                             <SearchBar searchBox="" setSearchBox={(str) => { setSearchBox(str) }} />
//                         </div> : null
//                 }
//             </div>
//         </div>
//     )
// }

const BlogItem = ({ }) => {
    return (
        <div></div>
    )
}

const SearchBar = ({ searchBox, setSearchBox }: { searchBox: string, setSearchBox: (arg0: string) => void }) => {
    return (
        <div className="max-w-[350px] h-[65px] w-full flex flex-col">
            <input type="text" value={searchBox} onChange={(e) => { setSearchBox(e.target.value) }} className="max-w-[274px] w-full rounded-l-full" />
            <button type="button" className="w-[74px]">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.6582 21.6162L19.79 16.748C19.5703 16.5283 19.2725 16.4062 18.96 16.4062H18.1641C19.5117 14.6826 20.3125 12.5146 20.3125 10.1562C20.3125 4.5459 15.7666 0 10.1562 0C4.5459 0 0 4.5459 0 10.1562C0 15.7666 4.5459 20.3125 10.1562 20.3125C12.5146 20.3125 14.6826 19.5117 16.4062 18.1641V18.96C16.4062 19.2725 16.5283 19.5703 16.748 19.79L21.6162 24.6582C22.0752 25.1172 22.8174 25.1172 23.2715 24.6582L24.6533 23.2764C25.1123 22.8174 25.1123 22.0752 24.6582 21.6162ZM10.1562 16.4062C6.7041 16.4062 3.90625 13.6133 3.90625 10.1562C3.90625 6.7041 6.69922 3.90625 10.1562 3.90625C13.6084 3.90625 16.4062 6.69922 16.4062 10.1562C16.4062 13.6084 13.6133 16.4062 10.1562 16.4062Z" fill="white" />
                </svg>

            </button>
        </div>
    )
}
