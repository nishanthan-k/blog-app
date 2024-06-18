import { useState } from "react";
    
const ThemeHandler = () => {
  const [theme, setTheme]   = useState();

  const updateTheme = () => {
    const html = document.getAttribute("html");
    const currTheme = html.getAttribute("theme");
    setTheme(currTheme === "dark" ? "light" : "dark");
  }

  return (
    <div>
      
    </div>
  );
};

export default ThemeHandler;
