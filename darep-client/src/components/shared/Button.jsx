export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

  const variants = {
    primary:
      'bg-black text-white hover:bg-slate-800 focus-visible:ring-black dark:bg-white dark:text-black dark:hover:bg-slate-200 dark:focus-visible:ring-white',
    secondary:
      'bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-500 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 dark:focus-visible:ring-slate-400',
    ghost:
      'text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-slate-500 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-400',
  }

  const sizes = {
    sm: 'h-9 px-4 text-xs',
    md: 'h-10 px-5 text-sm',
    lg: 'h-11 px-8 text-base',
    icon: 'h-9 w-9 p-2',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
