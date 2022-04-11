import React, { useContext } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineLogout } from 'react-icons/ai'
import { SideBarContext } from './SidebarWrapper';
import Navs from './Navs';


export default function Sidebar() {
    const { small, setSmall, logoUrl, userName, userImageUrl, onLogOut } = useContext(SideBarContext)
    return (
        // w-[65px] md:w-[240px]
        <div className={`${small === true ? "sm:w-[65px]" : "sm:w-[240px]"} transition-all hidden sm:block bg-white shadow p-4 fixed overflow-x-hidden h-full top-0 left-0`}>
            <div className="flex gap-2 items-center">
                <img src={logoUrl} className="w-10 max-w-full" alt="" />
                {/* <p className='font-bold text-2xl hidden md:block'>metasar</p> */}
                <div className={`w-full justify-end ${small === true ? "hidden" : "flex"}  `}>
                    <IoIosArrowBack onClick={() => { setSmall(old => !old) }} className='text-3xl rounded bg-slate-200 p-2 cursor-pointer' />
                </div>
            </div>
            <hr className='my-2' />
            <div className='flex flex-col '>
                <Navs />
                <div className='user w-full overflow-x-hidden absolute bottom-4 left-0 px-4'>
                    <div className='flex gap-2 justify-between items-center'>

                        <div className={`w-8 h-8`} >
                            <img src={userImageUrl} className="rounded-full shadow" alt="" />
                        </div>

                        <span className={`${small === true ? "hidden" : "block"} `}>{userName}</span>

                        <AiOutlineLogout onClick={onLogOut} className={`${small === true ? "hidden" : "block"} text-3xl rounded bg-slate-200 p-2 cursor-pointer`} />

                    </div>
                    {small === true && <IoIosArrowForward onClick={() => { setSmall(old => !old) }} className='my-2 text-3xl rounded bg-slate-200 p-2 cursor-pointer' />}

                </div>
            </div>
        </div>
    )
}
