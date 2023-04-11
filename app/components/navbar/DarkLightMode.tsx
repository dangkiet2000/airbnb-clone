"use client";

import useMode from "@/app/hooks/useMode";
import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkLightMode = () => {
  const mode = useMode()

  return (
    <div className="mr-2">
      {mode.isDarkMode ? (
        <MdLightMode
          onClick={mode.onLight}
          size={24}
          color="white"
          className="cursor-pointer transition duration-300"
        />
      ) : (
        <MdDarkMode
          onClick={mode.onDark}
          size={24}
          className="cursor-pointer transition duration-300"
        />
      )}
    </div>
  );
};

export default DarkLightMode;
