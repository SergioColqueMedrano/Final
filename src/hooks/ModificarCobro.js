import React from "react";
import Modal from "../components/Modal";
import styled from "styled-components";
import { useState } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function ModificarCobro(props) {
  const [estadoModal, setEstadoModal] = useState(false);

  const [desc, setDesc] = useState("");
  const [monto, setMonto] = useState("");
  const [nombre, setNombre] = useState("");

  const [currentDesc, setCurrentDesc] = useState("");
  const [currentMonto, setCurrentMonto] = useState("");
  const [currentNombre, setCurrentNombre] = useState("");

  const modificarCobro = async () => {
    const obj = { desc, monto, nombre };
    const ref = doc(db, "planes", props.value);
    const document = await getDoc(ref);
    await updateDoc(ref, {
      desc: obj.desc.length === 0 ? currentDesc : obj.desc,
      monto: obj.monto.length === 0 ? parseInt(currentMonto) : parseInt(obj.monto),
      nombre: obj.nombre.length === 0 ? currentNombre : obj.nombre,
    });
  };

  const traerCobro = async () => {
    const ref = doc(db, "planes", props.value);
    const document = await getDoc(ref);
    const obj = document.data();
    setCurrentDesc(obj.desc);
    setCurrentMonto(obj.monto);
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
        titulo="Modificar Plan"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
        padding={"20px"}
      >
        <Contenido>
          <h1>Ingrese los nuevos datos</h1>
          <div onLoad={traerCobro()}>
            <input
              className="mb-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setNombre(e.target.value)}
              placeholder={currentNombre}
              value={nombre}
            />
            <input
              className="mb-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type={"number"}
              placeholder={currentMonto}
              onChange={(e) => setMonto(e.target.value)}
              value={monto}
            />
            <input
              className="mb-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setDesc(e.target.value)}
              placeholder={currentDesc}
              value={desc}
            />

            <Boton
              className="float-left mr-7"
              onClick={() => modificarCobro() && setEstadoModal(!estadoModal)}
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
