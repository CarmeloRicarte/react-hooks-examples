import React from "react";
import ReactDOM from "react-dom/client";
import { HooksApp } from "./HooksApp";
import "./index.css";
import { CounterApp } from "./useState/CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    <CounterApp />
  </React.StrictMode>
);
