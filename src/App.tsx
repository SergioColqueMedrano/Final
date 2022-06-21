import { useEffect, useState } from 'react'
import './App.css'
import useAuth from './hooks/useAuth'
import Login from './components/Login'

function App() {
  const { user, email, password, error, loading, setEmail, setPassword, login, clear } = useAuth()

  useEffect(() => {
    if (error) { alert(error); clear() }
  }, [ error ])

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {!user && <Login {...{email, password, setEmail, setPassword, login}} />}
    </div>
  )
}

export default App
