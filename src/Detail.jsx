import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import supabase from "./supabase";

const Detail = () => {
  let { did } = useParams();

  const [conId, setConId] = useState([]);
  useEffect(() => {
    async function getId() {
      const { data, error } = await supabase
        .from("connections")
        .select("*")
        .eq("id", did);
      setConId(data[0]);
    }
    getId();
  }, []);
  useEffect(() => {});
  return (
    <>
      <div className="bg-zinc-50 text-zinc-900 text-xl mt-1 rounded-lg p-2">
        <h1>connection : {conId.mb}MB</h1>
        <h1>bill per month : RS. {conId.bill}</h1>
        <h1>Last paid : {conId.date}</h1>
        <h1>Remaining bill : RS.{conId.remaining}</h1>
        <div className="flex justify-around my-2">
          <NavLink
            to={`/update/${did}`}
            className="bg-green-500 hover:bg-green-800 text-white font-semibold hover:text-white py-2 px-4  rounded"
          >
            update
          </NavLink>
          <NavLink
            to={`/delete/${did}`}
            className="bg-red-500 hover:bg-red-800 text-white font-semibold hover:text-white py-2 px-4  rounded"
          >
            delete
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Detail;
