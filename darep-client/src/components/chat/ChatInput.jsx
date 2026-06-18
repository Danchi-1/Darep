import { useState, useRef } from 'react'
import { Send } from 'lucide-react'
import Button from '../shared/Button'

export default function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState('')
  const textareaRef = useRef(null)

  const handleSend = () => {
    const trimmed = value.trim()
    if (!trimmed || disabled) return
    onSend(trimmed)
    setValue('')
    textareaRef.current?.focus()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black p-4 transition-colors duration-200">
      <div className="flex items-end gap-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 p-2 focus-within:border-black focus-within:ring-2 focus-within:ring-black/20 dark:focus-within:border-white dark:focus-within:ring-white/20 transition-colors">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question about your data…"
          rows={1}
          disabled={disabled}
          className="max-h-32 min-h-[40px] flex-1 resize-none bg-transparent px-2 py-2 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          style={{ fieldSizing: 'content' }}
        />
        <Button
          size="sm"
          onClick={handleSend}
          disabled={disabled || !value.trim()}
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
      <p className="mt-1.5 text-xs text-neutral-400 dark:text-neutral-500">
        Enter to send · Shift+Enter for new line
      </p>
    </div>
  )
}
