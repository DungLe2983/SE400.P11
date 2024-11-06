import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "remixicon/fonts/remixicon.css";

import "./index.scss";

const { Suspense, lazy } = React;

const CartPage = lazy(() => import("./CartPage"));

export const routes = [
  {
    path: "/cart",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <CartPage />
      </Suspense>
    ),
  },
];

const App = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
