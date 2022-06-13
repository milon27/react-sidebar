import React, { useContext, useState } from 'react'
import { CgMenuLeft } from 'react-icons/cg'
import Footer from './Footer'
import LeftOffCanvas from './LeftOffCanvas'
import Navs from './Navs'
import { SideBarContext } from './SidebarWrapper'

export default function MobileSidebar() {
    const [show, setShow] = useState(false)
    const { title, logoUrl, userImageUrl, onProfileImgClick, onLogoClick } = useContext(SideBarContext)

    return (
        <>
            <div className='rs-flex sm:rs-hidden rs-px-5 rs-py-2  rs-shadow'>
                <div className="rs-flex rs-w-full rs-gap-2 rs-justify-start rs-items-center">
                    <CgMenuLeft className='rs-text-3xl rs-cursor-pointer' onClick={() => setShow(true)} />
                    <img src={logoUrl} className="rs-w-9 rs-h-9 rs-max-w-full rs-rounded-full rs-cursor-pointer" alt="" onClick={onLogoClick} />
                </div>
                {/* <DiProlog className={` text-5xl  p-1`} /> */}
                <div className='rs-w-9 rs-h-9 rs-cursor-pointer' onClick={onProfileImgClick}>
                    <img src={userImageUrl} className="rs-rounded-full rs-shadow" alt="" />
                </div>
            </div>
            <LeftOffCanvas title={title || 'Options'} show={show} setShow={setShow} >
                <Navs />
                <div className='rs-py-5'></div>
                <Footer />
            </LeftOffCanvas>
        </>
    )
}
