import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { worker } from "./mocks";

if (process.env.NODE_ENV === "development") worker.start();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
