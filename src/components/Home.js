import React, { useState } from "react";
/*import firebase from "../firebase";
import { useNavigate } from "react-router-dom";*/
/*import getSociosList from "../hooks/getSocios";

import getAdherentesList from "../hooks/getSocios";
import getSociosList from "../hooks/getSocios";
*/

export function Home() {
  return (
    <div className="w-full h-24 bg-green-800 mx-auto">
      <img
        className="absolute mt-2 max-h-20"
        src="https://sanatorioadventista.org.ar/assets/img/footer_logo_sap.png"
      ></img>

      <div className="absolute mt-3 w-fit h-16 pl-36">
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-3 h-full"
          /*onClick={getSociosList()}*/
        >
          Gestionar Socios
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-3.5 h-full" /*onClick={getAdherentesList()}*/
        >
          Gestionar Adherentes
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-3.5 h-full" /*onClick={getCobrosList()}*/
        >
          Gestionar Cobros
        </button>
      </div>
    </div>
  );
}
