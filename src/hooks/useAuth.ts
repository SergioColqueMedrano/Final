import { User } from "firebase/auth";
import { useState } from "react";
import * as firebase from "../utils/firebase";

export default function useAuth() {
  const [user, setUser] = useState<User | undefined>(undefined)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | undefined>()
  const [loading, setLoading] = useState(false)
  async function login() {
    try {
      setLoading(true)
      const u = await firebase.login(email, password)
      setUser(u)
    } catch (error) {
      setError((error as Error).message)
    } finally {
      setLoading(false)
    }
  }

  function clear() {
    setError(undefined)
  }

  return { user, email, password, error, loading, setEmail, setPassword, login, clear }
}