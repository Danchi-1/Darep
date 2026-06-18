import { useState } from 'react'
import { Eye, EyeOff, Database } from 'lucide-react'
import Input, { Select } from '../shared/Input'
import Button from '../shared/Button'
import Spinner from '../shared/Spinner'
import { useDBConnect } from '../../hooks/useDBConnect'

const DB_TYPES = [
  { value: 'postgresql', label: 'PostgreSQL' },
  { value: 'mysql', label: 'MySQL' },
  { value: 'sqlite', label: 'SQLite' },
]

const defaultForm = {
  db_type: 'postgresql',
  host: 'localhost',
  port: '5432',
  database: '',
  username: '',
  password: '',
}

export default function DBConnector({ onSuccess }) {
  const [form, setForm] = useState(defaultForm)
  const [showPassword, setShowPassword] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({})
  const { test, connect, isTesting, isConnecting, testPassed, error, reset, setTestPassed } =
    useDBConnect()

  const isSqlite = form.db_type === 'sqlite'

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setFieldErrors((prev) => ({ ...prev, [field]: null }))
    setTestPassed(false)
  }

  const handleDbTypeChange = (dbType) => {
    const port = dbType === 'mysql' ? '3306' : dbType === 'postgresql' ? '5432' : ''
    setForm((prev) => ({ ...prev, db_type: dbType, port }))
    setTestPassed(false)
  }

  const validate = () => {
    const errors = {}
    if (isSqlite) {
      if (!form.database.trim()) errors.database = 'Database file path is required'
    } else {
      if (!form.host.trim()) errors.host = 'Host is required'
      if (!form.port.trim()) errors.port = 'Port is required'
      if (!form.database.trim()) errors.database = 'Database name is required'
      if (!form.username.trim()) errors.username = 'Username is required'
    }
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const buildConfig = () => ({
    db_type: form.db_type,
    host: isSqlite ? undefined : form.host,
    port: isSqlite ? undefined : Number(form.port),
    database: form.database,
    username: isSqlite ? undefined : form.username,
    password: isSqlite ? undefined : form.password,
  })

  const handleTest = async () => {
    if (!validate()) return
    reset()
    await test(buildConfig())
  }

  const handleConnect = async () => {
    if (!testPassed) return
    const result = await connect(buildConfig())
    if (result) onSuccess?.()
  }

  return (
    <div className="space-y-4">
      <Select
        label="Database type"
        value={form.db_type}
        onChange={(e) => handleDbTypeChange(e.target.value)}
      >
        {DB_TYPES.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>

      {isSqlite ? (
        <Input
          label="Database file path"
          placeholder="/path/to/database.db"
          value={form.database}
          onChange={(e) => updateField('database', e.target.value)}
          error={fieldErrors.database}
        />
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Host"
              placeholder="localhost"
              value={form.host}
              onChange={(e) => updateField('host', e.target.value)}
              error={fieldErrors.host}
            />
            <Input
              label="Port"
              placeholder="5432"
              value={form.port}
              onChange={(e) => updateField('port', e.target.value)}
              error={fieldErrors.port}
            />
          </div>
          <Input
            label="Database name"
            placeholder="my_database"
            value={form.database}
            onChange={(e) => updateField('database', e.target.value)}
            error={fieldErrors.database}
          />
          <Input
            label="Username"
            placeholder="postgres"
            value={form.username}
            onChange={(e) => updateField('username', e.target.value)}
            error={fieldErrors.username}
          />
          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => updateField('password', e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-[34px] text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </>
      )}

      {error && (
        <p className="rounded-lg bg-red-50 dark:bg-red-900/20 px-3 py-2 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}

      <div className="flex gap-3">
        <Button
          variant="secondary"
          onClick={handleTest}
          disabled={isTesting || isConnecting}
          className="flex-1"
        >
          {isTesting ? <Spinner size="sm" /> : null}
          Test Connection
        </Button>
        <Button
          onClick={handleConnect}
          disabled={!testPassed || isConnecting || isTesting}
          className="flex-1"
        >
          {isConnecting ? <Spinner size="sm" /> : <Database className="h-4 w-4" />}
          Connect
        </Button>
      </div>

      {testPassed && (
        <p className="text-xs text-emerald-600 dark:text-emerald-400">Connection verified — ready to connect.</p>
      )}
    </div>
  )
}
