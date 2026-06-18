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
        <label htmlFor={inputId} className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`rounded-lg border px-3 py-2 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 bg-white dark:bg-neutral-800 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:border-white dark:focus:ring-white/20 disabled:cursor-not-allowed disabled:bg-neutral-50 dark:disabled:bg-neutral-900 transition-colors ${
          error ? 'border-red-400 dark:border-red-500/50' : 'border-neutral-200 dark:border-neutral-700'
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
        <label htmlFor={selectId} className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={`rounded-lg border px-3 py-2 text-sm text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-800 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:border-white dark:focus:ring-white/20 disabled:cursor-not-allowed disabled:bg-neutral-50 dark:disabled:bg-neutral-900 transition-colors ${
          error ? 'border-red-400 dark:border-red-500/50' : 'border-neutral-200 dark:border-neutral-700'
        } ${className}`}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}
    </div>
  )
}
