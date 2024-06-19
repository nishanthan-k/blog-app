import React from "react";
import ReactDOM from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import App from "./App.jsx";
import "./index.css";
import GlobalContextProvider from "./globals/contexts/GlobalContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <section className="w-screen h-screen text-textColor bg-bgColor">
          <App className="w-full h-full" />
        </section>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
