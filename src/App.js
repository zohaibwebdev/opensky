import React from "react";
import Header from "./Header";
import Content from "./Content";
import Add from "./Add";
import Update from "./Update";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Delete from "./Delete";
import Welcom from "./Welcom";
import Login from "./Login";
import { useState } from "react";

const App = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="p-2 font-mono bg-zinc-200">
      <Header />

      {login ? (
        <Routes>
          <Route path="/" element={<Content setLogin={setLogin} />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
          <Route path="/detail/:did" element={<Detail />} />
          <Route path="/delete/:did" element={<Delete />} />
          <Route path="/update/:did" element={<Update />} />
        </Routes>
      ) : (
        <Login setLogin={setLogin} />
      )}

      {/* { if(login){
        <Welcom />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
          <Route path="/detail/:did" element={<Detail />} />
          <Route path="/delete/:did" element={<Delete />} />
          <Route path="/update/:did" element={<Update />} />
        </Routes>
      }else{
        <Login />
      }} */}
    </div>
  );
};

export default App;
