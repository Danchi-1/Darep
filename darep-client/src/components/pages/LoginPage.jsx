import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BarChart3 } from 'lucide-react'
import Button from '../shared/Button'
import Input from '../shared/Input'
import ThemeToggle from '../shared/ThemeToggle'
import { useAuth } from '../../context/AuthContext'
import { login } from '../../services/api'
import toast from 'react-hot-toast'

export default function LoginPage() {
  const navigate = useNavigate()
  const { login: setAuth } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsLoading(true)
    try {
      const response = await login(formData.email, formData.password)
      setAuth(response.access_token, response.user)
      toast.success('Welcome back!')
      navigate('/app')
    } catch (err) {
      toast.error(err.response?.data?.detail || 'Login failed. Please check your credentials.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200 flex items-center justify-center px-4 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2">
            <img src="/favicon.svg" alt="Darep" className="h-8 w-8" />
            <span className="text-2xl font-bold text-slate-900 dark:text-white">Darep</span>
          </Link>
        </div>

        <div className="rounded-xl bg-white dark:bg-slate-800 p-8 shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-200">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Welcome back</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">Sign in to your account to continue</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              autoComplete="email"
            />

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              autoComplete="current-password"
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <input type="checkbox" className="rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-black focus:ring-black dark:text-white dark:focus:ring-white" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-black dark:text-white hover:text-slate-700 dark:hover:text-slate-300 font-medium">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full bg-black dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-black" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
            Don't have an account?{' '}
            <Link to="/signup" className="text-black dark:text-white hover:text-slate-700 dark:hover:text-slate-300 font-semibold">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
