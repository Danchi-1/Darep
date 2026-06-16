export default function Spinner({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'h-4 w-4 border-2',
    md: 'h-5 w-5 border-2',
    lg: 'h-8 w-8 border-[3px]',
  }

  return (
    <div
      className={`animate-spin rounded-full border-indigo-accent/30 border-t-indigo-accent ${sizes[size]} ${className}`}
      role="status"
      aria-label="Loading"
    />
  )
}
