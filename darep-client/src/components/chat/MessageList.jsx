import { useEffect, useRef } from 'react'
import MessageBubble from './MessageBubble'
import TypingIndicator from './TypingIndicator'

export default function MessageList({
  messages,
  isLoading,
  activeResultIndex,
  onSelectResult,
}) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  if (messages.length === 0 && !isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center px-6">
        <p className="text-center text-sm text-slate-400">
          Ask a question about your data to get started.
        </p>
      </div>
    )
  }

  return (
    <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
      {messages.map((message, index) => (
        <MessageBubble
          key={message.id}
          message={message}
          isActive={message.role === 'assistant' && index === activeResultIndex}
          onSelect={() => onSelectResult(index)}
        />
      ))}
      {isLoading && <TypingIndicator />}
      <div ref={bottomRef} />
    </div>
  )
}
