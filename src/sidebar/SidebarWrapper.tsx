import React, { createContext, useState } from 'react'

export const SideBarContext = createContext({} as {
    small: boolean
    setSmall: React.Dispatch<React.SetStateAction<boolean>>
    logoUrl: string
    userName: string
    userImageUrl: string
    navItems: (() => JSX.Element)[]
    onLogOut: () => void
});

interface iSidebarWrapper {
    logoUrl: string
    userName: string
    userImageUrl: string
    navItems: (() => JSX.Element)[]
    children: React.ReactNode
    onLogOut: () => void
}

/**
 * @description wrape your react router using this sidebarbar wrapper or wrape all component in _App.tsx in next js application
 */
export default function SidebarWrapper({ logoUrl, userName, userImageUrl, children, navItems, onLogOut }: iSidebarWrapper) {
    const [small, setSmall] = useState(false);

    return (
        <SideBarContext.Provider value={{ small, setSmall, logoUrl, userName, userImageUrl, navItems, onLogOut }}>
            {children}
        </SideBarContext.Provider>
    )
}
