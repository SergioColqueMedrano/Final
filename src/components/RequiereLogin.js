import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

export default function RequireAuth({children}) {
    if (auth.currentUser === null) {  
        console.log('No estas logueado')
        return <Navigate to='/'/>
    } else {
        console.log('Estas logueado')
        return children
    }
}