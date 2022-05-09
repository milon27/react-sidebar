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
                    className={`rs-cursor-pointer rs-my-2 ${small ? 'rs-p-2' : 'rs-px-2.5 rs-py-2.5'} ${Define.ROUND} rs-flex rs-gap-2 ${Define.H_BG} rs-justify-between rs-items-center ${subMenus.map(item => item.to).includes(path) ? `${Define.BG} rs-font-semibold` : ""}`}
                >
                    <div className="rs-flex rs-gap-2 rs-justify-between rs-items-center">
                        <span className="my_icon">{icon}</span><span className={`${small === true ? "rs-hidden" : "rs-block"} rs-text-base `}>{title}</span>
                    </div>
                    {open === true ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                <div className={`${open === true ? " rs-block" : "rs-hidden"}  ${Define.ROUND} rs-pl-1`}>
                    {subMenus.map((item, idx) => {
                        return <MainNavLink
                            key={idx}
                            href={item.to}
                        >
                            <a className={`${small ? 'rs-p-2' : 'rs-px-2.5 rs-py-2.5'} ${Define.ROUND} rs-flex rs-gap-2 rs-items-center ${Define.H_BG} ${path === item.to ? ' rs-border rs-border-slate-200' : ''}`}>
                                <span className="my_icon">{item.icon}</span> <span className={`${small === true ? "rs-hidden" : "rs-block"} rs-text-base `}>{item.title}</span>
                            </a>
                        </MainNavLink>
                    })}
                </div>

            </>
        }
        return <>
            <MainNavLink href={to}>
                <a className={`rs-my-2 ${small ? 'rs-p-2' : 'rs-px-2.5 rs-py-2.5'} ${Define.ROUND} ${Define.H_BG} rs-flex rs-gap-2 rs-items-center ${path === to ? `${Define.BG} rs-font-semibold` : ""}`}
                >
                    <span className="my_icon">{icon}</span><span className={`${small === true ? "rs-hidden" : "rs-block"} rs-text-base`}>{title}</span>
                </a>
            </MainNavLink>
        </>

    }
}
