import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "../page/Add";
import Home from "../page/Home";
import Update from "../page/Update";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  );
};

export default Router;
