import { useCallback } from 'react'
import toast from 'react-hot-toast'
import { sendChat, getErrorMessage } from '../services/api'
import { useSession } from '../context/SessionContext'
import { useChatContext } from '../context/ChatContext'

export function useChat() {
  const { sessionId } = useSession()
  const {
    messages,
    isLoading,
    addMessage,
    setLoading,
    setActiveResultIndex,
  } = useChatContext()

  const sendMessage = useCallback(
    async (content) => {
      const trimmed = content.trim()
      if (!trimmed || isLoading || !sessionId) return

      const userMessage = {
        id: crypto.randomUUID(),
        role: 'user',
        content: trimmed,
      }
      addMessage(userMessage)
      setLoading(true)

      try {
        const data = await sendChat(sessionId, trimmed)

        const assistantMessage = {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: data.message || data.response || '',
          result: data.result || null,
        }
        addMessage(assistantMessage)

        const newIndex = messages.length + 1
        setActiveResultIndex(newIndex)
      } catch (err) {
        const message = getErrorMessage(err)
        toast.error(message)

        addMessage({
          id: crypto.randomUUID(),
          role: 'assistant',
          content: `Sorry, something went wrong: ${message}`,
          result: null,
          isError: true,
        })
      } finally {
        setLoading(false)
      }
    },
    [
      sessionId,
      isLoading,
      messages.length,
      addMessage,
      setLoading,
      setActiveResultIndex,
    ],
  )

  const { activeResultIndex } = useChatContext()

  return { messages, isLoading, activeResultIndex, sendMessage, setActiveResultIndex }
}
