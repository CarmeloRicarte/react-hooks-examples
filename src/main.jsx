import React from "react";
import ReactDOM from "react-dom/client";
import { MultipleCustomHooks } from "./examples/MultipleCustomHooks";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    <MultipleCustomHooks />
  </React.StrictMode>
);
