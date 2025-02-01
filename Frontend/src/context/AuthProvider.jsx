import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const initialUserState = Cookies.get('jwt') || localStorage.getItem('ChatApp')
    if (initialUserState) {
      setAuthUser(JSON.parse(initialUserState))
    }
  }, [])
  const logout = () => {
    Cookies.remove('jwt')
    localStorage.removeItem('ChatApp')
    setAuthUser(null)
    
  }

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => React.useContext(AuthContext);

