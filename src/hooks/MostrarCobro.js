import React, { useEffect } from "react";
import Modal from "../components/Modal";
import styled from "styled-components";
import { useState } from "react";
import { doc, collection, getDocs, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { async } from "@firebase/util";

export default function MostrarCobro(props) {
  const [estadoModal, setEstadoModal] = useState(false);
  const [listAdherentes, setListAdherentes] = useState([]);
  const [listPlanes, setListPlanes] = useState([]);

  const [cobro , setCobro] = useState(0);

  const getAdherentesBySocioId = async (idSocio) => {
    let obj;
    let lista = [];
    const querySnapshot = await getDocs(collection(db, "adherentes"));
    querySnapshot.forEach((doc) => {
        obj = doc.data();
        obj.id = doc.id;
        if (obj.idSocio === idSocio) {
            lista.push(obj);
        }
    });
    setListAdherentes(lista);
    };

  const getPlanes = async () => {
    let obj;
    let lista = [];
    const querySnapshot = await getDocs(collection(db, "planes"));
    querySnapshot.forEach((doc) => {
      obj = doc.data();
      obj.id = doc.id;
      lista.push(obj);
    });
    setListPlanes(lista);
  };

    // Sumar todos los montos de los planes activos de los adherentes del socio
    const getMontoTotal = () => {
        let monto = 0;
        listAdherentes.forEach((adherente) => {
            monto += getMontoPlan(adherente.activo, adherente.idPlan);
        });

        return monto;
    };

    // If is active return the monto of the plan, if not return 0
    const getMontoPlan = (isActive, idPlan) => {
        let monto = 0;
        if (isActive) {
            listPlanes.forEach((plan) => {
                if (plan.id === idPlan) {
                    monto = plan.monto;
                }
            });
        }
        return monto;        
    };
  
    /* FUNCION EZE
    const getMontoTotal = () => {
        let monto = 0;
        listAdherentes.forEach((adherente) => {
            listPlanes.forEach((plan) => {
                if (adherente.idPlan === plan.id && adherente.activo) {
                    monto += plan.monto;
                }
            });
        });
        console.log(monto);
        setCobro(monto);
    };
    */

    useEffect(() => {
        getAdherentesBySocioId(props.value);
        getPlanes();
    }, []);
    

  return (
    <div>
      <button
        className="border max-w-xs bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => setEstadoModal(!estadoModal)}
      >
        $
      </button>
      <Modal
        estado={estadoModal}
        cambiarEstado={setEstadoModal}
        titulo="Mostar Cobro"
        mostrarHeader={false}
        mostrarOverlay={true}
        posicionModal={"up"}
        padding={"20px"}
        mostrarContenedor={false}
      >
        <Contenido>
            <div className="bg-green-180 bg">
                <div className="flex ml-10 mt-10 mr-10 w-54 h-14">
                    <div className="flex">
                      <table className="mb-64 flex-col text-center table-fixed">
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
                              Fecha de Nacimiento
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
                              Monto
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
                                    ${getMontoPlan(adherente.activo, adherente.idPlan)}
                                </td>
                                </tr>
                            ))}
                            </tbody>
                            <td className="border-slate-700 bg-slate-300 whitespace-nowrap text-center text-2xl font-bold text-gray-900">Total: ${getMontoTotal()}</td >
                      </table>
                     
                    </div>
                    
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