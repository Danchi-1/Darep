export default function Spinner({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'h-3.5 w-3.5 border-2',
    md: 'h-5 w-5 border-2',
    lg: 'h-8 w-8 border-[3px]',
  }

  return (
    <div
      className={`animate-spin rounded-full border-slate-300 border-t-black dark:border-slate-600 dark:border-t-white ${sizes[size]} ${className}`}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
