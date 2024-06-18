import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  const updateTheme = () => {
    const htmlElement = document.querySelector("html");
    const themeAttr = htmlElement.getAttribute("theme");
    const newTheme = themeAttr === "dark" ? "light" : "dark";
    setTheme(newTheme);
    htmlElement.setAttribute("theme", newTheme);
  };

  useEffect(() => updateTheme(), []);

  return (
    <GlobalContext.Provider value={{ theme, updateTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
