import "./css/tailwind.scss";
import "zmp-ui/zaui.css";

import React from "react";
import { createRoot } from "react-dom/client";

import appConfig from "../app-config.json";
if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

// Mount the app
import App from "@components/app";
const root = createRoot(document.getElementById("app")!);

root.render(React.createElement(App));
