import { useState, useCallback } from 'react'
import toast from 'react-hot-toast'
import { uploadFile, getErrorMessage } from '../services/api'
import { useSession } from '../context/SessionContext'

const MAX_FILE_SIZE = 50 * 1024 * 1024

export function useUpload() {
  const { setSession } = useSession()
  const [progress, setProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState(null)

  const upload = useCallback(
    async (file) => {
      setError(null)

      if (!file) {
        setError('Please select a file')
        return null
      }

      if (file.size > MAX_FILE_SIZE) {
        const message = 'File exceeds the 50MB limit'
        setError(message)
        return null
      }

      setIsUploading(true)
      setProgress(0)

      try {
        const data = await uploadFile(file, setProgress)

        setSession({
          sessionId: data.session_id,
          sourceType: 'file',
          sourceLabel: file.name,
          columnCount: data.column_count,
          rowCount: data.row_count,
        })

        toast.success('File uploaded successfully')
        return data
      } catch (err) {
        const message = getErrorMessage(err)
        setError(message)
        toast.error(message)
        return null
      } finally {
        setIsUploading(false)
        setProgress(0)
      }
    },
    [setSession],
  )

  const reset = useCallback(() => {
    setError(null)
    setProgress(0)
    setIsUploading(false)
  }, [])

  return { upload, progress, isUploading, error, reset }
}
