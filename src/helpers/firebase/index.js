import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { useState, useEffect, useContext, createContext } from 'react'

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBRCFkRrrOp2O-pou1JLaZ0-yewhA6JvJI",
  authDomain: "mcga-final-scarabino.firebaseapp.com",
  projectId: "mcga-final-scarabino",
  storageBucket: "mcga-final-scarabino.appspot.com",
  messagingSenderId: "521387069930",
  appId: "1:521387069930:web:f06f7ba3107b4bfca0a293",
  measurementId: "G-ZCDK5DPYMB"
})

export const AuthContext = createContext()

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth.user != null }
}