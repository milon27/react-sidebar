import React, { useContext, useState } from "react";
import { SideBarContext } from "./SidebarWrapper";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Define from "../Define";

export interface iSubMenu {
    title: string
    to: string
    icon: React.ReactNode
}

export const createReactNavLink = (MainNavLink: any, title: string, to: string, icon: React.ReactNode, subMenus: iSubMenu[] = []) => {
    return () => {
        const { small } = useContext(SideBarContext);
        const [open, setOpen] = useState(false)
        const [subActive, setSubActive] = useState(false)

        // const path = typeof window !== "undefined" ? window.location.pathname : ""

        // if submenus are there ....
        //path.split('/')[1] === to.replace('/', '')
        if (subMenus.length > 0) {
            return <>
                <div
                    onClick={() => {
                        setOpen(old => {
                            return !old
                        })
                    }}
                    className={`cursor-pointer my-2 ${small ? 'p-2' : 'px-2.5 py-2.5'} ${Define.ROUND} flex gap-2 ${Define.H_BG} justify-between items-center ${subActive === true ? `${Define.BG} font-semibold` : ""}`}
                >
                    <div className="flex gap-2 justify-between items-center">
                        <span className="my_icon"> {icon}</span><span className={`${small === true ? "hidden" : "block"} `}>{title}</span>
                    </div>
                    {open === true ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                <div className={`${open === true ? "block" : "hidden"} ${Define.ROUND} `}>
                    {subMenus.map((item, idx) => {
                        return <MainNavLink
                            key={idx}
                            to={item.to}
                            className={(navinfo: any) => {
                                if (navinfo.isActive === true) {
                                    setSubActive(true)
                                }
                                return `${small ? 'p-2' : 'px-2.5 py-2.5'} ${Define.ROUND} flex gap-2 items-center ${Define.H_BG} ${navinfo.isActive === true ? " border border-slate-200" : ""}`
                            }}
                        >
                            <span className="my_icon"> {item.icon}</span><span className={`${small === true ? "hidden" : "block"} `}>{item.title}</span>
                        </MainNavLink>
                    })}
                </div>

            </>
        }
        return <>
            <MainNavLink
                to={to}
                className={(navinfo: any) => `my-2 ${small ? 'p-2' : 'px-2.5 py-2.5'} ${Define.ROUND} ${Define.H_BG} flex gap-2 items-center ${navinfo.isActive === true ? `${Define.BG} font-semibold ` : ""}`}
            >
                <span className="my_icon">{icon}</span><span className={`${small === true ? "hidden" : "block"} text-base`}>{title}</span>
            </MainNavLink>
        </>;

    }
}


