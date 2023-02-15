import React from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import SeleccionarCobro from "./SeleccionarCobro";

export default function AgregarAdherente(props) {
  const [estadoModal, setEstadoModal] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [dob, setDob] = useState("");
  const [idPlan, setIdPlan] = useState("");

  const clearInput = () => {
    setApellido("");
    setNombre("");
    setDni("");
    setDob("");
    setIdPlan("");
  };
  const addAdherente = async () => {
    const obj = { apellido, nombre, dni, dob, idPlan };
    const intSocio = props.value;
    const dbRef = await addDoc(collection(db, "adherentes"), {
      apellido: obj.apellido,
      nombre: obj.nombre,
      dni: obj.dni,
      dob: obj.dob,
      activo: true,
      idSocio: intSocio,
      idPlan: obj.idPlan, // Pasar id traida de SeleccionarCobro.js
    });
    console.log(dbRef.id);
    clearInput();
  };
  const traerId = (id) => {
    setIdPlan(id);
  };
  return (
    <div>
      <button
        className="border max-w-xs bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => setEstadoModal(!estadoModal)}
      >
        ➕
      </button>
      <Modal
        estado={estadoModal}
        cambiarEstado={setEstadoModal}
        titulo="Agregar Adherente"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
        padding={"20px"}
        mostrarContenedor={true}
      >
        <Contenido>
          <form className="w-52 columns-1 bg-grey">
            <input
              className="mb-7 bg-gray-50 border border-gray-900 text-gray-0 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Apellido"
              onChange={(e) => setApellido(e.target.value)}
              type={"text"}
              required={true}
              value={apellido}
            />
            <input
              className="mb-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nombre"
              type={"text"}
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
            <input
              className="mb-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="DNI"
              type={"number"}
              onChange={(e) => setDni(e.target.value)}
              value={dni}
            />
            <input
              className="mb-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="DOB"
              type={"date"}
              onChange={(e) => setDob(e.target.value)}
              value={dob}
            />
            <input
              className="float-left mb-7 bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={"Id Plan"}
              value={idPlan}
              disabled
            />
            <td className="max-w-xs">
              <SeleccionarCobro traerId={traerId}></SeleccionarCobro>
            </td>
          
          <Boton 
          type="button"
          className="float-left mr-7"
          value="Agregar Adherente"
          onClick={() =>{
            if (apellido.length !== 0 && nombre.length !== 0 && dni.length !== 0 && dob.length !== 0) {
              addAdherente();
              setEstadoModal(!estadoModal);
            }else{
              alert("Debe completar todos los campos");
          }
          }}
          >
            Agregar
          </Boton>

        </form>
        </Contenido>
      </Modal>
    </div>
  );
}

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
const Boton = styled.button`
  display: inline-block;
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: #1766dc;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;
  &:hover {
    background: #0066ff;
  }
`;