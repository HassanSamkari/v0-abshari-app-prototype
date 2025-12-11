"use client"

import { useState } from "react"
import { LanguageProvider } from "@/lib/language-context"
import LoginScreen from "@/components/login-screen"
import DashboardScreen from "@/components/dashboard-screen"
import RequestFormScreen from "@/components/request-form-screen"
import RequestStatusScreen from "@/components/request-status-screen"
import QuickActionsScreen from "@/components/quick-actions-screen"

type Screen = "login" | "quick-actions" | "dashboard" | "request-form" | "request-status"

function AppContent() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("login")
  const [requestType, setRequestType] = useState<string>("")
  const [showFullDashboard, setShowFullDashboard] = useState(false)

  const handleNavigation = (screen: Screen, type?: string) => {
    if (type) setRequestType(type)
    setCurrentScreen(screen)
  }

  return (
    <main className="min-h-screen bg-background">
      {currentScreen === "login" && <LoginScreen onNavigate={() => handleNavigation("quick-actions")} />}
      {currentScreen === "quick-actions" && <QuickActionsScreen onNavigate={handleNavigation} />}
      {currentScreen === "dashboard" && (
        <DashboardScreen
          onNavigate={handleNavigation}
          showFullDashboard={showFullDashboard}
          onToggleDashboard={() => setShowFullDashboard(!showFullDashboard)}
        />
      )}
      {currentScreen === "request-form" && <RequestFormScreen type={requestType} onNavigate={handleNavigation} />}
      {currentScreen === "request-status" && <RequestStatusScreen onNavigate={handleNavigation} />}
    </main>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
