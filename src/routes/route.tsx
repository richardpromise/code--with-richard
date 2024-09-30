import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Aunthenticated from "../modules/aunthenticated";
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
          element: <Aunthenticated/> ,
        },
        {
          path: "/register",
          element: <Register/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={modules} />;
};

export default Routes;
