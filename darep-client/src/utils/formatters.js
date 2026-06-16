export function formatNumber(value) {
  if (value == null || Number.isNaN(Number(value))) return '—'
  return new Intl.NumberFormat().format(value)
}

export function formatSourceLabel(sourceType, sourceLabel) {
  if (!sourceLabel) return 'No data source'
  const prefix = sourceType === 'database' ? 'DB' : 'File'
  return `${prefix}: ${sourceLabel}`
}

export function truncate(text, maxLength = 40) {
  if (!text || text.length <= maxLength) return text
  return `${text.slice(0, maxLength)}…`
}

export function formatRowCount(count) {
  if (count == null) return null
  return `${formatNumber(count)} row${count === 1 ? '' : 's'}`
}

export function formatColumnCount(count) {
  if (count == null) return null
  return `${formatNumber(count)} column${count === 1 ? '' : 's'}`
}
