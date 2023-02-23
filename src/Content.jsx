import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import supabase from "./supabase";
import Welcom from "./Welcom";

const Content = ({ setLogin }) => {
  const [visible, setVisible] = useState(false);
  const [cons, setCons] = useState([]);
  useEffect(function () {
    async function getCon() {
      const { data, error } = await supabase
        .from("connections")
        .select("*")
        .order("username", { ascending: true });
      setCons(data);
    }
    getCon();
  }, []);
  return (
    <>
      <div className="bg-zinc-700 text-zinc-50 p-4 text-2xl text-center flex flex-col items-center">
        welcome!!!!
        <p className="text-neutral-200 mb-3">Abdul Razaq Tabssum</p>
        <div className="flex flex-col gap-2 max-w-md">
          <NavLink
            to={"/add"}
            className="bg-green-600 px-4 py-2 rounded-full text-xl font-bold"
          >
            Add New Connection
          </NavLink>
          <button
            className="bg-red-600 px-4 py-2 rounded-full text-xl font-bold"
            onClick={() => setLogin(false)}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="bg-zinc-700 rounded-lg mt-2 p-3 font-mono">
        <p className="text-xl text-white pb-1 mb-1 border-solid border-b-2 border-slate-900">
          Alhumdullilah we have {cons.length} connections
        </p>

        {cons.map((con) => (
          <NavLink
            key={con.id}
            to={`/detail/${con.id}`}
            className="bg-zinc-100 rounded-xl text-xl  text-zinc-900 flex justify-between align-middle p-4 text-lg mb-2"
            onClick={() => setVisible(!visible)}
          >
            <h6 key={con.id}>{con.username}</h6>
            <h6>{con.mb}mb</h6>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Content;
