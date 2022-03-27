import React, { createContext, useState } from 'react'
import { iNavItem } from './ReactNavItem';

export const SideBarContext = createContext({} as {
    small: boolean
    setSmall: React.Dispatch<React.SetStateAction<boolean>>
    logoUrl: string
    userName: string
    userImageUrl: string
    projectType: ProjectType
    navItems: Array<iNavItem>
});

export enum ProjectType {
    NEXTJS,
    REACTJS
}

interface iSidebarWrapper {
    logoUrl: string
    userName: string
    userImageUrl: string
    projectType: ProjectType
    navItems: Array<iNavItem>
    children: React.ReactNode
}

/**
 * @description wrape your react router using this sidebarbar wrapper or wrape all component in _App.tsx in next js application
 */
export default function SidebarWrapper({ logoUrl, userName, userImageUrl, children, projectType, navItems }: iSidebarWrapper) {
    const [small, setSmall] = useState(false);
    return (
        <SideBarContext.Provider value={{ small, setSmall, logoUrl, userName, userImageUrl, projectType, navItems }}>
            {children}
        </SideBarContext.Provider>
    )
}
