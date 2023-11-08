import React, { useState } from 'react'
import { FaLeftLong } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { SidebarProps } from '../../types/SideBarIvrTypes';
import { setsideBarToggle } from '../../store/slice/sidebarSlice';
import { useAppSelector, useAppDispatch } from '../../store';


function SideBarIvr({ menuItems }: SidebarProps) {

  const dispatch = useAppDispatch();
  // const [open, setOpen] = useState<boolean>(initialOpenState);
  const { sideBarToggle } = useAppSelector((d) => d.sidebarSlice);
  const navigate = useNavigate()
  const location = useLocation()


  const routechange = () => {
    const path = '/platform'
    navigate(path)
  }

  const toggleSidebar = () => {
    dispatch(setsideBarToggle(!sideBarToggle)); // Dispatch the action to toggle sidebar
  };
  console.log(!sideBarToggle, "sideBarToggle-SideBar")

  return (
    <div data-testid="sidebarDiv"
      className={`bg-[#020C17] min-h-screen ${sideBarToggle ? "w-52" : "w-12"
        } duration-600 transition-in-out text-gray-100 `}
    >
      <div className={`py-3 flex justify-end items-end align-end  mr-3 ${sideBarToggle && "mr-[1rem]"}`}>
        <HiMenuAlt3
          data-testid="hamburgerIcon"
          size={28}
          className="cursor-pointer"
          onClick={toggleSidebar}
        />
        {/* <div onClick={() => setOpen(!open)} className={` text-lg cursor-pointer ${open ? "-ml-[3.6rem]" : "mr-[1rem] ml-4"}`}>X</div> */}
      </div>
      <div className="mt-4 flex flex-col gap-4 relative h-[90vh]">
        {menuItems?.map((menu, i) => (
          menu?.link === "/chatbot" ?
            <a key={menu?.name} className={` ${menu?.margin && "mt-5"
              } group flex items-center text-sm gap-3.5  font-poppins p-2 ${menu?.link === location.pathname ? "bg-[#FFFFFF0D] " : "bg-black "} ${menu?.isBottom ? "mt-[auto]" : ""}`} rel="noreferrer" href="https://nlpdevreact.z13.web.core.windows.net/" target="_blank">
              <div className="ml-1 "><img src={menu?.icon} className="max-w-none h-5" alt="Insights Pro" /></div>
              <h2
                className={`whitespace-pre ${menu?.link === location.pathname ? "text-[#F7901D] font-medium" : "text-white font-regular"}   ${!sideBarToggle && "opacity-0  overflow-hidden"
                  }`}
              >
                {menu?.name}
              </h2>
            </a>
            :
            <Link
              to={menu?.link === "chatbot" ? "" : menu?.link}
              key={`${menu?.name}-${i + 1}`}
              className={` ${menu?.margin && "mt-5"
                } group flex items-center text-sm gap-3.5  font-poppins p-2 ${menu?.link === location.pathname ? "bg-[#FFFFFF0D] " : "bg-black "} ${menu?.isBottom ? "mt-[auto]" : ""}`}
            >
              <div className="ml-1 ">{React.createElement(menu?.icon, { size: "20", color: menu?.link === location.pathname ? "#F7901D" : "white" })}</div>
              <h2

                className={`whitespace-pre ${menu?.link === location.pathname ? "text-[#F7901D] font-medium" : "text-white font-regular"}   ${!sideBarToggle && "opacity-0  overflow-hidden"
                  }`}
              >
                {menu?.name}
              </h2>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default SideBarIvr