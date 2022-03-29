import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { Meta } from '@storybook/react';
import { SidebarWrapper, PageWrapper, createReactNavLink } from '../src';
import { FiBox, FiActivity, FiAirplay, FiAperture } from "react-icons/fi";

const meta: Meta = {
  title: 'Demo'
};

export default meta;


const Home = () => {
  return <PageWrapper>
    home page
  </PageWrapper>
}

const About = () => {
  return <PageWrapper>
    About page
  </PageWrapper>
}

const SubMenu = () => {
  return <PageWrapper>
    SubMenu page
  </PageWrapper>
}

export const App = () => {
  const menus: (() => JSX.Element)[] = [
    createReactNavLink(NavLink, "Home", "#", <FiBox />, [
      {
        icon: <FiActivity />,
        title: "Submenu1",
        to: "/sub"
      }, {
        icon: <FiAirplay />,
        title: "Submenu1",
        to: "/sub2"
      }
    ]),
    createReactNavLink(NavLink, "About", "/about", <FiAperture />),
  ]

  return <>
    <SidebarWrapper
      logoUrl='https://messmanager.app/img/logo/logo.webp'
      userName='Milon27'
      userImageUrl='https://avatars.githubusercontent.com/u/44096479?v=4'
      navItems={menus}
    >
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/sub' element={<SubMenu />} />
        </Routes>
      </BrowserRouter>
    </SidebarWrapper>
  </>
}