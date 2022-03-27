import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { SideBarContext } from './SidebarWrapper'
import { iNavItem } from './ReactNavItem';


export default function NextNavItem({ to, icon, title }: iNavItem) {
    const { small } = useContext(SideBarContext);
    const { pathname } = useRouter();
    //const isActive = exact ? pathname === href : pathname.startsWith(href);
    const isActive = pathname === to

    return (
        <Link href={to}>
            <a className={`my-2 p-2 rounded hover:bg-slate-200 flex gap-2 items-center ${isActive === true ? "bg-slate-200" : ""}`}
            >{icon}<span className={`${small === true ? "hidden" : "block"} `}>{title}</span></a>
        </Link>
    )
}
