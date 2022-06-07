import React, { useContext } from 'react'
import MobileSidebar from './MobileSidebar'
import Sidebar from './Sidebar'
import { SideBarContext } from './SidebarWrapper'

export default function PageWrapper({ children, className = 'rs-p-5' }: { children: React.ReactNode, className?: string }) {
    const { small } = useContext(SideBarContext)

    return (
        <div className="rs-w-full rs-h-full rs-min-h-screen sm:rs-flex">
            {/* sidebar */}
            <Sidebar />
            <MobileSidebar />
            {/* content */}
            {/* rs-p-5 */}
            <div className={`${className} rs-transition-all rs-w-full ${small === true ? "sm:rs-ml-[65px]" : "sm:rs-ml-[240px]"} `}>
                {children}
            </div>
        </div>
    )
}
