import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

interface iLeftOffCanvas {
    show: boolean
    title: string
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
}

export default function LeftOffCanvas({ show, title, setShow, children }: iLeftOffCanvas) {
    const show_class = 'rs-offcanvas rs-offcanvas-end rs-fixed rs-bottom-0 rs-flex rs-flex-col rs-max-w-full rs-bg-white  rs-bg-clip-padding  rs-outline-none rs-transition rs-translate-x-0 rs-duration-300 rs-ease-in-out rs-text-gray-700 rs-top-0 rs-left-0 rs-border-none rs-w-64 md:rs-w-80 rs-shadow-xl rs-z-[1200]'
    const hide_class = 'rs-offcanvas rs-offcanvas-end rs-fixed rs-bottom-0 rs-flex rs-flex-col rs-max-w-full rs-bg-white  rs-bg-clip-padding  rs-outline-none rs-transition -rs-translate-x-full rs-duration-300 rs-ease-in-out rs-text-gray-700 rs-top-0 rs-left-0 rs-border-none rs-w-64 md:rs-w-80 rs-shadow-xl rs-z-[1200]'

    const hide = () => {
        console.log("here we gooo..");

        setShow(false)
    }

    return (
        <>
            <div className={show === true ? show_class : hide_class} >
                <div className="rs-offcanvas-header rs-flex rs-items-center rs-justify-between rs-p-4">
                    <h5 className="rs-offcanvas-title rs-mb-0 rs-leading-normal rs-font-semibold rs-uppercase" >{title}</h5>
                    <AiOutlineCloseCircle onClick={hide} className='rs-text-2xl rs-cursor-pointer' />
                </div>
                <hr />
                <div className="rs-offcanvas-body rs-flex-grow rs-p-4 rs-overflow-y-auto">
                    {children}
                </div>
            </div>

            <div className={show === true ? "rs-absolute rs-top-0 rs-left-0 rs-bg-black rs-bg-opacity-50 rs-block rs-h-full rs-w-full " : "rs-hidden"} onClick={hide}></div>
        </>
    )
}
