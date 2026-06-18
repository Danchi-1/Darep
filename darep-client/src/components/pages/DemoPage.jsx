import Dashboard from '../Dashboard'

export default function DemoPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-black text-white dark:bg-white dark:text-black py-2 px-4 text-center text-sm font-medium z-50 fixed top-0 w-full transition-colors duration-200">
        You are viewing a live sandbox with sample data. <a href="/signup" className="underline font-bold hover:opacity-80">Sign up</a> to upload your own data.
      </div>
      <div className="flex-1 pt-9">
        <Dashboard isDemo={true} />
      </div>
    </div>
  )
}
