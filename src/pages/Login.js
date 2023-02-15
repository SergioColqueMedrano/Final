import useAuth from "../hooks/useAuth.js";

export default function Login() {
  const { email, setEmail, password, setPassword, login } = useAuth();
  const logged = (useAuth().isLogged ? "Logged" : "Not logged");
  


  return (
    <div className="w-full max-w-xs m-auto bg-green-800 rounded p-5">
      <div className="shadow-md rounded px-8 pt-10 pb-10 mb-4 bg-neutral-100">
        <header>
          <img
            className="w-40 h-40 mx-auto mb-5"
            src="https://i.postimg.cc/rFjJ7qTt/logo-sap.png" alt="Descripcion saca warning"
          />
        </header>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-noene focus:shadow-outline"
          onClick={login}
        >
          Iniciar sesión
        </button>
        <div>{logged}</div>
      </div>
    </div>
  );
}
