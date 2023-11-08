import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Loadable from "../../components/Loadable";

const Login = Loadable(lazy(() => import("../../components/LoginCard")));

const loginRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Login />,
  },
];

export default loginRoutes;
