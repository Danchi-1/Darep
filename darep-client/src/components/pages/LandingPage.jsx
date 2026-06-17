import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, Database, MessageSquare, Shield, Zap } from 'lucide-react'
import Button from '../shared/Button'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200">
        <div className="flex items-center gap-2">
          <img src="/favicon.svg" alt="Darep" className="h-8 w-8" />
          <span className="text-xl font-bold text-slate-900">Darep</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" className="text-slate-600 hover:bg-slate-100 hover:text-slate-900">
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-navy hover:bg-slate-800 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Conversational Data Analysis for Business
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              Connect your data sources and ask questions in plain English. 
              Get instant insights, charts, and the code behind every analysis.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-navy hover:bg-slate-800 text-white">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          {/* Feature Preview */}
          <div className="relative">
            <div className="rounded-xl bg-white p-6 shadow-xl shadow-slate-200/50 border border-slate-200">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-4">
                <div className="h-3 w-3 rounded-full bg-slate-300" />
                <div className="h-3 w-3 rounded-full bg-slate-300" />
                <div className="h-3 w-3 rounded-full bg-slate-300" />
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                    <MessageSquare className="h-4 w-4 text-indigo-accent" />
                  </div>
                  <div className="flex-1 rounded-lg bg-slate-50 p-3 border border-slate-100">
                    <p className="text-sm text-slate-700">Show me sales trends by region</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <BarChart3 className="h-4 w-4 text-slate-600" />
                  </div>
                  <div className="flex-1 rounded-lg bg-white p-3 border border-slate-200 shadow-sm">
                    <p className="text-sm text-slate-700">Here's the analysis with a regional breakdown chart...</p>
                    <div className="mt-3 h-24 rounded bg-slate-100 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Why Darep?</h2>
            <p className="mt-4 text-lg text-slate-600">Everything you need to analyze data faster.</p>
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
    <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 border border-slate-100">
        <Icon className="h-6 w-6 text-navy" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600 leading-relaxed">{description}</p>
    </div>
  )
}
