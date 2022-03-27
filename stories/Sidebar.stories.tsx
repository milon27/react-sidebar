import React from 'react';
import { FiHome } from "react-icons/fi";
import { BiAddToQueue } from "react-icons/bi";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Meta } from '@storybook/react';
import { SidebarWrapper, ProjectType, PageWrapper, iNavItem } from '../src';

const meta: Meta = {
  title: 'Demo'
};

export default meta;

export const App = () => {
  const navItems: Array<iNavItem> = [
    {
      to: "/",
      title: "Home",
      icon: <FiHome />
    },
    {
      to: "/about",
      title: "About",
      icon: <BiAddToQueue />
    }
  ]

  return <>
    <SidebarWrapper
      logoUrl='https://messmanager.app/img/logo/logo.webp'
      userName='Milon27'
      userImageUrl='https://avatars.githubusercontent.com/u/44096479?v=4'
      projectType={ProjectType.REACTJS}
      navItems={navItems}
    >
      <BrowserRouter>
        <Routes>

          <Route path='*' element={<PageWrapper>
            home page
          </PageWrapper>} />

          <Route path='/about' element={<PageWrapper>
            about page
          </PageWrapper>} />

        </Routes>
      </BrowserRouter>
    </SidebarWrapper>
  </>
}