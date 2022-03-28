import React, { useContext } from "react";
import { SideBarContext } from "./SidebarWrapper";

export const createReactNavLink = (MainNavLink: any, title: string, to: string, icon: React.ReactNode) => {
    return () => {
        const { small } = useContext(SideBarContext);
        return <>
            <MainNavLink
                to={to}
                className={(navinfo: any) => `my-2 p-2 rounded hover:bg-slate-200 flex gap-2 items-center ${navinfo.isActive === true ? "bg-slate-200" : ""}`}
            >
                {icon}<span className={`${small === true ? "hidden" : "block"} `}>{title}</span>
            </MainNavLink>
        </>
    }
}


