import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { SideBarContext } from './SidebarWrapper'

export interface iNavItem {
    to: string,
    title: string,
    icon: React.ReactNode
}
export default function ReactNavItem({ to, icon, title }: iNavItem) {
    const { small } = useContext(SideBarContext);
    return (
        <NavLink to={to}
            className={navinfo => `my-2 p-2 rounded hover:bg-slate-200 flex gap-2 items-center ${navinfo.isActive === true ? "bg-slate-200" : ""}`}
        >
            {icon}<span className={`${small === true ? "hidden" : "block"} `}>{title}</span>
        </NavLink>
    )
}
