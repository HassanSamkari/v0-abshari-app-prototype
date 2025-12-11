"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Droplets, Stethoscope, FileText } from "lucide-react"

interface LoginScreenProps {
  onNavigate: () => void
}

export default function LoginScreen({ onNavigate }: LoginScreenProps) {
  const actionCards = [
    {
      icon: Calendar,
      title: "Request Maternity Leave",
      type: "maternity-leave",
    },
    {
      icon: Droplets,
      title: "Request Breastfeeding Time",
      type: "breastfeeding-time",
    },
    {
      icon: Stethoscope,
      title: "Medical Appointment",
      type: "medical-appointment",
    },
    {
      icon: FileText,
      title: "View Documents",
      type: "documents",
    },
  ]

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <div className="mb-6">
            <h1 className="text-5xl font-bold text-primary mb-1">أبشري</h1>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">Abshari</p>
          </div>
          <p className="text-base text-foreground leading-relaxed">Supporting Working Mothers</p>
        </div>

        <div className="bg-card border border-border rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              Access your maternity and breastfeeding benefits through your Absher account
            </p>

            <Button
              onClick={onNavigate}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg text-base transition-colors"
            >
              Login with Absher
            </Button>

            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                Government of Saudi Arabia
                <br />
                Ministry of Human Resources & Social Development
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">Your data is secure and encrypted</p>
      </div>
    </div>
  )
}
