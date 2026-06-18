export default function MessageBubble({ message, isActive, onSelect }) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <button
        type="button"
        onClick={!isUser && message.result ? onSelect : undefined}
        disabled={isUser || !message.result}
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-left text-sm leading-relaxed transition-colors ${
          isUser
            ? 'bg-black dark:bg-white text-white dark:text-black'
            : `bg-neutral-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-transparent dark:border-slate-700 ${
                message.result
                  ? 'cursor-pointer hover:bg-neutral-200 dark:hover:bg-slate-700'
                  : 'cursor-default'
              } ${isActive ? 'ring-2 ring-black dark:ring-white ring-offset-2 dark:ring-offset-black' : ''} ${
                message.isError ? 'border border-red-200 dark:border-red-500/50 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-400' : ''
              }`
        }`}
      >
        <p className="whitespace-pre-wrap break-words">{message.content}</p>
      </button>
    </div>
  )
}
