import { useState } from 'react'
import TopBar from '../layout/TopBar'
import Button from '../shared/Button'
import Input from '../shared/Input'
import { User, Key, Database, CreditCard } from 'lucide-react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'apikeys', label: 'API Keys', icon: Key },
    { id: 'connections', label: 'Data Sources', icon: Database },
    { id: 'billing', label: 'Billing', icon: CreditCard },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 dark:bg-neutral-900 transition-colors duration-200">
      <TopBar />

      <main className="flex-1 pt-20 px-6 max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Settings</h1>
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </aside>

        {/* Content */}
        <div className="flex-1 bg-white dark:bg-black rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm p-6 md:p-8 min-h-[500px]">
          {activeTab === 'profile' && (
            <div className="max-w-md">
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Profile Settings</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Full Name</label>
                  <Input defaultValue="Demo User" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Email Address</label>
                  <Input defaultValue="user@example.com" type="email" />
                </div>
                <Button className="mt-4 bg-black text-white dark:bg-white dark:text-black">Save Changes</Button>
              </form>
            </div>
          )}

          {activeTab === 'apikeys' && (
            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">API Keys</h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">Use these keys to access Darep programmatically.</p>
              
              <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 flex items-center justify-between mb-4 bg-neutral-50 dark:bg-neutral-900">
                <div>
                  <p className="font-medium text-neutral-900 dark:text-white text-sm">Production Key</p>
                  <p className="text-xs text-neutral-500 mt-1">Created on Jan 15, 2026</p>
                </div>
                <span className="font-mono text-sm bg-neutral-200 dark:bg-black px-2 py-1 rounded text-neutral-700 dark:text-neutral-300">
                  dp_live_xxxxxxxxxxxxxxxx
                </span>
              </div>
              
              <Button variant="outline" className="text-black dark:text-white border-neutral-300 dark:border-neutral-700">Generate New Key</Button>
            </div>
          )}

          {activeTab === 'connections' && (
            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Connected Data Sources</h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">Manage your saved database connections.</p>
              
              <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 flex items-center justify-between bg-white dark:bg-black">
                <div className="flex items-center gap-3">
                  <Database className="h-5 w-5 text-neutral-400" />
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-white text-sm">Production Analytics DB</p>
                    <p className="text-xs text-neutral-500 mt-1">PostgreSQL • darep-prod.cb123.eu-west.rds.amazonaws.com</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30">Remove</Button>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Billing & Plan</h2>
              <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-neutral-50 dark:bg-neutral-900 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Pro Plan</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">$49/month, renewing on Jul 15, 2026</p>
                  </div>
                  <span className="bg-black text-white dark:bg-white dark:text-black text-xs font-bold px-2 py-1 rounded">ACTIVE</span>
                </div>
              </div>
              <Button variant="outline">Manage Subscription</Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
