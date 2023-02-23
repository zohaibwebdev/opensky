import React from "react";
import { NavLink } from "react-router-dom";

const Welcom = () => {
  return (
    <div className="bg-zinc-700 text-zinc-50 p-4 text-2xl text-center">
      welcome!!!!
      <p className="text-neutral-200 mb-3">Abdul Razaq Tabssum</p>
      <NavLink
        to={"/add"}
        className="bg-red-600 px-4 py-2 rounded-full text-xl font-bold"
      >
        Add New Connection
      </NavLink>
    </div>
  );
};

export default Welcom;
