import React, { useState } from "react";
import supabase from "./supabase";

const Login = ({ setLogin }) => {
  const [ruser, setRuser] = useState([]);

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  async function loginHandler(e) {
    e.preventDefault();
    let { data: users, error } = await supabase.from("users").select("*");
    if (name == users[0].name && pass == users[0].pass) {
      setLogin(true);
    } else {
      alert("something wrong");
    }
    setName("");
    setPass("");
  }
  return (
    <div className="w-full  bg-white shadow-md rounded px-3 pt-6 pb-8 mb-4">
      <h1 className="text-2xl text-center">Login</h1>
      <div>
        <form onSubmit={loginHandler}>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="User Name : "
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mb"
            >
              Password :
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mb"
              type="text"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Password : "
            />
          </div>
          <button
            type="submit"
            className="bg-zinc-800 hover:bg-zinc-100  text-white font-semibold hover:text-zinc-800 py-2 px-4  rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
