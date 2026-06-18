import { useRef } from 'react'
import Plot from 'react-plotly.js'
import Plotly from 'plotly.js'
import { Download } from 'lucide-react'
import { parseChartData } from '../../utils/chartParser'
import EmptyState from '../shared/EmptyState'
import { BarChart3 } from 'lucide-react'

export default function ChartView({ result }) {
  const graphDivRef = useRef(null)
  const chartData = parseChartData(result)

  if (!chartData) {
    return (
      <EmptyState
        icon={BarChart3}
        title="No chart available"
        description="This result does not include chart data."
      />
    )
  }

  const handleDownload = () => {
    if (!graphDivRef.current) return

    Plotly.toImage(graphDivRef.current, {
      format: 'png',
      width: 1200,
      height: 600,
    }).then((url) => {
      const link = document.createElement('a')
      link.href = url
      link.download = 'darep-chart.png'
      link.click()
    })
  }

  return (
    <div className="flex h-full flex-col">
      <div className="mb-3 flex justify-end">
        <button
          type="button"
          onClick={handleDownload}
          className="flex items-center gap-1.5 text-xs font-medium text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300"
        >
          <Download className="h-3.5 w-3.5" />
          Download PNG
        </button>
      </div>
      <div className="h-[400px] w-full">
        <Plot
          data={chartData.data}
          layout={{
            ...chartData.layout,
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            font: {
              ...chartData.layout?.font,
              color: 'currentColor',
            }
          }}
          config={chartData.config}
          useResizeHandler
          style={{ width: '100%', height: '100%' }}
          onInitialized={(_figure, graphDiv) => {
            graphDivRef.current = graphDiv
          }}
        />
      </div>
    </div>
  )
}
