import React, { useContext } from 'react'
import { SideBarContext } from './SidebarWrapper'


export default function Navs() {
    const { navItems, small } = useContext(SideBarContext)

    return (
        <ul className={`rs_menus  ${small === true ? "sm:rs-mb-[90px]" : "sm:rs-mb-[45px]"}`}>
            {
                navItems.map((Item, idx) => {
                    return <li key={idx}>
                        <Item />
                    </li>
                })
            }
        </ul>
    )
}
