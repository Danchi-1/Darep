import { useCallback, useRef, useState } from 'react'
import { Upload, FileSpreadsheet } from 'lucide-react'
import { useUpload } from '../../hooks/useUpload'
import Spinner from '../shared/Spinner'

const ACCEPTED_TYPES = '.csv,.xlsx,.xls,.json,.parquet'

export default function FileUploader({ onSuccess }) {
  const { upload, progress, isUploading, error, reset } = useUpload()
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef(null)

  const handleFile = useCallback(
    async (file) => {
      reset()
      const result = await upload(file)
      if (result) onSuccess?.()
    },
    [upload, reset, onSuccess],
  )

  const onDrop = useCallback(
    (e) => {
      e.preventDefault()
      setIsDragging(false)
      const file = e.dataTransfer.files?.[0]
      if (file) handleFile(file)
    },
    [handleFile],
  )

  const onDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const onDragLeave = () => setIsDragging(false)

  return (
    <div className="space-y-4">
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-10 transition-colors ${
          isDragging
            ? 'border-indigo-accent bg-indigo-50'
            : 'border-slate-200 bg-slate-50 hover:border-indigo-accent/50 hover:bg-indigo-50/50'
        } ${isUploading ? 'pointer-events-none opacity-70' : ''}`}
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
          {isUploading ? (
            <Spinner />
          ) : (
            <Upload className="h-6 w-6 text-indigo-accent" />
          )}
        </div>
        <p className="text-sm font-medium text-slate-900">
          {isUploading ? 'Uploading…' : 'Drop a file here or click to browse'}
        </p>
        <p className="mt-1 text-xs text-slate-500">
          CSV, Excel, JSON, Parquet · Max 50MB
        </p>
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED_TYPES}
          className="hidden"
          disabled={isUploading}
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) handleFile(file)
            e.target.value = ''
          }}
        />
      </div>

      {isUploading && (
        <div className="space-y-1">
          <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-indigo-accent transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-slate-500">{progress}% uploaded</p>
        </div>
      )}

      {error && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
      )}

      <div className="flex items-start gap-2 rounded-lg bg-slate-50 px-3 py-2">
        <FileSpreadsheet className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
        <p className="text-xs text-slate-500">
          Upload a dataset to start asking questions. Darep will analyse your data and
          return charts, tables, and code.
        </p>
      </div>
    </div>
  )
}
