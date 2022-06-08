# React Sidebar

compitable with react js and next js.

## Installation Commands

```bash
npm install react-icons @milon27/react-sidebar
```

### How to use

1. import css in index.js/ts or app.jsx or app.tsx.

```ts
import '@milon27/react-sidebar/dist/react-sidebar.css';
```
2. use the component 

> (React Js Project)

```tsx
import { FiBox, FiActivity, FiAirplay, FiAperture } from "react-icons/fi";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SidebarWrapper, PageWrapper, createReactNavLink } from '@milon27/react-sidebar';

const App=()=>{
  const navItems: (() => JSX.Element)[] = [
    createReactNavLink(NavLink, "Options", "#", <FiBox />, [
      {
        icon: <FiList />,
        title: "List",
        to: "/list"
      }, {
        icon: <FiActivity />,
        title: "Create New",
        to: "/create"
      }, {
        icon: <FiAirplay />,
        title: "Edit Now",
        to: "/edit"
      }
    ]),
    createReactNavLink(NavLink, "About", "/about", <FiAperture />),
  ]

  return <>
      <SidebarWrapper
          logoUrl='https://messmanager.app/img/logo/logo.webp'
          userName='Milon27'
          userImageUrl='https://avatars.githubusercontent.com/u/44096479?v=4'
          navItems={navItems}
          onLogOut={() => { }}
          onLogoClick={() => { }}
          onProfileImgClick={() => { }}
          >
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<PageWrapper className="bg-green">
                      home page
                  </PageWrapper>} />

                  <Route path='/list' element={<ListPage />} />
                  <Route path='/create' element={<CreateNewPage />} />
                  <Route path='/edit' element={<EditPage />} />

                  <Route path='/about' element={<PageWrapper>
                      about page
                  </PageWrapper>} />
              </Routes>
          </BrowserRouter>
      </SidebarWrapper>
  </>
}

```

> (Next Js Project)

```tsx

// _App.js file
import '@milon27/react-sidebar/dist/react-sidebar.css'
import { SidebarWrapper, createNextNavLink } from '@milon27/react-sidebar'
import { FiBox, FiAperture } from 'react-icons/fi'
import NextLink from 'next/link'

function MyApp({ Component, pageProps }) {

  const navItems = [
    createNextNavLink(NextLink, "Home", "/", <FiBox />),
    createNextNavLink(NextLink, "Options", "#", <FiBox />, [
      {
        icon: <FiBox />,
        title: "List",
        to: "/list"
      }, {
        icon: <FiBox />,
        title: "Create Now",
        to: "/create"
      },
    ]),
    createNextNavLink(NextLink, "About", "/about", <FiAperture />),
  ]

  return <SidebarWrapper
    logoUrl='https://messmanager.app/img/logo/logo.webp'
    userName='Milon27'
    userImageUrl='https://avatars.githubusercontent.com/u/44096479?v=4'
    navItems={navItems}
    onLogOut={() => { }}
    onLogoClick={() => { }}
    onProfileImgClick={() => { }}
  >
    <Component {...pageProps} />
  </SidebarWrapper>
}

export default MyApp

```

> in other next js page

```jsx
// page/about.js
import { PageWrapper } from '@milon27/react-sidebar'
import React from 'react'

export default function about() {
    return (
        <PageWrapper className="bg-green">
            <h1>about page</h1>
        </PageWrapper>
    )
}

```

> screenshot

![screenshot](desktop1.png)
![screenshot](desktop2.png)
![screenshot](mobile1.png)
![screenshot](mobile2.png)
