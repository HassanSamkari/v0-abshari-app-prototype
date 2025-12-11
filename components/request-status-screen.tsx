"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Home } from "lucide-react"

interface RequestStatusScreenProps {
  onNavigate: (screen: string) => void
}

export default function RequestStatusScreen({ onNavigate }: RequestStatusScreenProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Card className="border border-border shadow-sm p-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-7 h-7 text-primary" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-foreground mb-2">Request Submitted</h1>

          {/* Message */}
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
            Your request has been sent to your employer for review
          </p>

          {/* Status note */}
          <div className="bg-muted/40 border border-border rounded-lg p-3 mb-6">
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Status: </span>Pending review
            </p>
          </div>

          {/* Details */}
          <div className="bg-muted/30 rounded-lg p-4 mb-6 text-left space-y-2.5">
            <div>
              <p className="text-xs text-muted-foreground font-medium">Reference Number</p>
              <p className="font-semibold text-foreground text-sm">REF-2024-0847</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Submitted</p>
              <p className="font-semibold text-foreground text-sm">Today at 2:30 PM</p>
            </div>
          </div>

          {/* Button */}
          <Button
            onClick={() => onNavigate("dashboard")}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 text-base transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Dashboard
          </Button>
        </Card>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          You will receive an email notification when your request is reviewed
        </p>
      </div>
    </div>
  )
}
