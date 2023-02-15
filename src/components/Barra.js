import React from "react";
import { NavLink } from "react-router-dom";


export default function Barra() {
  return (
    <div className="w-full h-24 bg-green-800 mx-auto">
      <img
        className="absolute mt-2 ml-2 max-h-20"
        src="https://sanatorioadventista.org.ar/assets/img/footer_logo_sap.png"
      ></img>

      <div className="absolute mt-3 w-fit h-16 pl-36 flex">
        <NavLink to={"/app/home"}>
          <button className="bg-green-800 text-white font-bold py-2 px-12 rounded ml-3 h-full">
            Home
          </button>
        </NavLink>
        <NavLink to={"/app/socios"}>
          <button className="bg-green-800 text-white font-bold py-2 px-12 rounded ml-3 h-full">
            Gestionar Socios
          </button>
        </NavLink>
        <NavLink to={"/app/adherentes"}>
          <button className="bg-green-800  text-white font-bold py-2 px-12 rounded ml-3.5 h-full">
            Gestionar Adherentes
          </button>
        </NavLink>
        <NavLink to={"/app/cobros"}>
          <button className="bg-green-800 text-white font-bold py-2 px-12 rounded ml-3.5 h-full">
            Gestionar Cobros
          </button>
        </NavLink>
      </div>
    </div>
  );
}
