import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "firebase/firestore";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
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

  /*const getSocios = async () => {
    let obj;
    let lista = [];
    const querySnapshot = await db.collection("socios").get();
    querySnapshot.forEach((doc) => {
      obj = doc.data();
      obj.id = doc.id;
      lista.push(obj);
    });
    setListSocios(lista);
  };

  useEffect(() => {
    const getData = async () => {
      const datos = await getDocs(collection(db, "socios"));
      console.log(datos.docs[0].data());
    };*/

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

  return (
    <div className="w-full">
      <div className="w-full h-24 bg-green-800 mx-auto">
        <img
          className="absolute mt-2 max-h-20"
          src="https://sanatorioadventista.org.ar/assets/img/footer_logo_sap.png"
        ></img>

        <div className="absolute mt-3 w-fit h-16 pl-36 flex">
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-3 h-full">
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
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8"></div>
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8"></div>
        <div class="overflow-hidden">
          <table className="min-w-full text-center border-collapse">
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
                <tr className="border-b"key={index}>
                  <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap hover:bg-green-300">{socios.id}</td>
                  <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">{socios.apellido}</td>
                  <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">{socios.nombre}</td>
                  <button className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">+</button>
                  
                  <button className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full ml-4">x</button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
