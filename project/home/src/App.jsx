// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./HomePage";

// import "./index.scss";

// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//     </Routes>
//   </Router>
// );

// export default App;

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";

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
