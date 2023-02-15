import { Navigate } from "react-router-dom";
import isLogged from "../hooks/useAuth";

export default function RequireAuth({children}) {
    if (!false) {
        console.log('No estas logueado')
        return <Navigate to='/'/>
    } else {
        console.log('Estas logueado')
        return children
    }
}