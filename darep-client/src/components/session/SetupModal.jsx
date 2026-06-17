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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm">
      <div
        className="w-full max-w-lg rounded-2xl bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="setup-title"
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div>
            <h2 id="setup-title" className="text-lg font-semibold text-slate-900">
              Get started with Darep
            </h2>
            <p className="mt-0.5 text-sm text-slate-500">
              Upload a file or connect to a database to begin analysing data.
            </p>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="flex border-b border-slate-100 px-6">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === id
                  ? 'border-indigo-accent text-indigo-accent'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
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
