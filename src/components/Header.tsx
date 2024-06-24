import {
  Link,
  useLocation,
} from 'react-router-dom'
import React, { useEffect, useState } from "react"
import Button from "./Button"
import { useSize, Size } from '@/hooks/size'
// import tw from "twin.macro"

// const NavItem = tw.a`font-medium text-base min-w-20 tracking-widest mb-0.5`
const NavItem = ({ children, className, href }: { children: React.ReactNode, className?: string, href: string }) => {
  return (
    <Link to={href} className={className + " font-medium text-base min-w-20 tracking-widest mb-0.5"}>{children}</Link>
  )
}

const defaultClassName = {
  style: "big",
  container: "flex flex-row justify-center items-center ",
  home: "w-[111px] font-semibold flex flex-row items-center ",
  about: "xl:w-[100px] lg:w-[80px] ",
  service: "xl:w-[115px] lg:w-[95px] ",
  gallery: "xl:w-[114px] lg:w-[94px] ",
  blog: "xl:w-[93px] lg:w-[73px] ",
  register: "h-[52px] mb-[3px] xl:w-[158px] lg:w-[138px] pb-[0.5px] pr-[1px]"
}

const smallScreenClassName = {
  style: "small ",
  container: "flex flex-col z-10 mt-[41px] w-full ",
  home: "font-semibold flex flex-row items-center pl-[41px] ",
  about: "mt-[20px] pl-[41px] ",
  service: "font-semibold mt-[20px] pl-[41px] ",
  gallery: "mt-[20px] pl-[41px] text-grey ",
  blog: "mt-[20px] pl-[41px] text-grey ",
  register: "h-[52px] w-full mt-[20px] pl-[41px] flex-initial flex flex-wrap content-center bg-pink font-semibold text-white tracking-widest pt-0.5 ",
}

type NavClassName = typeof defaultClassName | typeof smallScreenClassName

export default function Header() {
  // const [width, setWidth] = useState(window.innerWidth)

  // useEffect(() => {
  //   const handleResize = () => setWidth(window.innerWidth)
  //   window.addEventListener('resize', handleResize)
  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])
  const location = useLocation()
  const path = location.pathname
  const { width, height } = useSize() as Size

  return (
    <div className={"relative flex flex-col items-center z-10 w-full" + (width >= 976 ? " backdrop-blur-none" : " backdrop-blur-2xl")}>
      <div className="w-full flex flex-col items-center px-[35px]">
        {path === "/home" ?
          <div className="relative flex flex-row lg:max-w-[1140px] sm:w-full mt-[40px]">
            <Link className="relative flex lg:justify-center sm:justify-start items-center min-h-[63px] mr-auto" to="/">
              <img className="flex-none h-[63px] drop-shadow-logo" src="./logo-dark.svg" alt="Beautice" />
              <p className="flex-initial flex flex-wrap ml-[18px] content-center font-regular text-2xl tracking-widest text-white min-w-[161px] drop-shadow-logo">Beautice</p>
            </Link>
            {
              (width >= 976) && <Menu className={defaultClassName} width={width} path={path} />
            }
          </div>
          :
          <div className="relative flex flex-row lg:max-w-[1140px] sm:w-full mt-[41px]">
            <Link className="relative flex lg:justify-center sm:justify-start items-center min-h-[63px] mr-auto" to="/">
              <img className="flex-none h-[63px] drop-shadow-logo" src="./logo-light.svg" alt="Beautice" />
              <p className="flex-initial flex flex-wrap ml-[18px] content-center font-bold text-2xl tracking-widest text-navy-blue min-w-[161px] drop-shadow-logo mt-[1px]">Beautice</p>
            </Link>
            {
              (width >= 976) && <Menu className={defaultClassName} width={width} path={path} />
            }
          </div>
        }
      </div>
      {
        (width < 976) && <Menu className={smallScreenClassName} width={width} path={path} />
      }


      {/* {
          width >= 976 ?
            <div className="flex flex-row justify-center items-center">
              <NavItem className="w-[111px] font-semibold flex flex-row items-center text-purple" href="/home">
                Home
                <svg className="ml-[5px] mt-0.5" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="3.5" y1="2.18557e-08" x2="3.5" y2="7" stroke="#41487F" />
                  <line x1="7" y1="3.5" x2="-4.37114e-08" y2="3.5" stroke="#41487F" />
                </svg>
              </NavItem>
              <NavItem className="xl:w-[100px] lg:w-[80px] mt-[-2px] text-grey" href="/about">About</NavItem>
              <NavItem className="xl:w-[115px] lg:w-[95px] text-grey" href="/service">Service</NavItem>
              <NavItem className="xl:w-[114px] lg:w-[94px] text-grey" href="/gallery">Gallery</NavItem>
              <NavItem className="xl:w-[93px] lg:w-[73px] text-grey" href="/blog">Blog</NavItem>
              <Button className="h-[52px] mb-1 xl:w-[158px] lg:w-[138px]" href="/contact-us" text="Contact" />
            </div> : null
        }
      </div>
      {
        width < 976 ?
          <div className="flex flex-col z-20 mt-[41px]">
            <NavItem className="font-semibold flex flex-row items-center pl-[41px] text-purple" href="#">
              Home
              <svg className="ml-[5px] mt-0.5" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="3.5" y1="2.18557e-08" x2="3.5" y2="7" stroke="#41487F" />
                <line x1="7" y1="3.5" x2="-4.37114e-08" y2="3.5" stroke="#41487F" />
              </svg>
            </NavItem>
            <NavItem className="mt-[20px] pl-[41px] text-grey" href="#">About</NavItem>
            <NavItem className="font-semibold mt-[20px] pl-[41px] text-grey" href="#">Service</NavItem>
            <NavItem className="mt-[20px] pl-[41px] text-grey" href="#">Gallery</NavItem>
            <NavItem className="mt-[20px] pl-[41px] text-grey" href="#">Blog</NavItem>
            <a href="#" className="h-[52px] w-full mt-[20px] pl-[41px] flex-initial flex flex-wrap content-center bg-pink font-semibold text-white tracking-widest pt-0.5">Contact</a>
          </div> : null
      } */}
    </div >
  )
}

const Menu = ({ className, width, path }: { className: NavClassName, width: number, path: string }): JSX.Element => {
  const textColor = (route: string) => {
    if (path === route) return path === "/home" ? "text-white" : "text-purple"
    return path === "/home" ? "text-light-pink" : "text-grey"
  }

  return (
    <div className={className.container}>
      <NavItem className={className.home + textColor("/home")} href="/home">
        Home
        <svg className="ml-[4.2px] mt-0.5" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="3.5" y1="2.18557e-08" x2="3.5" y2="7" stroke={path === "/home" ? "#FFFFFF" : "grey"} />
          <line x1="7" y1="3.5" x2="-4.37114e-08" y2="3.5" stroke={path === "/home" ? "#FFFFFF" : "grey"} />
        </svg>
      </NavItem>
      <NavItem className={className.about + textColor("/about")} href="/about">About</NavItem>
      <NavItem className={className.service + textColor("/service")} href="/service">Service</NavItem>
      <NavItem className={className.gallery + textColor("/gallery")} href="/gallery">Gallery</NavItem>
      <NavItem className={className.blog + textColor("/blog")} href="/blog">Blog</NavItem>
      {width >= 976 ?
        <Button className={className.register} href="/register" text="Register" />
        :
        <Link className={className.register} to="/register">Register</Link>
      }
    </div>
  )
}