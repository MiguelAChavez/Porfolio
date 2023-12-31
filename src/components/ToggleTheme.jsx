import React, { useEffect, useState } from "react";
import { DarkIcon, LightIcon } from "../assets/Icon/ThemeIcons";
import { ButtonHTMLAttributes } from "react";

const ToggleTheme = ({ className, ...props }) => {
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = JSON.parse(localStorage.getItem("theme"));
    if (storedTheme !== null) {
      return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark));
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  const handleClick = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={className}>
      <button
        {...props}
        onClick={handleClick}
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-sky-600/45 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-blue-700/60"
      >
        {isDark ? <LightIcon /> : <DarkIcon />}
      </button>
    </div>
  );
};

export default ToggleTheme;
