import React from "react";
import { useState, useEffect } from "react";
import { getDocs, getDoc, doc, collection, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import BajaAdherente from "../hooks/BajaAdherente";
import AltaAdherente from "../hooks/AltaAdherente";
import ModificarAdherente from "../hooks/ModificarAdherente";

export default function Adherentes() {
  const [listAdherentes, setListAdherentes] = useState([]);
  const [loading, setLoading] = useState(false);

  const cargarPag = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    },2000)
  }
 
  /*
  const getPlanName = async (idPlanBusqueda) => {
    const ref = await doc(db, "planes", idPlanBusqueda);
    const document = await getDoc(ref);

    let planObj = document.data();

    return planObj.nombre;
  };
  */

  const getAdherentes = async () => {
    let obj;
    let lista = [];
    const querySnapshot = await getDocs(collection(db, "adherentes"));
    querySnapshot.forEach((doc) => {
      obj = doc.data();
      obj.id = doc.id;
      lista.push(obj);
    });
    setListAdherentes(lista);
    
  };

  useEffect(() => {
    getAdherentes();
  }, []);

  return (
    <div className="bg-green-180 bg w-full">
      <div className="flex ml-10 mt-10 mr-10 w-54 h-14">
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
                  Adherente Activo
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
                  Dar de baja
                </th>
                <th
                  scope="col"
                  class="border max-w-xs border-slate-700 text-sm font-medium text-gray-900 px-6 py-4 bg-slate-400"
                >
                  Dar de alta
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
              {listAdherentes.map((adherente, index) => (
                <tr className="border-b" key={index}>
                  <td className=" border border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                    {adherente.nombre}
                  </td>
                  <td className=" border border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                    {adherente.apellido}
                  </td>
                  <td className="border max-w-xs border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                    {adherente.dni}
                  </td>
                  <td className="border max-w-xs border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                    {adherente.dob}
                  </td>

                  <td className="border max-w-xs border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                    {adherente.activo ? "✔️" : "❌"}
                  </td>
                  <td className="border max-w-xs border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                    {adherente.id}
                  </td>
                  <td className="border max-w-xs border-slate-700 bg-slate-400">
                    <BajaAdherente value={adherente.id}></BajaAdherente>
                  </td>
                  <td className="border max-w-xs border-slate-700 bg-slate-400">
                    <AltaAdherente value={adherente.id}></AltaAdherente>
                  </td>
                  <td className="border max-w-xs border-slate-700 bg-slate-400">
                    <ModificarAdherente value={adherente.id}></ModificarAdherente>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
