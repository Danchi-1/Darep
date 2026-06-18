import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, ArrowRight, Upload, Database } from 'lucide-react'
import Button from '../shared/Button'

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const navigate = useNavigate()

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black transition-colors duration-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 p-8 md:p-12 transition-colors duration-200">
        
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-neutral-100 dark:bg-neutral-800 -z-10 rounded-full" />
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-black dark:bg-white -z-10 rounded-full transition-all duration-300"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />
          {[1, 2, 3].map((num) => (
            <div 
              key={num}
              className={`h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                step >= num 
                  ? 'bg-black text-white dark:bg-white dark:text-black' 
                  : 'bg-white text-neutral-400 border-2 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700'
              }`}
            >
              {step > num ? <Check className="h-4 w-4" /> : num}
            </div>
          ))}
        </div>

        {/* Steps Content */}
        <div className="min-h-[250px]">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white mb-2">Welcome to Darep!</h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">Let's get your workspace set up. What describes your use case best?</p>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <button className="flex flex-col items-start p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-black dark:hover:border-white focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all text-left bg-white dark:bg-neutral-900">
                  <span className="font-semibold text-neutral-900 dark:text-white">Business Analyst</span>
                  <span className="text-xs text-neutral-500 mt-1">I need fast insights from messy data.</span>
                </button>
                <button className="flex flex-col items-start p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-black dark:hover:border-white focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all text-left bg-white dark:bg-neutral-900">
                  <span className="font-semibold text-neutral-900 dark:text-white">Founder / Executive</span>
                  <span className="text-xs text-neutral-500 mt-1">I want to ask questions directly.</span>
                </button>
                <button className="flex flex-col items-start p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-black dark:hover:border-white focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all text-left bg-white dark:bg-neutral-900">
                  <span className="font-semibold text-neutral-900 dark:text-white">Developer</span>
                  <span className="text-xs text-neutral-500 mt-1">I want to build embedded analytics.</span>
                </button>
                <button className="flex flex-col items-start p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-black dark:hover:border-white focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all text-left bg-white dark:bg-neutral-900">
                  <span className="font-semibold text-neutral-900 dark:text-white">Other</span>
                  <span className="text-xs text-neutral-500 mt-1">Just exploring the platform.</span>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white mb-2">Connect Data</h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">How would you like to bring your data into Darep?</p>
              
              <div className="space-y-4">
                <button className="w-full flex items-center p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors bg-white dark:bg-neutral-900">
                  <div className="h-10 w-10 bg-neutral-100 dark:bg-black rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Upload className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-neutral-900 dark:text-white">Upload CSV or Excel</p>
                    <p className="text-sm text-neutral-500">Perfect for quick, one-off analyses.</p>
                  </div>
                </button>
                
                <button className="w-full flex items-center p-4 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors bg-white dark:bg-neutral-900">
                  <div className="h-10 w-10 bg-neutral-100 dark:bg-black rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Database className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-neutral-900 dark:text-white">Connect Database</p>
                    <p className="text-sm text-neutral-500">PostgreSQL, MySQL, or SQLite.</p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center pt-8">
              <div className="mx-auto h-16 w-16 bg-black dark:bg-white rounded-full flex items-center justify-center mb-6">
                <Check className="h-8 w-8 text-white dark:text-black" />
              </div>
              <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white mb-2">You're all set!</h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-sm mx-auto">
                Your workspace is ready. You can now start asking questions and generating insights instantly.
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-100 dark:border-neutral-800 flex justify-between">
          <Button 
            variant="ghost" 
            onClick={() => setStep(step - 1)} 
            disabled={step === 1}
            className={step === 1 ? 'opacity-0 cursor-default' : 'text-neutral-600 dark:text-neutral-400'}
          >
            Back
          </Button>
          <Button 
            onClick={handleNext}
            className="bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 px-8"
          >
            {step === 3 ? "Go to Dashboard" : "Continue"}
            {step !== 3 && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  )
}
