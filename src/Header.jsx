import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-zinc-800 text-zinc-100 text-center py-5 rounded-t-lg text-3xl capitalize">
        <NavLink to={"/"}>opensky Network</NavLink>
        <h3>fort abbas</h3>
      </header>
    </>
  );
};

export default Header;
