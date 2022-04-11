import React, { useContext } from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { SideBarContext } from './SidebarWrapper'

export default function Footer() {
    const { small, setSmall, userName, userImageUrl, onLogOut } = useContext(SideBarContext)
    return (
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
    )
}
