import React, { useContext, useEffect, useState } from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { iSubMenu } from './createReactNavLink';
import { SideBarContext } from './SidebarWrapper';

export const createNextNavLink = (MainNavLink: any, title: string, to: string, icon: React.ReactNode, subMenus: iSubMenu[] = []) => {
    return () => {
        const { small } = useContext(SideBarContext);
        const [active, setActive] = useState(false)
        const [parentPath, setParentPath] = useState('')
        const [open, setOpen] = useState(false)

        useEffect(() => {
            const isActive = typeof window !== "undefined" && window.location.pathname === to
            setParentPath(window.location.pathname.split('/')[1])
            setActive(isActive)
        }, [active])

        // if submenus are there ....
        if (subMenus.length > 0) {
            return <>
                <div
                    onClick={() => {
                        setOpen(old => {
                            return !old
                        })
                    }}
                    className={`cursor-pointer my-2 p-2 rounded flex gap-2 hover:bg-slate-200 justify-between items-center ${parentPath === to.replace('/', '') ? " bg-slate-200" : ""}`}
                >
                    <div className="flex gap-2 justify-between items-center">
                        {icon}<span className={`${small === true ? "hidden" : "block"} `}>{title}</span>
                    </div>
                    {open === true ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                <div className={`${open === true ? "h-full" : "h-0"} overflow-hidden transition-all bg-slate-100 rounded `}>
                    {subMenus.map((item, idx) => {
                        return <MainNavLink
                            key={idx}
                            href={to}
                            className={`p-2 rounded flex gap-2 items-center hover:bg-slate-200 ${active === true ? " border border-slate-200" : ""}`}
                        >
                            {item.icon}<span className={`${small === true ? "hidden" : "block"} `}>{item.title}</span>
                        </MainNavLink>
                    })}
                </div>

            </>
        }
        return <>
            <MainNavLink href={to}>
                <a className={`my-2 p-2 rounded hover:bg-slate-200 flex gap-2 items-center ${active === true ? "bg-slate-200" : ""}`}
                >
                    {icon}<span className={`${small === true ? "hidden" : "block"} `}>{title}</span>
                </a>
            </MainNavLink>
        </>

    }
}
