import React, { useContext } from 'react'
// import Link from 'next/link'
import { useRouter } from 'next/router';
import { SideBarContext } from './SidebarWrapper';

export const createNextNavLink = (MainNavLink: any, title: string, to: string, icon: React.ReactNode) => {
    return () => {
        const { small } = useContext(SideBarContext);
        const { pathname } = useRouter();
        const isActive = pathname === to

        return <>
            <MainNavLink href={to}>
                <a className={`my-2 p-2 rounded hover:bg-slate-200 flex gap-2 items-center ${isActive === true ? "bg-slate-200" : ""}`}
                >
                    {icon}<span className={`${small === true ? "hidden" : "block"} `}>{title}</span>
                </a>
            </MainNavLink>
        </>
    }
}
