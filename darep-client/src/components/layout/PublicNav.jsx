import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import Button from '../shared/Button'
import ThemeToggle from '../shared/ThemeToggle'

export default function PublicNav() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-black border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-200">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <img src="/favicon.svg" alt="Darep" className="h-8 w-8" />
          <span className="text-xl font-bold text-neutral-900 dark:text-white">Darep</span>
        </Link>
        
        {/* Dropdown Navigation */}
        <div className="hidden md:flex items-center">
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors py-2">
              Explore <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden py-1">
                <Link to="/pricing" className="block px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white transition-colors">
                  Pricing
                </Link>
                <Link to="/docs" className="block px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white transition-colors">
                  Documentation
                </Link>
                <div className="my-1 border-t border-neutral-100 dark:border-neutral-800"></div>
                <Link to="/demo" className="block px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white transition-colors">
                  Demo Sandbox
                </Link>
              </div>
            </div>
          </div>
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
  )
}
