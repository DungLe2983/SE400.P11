import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
