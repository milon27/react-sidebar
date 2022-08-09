import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { Meta } from '@storybook/react';
import { SidebarWrapper, PageWrapper, createReactNavLink } from '../src';
import { FiBox, FiActivity, FiAirplay, FiAperture, FiBookOpen, FiCast, FiClipboard, FiCodepen } from "react-icons/fi";

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
    <div>
      About page Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam porro, soluta eaque hic, quaerat, natus sunt unde dicta eius quos vel? Consequatur veritatis, quaerat molestiae quidem beatae dolores commodi! Eius. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque natus omnis illo aperiam deserunt magni aspernatur, autem error eius mollitia, amet ex inventore explicabo, placeat esse voluptates asperiores libero dolore?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum magnam in esse eveniet asperiores quia atque eos reprehenderit quo! Est qui labore error explicabo, aliquid quas ratione. Tenetur, at eligendi.lor Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam adipisci voluptates dolore nesciunt, laboriosam ipsa provident blanditiis officia, maiores non modi, quo totam aperiam explicabo unde alias eius accusantium quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est inventore illo voluptates rerum aliquid a ullam suscipit adipisci nulla dicta architecto nesciunt qui aspernatur tempora, sit culpa doloribus! Eaque?
    </div>
  </PageWrapper>
}

const List = () => {
  return <PageWrapper>
    list page
  </PageWrapper>
}

const SubMenu = () => {
  return <PageWrapper>
    SubMenu page
  </PageWrapper>
}

const SubMenu2 = () => {
  return <PageWrapper className='rs-bg-gray-100'>
    SubMenu Sub Menu2
  </PageWrapper>
}

export const App = () => {
  const menus: (() => JSX.Element)[] = [
    createReactNavLink(NavLink, "About", "/about", <FiCodepen />),
    createReactNavLink(NavLink, "Options", "/list", <FiBox />, [
      {
        icon: <FiActivity />,
        title: "Create New",
        to: "/list/create"
      }, {
        icon: <FiAirplay />,
        title: "Edit Now",
        to: "/list/edit"
      }
    ]),
    createReactNavLink(NavLink, "Side For", "/about1", <FiBookOpen />),
    createReactNavLink(NavLink, "Products", "/about2", <FiClipboard />),
    createReactNavLink(NavLink, "Orders", "/about3", <FiAperture />),
    createReactNavLink(NavLink, "Orders", "/about3", <FiAperture />),
    createReactNavLink(NavLink, "Orders", "/about3", <FiAperture />),
    createReactNavLink(NavLink, "Orders", "/about3", <FiAperture />),
    createReactNavLink(NavLink, "Orders", "/about3", <FiAperture />),
    createReactNavLink(NavLink, "Orders", "/about3", <FiAperture />),
    createReactNavLink(NavLink, "Orders", "/about3", <FiAperture />),
    createReactNavLink(NavLink, "Orders", "/about3", <FiAperture />),
    createReactNavLink(NavLink, "Orders", "/about3", <FiAperture />),
    createReactNavLink(NavLink, "Orders", "/about3", <FiAperture />),
    createReactNavLink(NavLink, "Orders", "/about3", <FiAperture />),
    createReactNavLink(NavLink, "Orders", "/about3", <FiAperture />),
    createReactNavLink(NavLink, "Orders", "/about3", <FiAperture />),
    createReactNavLink(NavLink, "Orders", "/about3", <FiAperture />),
    createReactNavLink(NavLink, "Orders", "/about3", <FiAperture />),
    createReactNavLink(NavLink, "Orders", "/about3", <FiAperture />),
    createReactNavLink(NavLink, "Orders", "/about3", <FiAperture />),
    createReactNavLink(NavLink, "Orders Last", "/about4", <FiCast />),
  ]

  return <>
    <SidebarWrapper
      title='App'
      logoUrl='https://messmanager.app/img/logo/logo.webp'
      userName={<p className='rs-text-center'>Milon <br /><small>admin</small></p>}
      userImageUrl='https://avatars.githubusercontent.com/u/44096479?v=4'
      navItems={menus}
      activeStyle="outline"
      mobileHeaderContent={<>
        <div className='rs-bg-red-500 rs-w-9 rs-h-9 rs-cursor-pointer rs-rounded-full' />
        <div className='rs-bg-red-500 rs-w-9 rs-h-9 rs-cursor-pointer rs-rounded-full' />
      </>}
      onLogOut={() => { }}
      onLogoClick={() => { }}
      onProfileImgClick={() => { }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/about' element={<About />} />

          <Route path='/list' element={<List />} />
          <Route path='/list/create' element={<SubMenu />} />
          <Route path='/list/edit' element={<SubMenu2 />} />

        </Routes>
      </BrowserRouter>
    </SidebarWrapper>
  </>
}