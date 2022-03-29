import React from 'react';
import { FiHome } from "react-icons/fi";
import { BiAddToQueue } from "react-icons/bi";
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { Meta } from '@storybook/react';
import { SidebarWrapper, PageWrapper, createReactNavLink } from '../src';

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

export const App = () => {
  const menus: (() => JSX.Element)[] = [
    createReactNavLink(NavLink, "Home", "/", <FiHome />),
    createReactNavLink(NavLink, "About", "/about", <BiAddToQueue />),
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

        </Routes>
      </BrowserRouter>
    </SidebarWrapper>
  </>
}