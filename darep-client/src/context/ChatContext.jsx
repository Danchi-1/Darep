/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from 'react'

const initialState = {
  messages: [],
  isLoading: false,
  activeResultIndex: null,
}

function chatReducer(state, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    case 'SET_ACTIVE_RESULT':
      return { ...state, activeResultIndex: action.payload }
    case 'CLEAR_CHAT':
      return { ...initialState }
    default:
      return state
  }
}

const ChatContext = createContext(null)

export function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(chatReducer, initialState)

  const addMessage = (message) => dispatch({ type: 'ADD_MESSAGE', payload: message })
  const setLoading = (loading) => dispatch({ type: 'SET_LOADING', payload: loading })
  const setActiveResultIndex = (index) =>
    dispatch({ type: 'SET_ACTIVE_RESULT', payload: index })
  const clearChat = () => dispatch({ type: 'CLEAR_CHAT' })

  return (
    <ChatContext.Provider
      value={{
        ...state,
        addMessage,
        setLoading,
        setActiveResultIndex,
        clearChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export function useChatContext() {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error('useChatContext must be used within ChatProvider')
  }
  return context
}
