import React, { useState } from "react";

const Nav = ({ changeMode, isDark }) => {
  return (
    <section className="nav">
      <p className="heading">Where in the world?</p>
      <div className="mode-cluster" onClick={changeMode}>
        <i className={`fa-regular ${isDark ? "fa-sun" : "fa-moon"}`}></i>
        <button className="mode">{isDark ? "Light Mode" : "Dark Mode"}</button>
      </div>
    </section>
  );
};

export default Nav;
