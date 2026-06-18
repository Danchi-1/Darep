import { RotateCcw } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../shared/Button'
import ThemeToggle from '../shared/ThemeToggle'
import { formatSourceLabel, formatColumnCount, formatRowCount } from '../../utils/formatters'

export default function TopBar({ isConnected, sourceType, sourceLabel, columnCount, rowCount, onNewSession }) {
  return (
    <header className="fixed top-0 right-0 left-0 z-40 flex h-14 items-center justify-between border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black px-6 transition-colors duration-200">
      <div className="flex items-center gap-6">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img src="/favicon.svg" alt="Darep Logo" className="h-6 w-6" />
          <span className="text-lg font-semibold tracking-tight text-black dark:text-white">Darep</span>
        </Link>
        {isConnected && (
          <div className="flex items-center gap-2 rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            <span className="text-xs text-neutral-600 dark:text-neutral-300">
              {formatSourceLabel(sourceType, sourceLabel)}
            </span>
            {(columnCount != null || rowCount != null) && (
              <span className="text-xs text-neutral-500">
                · {formatColumnCount(columnCount)} · {formatRowCount(rowCount)}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        {isConnected && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onNewSession}
            className="text-neutral-300 hover:bg-neutral-800 hover:text-white dark:hover:bg-neutral-800"
          >
            <RotateCcw className="h-4 w-4" />
            New Session
          </Button>
        )}
        <ThemeToggle className="text-neutral-300 hover:bg-neutral-800 hover:text-white dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-50" />
      </div>
    </header>
  )
}
