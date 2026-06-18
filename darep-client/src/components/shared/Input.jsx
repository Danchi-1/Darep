export default function Input({
  label,
  error,
  className = '',
  id,
  ...props
}) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`rounded-lg border px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 bg-white dark:bg-slate-800 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:border-white dark:focus:ring-white/20 disabled:cursor-not-allowed disabled:bg-slate-50 dark:disabled:bg-slate-900 transition-colors ${
          error ? 'border-red-400 dark:border-red-500/50' : 'border-slate-200 dark:border-slate-700'
        } ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}
    </div>
  )
}

export function Select({ label, error, className = '', id, children, ...props }) {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={`rounded-lg border px-3 py-2 text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:border-white dark:focus:ring-white/20 disabled:cursor-not-allowed disabled:bg-slate-50 dark:disabled:bg-slate-900 transition-colors ${
          error ? 'border-red-400 dark:border-red-500/50' : 'border-slate-200 dark:border-slate-700'
        } ${className}`}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}
    </div>
  )
}
