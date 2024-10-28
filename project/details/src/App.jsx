import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "products/Header";

const App = () => (
  <>
    <Header />

    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div className="text-red-500">Name: details</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
  </>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
