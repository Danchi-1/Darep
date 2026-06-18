import { Link } from 'react-router-dom'
import Button from '../shared/Button'
import ThemeToggle from '../shared/ThemeToggle'
import PublicNav from '../layout/PublicNav'

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      <PublicNav />

      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-extrabold text-neutral-900 dark:text-white mb-8">Documentation & Help</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
            Welcome to the Darep Help Center. Learn how to connect your data and start asking questions in plain English.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-2">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-16">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">What data sources are supported?</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2">Currently, we support CSV/Excel uploads and direct connections to PostgreSQL, MySQL, and SQLite databases.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Is my data safe?</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2">Yes. We never store your database rows. We only analyze the database schema to generate accurate SQL queries. For CSV uploads, data is processed in secure, isolated sandboxes and deleted immediately after your session ends.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Do I need to know SQL?</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2">Not at all! Darep is designed so you can ask questions like "What were our top 5 selling products last month?" and get charts and insights instantly.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-2">Example Questions by Industry</h2>
          
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
              <h4 className="font-bold text-neutral-900 dark:text-white mb-4">Retail & Ecommerce</h4>
              <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
                <li>"Show me sales trends by region for the last 12 months"</li>
                <li>"What is the average order value grouped by customer segment?"</li>
                <li>"Which 10 products have the highest return rate?"</li>
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
              <h4 className="font-bold text-neutral-900 dark:text-white mb-4">Logistics & Supply Chain</h4>
              <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
                <li>"What is the average delivery time by shipping provider?"</li>
                <li>"Show me a breakdown of delayed shipments by origin warehouse"</li>
                <li>"Forecast inventory requirements for Q3 based on past data"</li>
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
              <h4 className="font-bold text-neutral-900 dark:text-white mb-4">Finance & SaaS</h4>
              <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
                <li>"Calculate our MRR growth month-over-month for 2025"</li>
                <li>"Which subscription plan has the highest churn rate?"</li>
                <li>"Show me revenue grouped by marketing attribution channel"</li>
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
              <h4 className="font-bold text-neutral-900 dark:text-white mb-4">Healthcare</h4>
              <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
                <li>"What is the average patient wait time by clinic location?"</li>
                <li>"Show me the distribution of diagnoses for the past week"</li>
                <li>"Plot the readmission rate over the last 6 months"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
