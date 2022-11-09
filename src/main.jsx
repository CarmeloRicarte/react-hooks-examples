import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CallbackHook } from "./memos/CallbackHook";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CallbackHook />
  </React.StrictMode>
);
