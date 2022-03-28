import React, { useContext } from 'react'
import { ProjectType, SideBarContext } from './SidebarWrapper'

const ReactNavItem = React.lazy(() => import('./ReactNavItem'));
const NextNavItem = React.lazy(() => import('./NextNavItem').catch(() => ({ default: () => <div>Need To be a Next Js Project</div> })));

export default function Navs() {
    const { projectType, navItems } = useContext(SideBarContext)

    return (
        <ul className='menus'>
            {
                navItems.map((item, idx) => {
                    return <li key={idx}>
                        {projectType === ProjectType.REACTJS ?
                            <React.Suspense fallback={'loading...'}>
                                <ReactNavItem to={item.to} title={item.title} icon={item.icon} />
                            </React.Suspense> :
                            <React.Suspense fallback={'loading...'} >
                                <NextNavItem to={item.to} title={item.title} icon={item.icon} />
                            </React.Suspense>}
                    </li>
                })
            }
        </ul>
    )
}
