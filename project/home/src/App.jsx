import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

const { Suspense, lazy } = React;

const HomePage = lazy(() => import("./HomePage"));

export const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    ),
  },
];

const App = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
