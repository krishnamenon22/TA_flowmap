import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { RouteNames } from "../../constants/constant";
import Loadable from "../../components/Loadable";

const Home = Loadable(lazy(() => import("./Home")));

const HomeRoutes: RouteObject[] = [
  {
    path: "/home",
    element: <Home />,
  },

];

export default HomeRoutes;
