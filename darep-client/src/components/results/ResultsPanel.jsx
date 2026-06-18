import { lazy, Suspense, useState } from 'react'
import { BarChart3, Table2, Code2 } from 'lucide-react'
import { useChatContext } from '../../context/ChatContext'
import { getDefaultTab, hasChart, hasTable, hasCode } from '../../utils/chartParser'
import TableView from './TableView'
import CodeBlock from './CodeBlock'
import InsightCard from './InsightCard'
import EmptyState from '../shared/EmptyState'
import Spinner from '../shared/Spinner'

const ChartView = lazy(() => import('./ChartView'))

const TABS = [
  { id: 'chart', label: 'Chart', icon: BarChart3 },
  { id: 'table', label: 'Table', icon: Table2 },
  { id: 'code', label: 'Code', icon: Code2 },
]

function ResultsSkeleton() {
  return (
    <div className="animate-pulse space-y-4 p-6">
      <div className="h-8 w-48 rounded bg-slate-200 dark:bg-slate-700" />
      <div className="h-[400px] rounded-lg bg-slate-200 dark:bg-slate-700" />
      <div className="space-y-2">
        <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-700" />
        <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />
      </div>
    </div>
  )
}

export default function ResultsPanel() {
  const { messages, isLoading, activeResultIndex } = useChatContext()
  const [activeTab, setActiveTab] = useState('code')
  const [trackedIndex, setTrackedIndex] = useState(activeResultIndex)

  const activeMessage =
    activeResultIndex != null ? messages[activeResultIndex] : null
  const result = activeMessage?.result

  if (trackedIndex !== activeResultIndex) {
    setTrackedIndex(activeResultIndex)
    setActiveTab(result ? getDefaultTab(result) : 'code')
  }

  const tabAvailable = {
    chart: hasChart(result),
    table: hasTable(result),
    code: hasCode(result),
  }

  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col bg-white dark:bg-slate-900 transition-colors duration-200">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-4 py-3">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Results</h2>
        <div className="flex gap-1">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              disabled={!tabAvailable[id]}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                activeTab === id
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : tabAvailable[id]
                    ? 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    : 'cursor-not-allowed text-slate-300 dark:text-slate-600'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {isLoading ? (
          <ResultsSkeleton />
        ) : !result ? (
          <EmptyState
            icon={BarChart3}
            title="No results yet"
            description="Ask a question in the chat panel. Charts, tables, and code will appear here."
          />
        ) : (
          <div className="space-y-4">
            {result.insight && <InsightCard insight={result.insight} />}

            {activeTab === 'chart' && (
              <Suspense
                fallback={
                  <div className="flex h-[400px] items-center justify-center">
                    <Spinner size="lg" />
                  </div>
                }
              >
                <ChartView result={result} />
              </Suspense>
            )}
            {activeTab === 'table' && <TableView result={result} />}
            {activeTab === 'code' && (
              result.code ? (
                <CodeBlock code={result.code} language={result.language || 'python'} />
              ) : (
                <EmptyState
                  icon={Code2}
                  title="No code available"
                  description="This result does not include generated code."
                />
              )
            )}
          </div>
        )}
      </div>
    </div>
  )
}
