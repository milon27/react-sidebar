import React, { useContext, useEffect, useState } from 'react'
import { SideBarContext } from './SidebarWrapper';

export const createNextNavLink = (MainNavLink: any, title: string, to: string, icon: React.ReactNode) => {
    return () => {
        const { small } = useContext(SideBarContext);
        const [active, setActive] = useState(false)
        useEffect(() => {
            const isActive = typeof window !== "undefined" && window.location.pathname === to
            setActive(isActive)
        }, [active])

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
