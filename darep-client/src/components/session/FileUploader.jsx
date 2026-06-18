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
            ? 'border-black bg-slate-100 dark:bg-slate-800 dark:border-white'
            : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-black/50 dark:hover:border-white/50 hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
        } ${isUploading ? 'pointer-events-none opacity-70' : ''}`}
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm dark:shadow-none border border-transparent dark:border-slate-700">
          {isUploading ? (
            <Spinner />
          ) : (
            <Upload className="h-6 w-6 text-black dark:text-white" />
          )}
        </div>
        <p className="text-sm font-medium text-slate-900 dark:text-white">
          {isUploading ? 'Uploading…' : 'Drop a file here or click to browse'}
        </p>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
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
          <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <div
              className="h-full rounded-full bg-black dark:bg-white transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">{progress}% uploaded</p>
        </div>
      )}

      {error && (
        <p className="rounded-lg bg-red-50 dark:bg-red-900/20 px-3 py-2 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}

      <div className="flex items-start gap-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 px-3 py-2">
        <FileSpreadsheet className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 dark:text-slate-500" />
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Upload a dataset to start asking questions. Darep will analyse your data and
          return charts, tables, and code.
        </p>
      </div>
    </div>
  )
}
