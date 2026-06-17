import { RotateCcw } from 'lucide-react'
import Button from '../shared/Button'
import { formatSourceLabel, formatColumnCount, formatRowCount } from '../../utils/formatters'

export default function TopBar({ isConnected, sourceType, sourceLabel, columnCount, rowCount, onNewSession }) {
  return (
    <header className="fixed top-0 right-0 left-0 z-40 flex h-14 items-center justify-between border-b border-slate-800 bg-navy px-6">
      <div className="flex items-center gap-3">
        <img src="/favicon.svg" alt="Darep Logo" className="h-6 w-6" />
        <span className="text-lg font-semibold tracking-tight text-white">Darep</span>
        {isConnected && (
          <div className="flex items-center gap-2 rounded-full bg-slate-800/60 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            <span className="text-xs text-slate-300">
              {formatSourceLabel(sourceType, sourceLabel)}
            </span>
            {(columnCount != null || rowCount != null) && (
              <span className="text-xs text-slate-500">
                · {formatColumnCount(columnCount)} · {formatRowCount(rowCount)}
              </span>
            )}
          </div>
        )}
      </div>

      {isConnected && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onNewSession}
          className="text-slate-300 hover:bg-slate-800 hover:text-white"
        >
          <RotateCcw className="h-4 w-4" />
          New Session
        </Button>
      )}
    </header>
  )
}
