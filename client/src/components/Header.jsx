import React, { useContext, useState } from "react";
import { Button } from "flowbite-react";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { GlobalContext } from "../globals/contexts/GlobalContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { theme, updateTheme } = useContext(GlobalContext);

  return (
    <header className="flex items-center justify-between px-2 h-20 shadow-md md:px-10">
      <h2 className="text-lg md:text-2xl md:font-medium">Blog App</h2>
      <section className="flex items-center gap-4 cursor-pointer">
        {theme === "light" ? (
          <MdLightMode size={25} onClickCapture={updateTheme} />
        ) : (
          <MdOutlineLightMode size={25} onClickCapture={updateTheme} />
        )}
        <Button
          color={theme === "dark" ? "blue" : "dark"}
          size="md"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </section>
    </header>
  );
};

export default Header;
