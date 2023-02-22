import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-slate-700 text-indigo-100 text-center py-5 rounded-t-lg text-3xl capitalize">
        <NavLink to={"/"}>opensky Network</NavLink>
        <h3>fort abbas</h3>
      </header>
      <div className="bg-slate-500 text-indigo-100 p-4 text-2xl">
        welcome!!!!
        <p className="text-slate-200">Abdul Razaq Tabssum</p>
        <NavLink
          to={"/add"}
          className="bg-red-600 px-4 py-2 rounded-full mt-2 text-xl font-bold"
        >
          Add New Connection
        </NavLink>
      </div>
    </>
  );
};

export default Header;
