import { isEmpty } from "lodash";
import React from "react";
import MenuItem from "./MenuItem";
import { FiLogOut } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { MenuItems, userDetails } from "../../types/sideBarTypes";


export type SideBarInnerInterface = {
  sideBarClass?: string;
  setToggleBar?: any;
  menuItems: MenuItems[];
  logo: string;
  userDetails?: userDetails;
  toggleValue?: boolean;
};
function SideBarInner({ sideBarClass, setToggleBar, menuItems, logo, userDetails, toggleValue }: SideBarInnerInterface) {
  const toggleSideBar = () => {
    setToggleBar();
  }
  return (
    <aside className={`flex flex-col justify-between ${sideBarClass} sticky left-0 top-0 overflow-hidden`}>
      <div className="flex justify-start px-3">
        <button className={`mr-20 ${toggleValue ? "mt-3" : ""}`} type="button" onClick={toggleSideBar}>
          <FaBars />
        </button>
        {!toggleValue ?
          <button className="flex justify-center" type="button">
            <img className="text-center max-h-[40px] pt-2" src={logo} alt="logo" />
          </button>
          : null}
      </div>
      <section className="border-t-2 border-[#cf4851] max-h-[500px] overflow-auto hide-scroll">
        {
          !isEmpty(menuItems) ?
            menuItems?.map((mi: any) =>
              <MenuItem menu={mi} toggleValues={toggleValue} />
            )
            : null
        }
      </section>
      <section>
        {
          !isEmpty(userDetails) && !toggleValue ?
            <div className="flex items-center justify-between py-3 border-t-2 border-[#cf4851] px-3">
              <div className="flex items-center justify-between">
                <img className="text-center h-[20px] mr-5" src={userDetails.profileImage} alt="User Profile" />
                <p>{userDetails.userName}</p>
              </div>
              <button onClick={toggleSideBar} type="button">
                <FiLogOut />
              </button>
            </div>
            : null
        }
      </section>
    </aside>
  );
}
SideBarInner.defaultProps = {
  sideBarClass: '',
  setToggleBar: '',
  userDetails: {},
  toggleValue: false
};
export default SideBarInner;
