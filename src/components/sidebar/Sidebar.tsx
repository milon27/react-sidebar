import { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Footer from "./Footer";
import Navs from "./Navs";
import { SideBarContext } from "./SidebarWrapper";

export default function Sidebar() {
  const {
    title,
    small,
    setSmall,
    logoUrl,
    onLogoClick,
    customHeader,
    disableCollapse,
    hideBorder,
  } = useContext(SideBarContext);
  return (
    // w-[65px] md:w-[240px]
    <div
      className={`rs_main_sidebar rs-text-gray rs_scrollbar ${
        small === true ? "sm:rs-w-[65px]" : "sm:rs-w-[240px]"
      } rs-transition-all rs-hidden sm:rs-block rs-bg-white rs-shadow rs-p-4 rs-fixed rs-overflow-x-hidden rs-h-full rs-top-0 rs-left-0`}
    >
      {customHeader ? (
        customHeader
      ) : (
        <div className="custom-header rs-flex rs-gap-2 rs-items-center">
          {logoUrl && (
            <img
              src={logoUrl}
              className="rs-max-h-10 rs-cursor-pointer"
              alt=""
              onClick={onLogoClick}
            />
          )}
          {title && !small && (
            <p className="rs-text-main rs-font-bold rs-text-2xl rs-hidden md:rs-block">
              {title}
            </p>
          )}
          {!disableCollapse && (
            <div
              className={`rs-w-full rs-justify-end ${
                small === true ? "rs-hidden" : "rs-flex"
              }  `}
            >
              <IoIosArrowBack
                onClick={() => {
                  setSmall((old) => !old);
                }}
                className="rs-text-3xl rs-rounded rs-bg-main/10 rs-text-main rs-p-2 rs-cursor-pointer"
              />
            </div>
          )}
        </div>
      )}
      {hideBorder ? (
        <div className="rs-mt-2" />
      ) : (
        <hr className="rs-mt-2 rs-text-main/20" />
      )}

      <div className="rs-flex rs-flex-col">
        <Navs />
        <Footer />
      </div>
    </div>
  );
}
