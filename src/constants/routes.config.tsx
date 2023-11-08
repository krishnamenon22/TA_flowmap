import React from "react";
import { RouteObject, Navigate } from "react-router-dom";
import loginRoutes from "../pages/login/login.routes";
import LoginLayout from "../layouts/LoginLayout";
import HomeRoutes from "../pages/home/home.routes";
import Layout from "../layouts/Layout";

const routes: RouteObject[] = [
  {
    element: <LoginLayout />,
    children: [...loginRoutes]
  },
  {
    path: "*",
    element: <Navigate to="/" />
  },
  {
    element: <Layout />,
    children: [...HomeRoutes]
  }
];

export const loginRts: RouteObject[] = [
  {
    element: <LoginLayout />,
    children: [...loginRoutes]
  }
  // {
  //   path: '*',
  //   element: <LoginCheck />,
  // }
];

export default routes;
