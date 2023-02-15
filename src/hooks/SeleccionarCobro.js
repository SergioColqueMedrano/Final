import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";




export default function SeleccionarCobro(props) {
  const [listCobros, setListCobros] = useState([]);


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

  return (
    <select
    className="w-32 h-8 mb-5 ml-3 border-2 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
    onClick={(e) => props.traerId(e.target.value)}>
      {listCobros.map((item) => (
        <option value={item.id}>
          {item.nombre}
        </option>
      ))}
    </select>
  );
}


