export function parseChartData(result) {
  if (!result?.chart) return null

  const chart = result.chart

  if (chart.data && chart.layout) {
    return {
      data: chart.data,
      layout: {
        ...chart.layout,
        autosize: true,
        margin: { t: 40, r: 20, b: 40, l: 50 },
      },
      config: {
        displayModeBar: true,
        displaylogo: false,
        responsive: true,
      },
    }
  }

  if (Array.isArray(chart)) {
    return {
      data: chart,
      layout: {
        autosize: true,
        margin: { t: 40, r: 20, b: 40, l: 50 },
      },
      config: {
        displayModeBar: true,
        displaylogo: false,
        responsive: true,
      },
    }
  }

  if (chart.type && chart.x && chart.y) {
    return {
      data: [
        {
          type: chart.type,
          x: chart.x,
          y: chart.y,
          name: chart.name,
          marker: chart.marker,
        },
      ],
      layout: {
        title: chart.title || '',
        autosize: true,
        margin: { t: 40, r: 20, b: 40, l: 50 },
      },
      config: {
        displayModeBar: true,
        displaylogo: false,
        responsive: true,
      },
    }
  }

  return null
}

export function hasChart(result) {
  return parseChartData(result) !== null
}

export function hasTable(result) {
  if (!result?.table) return false
  const { columns, rows } = result.table
  return Array.isArray(columns) && columns.length > 0 && Array.isArray(rows)
}

export function hasCode(result) {
  return Boolean(result?.code?.trim())
}

export function getDefaultTab(result) {
  if (hasChart(result)) return 'chart'
  if (hasTable(result)) return 'table'
  if (hasCode(result)) return 'code'
  return 'code'
}
