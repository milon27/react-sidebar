import React, { createContext, useState } from "react";

export const SideBarContext = createContext(
  {} as {
    small: boolean;
    activeStyle?: "fill" | "outline";
    setSmall: React.Dispatch<React.SetStateAction<boolean>>;
    logoUrl?: string;
    title?: string;
    customHeader?: React.ReactNode;
    customFooter?: React.ReactNode;
    userName: React.ReactNode;
    userImageUrl: string;
    disableCollapse?: boolean;
    hideBorder?: boolean;
    mobileHeaderContent?: React.ReactNode;
    navItems: (() => JSX.Element)[];
    onLogoClick?: () => void;
    onProfileImgClick?: () => void;
    onLogOut: () => void;
  }
);

interface iSidebarWrapper {
  logoUrl?: string;
  userName: React.ReactNode;
  customHeader?: React.ReactNode;
  customFooter?: React.ReactNode;
  title?: string;
  userImageUrl: string;
  disableCollapse?: boolean;
  hideBorder?: boolean;
  navItems: (() => JSX.Element)[];
  children: React.ReactNode;
  activeStyle?: "fill" | "outline";
  mobileHeaderContent?: React.ReactNode;
  onLogoClick?: () => void;
  onProfileImgClick?: () => void;
  onLogOut: () => void;
}

/**
 * @description wrape your react router using this sidebarbar wrapper or wrape all component in _App.tsx in next js application
 */
export default function SidebarWrapper({
  title = undefined,
  logoUrl = undefined,
  userName,
  customHeader = undefined,
  customFooter = undefined,
  disableCollapse = false,
  hideBorder = false,
  userImageUrl,
  activeStyle = "fill",
  children,
  mobileHeaderContent,
  navItems,
  onLogOut,
  onProfileImgClick = () => {},
  onLogoClick = () => {},
}: iSidebarWrapper) {
  const [small, setSmall] = useState(false);

  return (
    <SideBarContext.Provider
      value={{
        title,
        small,
        setSmall,
        logoUrl,
        userName,
        customHeader,
        userImageUrl,
        activeStyle,
        mobileHeaderContent,
        navItems,
        onLogOut,
        onProfileImgClick,
        onLogoClick,
        disableCollapse,
        hideBorder,
        customFooter,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
}
