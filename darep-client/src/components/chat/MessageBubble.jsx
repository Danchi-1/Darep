export default function MessageBubble({ message, isActive, onSelect }) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <button
        type="button"
        onClick={!isUser && message.result ? onSelect : undefined}
        disabled={isUser || !message.result}
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-left text-sm leading-relaxed ${
          isUser
            ? 'bg-indigo-600 text-white'
            : `bg-neutral-100 text-slate-800 ${
                message.result
                  ? 'cursor-pointer hover:bg-neutral-200'
                  : 'cursor-default'
              } ${isActive ? 'ring-2 ring-indigo-accent ring-offset-2' : ''} ${
                message.isError ? 'border border-red-200 bg-red-50 text-red-800' : ''
              }`
        }`}
      >
        <p className="whitespace-pre-wrap break-words">{message.content}</p>
      </button>
    </div>
  )
}
