import { Lightbulb } from 'lucide-react'

export default function InsightCard({ insight }) {
  if (!insight?.trim()) return null

  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
      <div className="mb-2 flex items-center gap-2">
        <Lightbulb className="h-4 w-4 text-amber-600" />
        <h4 className="text-sm font-semibold text-amber-900">Insight</h4>
      </div>
      <p className="text-sm leading-relaxed text-amber-800">{insight}</p>
    </div>
  )
}
