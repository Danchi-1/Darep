import { useState, useCallback } from 'react'
import toast from 'react-hot-toast'
import { testConnection, connectDatabase, getErrorMessage } from '../services/api'
import { useSession } from '../context/SessionContext'

export function useDBConnect() {
  const { setSession } = useSession()
  const [isTesting, setIsTesting] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [testPassed, setTestPassed] = useState(false)
  const [error, setError] = useState(null)

  const test = useCallback(async (config) => {
    setError(null)
    setTestPassed(false)
    setIsTesting(true)

    try {
      const data = await testConnection(config)
      if (data.success === false) {
        const message = data.message || 'Connection test failed'
        setError(message)
        return false
      }
      setTestPassed(true)
      toast.success('Connection test successful')
      return true
    } catch (err) {
      const message = getErrorMessage(err)
      setError(message)
      toast.error(message)
      return false
    } finally {
      setIsTesting(false)
    }
  }, [])

  const connect = useCallback(
    async (config) => {
      if (!testPassed) return null

      setError(null)
      setIsConnecting(true)

      try {
        const data = await connectDatabase(config)

        const label =
          config.db_type === 'sqlite'
            ? config.database || 'SQLite'
            : `${config.host}/${config.database}`

        setSession({
          sessionId: data.session_id,
          sourceType: 'database',
          sourceLabel: label,
          columnCount: data.column_count,
          rowCount: data.row_count,
        })

        toast.success('Connected to database')
        return data
      } catch (err) {
        const message = getErrorMessage(err)
        setError(message)
        toast.error(message)
        return null
      } finally {
        setIsConnecting(false)
      }
    },
    [setSession, testPassed],
  )

  const reset = useCallback(() => {
    setTestPassed(false)
    setError(null)
    setIsTesting(false)
    setIsConnecting(false)
  }, [])

  return {
    test,
    connect,
    isTesting,
    isConnecting,
    testPassed,
    error,
    reset,
    setTestPassed,
  }
}
