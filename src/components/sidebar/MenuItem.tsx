import React from "react";
import { Outlet } from "react-router-dom";
import { isEmpty } from "lodash";
import useToggle from "../../hooks/useToggle"
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import * as MaterialDesign from "react-icons/md"
import { MenuItems } from "../../types/sideBarTypes";

export type MenuItemInterface = {
  menu: MenuItems;
  toggleValues?: boolean;
};
function MenuItem({ menu, toggleValues }: MenuItemInterface) {
  const [value, toggleValue] = useToggle(false);

  const navigateToPage = () => {
    if (!isEmpty(menu.children)) {
      toggleValue(!value);
    }
  }
  const Icon: any = menu?.icon

  return (
    <div className="border-b-2 border-[#cf4851]">
      <button type="button" className="flex justify-between items-center py-3 w-full px-[12px] delay-100 hover:pl-[8px] hover:bg-[#c62f36] hover:border-l-[4px]"
        onClick={navigateToPage}>
        <p className="capitalize flex items-center text-white"><span className="pr-5"><Icon /></span> {toggleValues ? " " : menu.title.replaceAll("_", " ")}</p>
        {!toggleValues ?
          !isEmpty(menu.children) ?
            value ?
              <IoIosArrowDown />
              : <IoIosArrowForward />
            : null : null}
      </button>
      {
        value ?
          <div className="flex flex-col items-start">
            {
              !isEmpty(menu.children) ?
                menu.children?.map((cm: any) =>
                  <button type="button" className="w-full text-left py-3 px-[12px] pl-[50px] delay-100 hover:pl-[46px] hover:bg-[#c62f36] hover:border-l-[4px]">
                    <p className="capitalize">{cm.title.replaceAll("_", " ")}</p>
                  </button>
                )
                : null
            }
          </div>
          : null
      }
    </div>

  );
}

MenuItem.defaultProps = {
  toggleValues: false
};

export default MenuItem;
