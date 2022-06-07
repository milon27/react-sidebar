import React, { useContext } from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { SideBarContext } from './SidebarWrapper'

export default function Footer() {
    const { small, setSmall, userName, userImageUrl, onLogOut, onProfileImgClick } = useContext(SideBarContext)
    return (
        <div className='user rs-w-full rs-overflow-x-hidden rs-absolute rs-bottom-4 rs-left-0 rs-px-4'>
            <div className='rs-flex rs-gap-2 rs-justify-between rs-items-center'>

                <div className={`rs-w-8 rs-h-8 rs-cursor-pointer`} onClick={onProfileImgClick}>
                    <img src={userImageUrl} className="rs-rounded-full rs-shadow" alt="" />
                </div>

                <span className={`${small === true ? "rs-hidden" : "rs-block"} `}>{userName}</span>

                <AiOutlineLogout onClick={onLogOut} className={`${small === true ? "rs-hidden" : "rs-block"} rs-text-3xl rs-rounded rs-bg-slate-200 rs-p-2 rs-cursor-pointer`} />

            </div>
            {small === true && <IoIosArrowForward onClick={() => { setSmall(old => !old) }} className='rs-my-2 rs-text-3xl rs-rounded rs-bg-slate-200 rs-p-2 rs-cursor-pointer' />}

        </div>
    )
}
