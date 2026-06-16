/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from 'react'

const initialState = {
  sessionId: null,
  isConnected: false,
  sourceType: null,
  sourceLabel: null,
  columnCount: null,
  rowCount: null,
}

function sessionReducer(state, action) {
  switch (action.type) {
    case 'SET_SESSION':
      return {
        ...state,
        sessionId: action.payload.sessionId,
        isConnected: true,
        sourceType: action.payload.sourceType,
        sourceLabel: action.payload.sourceLabel,
        columnCount: action.payload.columnCount ?? null,
        rowCount: action.payload.rowCount ?? null,
      }
    case 'CLEAR_SESSION':
      return { ...initialState }
    default:
      return state
  }
}

const SessionContext = createContext(null)

export function SessionProvider({ children }) {
  const [state, dispatch] = useReducer(sessionReducer, initialState)

  const setSession = (payload) => dispatch({ type: 'SET_SESSION', payload })
  const clearSession = () => dispatch({ type: 'CLEAR_SESSION' })

  return (
    <SessionContext.Provider value={{ ...state, setSession, clearSession }}>
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  const context = useContext(SessionContext)
  if (!context) {
    throw new Error('useSession must be used within SessionProvider')
  }
  return context
}
