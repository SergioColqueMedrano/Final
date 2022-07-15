import React, { useState, useEffect } from "react";
import "firebase/firestore";
import { db } from "../firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Barra from "../components/Barra";
import AgregarAdherente from "../hooks/AgregarAdherente";
import BajaSocio from "../hooks/BajaSocio";
import AltaSocio from "../hooks/AltaSocio";

export default function Socios() {
  const [listSocios, setListSocios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [dob, setDob] = useState("");

  const getSocios = async () => {
    let obj;
    let lista = [];
    const querySnapshot = await getDocs(collection(db, "socios"));
    querySnapshot.forEach((doc) => {
      obj = doc.data();
      obj.id = doc.id;
      lista.push(obj);
    });
    setListSocios(lista);
  };

  useEffect(() => {
    getSocios();
  }, []);

  const addSocio = async () => {
    const obj = { apellido, nombre, dni, dob };
    const dbRef = await addDoc(collection(db, "socios"), {
      apellido: obj.apellido,
      nombre: obj.nombre,
      dni: obj.dni,
      dob: obj.dob,
      activo: true,
    });
    console.log(dbRef.id);
    clearInput();
    getSocios();
  };
  const clearInput = () => {
    setApellido("");
    setNombre("");
    setDni("");
    setDob("");
  };

  return (
    <div className="bg-green-300 bg w-full">

      <div className="mt-5 flex-col ">
        <div className=" mr-10 float-left pl-10 mt-5 ">
          <div className="pr-2 border-r-4 border-green-700 w-52 columns-1 ">
            <input
              className="mb-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
            <input
              className="mb-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Apellido"
              onChange={(e) => setApellido(e.target.value)}
              value={apellido}
            />
            <input
              className="mb-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="DNI"
              onChange={(e) => setDni(e.target.value)}
              value={dni}
            />
            <input
              className="mb-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="DOB"
              onChange={(e) => setDob(e.target.value)}
              value={dob}
            />
            <button
              className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full ml-4 mt-2"
              onClick={addSocio}
            >
              + Agregar Socio
            </button>
          </div>
        </div>
        <div className="flex mr-10 mb-64 w-54 h-14">
          <div className="flex">
            <table className="mb-64 flex-col min-w-full text-center table-fixed">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    class="border max-w-xs border-slate-700 text-sm font-medium text-gray-900 px-6 py-4 bg-slate-400"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    class="border max-w-xs border-slate-700 text-sm font-medium text-gray-900 px-6 py-4 bg-slate-400"
                  >
                    Apellido
                  </th>
                  <th
                    scope="col"
                    class="border max-w-xs border-slate-700 text-sm font-medium text-gray-900 px-6 py-4 bg-slate-400"
                  >
                    D.N.I.
                  </th>
                  <th
                    scope="col"
                    class="border max-w-xs border-slate-700 text-sm font-medium text-gray-900 px-6 py-4 bg-slate-400"
                  >
                    Fecha Nacimiento
                  </th>
                  <th
                    scope="col"
                    class="border max-w-xs border-slate-700 text-sm font-medium text-gray-900 px-6 py-4 bg-slate-400"
                  >
                    Socio Activo
                  </th>
                  <th
                    scope="col"
                    class="border max-w-xs border-slate-700 text-sm font-medium text-gray-900 px-6 py-4 bg-slate-400"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    class="border max-w-xs border-slate-700 text-sm font-medium text-gray-900 px-6 py-4 bg-slate-400"
                  >
                    Agregar Adherente
                  </th>
                  <th
                    scope="col"
                    class="border max-w-xs border-slate-700 text-sm font-medium text-gray-900 px-6 py-4 bg-slate-400"
                  >
                    Dar de baja
                  </th>
                  <th
                    scope="col"
                    class="border max-w-xs border-slate-700 text-sm font-medium text-gray-900 px-6 py-4 bg-slate-400"
                  >
                    Dar de alta
                  </th>
                </tr>
              </thead>
              <tbody className="w-full pt-500">
                {listSocios.map((socios, index) => (
                  <tr className="border-b" key={index}>
                    <td className=" border border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                      {socios.nombre}
                    </td>
                    <td className=" border border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                      {socios.apellido}
                    </td>
                    <td className="border max-w-xs border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                      {socios.dni}
                    </td>
                    <td className="border max-w-xs border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                      {socios.dob}
                    </td>

                    <td className="border max-w-xs border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                      {socios.activo ? "✔️" : "❌"}
                    </td>
                    <td className="select-text border max-w-xs border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                      {socios.id}
                    </td>
                    <td className="border max-w-xs border-slate-700 bg-slate-400">
                      <AgregarAdherente value={socios.id}></AgregarAdherente>
                    </td>
                    <td className="border max-w-xs border-slate-700 bg-slate-400">
                      <BajaSocio value={socios.id}></BajaSocio>
                    </td>
                    <td className="border max-w-xs border-slate-700 bg-slate-400">
                      <AltaSocio value={socios.id}></AltaSocio>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
