import React, { useContext } from "react";
import { Button } from "flowbite-react";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { GlobalContext } from "../globals/contexts/GlobalContext";

const HeaderComp = () => {
  const { theme, updateTheme } = useContext(GlobalContext);
  console.log(theme);
  return (
    <header className="flex items-center justify-between px-2 h-20 shadow-md md:px-10">
      <h2 className="text-lg md:text-2xl md:font-medium">Blog App</h2>
      <section className="flex items-center gap-4" onClickCapture={updateTheme}>
        {theme === "light" ? (
          <MdLightMode size={25} />
        ) : (
          <MdOutlineLightMode size={25} />
        )}
        <Button color={theme === "dark" ? "blue" : "dark"} size="md">
          Login
        </Button>
      </section>
    </header>
  );
};

export default HeaderComp;
