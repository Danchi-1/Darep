import { useState } from 'react'
import { Upload, Database, X } from 'lucide-react'
import FileUploader from './FileUploader'
import DBConnector from './DBConnector'

const TABS = [
  { id: 'file', label: 'Upload File', icon: Upload },
  { id: 'database', label: 'Connect Database', icon: Database },
]

export default function SetupModal({ open, onClose }) {
  const [activeTab, setActiveTab] = useState('file')

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 dark:bg-slate-900/80 p-4 backdrop-blur-sm">
      <div
        className="w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-transparent dark:border-slate-800 transition-colors duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="setup-title"
      >
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-6 py-4">
          <div>
            <h2 id="setup-title" className="text-lg font-semibold text-slate-900 dark:text-white">
              Get started with Darep
            </h2>
            <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
              Upload a file or connect to a database to begin analysing data.
            </p>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="rounded-full p-2 text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="flex border-b border-slate-100 dark:border-slate-800 px-6">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === id
                  ? 'border-black text-black dark:border-white dark:text-white'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        <div className="px-6 py-5">
          {activeTab === 'file' ? <FileUploader /> : <DBConnector />}
        </div>
      </div>
    </div>
  )
}
