import { useContext } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { SideBarContext } from "./SidebarWrapper";

export default function Footer() {
  const {
    customFooter,
    small,
    setSmall,
    userName,
    userImageUrl,
    onLogOut,
    onProfileImgClick,
  } = useContext(SideBarContext);

  return (
    <div
      className={`rs_user rs-w-full ${
        small === true ? "sm:rs-w-[65px]" : "sm:rs-w-[240px]"
      } rs-overflow-x-hidden rs-fixed rs-bottom-0 rs-left-0 rs-px-4 rs-py-3 rs-bg-white`}
    >
      {customFooter ? (
        customFooter
      ) : (
        <div className="rs-flex rs-gap-2 rs-justify-between rs-items-center">
          {userImageUrl && (
            <div
              className={`rs-w-8 rs-h-8 rs-cursor-pointer`}
              onClick={onProfileImgClick}
            >
              <img
                src={userImageUrl}
                className="rs-rounded-full rs-shadow rs-w-8 rs-h-8 rs-overflow-hidden rs-object-cover"
                alt=""
              />
            </div>
          )}

          {userName && (
            <div
              className={`${
                small === true ? "rs-hidden" : "rs-block"
              } rs-whitespace-pre-line rs-leading-none`}
            >
              {userName}
            </div>
          )}

          <AiOutlineLogout
            onClick={onLogOut}
            className={`${
              small === true ? "rs-hidden" : "rs-block"
            } rs-text-3xl rs-rounded rs-bg-main/10 rs-text-main rs-p-2 rs-cursor-pointer`}
          />
        </div>
      )}

      {small === true && (
        <IoIosArrowForward
          onClick={() => {
            setSmall((old) => !old);
          }}
          className="rs-my-2 rs-text-3xl rs-rounded rs-bg-main/10 rs-text-main rs-p-2 rs-cursor-pointer"
        />
      )}
    </div>
  );
}
