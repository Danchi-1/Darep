import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL || '/api'

const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
})

export async function uploadFile(file, onProgress) {
  const formData = new FormData()
  formData.append('file', file)

  const { data } = await api.post('/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress: (event) => {
      if (onProgress && event.total) {
        onProgress(Math.round((event.loaded * 100) / event.total))
      }
    },
  })
  return data
}

export async function sendChat(sessionId, message) {
  const { data } = await api.post('/chat', { session_id: sessionId, message })
  return data
}

export async function testConnection(config) {
  const { data } = await api.post('/connect/test', config)
  return data
}

export async function connectDatabase(config) {
  const { data } = await api.post('/connect', config)
  return data
}

export function getErrorMessage(error) {
  if (error.response?.data?.detail) {
    const detail = error.response.data.detail
    if (typeof detail === 'string') return detail
    if (Array.isArray(detail)) {
      return detail.map((d) => d.msg || d.message || String(d)).join(', ')
    }
    if (typeof detail === 'object') return detail.message || JSON.stringify(detail)
  }
  if (error.response?.data?.message) return error.response.data.message
  if (error.message === 'Network Error') return 'Unable to reach the server. Check your connection.'
  return error.message || 'Something went wrong'
}

export default api
