import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

import "./index.scss";

const { Suspense, lazy } = React;

const ProductPage = lazy(() => import("./ProductPage"));
const DetailPage = lazy(() => import("./DetailPage"));

export const routes = [
  {
    path: "/products",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProductPage />
      </Suspense>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <DetailPage />
      </Suspense>
    ),
  },
];

const App = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;