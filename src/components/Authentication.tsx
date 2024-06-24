import React from "react"
import * as _ from 'lodash'
import tw from "twin.macro"
import { Link } from "react-router-dom"

export default function Loading(): JSX.Element {
    return (
        <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center font-bold">
            <h1 className="text-3xl">Authenticating User...</h1>
        </div>
    )
}

export const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const bg = _.sample([
        'from-[#091156] to-[#FF64AE]',
        'from-[#FF64AE] to-[#D9DDFE]',
        'from-[#D9DDFE] to-[#F0F0F0]',
    ])
    return (
        // <div className={"relative w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-gradient-to-tr from-[" + colors[0] + "] to-[" + colors[1] + "]"
        <div className={"relative w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-gradient-24 " + bg
        } >
            {children}
        </div >
    )
}

export const Panel = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
        <div className="relative flex flex-col justify-center items-center bg-[white] rounded-[20px] w-full sm:max-w-[500px] h-fit p-[40px] shadow-base">
            {children}
            {/* <Link to="/" className="text-sm text-navy-blue font-regular mt-[10px]">Back to home</Link> */}
        </div>
    )
}

export const Input = tw.input`border-[2px] h-10 my-2 px-5 border border-outline text-base placeholder:text-base placeholder:text-input-grey text-navy-blue font-regular sm:pl-[20px] h-[55px] rounded-[10px] tracking-widest w-full`