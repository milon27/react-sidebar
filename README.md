# React Sidebar

compitable with react js and next js.

## Installation Commands

```bash
npm install @milon27/react-sidebar
```

### How to use

1. import css in index.js/ts or app.jsx or app.tsx.

```ts
import '@milon27/react-sidebar/dist/react-sidebar.css';
```
2. use the component 

> (React Js Project)

```tsx
import { FiHome } from "react-icons/fi";
import { BiAddToQueue } from "react-icons/bi";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SidebarWrapper, PageWrapper, createReactNavLink } from '@milon27/react-sidebar';

const App=()=>{
  const navItems: (() => JSX.Element)[] = [
    createReactNavLink(NavLink, "Home", "/", <FiHome />),
    createReactNavLink(NavLink, "About", "/about", <BiAddToQueue />),
  ]

    return <>
        <SidebarWrapper
            logoUrl='https://messmanager.app/img/logo/logo.webp'
            userName='Milon27'
            userImageUrl='https://avatars.githubusercontent.com/u/44096479?v=4'
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

```

> (Next Js Project)

```tsx

// _App.txt file
// documentation coming soon

```

> screenshot

![screenshot](desktop1.png)
![screenshot](desktop2.png)
![screenshot](mobile1.png)
![screenshot](mobile2.png)
