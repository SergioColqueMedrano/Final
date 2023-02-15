import React from "react";
import Modal from "../components/Modal";
import styled from "styled-components";
import { useState } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import SeleccionarCobro from "./SeleccionarCobro";

export default function ModificarSocio(props) {
  const [estadoModal, setEstadoModal] = useState(false);

  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");

  const [currentApellido, setCurrentApellido] = useState("");
  const [currentDni, setCurrentDni] = useState("");
  const [currentNombre, setCurrentNombre] = useState("");

  const modificarSocio = async () => {
    const obj = { apellido, dni, nombre};
    const ref = doc(db, "socios", props.value);
    const document = await getDoc(ref);
    await updateDoc(ref, {
      apellido: obj.apellido.length === 0 ? currentApellido : obj.apellido,
      dni: obj.dni.length === 0 ? parseInt(currentDni) : parseInt(obj.dni),
      nombre: obj.nombre.length === 0 ? currentNombre : obj.nombre,
    });

    //alert("Doc: "+document.id+" modificado correctamente");
  };

  const traerSocio = async () => {
    const ref = doc(db, "socios", props.value);
    const document = await getDoc(ref);
    const obj = document.data();
    setCurrentApellido(obj.apellido);
    setCurrentDni(obj.dni);
    setCurrentNombre(obj.nombre);
  };

  return (
    <div>
      <button
        className="border max-w-xs bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => setEstadoModal(!estadoModal)}
      >
        ✏️
      </button>
      <Modal
        estado={estadoModal}
        cambiarEstado={setEstadoModal}
        titulo="Modificar Socio"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
        padding={"20px"}
        mostrarContenedor={true}
      >
        <Contenido>
          <h1>Ingrese los nuevos datos</h1>
          <div onLoad={traerSocio()}>
            <input
              className="mb-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setNombre(e.target.value)}
              type={"text"}
              defaultValue={currentNombre}
              placeholder="Nombre"

            />
            <input
              className="mb-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type={"text"}
              onChange={(e) => setApellido(e.target.value)}
              defaultValue={currentApellido}
              placeholder="Apellido"
            />
            <input
              className="mb-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setDni(e.target.value)}
              type={"number"}
              defaultValue={currentDni}
              placeholder="DNI"
            />
            

            <Boton
              type="sumbit"
              className="float-left mr-7" 
              onClick={() => modificarSocio() && setEstadoModal(!estadoModal)}
            >
              Confirmar
            </Boton>
            <Boton onClick={() => setEstadoModal(!estadoModal)}>Cancelar</Boton>
          </div>
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
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 15px;
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
  display: block;
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