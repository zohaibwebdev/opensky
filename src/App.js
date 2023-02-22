import React from "react";
import Header from "./Header";
import Content from "./Content";
import Add from "./Add";
import Update from "./Update";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";

const App = () => {
  return (
    <div className="p-2 font-mono">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update" element={<Update />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
