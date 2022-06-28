import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import Socios from "./pages/Socios";
import Cobros from "./pages/Cobros";
import Adherentes from "./pages/Adherentes";

function App() {
  return (
    <div className="bg-green-300 h-screen flex">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/socios" element={<Socios />} />
        <Route path="/cobros" element={<Cobros />} />
        <Route path="/adherentes" element={<Adherentes />} />
      </Routes>
    </div>
  );
}

export default App;
