import React from "react";
import { Route, Routes } from "react-router-dom";
import Adherentes from "../pages/Adherentes";
import Cobros from "../pages/Cobros";
import Home from "../pages/Home";
import Socios from "../pages/Socios";
import Barra from "./Barra";
import RequiereAuth from "./RequiereLogin"

export default function Layout() {


  return (
    <div className="w-full h-24 bg-green-800 mx-auto">
      <Barra/>
      <Routes>
        <Route path="home" element={<RequiereAuth><Home/></RequiereAuth>} />
        <Route path="socios" element={<RequiereAuth><Socios /></RequiereAuth>} />
        <Route path="adherentes" element={<RequiereAuth><Adherentes /></RequiereAuth>} />
        <Route path="cobros" element={<RequiereAuth><Cobros/></RequiereAuth>} />
      </Routes>
    </div>
  );
}
