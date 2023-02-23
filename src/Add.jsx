import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "./supabase";

const Add = () => {
  const [username, setUsername] = useState("");
  const [mb, setMb] = useState("");
  const [remaining, setRemaing] = useState("");
  const [date, setDate] = useState("");
  const [bill, setBill] = useState("");
  let navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    console.log(username, mb, remaining, date, bill);
    const { data, error } = await supabase
      .from("connections")
      .insert([{ username, mb, remaining, date, bill }]);
    setBill("");
    setUsername("");
    setMb("");
    setRemaing("");
    setDate("");
    navigate("/");
  }
  return (
    <>
      <div className="w-full  bg-white shadow-md rounded px-3 pt-6 pb-8 mb-4">
        <h1 className="text-slate-800 text-2xl text-center">
          Add New Connection
        </h1>
        <form action="" className="" onSubmit={submitHandler}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name :
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="User Name : "
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mb"
            >
              MB :
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mb"
              type="text"
              value={mb}
              onChange={(e) => setMb(e.target.value)}
              placeholder="MBs : "
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="bill"
            >
              bill per month :
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="bill"
              type="text"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              placeholder="Bill : "
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="date"
            >
              Last Paid Dated :
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Last Paid Dated : "
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="rbill"
            >
              Remaing Bill(if any) :
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="rbill"
              type="text"
              value={remaining}
              onChange={(e) => setRemaing(e.target.value)}
              placeholder="Remaining : "
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-800 text-white font-semibold hover:text-white py-2 px-4  rounded"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default Add;
