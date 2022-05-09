import React, { useContext } from 'react'
import MobileSidebar from './MobileSidebar'
import Sidebar from './Sidebar'
import { SideBarContext } from './SidebarWrapper'

export default function PageWrapper({ children }: { children: React.ReactNode }) {
    const { small } = useContext(SideBarContext)

    return (
        <div className="rs-w-full rs-h-full rs-min-h-screen sm:rs-flex rs-bg-gray-50">
            {/* sidebar */}
            <Sidebar />
            <MobileSidebar />
            {/* content */}
            <div className={`rs-transition-all rs-w-full rs-p-5 ${small === true ? "sm:rs-ml-[65px]" : "sm:rs-ml-[240px]"} `}>
                {children}
            </div>
        </div>
    )
}
