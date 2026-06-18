import TopBar from '../layout/TopBar'
import { Database, FileSpreadsheet, Play } from 'lucide-react'
import Button from '../shared/Button'

export default function HistoryPage() {
  const mockSessions = [
    { id: 1, name: 'Q1 Sales Data.csv', type: 'file', date: '2 hours ago', queries: 12 },
    { id: 2, name: 'Production DB (PostgreSQL)', type: 'database', date: 'Yesterday', queries: 45 },
    { id: 3, name: 'Customer Feedback.xlsx', type: 'file', date: '3 days ago', queries: 8 },
    { id: 4, name: 'Marketing Metrics DB', type: 'database', date: 'Last week', queries: 24 },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 dark:bg-neutral-900 transition-colors duration-200">
      <TopBar />

      <main className="flex-1 pt-20 px-6 max-w-6xl mx-auto w-full">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Session History</h1>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">View and resume your past analysis sessions.</p>
          </div>
        </div>

        <div className="bg-white dark:bg-black rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden transition-colors duration-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
              <tr>
                <th className="px-6 py-4 font-medium text-neutral-900 dark:text-neutral-200">Data Source</th>
                <th className="px-6 py-4 font-medium text-neutral-900 dark:text-neutral-200">Last Active</th>
                <th className="px-6 py-4 font-medium text-neutral-900 dark:text-neutral-200">Queries</th>
                <th className="px-6 py-4 font-medium text-neutral-900 dark:text-neutral-200 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
              {mockSessions.map((session) => (
                <tr key={session.id} className="hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                        {session.type === 'file' ? (
                          <FileSpreadsheet className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
                        ) : (
                          <Database className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
                        )}
                      </div>
                      <span className="font-medium text-neutral-900 dark:text-white">{session.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{session.date}</td>
                  <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{session.queries}</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm" className="text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800">
                      <Play className="mr-2 h-4 w-4" />
                      Resume
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
