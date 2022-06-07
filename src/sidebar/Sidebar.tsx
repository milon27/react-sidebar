import React, { useContext } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { SideBarContext } from './SidebarWrapper';
import Navs from './Navs';
import Footer from './Footer';


export default function Sidebar() {
    const { title, small, setSmall, logoUrl, onLogoClick } = useContext(SideBarContext)
    return (
        // w-[65px] md:w-[240px]
        <div className={`${small === true ? "sm:rs-w-[65px]" : "sm:rs-w-[240px]"} rs-transition-all rs-hidden sm:rs-block rs-bg-white rs-shadow rs-p-4 rs-fixed rs-overflow-x-hidden rs-h-full rs-top-0 rs-left-0`}>
            <div className="rs-flex rs-gap-2 rs-items-center">
                <img src={logoUrl} className="rs-w-10 rs-max-w-full rs-cursor-pointer" alt="" onClick={onLogoClick} />
                {title && !small && <p className='rs-font-bold rs-text-2xl rs-hidden md:rs-block'>{title}</p>}
                <div className={`rs-w-full rs-justify-end ${small === true ? "rs-hidden" : "rs-flex"}  `}>
                    <IoIosArrowBack onClick={() => { setSmall(old => !old) }} className='rs-text-3xl rs-rounded rs-bg-slate-200 rs-p-2 rs-cursor-pointer' />
                </div>
            </div>
            <hr className='rs-my-2' />
            <div className='rs-flex rs-flex-col '>
                <Navs />
                <Footer />
            </div>
        </div>
    )
}
