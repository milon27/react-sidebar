import React, { useContext } from 'react'
import NextNavItem from './NextNavItem'
import ReactNavItem from './ReactNavItem'
import { ProjectType, SideBarContext } from './SidebarWrapper'

export default function Navs() {
    const { projectType, navItems } = useContext(SideBarContext)

    return (
        <ul className='menus'>
            {
                navItems.map((item, idx) => {
                    return <li key={idx}>
                        {projectType === ProjectType.REACTJS ? <>
                            <ReactNavItem to={item.to} title={item.title} icon={item.icon} />
                        </> : <>
                            <NextNavItem to={item.to} title={item.title} icon={item.icon} />
                        </>}
                    </li>
                })
            }
        </ul>
    )
}
