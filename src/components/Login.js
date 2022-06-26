import {user, email, setEmail, password, setPassword, error, loading} from '../hooks/useAuth.js'
import useAuth from '../hooks/useAuth.js'


export function Login() {
    const {user, email, setEmail, password, setPassword, error, loading, login} = useAuth()
  return (
    <div className="container mx-auto flex flex-col">
      <input className="border-2 border-stone-500 rounded-lg px-2 my-2" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="border-2 border-stone-500 rounded-lg px-2 my-2" placeholder="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button
        className="bg-stone-300 rounded-lg border-2 border-stone-500 text-stone-500 duration-300 hover:scale-105"
        onClick={login}
      >
        Iniciar sesión
      </button>
    </div>
  )
}

