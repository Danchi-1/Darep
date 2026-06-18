import { Table2 } from 'lucide-react'
import EmptyState from '../shared/EmptyState'
import { formatNumber } from '../../utils/formatters'

export default function TableView({ result }) {
  const table = result?.table

  if (!table?.columns?.length || !Array.isArray(table.rows)) {
    return (
      <EmptyState
        icon={Table2}
        title="No table available"
        description="This result does not include tabular data."
      />
    )
  }

  const { columns, rows } = table

  return (
    <div className="flex h-full flex-col">
      <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">
        {formatNumber(rows.length)} row{rows.length === 1 ? '' : 's'}
      </p>
      <div className="flex-1 overflow-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="min-w-full border-collapse text-sm">
          <thead className="sticky top-0 z-10 bg-slate-50 dark:bg-slate-800">
            <tr>
              {columns.map((col, i) => (
                <th
                  key={col}
                  className={`whitespace-nowrap border-b border-slate-200 dark:border-slate-700 px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300 ${
                    i === 0 ? 'sticky left-0 z-20 bg-slate-50 dark:bg-slate-800' : ''
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                {columns.map((col, colIndex) => (
                  <td
                    key={col}
                    className={`whitespace-nowrap border-b border-slate-100 dark:border-slate-800 px-4 py-2 text-slate-700 dark:text-slate-300 ${
                      colIndex === 0 ? 'sticky left-0 z-10 bg-white dark:bg-slate-900 group-hover:bg-slate-50 dark:group-hover:bg-slate-800' : ''
                    }`}
                  >
                    {row[col] ?? row[colIndex] ?? '—'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
