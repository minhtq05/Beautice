import React from "react"
import * as _ from 'lodash'
import tw from "twin.macro"

export default function Loading(): JSX.Element {
    return (
        <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center font-bold">
            <h1 className="text-3xl">Authenticating User...</h1>
        </div>
    )
}

export const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const colors = _.sampleSize(['#D9DDFE', '#FF64AE', '#DFE2FF'], 2)
    return (
        <div className={`relative w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-gradient-24 from-[${colors[0]}] to-[${colors[1]}]`} >
            {children}
        </div >
    )
}

export const Panel = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
        <div className="relative flex flex-col justify-center items-center bg-[white] rounded-[20px] w-full sm:max-w-[500px] h-fit p-[40px] shadow-base">
            {children}
        </div>
    )
}

export const Input = tw.input`border-[2px] h-10 my-2 px-5 border border-outline text-base placeholder:text-base placeholder:text-input-grey text-navy-blue font-regular sm:pl-[20px] h-[55px] rounded-[10px] tracking-widest w-full`