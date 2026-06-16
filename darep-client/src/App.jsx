import AppShell from './components/layout/AppShell'
import SetupModal from './components/session/SetupModal'
import ChatPanel from './components/chat/ChatPanel'
import ResultsPanel from './components/results/ResultsPanel'
import EmptyState from './components/shared/EmptyState'
import { MessageSquare, BarChart3 } from 'lucide-react'
import { useSession } from './context/SessionContext'
import { useChatContext } from './context/ChatContext'

function DisconnectedChatPlaceholder() {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col">
      <div className="border-b border-slate-100 px-4 py-3">
        <h2 className="text-sm font-semibold text-slate-900">Chat</h2>
      </div>
      <EmptyState
        icon={MessageSquare}
        title="Connect a data source"
        description="Upload a file or connect to a database to start chatting with your data."
      />
    </div>
  )
}

function DisconnectedResultsPlaceholder() {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col">
      <div className="border-b border-slate-100 px-4 py-3">
        <h2 className="text-sm font-semibold text-slate-900">Results</h2>
      </div>
      <EmptyState
        icon={BarChart3}
        title="Results will appear here"
        description="Charts, tables, and generated code from your analysis will show in this panel."
      />
    </div>
  )
}

export default function App() {
  const {
    isConnected,
    sourceType,
    sourceLabel,
    columnCount,
    rowCount,
    clearSession,
  } = useSession()
  const { clearChat } = useChatContext()

  const handleNewSession = () => {
    clearSession()
    clearChat()
  }

  return (
    <>
      <AppShell
        isConnected={isConnected}
        sourceType={sourceType}
        sourceLabel={sourceLabel}
        columnCount={columnCount}
        rowCount={rowCount}
        onNewSession={handleNewSession}
        chatPanel={isConnected ? <ChatPanel /> : <DisconnectedChatPlaceholder />}
        resultsPanel={isConnected ? <ResultsPanel /> : <DisconnectedResultsPlaceholder />}
      />
      <SetupModal open={!isConnected} />
    </>
  )
}
