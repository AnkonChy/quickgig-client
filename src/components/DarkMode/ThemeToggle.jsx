import React, { useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  return (
    <input
      type="checkbox"
      className="toggle theme-controller hidden md:block mr-2"
      onChange={handleThemeChange}
      checked={theme === "dark"}
    />
  );
};

export default ThemeToggle;
