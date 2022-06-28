import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "firebase/firestore";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";
import { list } from "postcss";

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
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead>
          <tr>
            <th>ID</th>
            <th>Apellido</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody className="w-full pt-500">
          {listSocios.map((socios, index) => (
            <tr key={index}>
              <td>{socios.id}</td>
              <td>{socios.apellido}</td>
              <td>{socios.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
