
import { useState } from "react";
import * as firebase from "../firebase";
import {useNavigate} from 'react-router-dom'

export default function useAuth() {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  async function login() {
    try {
      setLoading(true)
      const u = await firebase.login(email, password)
      setUser(u)
      navigate("/home")
    } catch (error) {
      setError((error).message)
    } finally {
      setLoading(false)
    }
  }

  function clear() {
    setError(undefined)
  }

  return { user, email, password, error, loading, setEmail, setPassword, login, clear }
}