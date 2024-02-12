import React, { createContext, useState } from "react";

export const SideBarContext = createContext(
  {} as {
    navItems: (() => JSX.Element)[];
    small: boolean;
    setSmall: React.Dispatch<React.SetStateAction<boolean>>;
    activeStyle?: "fill" | "outline";
    logoUrl?: string;
    title?: string;
    customHeader?: React.ReactNode;
    customFooter?: React.ReactNode;
    userName?: React.ReactNode;
    userImageUrl?: string;
    disableCollapse?: boolean;
    hideBorder?: boolean;
    mobileHeaderContent?: React.ReactNode;
    onLogoClick?: () => void;
    onProfileImgClick?: () => void;
    onLogOut?: () => void;
  }
);

interface iSidebarWrapper {
  navItems: (() => JSX.Element)[];
  children: React.ReactNode;
  logoUrl?: string;
  customHeader?: React.ReactNode;
  customFooter?: React.ReactNode;
  title?: string;
  userName?: React.ReactNode;
  userImageUrl?: string;
  disableCollapse?: boolean;
  hideBorder?: boolean;
  activeStyle?: "fill" | "outline";
  mobileHeaderContent?: React.ReactNode;
  onLogoClick?: () => void;
  onProfileImgClick?: () => void;
  onLogOut?: () => void;
}

/**
 * @description wrape your react router using this sidebarbar wrapper or wrape all component in _App.tsx in next js application
 */
export default function SidebarWrapper({
  navItems,
  children,
  title = undefined,
  logoUrl = undefined,
  userName = undefined,
  customHeader = undefined,
  customFooter = undefined,
  disableCollapse = false,
  hideBorder = false,
  userImageUrl = undefined,
  activeStyle = "fill",
  mobileHeaderContent = undefined,
  onLogOut = () => {},
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
