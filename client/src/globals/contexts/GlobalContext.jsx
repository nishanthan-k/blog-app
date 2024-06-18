import { createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  const updateTheme = () => {
    const html = document.getAttribute("html");
    const currTheme = html.getAttribute("theme");
    setTheme(currTheme === "dark" ? "light" : "dark");
  };

  return (
    <GlobalContext.Provider value={{ theme, updateTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
