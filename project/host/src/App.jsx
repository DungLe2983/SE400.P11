import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    Promise.all([
      import("home/App"),
      import("product/App"),
      import("checkout/App"),
      import("auth/App"),
    ]).then(([home, product, checkout, auth]) => {
      setRoutes([
        ...home.routes,
        ...product.routes,
        ...checkout.routes,
        ...auth.routes,
      ]);
    });
  }, []);

  return routes.length ? (
    <RouterProvider router={createBrowserRouter(routes)} />
  ) : (
    <div>Loading...</div>
  );
};

export default App;
