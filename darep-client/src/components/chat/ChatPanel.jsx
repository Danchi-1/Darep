import { MessageSquare } from 'lucide-react'
import EmptyState from '../shared/EmptyState'
import MessageList from './MessageList'
import ChatInput from './ChatInput'
import { useChat } from '../../hooks/useChat'

export default function ChatPanel() {
  const { messages, isLoading, activeResultIndex, sendMessage, setActiveResultIndex } =
    useChat()

  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col bg-white dark:bg-black transition-colors duration-200">
      <div className="border-b border-slate-100 dark:border-slate-800 px-4 py-3">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Chat</h2>
      </div>

      {messages.length === 0 && !isLoading ? (
        <EmptyState
          icon={MessageSquare}
          title="Start a conversation"
          description="Ask questions about your dataset in plain English. Darep will analyse the data and show results on the right."
        />
      ) : (
        <MessageList
          messages={messages}
          isLoading={isLoading}
          activeResultIndex={activeResultIndex}
          onSelectResult={setActiveResultIndex}
        />
      )}

      <ChatInput onSend={sendMessage} disabled={isLoading} />
    </div>
  )
}
