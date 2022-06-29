import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "firebase/firestore";
import { db } from "../firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Barra from "../components/Barra";
import { async } from "@firebase/util";

export default function Socios() {
  const navigate = useNavigate();

  function navegarC() {
    navigate("/cobros");
  }
  function navegarA() {
    navigate("/adherentes");
  }

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
    <div className="w-full">
      <Barra></Barra>

      <div className="row p-2">
        <div className="col-md-4">
          <div className="card p-2">
            <input
              className="form-control mb-2"
              placeholder="Apellido"
              onChange={(e) => setApellido(e.target.value)}
              value={apellido}
            />
            <input
              className="form-control mb-2"
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
            <input
              className="form-control mb-2"
              placeholder="DNI"
              onChange={(e) => setDni(e.target.value)}
              value={dni}
            />
            <input
              className="form-control mb-2"
              placeholder="DOB"
              onChange={(e) => setDob(e.target.value)}
              value={dob}
            />
            <button
              className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full ml-4 mt-2"
              onClick={addSocio}
            >
              Aceptar
            </button>
          </div>
        </div>
        <div className="">
          <div className="">
            <table className="min-w-full text-center table-fixed">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    Apellido
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    Nombre
                  </th>
                </tr>
              </thead>
              <tbody className="w-full pt-500">
                {listSocios.map((socios, index) => (
                  <tr className="border-b" key={index}>
                    <td className="border border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap hover:bg-green-300">
                      {socios.id}
                    </td>
                    <td className=" border border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                      {socios.apellido}
                    </td>
                    <td className=" border border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                      {socios.nombre}
                    </td>
                    <td className="border border-slate-700">
                      <button className=" bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                        +
                      </button>

                      <button className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full ml-4 mt-2">
                        x
                      </button>
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
