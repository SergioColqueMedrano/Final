import React from "react";
import { useNavigate } from "react-router-dom";

export default function Barra() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-24 bg-green-800 mx-auto">
      <img
        className="absolute mt-2 max-h-20"
        src="https://sanatorioadventista.org.ar/assets/img/footer_logo_sap.png"
      ></img>

      <div className="absolute mt-3 w-fit h-16 pl-36 flex">
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-3 h-full"
          onClick={navegarH}
        >
          Home
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-3 h-full"
          onClick={navegarS}
        >
          Gestionar Socios
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-3.5 h-full"
          onClick={navegarA}
        >
          Gestionar Adherentes
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-3.5 h-full"
          onClick={navegarC}
        >
          Gestionar Cobros
        </button>
      </div>
    </div>
  );
  function navegarH() {
    navigate("/home");
  }
  function navegarS() {
    navigate("/socios");
  }
  function navegarC() {
    navigate("/cobros");
  }
  function navegarA() {
    navigate("/adherentes");
  }
}
