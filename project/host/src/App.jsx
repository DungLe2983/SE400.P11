import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import "./index.scss";
import 'remixicon/fonts/remixicon.css';

const App = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    Promise.all([import("home/App")]).then(([home]) => {
      setRoutes([...home.routes]);
    });
  }, []);

  return routes.length ? (
    <RouterProvider router={createBrowserRouter(routes)} />
  ) : (
    <div>Loading...</div>
  );
};

export default App;
