import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

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
          element: <div>authenticted</div>,
        },
        {
          path: "/auth",
          element: <div>unauthenticted</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={modules} />;
};

export default Routes;
