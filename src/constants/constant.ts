import { FaHome } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { CiClock2 } from "react-icons/ci";


export const RouteNames = {
  default: "/",
  home: "/home",
};

export const ENDPOINTS = {
  // All API endpoints
};

export const SIDEBARMENUS = [
  { title: "home", navigationTo: "/", icon: FaHome },
  {
    title: "descriptive", children: [
      { title: "bandwidth", navigationTo: "/" },
      { title: "range_finder", navigationTo: "/" },
      { title: "bump_analysis", navigationTo: "/" },
      { title: "promo_banks", navigationTo: "/" },

    ],
    icon: HiDocumentText
  },
  {
    title: "diagnostic", children: [
      { title: "elastic_viewer", navigationTo: "/" },
      { title: "DT_&_WR_View", navigationTo: "/" },
      { title: "profile_pool", navigationTo: "/" },
      { title: "sales_driver_decomposition", navigationTo: "/" },
    ],
    icon: FaHome
  },
  { title: "predictive", navigationTo: "/", icon: HiOutlineRectangleStack },
  { title: "user_tracking", navigationTo: "/", icon: CiClock2 }
]