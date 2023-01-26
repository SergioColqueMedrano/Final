import React, { useState, useEffect } from "react";
import "firebase/firestore";
import { db } from "../firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Barra from "../components/Barra";
import ModificarCobro from "../hooks/ModificarCobro";

export default function Cobros() {
  const [listCobros, setListCobros] = useState([]);
  const [desc, setDesc] = useState("");
  const [monto, setMonto] = useState("");
  const [nombre, setNombre] = useState("");

  const getCobros = async () => {
    let obj;
    let lista = [];
    const querySnapshot = await getDocs(collection(db, "planes"));
    querySnapshot.forEach((doc) => {
      obj = doc.data();
      obj.id = doc.id;
      lista.push(obj);
    });
    setListCobros(lista);
  };

  useEffect(() => {
    getCobros();
  }, []);

  const addCobro = async () => {
    const obj = { desc, monto, nombre };
    const dbRef = await addDoc(collection(db, "planes"), {
      desc: obj.desc,
      monto: parseInt(obj.monto),
      nombre: obj.nombre,
    });
    console.log(dbRef.id);
    clearInput();
    getCobros();
  };
  const clearInput = () => {
    setDesc("");
    setMonto("");
    setNombre("");
  };

  return (
    <div className="bg-green-180 bg w-full">

      <div className="mt-5 flex-col ">
        <div className=" mr-10 float-left pl-10 mt-5 ">
          <div className="pr-2 border-r-4 border-green-700 w-52 columns-1 ">
            <input
              className="mb-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
            <input
              className="mb-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Monto"
              onChange={(e) => setMonto(e.target.value)}
              value={monto}
            />
            <input
              className="mb-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Descripcion"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
            <button
              className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ml-4 mt-2"
              onClick={addCobro}
            >
              + Crear Plan
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
                    Monto
                  </th>
                  <th
                    scope="col"
                    class="border max-w-xs border-slate-700 text-sm font-medium text-gray-900 px-6 py-4 bg-slate-400"
                  >
                    Descripcion
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
                    Modificar
                  </th>
                </tr>
              </thead>
              <tbody className="w-full pt-500">
                {listCobros.map((cobros, index) => (
                  <tr className="border-b" key={index}>
                    <td className=" border border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                      {cobros.nombre}
                    </td>
                    <td className=" border border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                      {cobros.monto}
                    </td>
                    <td className="border max-w-xs border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                      {cobros.desc}
                    </td>
                    <td className="border max-w-xs border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                      {cobros.id}
                    </td>

                    <td className="border max-w-xs border-slate-700 bg-slate-400">
                      <ModificarCobro value={cobros.id}></ModificarCobro>
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
