import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./components/App";
import { createRoot } from "react-dom/client";
import { WithTranslate } from "$lib/translations/withTranslate";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        <WithTranslate>
          <App />
        </WithTranslate>
      </Router>
    </React.StrictMode>
  );
}
