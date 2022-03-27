import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

interface iLeftOffCanvas {
    show: boolean
    title: string
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
}

export default function LeftOffCanvas({ show, title, setShow, children }: iLeftOffCanvas) {
    const show_class = 'offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white  bg-clip-padding  outline-none transition translate-x-0 duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-64 md:w-80 shadow-xl z-[1200]'
    const hide_class = 'offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white  bg-clip-padding  outline-none transition -translate-x-full duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-64 md:w-80 shadow-xl z-[1200]'

    const hide = () => {
        setShow(false)
    }

    return (
        <>
            <div className={show === true ? show_class : hide_class} >
                <div className="offcanvas-header flex items-center justify-between p-4">
                    <h5 className="offcanvas-title mb-0 leading-normal font-semibold uppercase" >{title}</h5>
                    <AiOutlineCloseCircle onClick={hide} className='text-2xl cursor-pointer' />
                </div>
                <hr />
                <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
                    {children}
                </div>
            </div>

            <div className={show === true ? "offcanvas-backdrop show" : ""} onClick={hide}></div>
        </>
    )
}
