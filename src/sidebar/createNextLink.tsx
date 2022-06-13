import React, { useContext, useEffect, useState } from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import Define from '../Define';
import { iSubMenu } from './createReactNavLink';
import { SideBarContext } from './SidebarWrapper';

export const createNextNavLink = (MainNavLink: any, title: string, to: string, icon: React.ReactNode, subMenus: iSubMenu[] = []) => {

    return () => {
        const { small, activeStyle } = useContext(SideBarContext);
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
                    className={`rs_downdown rs-cursor-pointer rs-my-2 ${small ? 'rs-p-[7px]' : 'rs-px-2.5 rs-py-2.5'} ${Define.ROUND} rs-flex rs-gap-2 ${Define.H_BG} rs-justify-between rs-items-center ${subMenus.map(item => item.to).includes(path) ? `${activeStyle == "fill" ? Define.BG : Define.BORDER} ` : ""}`}
                >
                    <div className="rs-flex rs-gap-2 rs-justify-between rs-items-center">
                        <span className="rs_my_icon">{icon}</span>
                        <span className={`${small === true ? "rs-hidden" : "rs-block"} rs-text-[0.8rem] `}>{title}</span>
                    </div>
                    {open === true ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                {/* dropdown item */}
                <div className={`${open === true ? " rs-block" : "rs-hidden"}  ${Define.ROUND} ${small ? "" : "rs-pl-1"}`}>
                    {subMenus.map((item, idx) => {
                        return <MainNavLink
                            key={idx}
                            href={item.to}
                        >
                            <a className={`rs_dropdown_item ${small ? 'rs-p-[7px]' : 'rs-px-2.5 rs-py-2.5'} ${Define.ROUND} rs-flex rs-gap-2 rs-items-center ${Define.H_BG} ${path === item.to ? ' rs-border rs-border-slate-200' : ''}`}>
                                <span className="rs_my_icon">{item.icon}</span>
                                <span className={`rs_nav_title ${small === true ? "rs-hidden" : "rs-block"} rs-text-[0.8rem] `}>{item.title}</span>
                            </a>
                        </MainNavLink>
                    })}
                </div>

            </>
        }
        return <>
            <MainNavLink href={to}>
                <a className={`rs-my-2 ${small ? 'rs-p-[7px]' : 'rs-px-2.5 rs-py-2.5'} ${Define.ROUND} ${Define.H_BG} rs-flex rs-gap-2 rs-items-center ${path === to ? `${activeStyle == "fill" ? Define.BG : Define.BORDER}` : ""}`}
                >
                    <span className="rs_my_icon">{icon}</span>
                    <span className={`rs_nav_title ${small === true ? "rs-hidden" : "rs-block"} rs-text-[0.8rem]`}>{title}</span>
                </a>
            </MainNavLink>
        </>

    }
}
