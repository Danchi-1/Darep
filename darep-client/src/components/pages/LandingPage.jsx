import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, Database, MessageSquare, Shield, Zap } from 'lucide-react'
import Button from '../shared/Button'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-8 w-8 text-indigo-accent" />
          <span className="text-xl font-bold text-white">Darep</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" className="text-white hover:text-white">
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-indigo-accent hover:bg-indigo-600">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-white leading-tight">
              Conversational Data Analysis for Business
            </h1>
            <p className="mt-6 text-xl text-slate-300">
              Connect your data sources and ask questions in plain English. 
              Get instant insights, charts, and the code behind every analysis.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-indigo-accent hover:bg-indigo-600">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          {/* Feature Preview */}
          <div className="relative">
            <div className="rounded-2xl bg-slate-800/50 p-6 backdrop-blur-sm border border-slate-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-indigo-accent flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1 rounded-lg bg-slate-700 p-3">
                    <p className="text-sm text-slate-300">Show me sales trends by region</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-slate-600 flex items-center justify-center">
                    <BarChart3 className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1 rounded-lg bg-slate-700 p-3">
                    <p className="text-sm text-slate-300">Here's the analysis with a regional breakdown chart...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center">Why Darep?</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
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
    <div className="rounded-xl bg-slate-800/50 p-6 border border-slate-700">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-accent/10">
        <Icon className="h-6 w-6 text-indigo-accent" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-slate-400">{description}</p>
    </div>
  )
}
