import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FormWithCustomHook } from "./useEffect/FormWithCustomHook";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    <FormWithCustomHook />
  </React.StrictMode>
);
