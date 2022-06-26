import useAuth from "../hooks/useAuth.js";

export function Login() {
  const { email, setEmail, password, setPassword, login } = useAuth();
  return (
    <div className="w-full max-w-xs m-auto bg-green-800 rounded p-5">
      <div className="bg-white shadow-md rounded px-8 pt-10 pb-10 mb-4">
        <header>
          <img
            class="w-20 mx-auto mb-5"
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQEOnrqc-ot2fg/company-logo_200_200/0/1582907484241?e=2147483647&v=beta&t=hrOXYziFMS9Yu_KBrmK0y1zMtiEHkDzK-gkWjeZ7gTw"
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
      </div>
    </div>
  );
}
