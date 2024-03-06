import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
import { HelmetProvider } from "react-helmet-async";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <HelmetProvider>
      <GlobalStyles />
      <App />
    </HelmetProvider>
  </>,
);
