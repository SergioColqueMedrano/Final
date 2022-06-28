import { useState } from "react";
import * as firebase from "../firebase";

export default function getSociosList() {
    const [schools, setSchools] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const ref = firebase.app().collection("socios");
  
    if (loading) {
      return <h1>Loading...</h1>
    }
  
    return (
      <div>
        <h1>Socios</h1>
        {openSociosList.map((socio) => (
          <div key={socio.id}>
            <h2>{socio.id}</h2>
            <p>{socio.nombre}</p>
            <p>{socio.apellido}</p>
          </div>
        ))}
      </div>
    );
}