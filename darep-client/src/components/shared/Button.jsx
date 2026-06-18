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
      'bg-black text-white hover:bg-neutral-800 focus-visible:ring-black dark:bg-white dark:text-black dark:hover:bg-neutral-200 dark:focus-visible:ring-white',
    secondary:
      'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:ring-neutral-500 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:focus-visible:ring-neutral-400',
    ghost:
      'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-400',
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
