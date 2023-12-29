import React from "react";
import { NavLink } from "react-router-dom";


export default function Barra() {
  return (
    <div className="container mx-auto flex flex-row">
      <div id="logo" className="w-full h-24 bg-green-800 mx-auto">
        <img
          className="absolute mt-2 ml-2 max-h-20"
          src="https://sanatorioadventista.org.ar/assets/img/footer_logo_sap.png"
        ></img>
        <div className="container mx-auto flex flex-row h-20 items-center justify-end text-center">
          <div className="absolute mt-3 w-fit h-16 pl-36 flex">
            <NavLink to={"/app/home"}>
              <button className="menu-item-a">
                Home
              </button>
            </NavLink>
            <NavLink to={"/app/socios"}>
              <button className="menu-item-a">
                Gestionar Socios
              </button>
            </NavLink>
            <NavLink to={"/app/adherentes"}>
              <button className="menu-item-a">
                Gestionar Adherentes
              </button>
            </NavLink>
            <NavLink to={"/app/cobros"}>
              <button className="menu-item-a">
                Gestionar Cobros
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
