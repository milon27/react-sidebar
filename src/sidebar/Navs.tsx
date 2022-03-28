import React, { useContext } from 'react'
import { SideBarContext } from './SidebarWrapper'


export default function Navs() {
    const { navItems } = useContext(SideBarContext)

    return (
        <ul className='menus'>
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
