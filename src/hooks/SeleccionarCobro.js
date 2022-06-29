import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import { db } from "../firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const expId = null;
const expNombre = "Plan"

export const changeVariables = (id, nombre) => {
    return (
        expId={id},
        expNombre={nombre}
    )
};

export default function SeleccionarCobro(props) {
  const [estadoModal, setEstadoModal] = useState(false);
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
    <div>
      <button
        className="border max-w-xs bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => setEstadoModal(!estadoModal)}
      >
        +
      </button>
      <Modal
        estado={estadoModal}
        cambiarEstado={setEstadoModal}
        titulo="SELECCIONE PLAN"
        mostrarHeader={true}
        mostrarOverlay={false}
        posicionModal={"center"}
        padding={"20px"}
      >
        <Contenido>
          <div className="flex mr-10 mb-64 w-54 h-14">
            <div className="flex">
              <table className="mb-64 flex-col min-w-full text-center table-fixed">
                <thead className="">
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
                  </tr>
                </thead>
                <tbody className="w-full pt-500">
                  {listCobros.map((cobros, index) => (
                    <tr className="" key={index}>
                      <td className=" border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                        {cobros.nombre}
                      </td>
                      <td className=" border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                        {cobros.monto}
                      </td>
                      <td className="max-w-xs border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                        {cobros.desc}
                      </td>
                      <td className="max-w-xs border-slate-700 text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap bg-slate-300 hover:bg-slate-500">
                        {cobros.id}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
  display: block;
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: none;
  margin-left: 10%;
  background: #9C9C9C;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;
  &:hover {
    background: #E4E4E4;
  }
`;

