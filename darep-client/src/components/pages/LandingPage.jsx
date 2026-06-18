import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, Database, MessageSquare, Shield, Zap } from 'lucide-react'
import Button from '../shared/Button'
import ThemeToggle from '../shared/ThemeToggle'
import PublicNav from '../layout/PublicNav'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      {/* Navigation */}
      <PublicNav />

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-extrabold text-neutral-900 dark:text-white leading-tight tracking-tight">
              Conversational Data Analysis for Business
            </h1>
            <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Connect your data sources and ask questions in plain English. 
              Get instant insights, charts, and the code behind every analysis.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-black">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          {/* Feature Preview */}
          <div className="relative">
            <div className="rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-xl shadow-neutral-200/50 dark:shadow-none border border-neutral-200 dark:border-neutral-800 transition-colors duration-200">
              <div className="flex items-center gap-2 mb-4 border-b border-neutral-100 dark:border-neutral-800 pb-4">
                <div className="h-3 w-3 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                <div className="h-3 w-3 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                <div className="h-3 w-3 rounded-full bg-neutral-300 dark:bg-neutral-600" />
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
                    <MessageSquare className="h-4 w-4 text-black dark:text-white" />
                  </div>
                  <div className="flex-1 rounded-lg bg-neutral-50 dark:bg-black p-3 border border-neutral-100 dark:border-neutral-800">
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">Show me sales trends by region</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center shrink-0">
                    <BarChart3 className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
                  </div>
                  <div className="flex-1 rounded-lg bg-white dark:bg-neutral-900 p-3 border border-neutral-200 dark:border-neutral-800 shadow-sm dark:shadow-none">
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">Here's the analysis with a regional breakdown chart...</p>
                    <div className="mt-3 h-24 rounded bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">Why Darep?</h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Everything you need to analyze data faster.</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={MessageSquare}
              title="Natural Language Queries"
              description="Ask questions in plain English. No SQL or coding required."
            />
            <FeatureCard
              icon={Database}
              title="Connect Any Data Source"
              description="Upload CSV/Excel files or connect directly to PostgreSQL, MySQL, or SQLite."
            />
            <FeatureCard
              icon={Shield}
              title="Full Transparency"
              description="See the exact code that generated each insight. Learn from the AI."
            />
            <FeatureCard
              icon={Zap}
              title="Instant Results"
              description="Get charts, tables, and insights in seconds, not hours."
            />
            <FeatureCard
              icon={BarChart3}
              title="Rich Visualizations"
              description="Beautiful, interactive charts powered by Plotly."
            />
            <FeatureCard
              icon={Database}
              title="Enterprise Ready"
              description="Built for businesses that need reliable, accurate data analysis."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-xl bg-white dark:bg-neutral-900 p-6 shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-md dark:hover:shadow-black/50 transition-all duration-200">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-50 dark:bg-black border border-neutral-100 dark:border-neutral-800">
        <Icon className="h-6 w-6 text-black dark:text-white" />
      </div>
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400 leading-relaxed">{description}</p>
    </div>
  )
}
