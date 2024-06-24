import React, { createContext, useContext, useState, useEffect } from "react";

export type Size = {
    width: number,
    height: number,
}

const SizeContext = createContext<Size | null>(null)

export const useSize = (): Size | null => {
    const context = useContext(SizeContext)
    if (!context) {
        throw new Error("Must use SizeProvider!")
    }
    return context
}

export default function SizeProvider({ children }: { children: React.ReactNode }): JSX.Element {
    const [width, setWidth] = useState<number>(window.innerWidth)
    const [height, setHeight] = useState<number>(window.innerHeight)


    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <SizeContext.Provider value={{ width: width, height: height }}>
            {children}
        </SizeContext.Provider>
    )
}