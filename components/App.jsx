import React, { useState } from "react";
import "../style.css";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const App = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("dark")||"")
  );

  const changeMode = () => {
    setIsDark(!isDark);
    localStorage.setItem("dark", !isDark);
  };

  return (
    <div className={`main-container ${isDark ? "" : "light"}`}>
      <Nav isDark={isDark} changeMode={changeMode} />
      <Outlet />
    </div>
  );
};

export default App;
