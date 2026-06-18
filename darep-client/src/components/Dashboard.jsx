import { useState, useEffect } from 'react'
import AppShell from './layout/AppShell'
import SetupModal from './session/SetupModal'
import ChatPanel from './chat/ChatPanel'
import ResultsPanel from './results/ResultsPanel'
import EmptyState from './shared/EmptyState'
import Button from './shared/Button'
import { MessageSquare, BarChart3, Plus } from 'lucide-react'
import { useSession } from '../context/SessionContext'
import { useChatContext } from '../context/ChatContext'
import { SessionProvider } from '../context/SessionContext'
import { ChatProvider } from '../context/ChatContext'

function DisconnectedChatPlaceholder({ onOpenSetup }) {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col">
      <div className="border-b border-neutral-100 px-4 py-3">
        <h2 className="text-sm font-semibold text-neutral-900">Chat</h2>
      </div>
      <EmptyState
        icon={MessageSquare}
        title="Connect a data source"
        description="Upload a file or connect to a database to start chatting with your data."
        action={
          <Button onClick={onOpenSetup} className="bg-black hover:bg-neutral-800 text-white dark:bg-white dark:text-black dark:hover:bg-neutral-200">
            <Plus className="mr-2 h-4 w-4" />
            Add Data Source
          </Button>
        }
      />
    </div>
  )
}

function DisconnectedResultsPlaceholder() {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col">
      <div className="border-b border-neutral-100 px-4 py-3">
        <h2 className="text-sm font-semibold text-neutral-900">Results</h2>
      </div>
      <EmptyState
        icon={BarChart3}
        title="Results will appear here"
        description="Charts, tables, and generated code from your analysis will show in this panel."
      />
    </div>
  )
}

function DashboardContent({ isDemo }) {
  const {
    isConnected,
    sourceType,
    sourceLabel,
    columnCount,
    rowCount,
    clearSession,
    setSession,
  } = useSession()
  const { clearChat } = useChatContext()
  
  useEffect(() => {
    if (isDemo && !isConnected) {
      setSession({
        sessionId: 'demo-session-123',
        sourceType: 'file',
        sourceLabel: 'Sample Sales Data.csv',
        columnCount: 15,
        rowCount: 5000
      })
    }
  }, [isDemo, isConnected, setSession])
  
  // Do not auto-open the setup modal, let the user see the dashboard first
  const [isSetupOpen, setIsSetupOpen] = useState(false)

  // Auto-close modal when connected
  useEffect(() => {
    if (isConnected) {
      setIsSetupOpen(false)
    }
  }, [isConnected])

  const handleNewSession = () => {
    clearSession()
    clearChat()
    setIsSetupOpen(true)
  }

  return (
    <>
      <AppShell
        isDemo={isDemo}
        isConnected={isConnected}
        sourceType={sourceType}
        sourceLabel={sourceLabel}
        columnCount={columnCount}
        rowCount={rowCount}
        onNewSession={handleNewSession}
        chatPanel={isConnected ? <ChatPanel /> : <DisconnectedChatPlaceholder onOpenSetup={() => setIsSetupOpen(true)} />}
        resultsPanel={isConnected ? <ResultsPanel /> : <DisconnectedResultsPlaceholder />}
      />
      <SetupModal open={isSetupOpen} onClose={() => setIsSetupOpen(false)} />
    </>
  )
}

export default function Dashboard({ isDemo }) {
  return (
    <SessionProvider>
      <ChatProvider>
        <DashboardContent isDemo={isDemo} />
      </ChatProvider>
    </SessionProvider>
  )
}
