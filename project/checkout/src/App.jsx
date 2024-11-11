import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

const { Suspense, lazy } = React;

const CartPage = lazy(() => import("./CartPage"));
const CheckoutPage = lazy(() => import("./CheckoutPage"));
const CheckoutSuccessPage = lazy(() => import("./CheckoutSuccessPage"));

export const routes = [
  {
    path: "/cart",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <CartPage />
      </Suspense>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <CheckoutPage />
      </Suspense>
    ),
  },
  {
    path: "/success",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <CheckoutSuccessPage />
      </Suspense>
    ),
  },
];

const App = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
