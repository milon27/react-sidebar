import { useContext, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import Footer from "./Footer";
import LeftOffCanvas from "./LeftOffCanvas";
import Navs from "./Navs";
import { SideBarContext } from "./SidebarWrapper";

export default function MobileSidebar() {
  const [show, setShow] = useState(false);
  const {
    title,
    logoUrl,
    userImageUrl,
    onProfileImgClick,
    onLogoClick,
    mobileHeaderContent,
  } = useContext(SideBarContext);

  if (mobileHeaderContent) {
    return (
      <>
        <div className="rs-flex sm:rs-hidden rs-px-5 rs-py-2  rs-shadow">
          <div className="rs-flex rs-gap-2 rs-justify-start rs-items-center rs-pr-4">
            <CgMenuLeft
              className="rs-text-3xl rs-cursor-pointer"
              onClick={() => setShow(true)}
            />
          </div>
          <div className="rs-flex rs-flex-1 rs-border justify-end items-center rs-gap-2">
            {mobileHeaderContent}
          </div>
        </div>
        <LeftOffCanvas title={title || "Options"} show={show} setShow={setShow}>
          <Navs />
          <div className="rs-py-5"></div>
          <Footer />
        </LeftOffCanvas>
      </>
    );
  }

  return (
    <>
      <div className="rs-flex sm:rs-hidden rs-px-5 rs-py-2  rs-shadow">
        <div className="rs-flex rs-w-full rs-gap-2 rs-justify-start rs-items-center">
          <CgMenuLeft
            className="rs-text-3xl rs-cursor-pointer rs-text-gray"
            onClick={() => setShow(true)}
          />
          {logoUrl && (
            <img
              src={logoUrl}
              className="rs-w-9 rs-h-9 rs-max-w-full rs-rounded-full rs-cursor-pointer"
              alt=""
              onClick={onLogoClick}
            />
          )}
          {title && (
            <h5 className="rs-text-main rs-mb-0 rs-leading-none rs-font-semibold rs-uppercase rs-text-2xl">
              {title}
            </h5>
          )}
        </div>
        <div className="rs-flex justify-end items-center rs-gap-2">
          <div
            className="rs-w-9 rs-h-9 rs-cursor-pointer rs-flex rs-items-center"
            onClick={onProfileImgClick}
          >
            <img
              src={userImageUrl}
              className="rs-rounded-full rs-shadow rs-w-8 rs-h-8 rs-overflow-hidden rs-object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      <LeftOffCanvas title={title || "Options"} show={show} setShow={setShow}>
        <Navs />
        <div className="rs-py-5"></div>
        <Footer />
      </LeftOffCanvas>
    </>
  );
}
