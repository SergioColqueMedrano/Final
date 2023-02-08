import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";


export default function App() {
  return (
    <div className="bg-green-100 h-screen select-none flex">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app/*" element={<Layout />} />
      </Routes>
    </div>
  );
}
