interface Props {
  email: string
  password: string
  setEmail: (v: string) => void
  setPassword: (v: string) => void
  login: () => void
}

export default function Login({ email, password, setEmail, setPassword, login }: Props) {
  return (
    <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
      <input className="block border-2 border-stone-500 rounded-lg px-2 my-2" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="border-2 border-stone-500 rounded-lg px-2 my-2" placeholder="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button
        className="bg-stone-300 rounded-lg border-2 border-stone-500 text-stone-500 duration-300 hover:scale-105"
        onClick={login}
      >
        Iniciar sesión
      </button>
    </div>


    
  )}