import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('shopzone_auth') === 'true'
  })

  useEffect(() => {
    localStorage.setItem('shopzone_auth', isAuthenticated)
  }, [isAuthenticated])

  function loginAsGuest() {
    setIsAuthenticated(true)
  }

  function logout() {
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginAsGuest, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}