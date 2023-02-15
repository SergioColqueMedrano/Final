import React from "react";
import Modal from "../components/Modal";
import styled from "styled-components";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function AltaSocio(props) {
  const [estadoModal, setEstadoModal] = useState(false);

  const altaSocio = async () => {
    const ref = doc(db, "socios", props.value)
    await updateDoc(ref, {
      activo: true,
    });
  };

  return (
    <div>
      <button
        className="border max-w-xs bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => setEstadoModal(!estadoModal)}
      >
        ✔️
      </button>
      <Modal
        estado={estadoModal}
        cambiarEstado={setEstadoModal}
        titulo="Alta Socio"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
        padding={"20px"}
        mostrarContenedor={true}
      >
        <Contenido>
          <h1>¿Desea dar de alta al Socio?</h1>
          <div>
            <Boton
              className="float-left mr-7"
              onClick={() => altaSocio() && setEstadoModal(!estadoModal)}
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
