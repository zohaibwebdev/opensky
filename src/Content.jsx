import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import supabase from "./supabase";

const Content = () => {
  const [visible, setVisible] = useState(false);
  const [cons, setCons] = useState([]);
  useEffect(function () {
    async function getCon() {
      const { data, error } = await supabase.from("connections").select("*");
      setCons(data);
    }
    getCon();
  }, []);
  return (
    <>
      <div className="bg-slate-800 rounded-lg mt-2 p-3 font-mono">
        <p className="text-lg text-white pb-1 mb-1 border-solid border-b-2 border-slate-900">
          Alhumdullilah we have {cons.length} connections
        </p>

        {cons.map((con) => (
          <NavLink
            key={con.id}
            to={`/detail/${con.id}`}
            className="bg-slate-700 rounded-xl text-indigo-100 flex justify-between align-middle p-2 text-lg mb-2"
            onClick={() => setVisible(!visible)}
          >
            <h6 key={con.id} className="text-lg font-mono">
              {con.username}
            </h6>
            <h6>{con.mb}mb</h6>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Content;
