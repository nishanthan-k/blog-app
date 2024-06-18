import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalContextProvider from "./globals/contexts/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <section className="w-screen h-screen text-textColor bg-bgColor">
        <App />
      </section>
    </GlobalContextProvider>
  </React.StrictMode>
);
