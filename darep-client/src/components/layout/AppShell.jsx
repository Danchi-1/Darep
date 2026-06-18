import TopBar from './TopBar'

export default function AppShell({
  isConnected,
  sourceType,
  sourceLabel,
  columnCount,
  rowCount,
  onNewSession,
  chatPanel,
  resultsPanel,
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black transition-colors duration-200">
      <TopBar
        isConnected={isConnected}
        sourceType={sourceType}
        sourceLabel={sourceLabel}
        columnCount={columnCount}
        rowCount={rowCount}
        onNewSession={onNewSession}
      />

      <main className="flex flex-1 pt-14">
        <div className="flex w-[45%] min-w-0 flex-col border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black transition-colors duration-200">
          {chatPanel}
        </div>
        <div className="flex w-[55%] min-w-0 flex-col bg-white dark:bg-black transition-colors duration-200">{resultsPanel}</div>
      </main>
    </div>
  )
}
