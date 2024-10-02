/** @format */

import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Authenticated from "../layouts/authenticated";
import Unauthenticted from "../layouts/unauthenticted";
import Dashboard from "../modules/home";
import Users from "../modules/users";
import Tenants from "../modules/tenant";
import Register from "../modules/register";

interface MainLayoutProps {
  children?: any;
}
function MainLayout({ children }: MainLayoutProps) {
  return children ? (
    <div className="w-full h-screen">{children}</div>
  ) : (
    <Outlet />
  );
}

const Routes = () => {
  const modules = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Authenticated />,
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
            {
              path: "/tentant",
              element: <Tenants />,
            },
            {
              path: "/users",
              element: <Users />,
            },
          ],
        },
      ],
    },
    {
      path: "/auth",
      element: <Unauthenticted />,
      children: [
        {
          index: true,
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={modules} />;
};

export default Routes;
