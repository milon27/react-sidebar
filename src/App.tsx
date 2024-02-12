// import {
//   PageWrapper,
//   SidebarWrapper,
//   createReactNavLink,
// } from "./components/sidebar/";
import {
  FiActivity,
  FiAirplay,
  FiAperture,
  FiBarChart,
  FiBox,
  FiList,
} from "react-icons/fi";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { PageWrapper, SidebarWrapper, createReactNavLink } from ".";

export default function App() {
  const navItems: (() => JSX.Element)[] = [
    createReactNavLink(NavLink, "Home", "/", <FiBarChart />),
    createReactNavLink(NavLink, "Options", "#", <FiBox />, [
      {
        icon: <FiList />,
        title: "List",
        to: "/list",
      },
      {
        icon: <FiActivity />,
        title: "Create New",
        to: "/create",
      },
      {
        icon: <FiAirplay />,
        title: "Edit Now",
        to: "/edit",
      },
    ]),
    createReactNavLink(NavLink, "About", "/about", <FiAperture />),
  ];

  return (
    <>
      <SidebarWrapper
        // logoUrl="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_chrome-512.png"
        // logoUrl="https://raw.githubusercontent.com/npm/logos/master/npm%20logo/npm-logo-red.png"
        title="NPM_LOGO"
        disableCollapse={false}
        hideBorder={false}
        // customHeader={
        //   <>{/* if custom header provided then logo url won't work */}</>
        // }
        // customFooter={
        //   <div className="border rs-w-full rs-bg-black rs-rounded-md rs-flex rs-text-white rs-p-3 rs-justify-between rs-items-center">
        //     <button>Logout</button>
        //     <FiAirplay />
        //   </div>
        // }
        // mobileHeaderContent={
        //   <div className="border rs-w-full rs-bg-black rs-rounded-md rs-flex rs-text-white rs-p-3 rs-justify-between rs-items-center">
        //     <button>Logout</button>
        //     <FiAirplay />
        //   </div>
        // }
        userName="Milon27"
        userImageUrl="https://avatars.githubusercontent.com/u/44096479?v=4"
        navItems={navItems}
        activeStyle="outline" //fill , outline
        onLogOut={() => {}}
        onLogoClick={() => {}}
        onProfileImgClick={() => {}}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PageWrapper className="">
                  <p className="rs-bg-main/15 rs-p-5">home page</p>
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={<PageWrapper>about page</PageWrapper>}
            />
          </Routes>
        </BrowserRouter>
      </SidebarWrapper>
    </>
  );
}
