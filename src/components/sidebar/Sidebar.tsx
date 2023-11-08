import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideBarInner from "./SideBarInner";
import { SIDEBARMENUS } from "../../constants/constant";
import { cloneDeep } from "lodash";
import logo from "../../stories/assets/logo.png"
import userPic from "../../stories/assets/default_avatar.png"
import { useAppDispatch, useAppSelector } from "../../store";
import useToggle from "../../hooks/useToggle"
import { setsideBarToggle } from "../../store/slice/sidebarSlice";

function SideBar() {
  const menuItems: any = cloneDeep(SIDEBARMENUS);
  const [value, toggleValue] = useToggle(false);
  const dispatch = useAppDispatch();
  const { sideBarToggle } = useAppSelector((d) => d.sidebarSlice);
  const user = {
    profileImage: userPic,
    userName: "Andrew, John"
  }
  const setToggleBar = (): void => {
    toggleValue(!value);
  }
  useEffect(() => {
    dispatch(setsideBarToggle(value));
  }, [value])
  return (
    <div data-testid="toggle-button">
      <SideBarInner
        menuItems={menuItems}
        logo={logo}
        sideBarClass={`bg-[#bf2032] text-white h-screen  ${sideBarToggle ? "w-[50px]" : "w-[300px]"}`}
        userDetails={user}
        setToggleBar={setToggleBar}
        toggleValue={sideBarToggle}
      />
    </div>
  );
}

export default SideBar;
