import React from "react";
import { Route, Routes } from "react-router-dom";
import Adherentes from "../pages/Adherentes";
import Cobros from "../pages/Cobros";
import Home from "../pages/Home";
import Socios from "../pages/Socios";
import Barra from "./Barra";

export default function Layout() {
  return (
    <div className="w-full h-24 bg-green-800 mx-auto">
      <Barra />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="socios" element={<Socios />} />
        <Route path="adherentes" element={<Adherentes />} />
        <Route path="cobros" element={<Cobros />} />
      </Routes>
    </div>
  );
}
