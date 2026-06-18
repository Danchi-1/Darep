import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import Button from '../shared/Button'
import ThemeToggle from '../shared/ThemeToggle'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-black border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-200">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <img src="/favicon.svg" alt="Darep" className="h-8 w-8" />
            <span className="text-xl font-bold text-neutral-900 dark:text-white">Darep</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/pricing" className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors">Pricing</Link>
            <Link to="/docs" className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors">Docs</Link>
            <Link to="/demo" className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors">Demo Sandbox</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/login" className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors hidden sm:block">
            Log in
          </Link>
          <Link to="/signup">
            <Button className="bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-black">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">Simple, transparent pricing</h1>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">Choose the plan that's right for your business.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-sm flex flex-col">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Free</h3>
            <div className="mt-4 flex items-baseline text-5xl font-extrabold text-neutral-900 dark:text-white">
              $0
              <span className="ml-1 text-xl font-medium text-neutral-500 dark:text-neutral-400">/mo</span>
            </div>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">Perfect for trying out Darep on small datasets.</p>
            <ul className="mt-8 space-y-4 flex-1">
              <PricingFeature text="100 queries per month" />
              <PricingFeature text="CSV / Excel Uploads (Up to 10MB)" />
              <PricingFeature text="Basic Chart Generation" />
            </ul>
            <Link to="/signup" className="mt-8 block w-full">
              <Button variant="outline" className="w-full justify-center">Get Started</Button>
            </Link>
          </div>

          {/* Pro Tier */}
          <div className="rounded-2xl border-2 border-black dark:border-white bg-white dark:bg-neutral-900 p-8 shadow-lg flex flex-col relative">
            <div className="absolute top-0 right-6 -translate-y-1/2">
              <span className="inline-flex rounded-full bg-black dark:bg-white px-4 py-1 text-sm font-semibold text-white dark:text-black tracking-wide">
                MOST POPULAR
              </span>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Pro</h3>
            <div className="mt-4 flex items-baseline text-5xl font-extrabold text-neutral-900 dark:text-white">
              $49
              <span className="ml-1 text-xl font-medium text-neutral-500 dark:text-neutral-400">/mo</span>
            </div>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">For individual analysts and data professionals.</p>
            <ul className="mt-8 space-y-4 flex-1">
              <PricingFeature text="Unlimited queries" />
              <PricingFeature text="Direct DB Connections (PostgreSQL, MySQL)" />
              <PricingFeature text="Export to PDF / CSV" />
              <PricingFeature text="Priority email support" />
            </ul>
            <Link to="/signup" className="mt-8 block w-full">
              <Button className="w-full justify-center bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200">Start Free Trial</Button>
            </Link>
          </div>

          {/* Business Tier */}
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-sm flex flex-col">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Business</h3>
            <div className="mt-4 flex items-baseline text-5xl font-extrabold text-neutral-900 dark:text-white">
              $199
              <span className="ml-1 text-xl font-medium text-neutral-500 dark:text-neutral-400">/mo</span>
            </div>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">For teams that need collaboration and advanced features.</p>
            <ul className="mt-8 space-y-4 flex-1">
              <PricingFeature text="Everything in Pro" />
              <PricingFeature text="Up to 5 team members" />
              <PricingFeature text="Shared team workspaces" />
              <PricingFeature text="SSO / SAML Login" />
              <PricingFeature text="Dedicated Account Manager" />
            </ul>
            <Link to="/signup" className="mt-8 block w-full">
              <Button variant="outline" className="w-full justify-center">Contact Sales</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingFeature({ text }) {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0">
        <Check className="h-5 w-5 text-black dark:text-white" />
      </div>
      <p className="ml-3 text-sm text-neutral-700 dark:text-neutral-300">{text}</p>
    </li>
  )
}
