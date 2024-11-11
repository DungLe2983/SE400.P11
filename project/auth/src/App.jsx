import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

const { Suspense, lazy } = React;

const LoginPage = lazy(() => import("./LoginPage"));
const RegisterPage = lazy(() => import("./RegisterPage"));
const ProfilePage = lazy(() => import("./ProfilePage"));

export const routes = [
  {
    path: "/auth/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/auth/register",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <RegisterPage />
      </Suspense>
    ),
  },
  {
    path: "/auth/profile",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProfilePage />
      </Suspense>
    ),
  },
];

const App = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
