import React, { useContext, useState } from 'react'
import { CgMenuLeft } from 'react-icons/cg'
import LeftOffCanvas from './LeftOffCanvas'
import Navs from './Navs'
import { SideBarContext } from './SidebarWrapper'

export default function MobileSidebar() {
    const [show, setShow] = useState(false)
    const { logoUrl, userImageUrl } = useContext(SideBarContext)
    return (
        <>
            <div className='flex sm:hidden px-5 py-2  shadow'>
                <div className="flex w-full gap-2 justify-start items-center">
                    <CgMenuLeft className='text-3xl' onClick={() => setShow(true)} />
                    <img src={logoUrl} className="w-9 h-9 max-w-full rounded-full" alt="" />
                </div>
                {/* <DiProlog className={` text-5xl  p-1`} /> */}
                <div className='w-9 h-9' >
                    <img src={userImageUrl} className="rounded-full shadow" alt="" />
                </div>
            </div>
            <LeftOffCanvas title={'Options'} show={show} setShow={setShow} >
                <Navs />
            </LeftOffCanvas>
        </>
    )
}
