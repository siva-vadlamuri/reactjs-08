import React, { useContext } from "react";
import { ThemeContext } from "../../../App";
// ThemeContext;
function GrandChild() {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <p>Grand Child Theme-{theme}</p>
      <button className="btn btn-info" onClick={toggleTheme}>
        Toggle
      </button>
    </div>
  );
}

export default GrandChild;
