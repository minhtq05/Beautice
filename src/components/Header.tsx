import { useEffect, useState } from "react"
import Button from "./Button"
import tw from "twin.macro"

const NavItem = tw.a`font-medium text-base min-w-20 tracking-widest mb-0.5`

function Header() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <div className="flex flex-col">
      <div className="relative flex pt-[41px] px-[41px] w-full lg:justify-center md:justify-start items-center z-20 min-h-[63px]">
        <img className="flex-none h-[63px]" src="logo-light.svg" alt="Beautice" />
        <a className="flex-initial flex flex-wrap ml-[18px] content-center font-bold text-2xl tracking-widest text-navy-blue min-w-[161px]">Beautice</a>
        <div className="shrink w-[191px]"></div>
        {
          width >= 976 ?
            <div className="flex flex-row justify-center items-center">
              <NavItem className="w-[111px] font-semibold flex flex-row items-center text-purple" href="#">
                Home
                <svg className="ml-[5px] mt-0.5" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="3.5" y1="2.18557e-08" x2="3.5" y2="7" stroke="#41487F" />
                  <line x1="7" y1="3.5" x2="-4.37114e-08" y2="3.5" stroke="#41487F" />
                </svg>
              </NavItem>
              <NavItem className="xl:w-[100px] lg:w-[80px] mt-[-2px] text-grey" href="#">About</NavItem>
              <NavItem className="xl:w-[115px] lg:w-[95px] text-grey" href="#">Service</NavItem>
              <NavItem className="xl:w-[114px] lg:w-[94px] text-grey" href="#">Gallery</NavItem>
              <NavItem className="xl:w-[93px] lg:w-[73px] text-grey" href="#">Blog</NavItem>
              <Button className="h-[52px] mb-1 xl:w-[158px] lg:w-[138px]" href="#" text="Contact" />
            </div> : null
        }
      </div>
      {
        width < 976 ?
          <div className="flex flex-col z-20 mt-[41px]">
            <NavItem className="font-semibold flex flex-row items-center pl-[41px]  " href="#">
              Home
              <svg className="ml-[5px] mt-0.5" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="3.5" y1="2.18557e-08" x2="3.5" y2="7" stroke="#41487F" />
                <line x1="7" y1="3.5" x2="-4.37114e-08" y2="3.5" stroke="#41487F" />
              </svg>
            </NavItem>
            <NavItem className="mt-[20px] pl-[41px]" href="#">About</NavItem>
            <NavItem className="font-semibold text-navy-blue mt-[20px] pl-[41px]" href="#">Service</NavItem>
            <NavItem className="mt-[20px] pl-[41px]" href="#">Gallery</NavItem>
            <NavItem className="mt-[20px] pl-[41px]" href="#">Blog</NavItem>
            <a href="#" className="h-[52px] w-full mt-[20px] pl-[41px] flex-initial flex flex-wrap content-center bg-pink font-semibold text-white tracking-widest pt-0.5">Contact</a>
          </div> : null
      }
    </div>
  )
}

export default Header