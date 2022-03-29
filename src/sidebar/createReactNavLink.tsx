import React, { useContext, useState } from "react";
import { SideBarContext } from "./SidebarWrapper";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export interface iSubMenu {
    title: string
    to: string
    icon: React.ReactNode
}

export const createReactNavLink = (MainNavLink: any, title: string, to: string, icon: React.ReactNode, subMenus: iSubMenu[] = []) => {
    return () => {
        const { small } = useContext(SideBarContext);
        const [open, setOpen] = useState(false)
        const path = typeof window !== "undefined" ? window.location.pathname : ""

        // if submenus are there ....
        if (subMenus.length > 0) {
            return <>
                <div
                    onClick={() => {
                        setOpen(old => {
                            return !old
                        })
                    }}
                    className={`cursor-pointer my-2 p-2 rounded flex gap-2 hover:bg-slate-200 justify-between items-center ${path.split('/')[1] === to.replace('/', '') ? " bg-slate-200" : ""}`}
                >
                    <div className="flex gap-2 justify-between items-center">
                        {icon}<span className={`${small === true ? "hidden" : "block"} `}>{title}</span>
                    </div>
                    {open === true ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                <div className={`${open === true ? "block" : "hidden"} bg-slate-100 rounded `}>
                    {subMenus.map((item, idx) => {
                        return <MainNavLink
                            key={idx}
                            to={item.to}
                            className={(navinfo: any) => `p-2 rounded flex gap-2 items-center hover:bg-slate-200 ${navinfo.isActive === true ? " border border-slate-200" : ""}`}
                        >
                            {item.icon}<span className={`${small === true ? "hidden" : "block"} `}>{item.title}</span>
                        </MainNavLink>
                    })}
                </div>

            </>
        }
        return <>
            <MainNavLink
                to={to}
                className={(navinfo: any) => `my-2 p-2 rounded hover:bg-slate-200 flex gap-2 items-center ${navinfo.isActive === true ? "bg-slate-200" : ""}`}
            >
                {icon}<span className={`${small === true ? "hidden" : "block"} `}>{title}</span>
            </MainNavLink>
        </>;

    }
}


