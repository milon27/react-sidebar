import React, { useContext, useEffect, useState } from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import Define from '../Define';
import { iSubMenu } from './createReactNavLink';
import { SideBarContext } from './SidebarWrapper';

export const createNextNavLink = (MainNavLink: any, title: string, to: string, icon: React.ReactNode, subMenus: iSubMenu[] = []) => {

    return () => {
        const { small } = useContext(SideBarContext);
        const [path, setPath] = useState('')
        const [open, setOpen] = useState(false)

        useEffect(() => {
            setPath(window.location.pathname)
        }, [])

        // if submenus are there ....
        if (subMenus.length > 0) {
            return <>
                <div
                    onClick={() => {
                        setOpen(old => {
                            return !old
                        })
                    }}
                    className={`cursor-pointer my-2 ${small ? 'p-2' : 'px-2.5 py-2.5'} ${Define.ROUND} flex gap-2 ${Define.H_BG} justify-between items-center ${subMenus.map(item => item.to).includes(path) ? `${Define.BG} font-semibold` : ""}`}
                >
                    <div className="flex gap-2 justify-between items-center">
                        <span className="my_icon">{icon}</span><span className={`${small === true ? "hidden" : "block"} text-base `}>{title}</span>
                    </div>
                    {open === true ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                <div className={`${open === true ? " block" : "hidden"}  ${Define.ROUND} `}>
                    {subMenus.map((item, idx) => {
                        return <MainNavLink
                            key={idx}
                            href={item.to}
                        >
                            <a className={`${small ? 'p-2' : 'px-2.5 py-2.5'} ${Define.ROUND} flex gap-2 items-center ${Define.H_BG} ${path === item.to ? ' border border-slate-200' : ''}`}>
                                <span className="my_icon">{item.icon}</span> <span className={`${small === true ? "hidden" : "block"} text-base `}>{item.title}</span>
                            </a>
                        </MainNavLink>
                    })}
                </div>

            </>
        }
        return <>
            <MainNavLink href={to}>
                <a className={`my-2 ${small ? 'p-2' : 'px-2.5 py-2.5'} ${Define.ROUND} ${Define.H_BG} flex gap-2 items-center ${path === to ? `${Define.BG} font-semibold` : ""}`}
                >
                    <span className="my_icon">{icon}</span><span className={`${small === true ? "hidden" : "block"} text-base`}>{title}</span>
                </a>
            </MainNavLink>
        </>

    }
}
