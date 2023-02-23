import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import supabase from "./supabase";

const Delete = () => {
  let { did } = useParams();
  let navigate = useNavigate();
  async function deleteItem() {
    const { data, error } = await supabase
      .from("connections")
      .delete()
      .eq("id", did);
    navigate("/");
  }
  return (
    <>
      <div className="text-2xl text-center bg-slate-200 m-3 p-4 ">
        <h1 className=" text-red-600 font-bold">Are You Sure !!!! Mr. Razaq</h1>
        <button
          className="bg-red-500 hover:bg-red-800 text-white font-semibold hover:text-white py-2 px-4 mt-4 rounded"
          onClick={deleteItem}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Delete;
