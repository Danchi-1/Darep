/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react'

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
}

function getStoredAuth() {
  try {
    const token = localStorage.getItem('auth_token')
    const user = localStorage.getItem('auth_user')
    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
        isAuthenticated: true,
        isLoading: false,
      }
    }
  } catch (error) {
    console.error('Error reading auth from storage:', error)
  }
  return { ...initialState, isLoading: false }
}

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [state, setState] = useState(getStoredAuth)

  const login = (token, user) => {
    localStorage.setItem('auth_token', token)
    localStorage.setItem('auth_user', JSON.stringify(user))
    setState({
      user,
      token,
      isAuthenticated: true,
      isLoading: false,
    })
  }

  const logout = () => {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('auth_user')
    setState({ ...initialState, isLoading: false })
  }

  const updateUser = (user) => {
    localStorage.setItem('auth_user', JSON.stringify(user))
    setState((prev) => ({ ...prev, user }))
  }

  return (
    <AuthContext.Provider value={{ ...state, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
