import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import SignupPage from './components/pages/SignupPage'
import PricingPage from './components/pages/PricingPage'
import DocsPage from './components/pages/DocsPage'
import DemoPage from './components/pages/DemoPage'
import HistoryPage from './components/pages/HistoryPage'
import SettingsPage from './components/pages/SettingsPage'
import OnboardingPage from './components/pages/OnboardingPage'
import ProtectedRoute from './components/shared/ProtectedRoute'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/demo" element={<DemoPage />} />
            
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/history"
              element={
                <ProtectedRoute>
                  <HistoryPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <SettingsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/onboarding"
              element={
                <ProtectedRoute>
                  <OnboardingPage />
                </ProtectedRoute>
              }
            />
            
            {/* Redirect legacy /app to /dashboard */}
            <Route path="/app" element={<Navigate to="/dashboard" replace />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
