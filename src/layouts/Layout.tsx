import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../components/Header/Header'
import SideBar from "../components/sidebar/Sidebar"
import { RiDashboard3Fill } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai"
import { MdOutlineDashboard } from "react-icons/md";
import SideBarIvr from "../pages/sideBar/SideBarIvr";

const menus = [
  { name: "Home", link: "/home", icon: AiOutlineHome, margin: false, isBottom: false },
  { name: "Sample-2", link: "/side", icon: MdOutlineDashboard, margin: false, isBottom: false },
  { name: "Sample-3", link: "/sidebar", icon: RiDashboard3Fill, margin: false, isBottom: false },
];
function Layout() {
  return (
    <section className="flex">
      <SideBarIvr menuItems={menus} />
      <section className="w-[100%] h-screen bg-whiteoverflow-auto">
        <Header title="Flowmap" />
        <div className="flex items-center">
          <Outlet />
        </div>
      </section>
    </section>
  );
}

export default Layout;
