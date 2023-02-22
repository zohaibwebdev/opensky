import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Detail = () => {
  console.log("testing console.,logs");
  let { id } = useParams();
  useEffect(() => {});
  return (
    <>
      <div className="bg-slate-700 text-indigo-100 text-xl mt-1 rounded-lg p-2">
        {/* <h1>connection : {con.mb}MB</h1>
        <h1>bill per month : RS. {con.bill}</h1>
        <h1>Last paid : {con.date}</h1>
        <h1>Remaining bill : RS.{con.remaining}</h1> */}
        <div className="flex justify-around my-2">
          <NavLink
            to={"/update"}
            className="bg-green-500 hover:bg-green-800 text-white font-semibold hover:text-white py-2 px-4  rounded"
          >
            update
          </NavLink>
          <NavLink
            to={"/delete"}
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
