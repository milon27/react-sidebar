import React, { useContext } from 'react'
import MobileSidebar from './MobileSidebar'
import Sidebar from './Sidebar'
import { SideBarContext } from './SidebarWrapper'

export default function PageWrapper({ children }: { children: React.ReactNode }) {
    const { small } = useContext(SideBarContext)

    return (
        <div className="w-full h-full min-h-screen sm:flex bg-gray-50">
            {/* sidebar */}
            <Sidebar />
            <MobileSidebar />
            {/* content */}
            <div className={`transition-all w-full p-5 ${small === true ? "sm:ml-[65px]" : "sm:ml-[240px]"} `}>
                {children}
            </div>
        </div>
    )
}
