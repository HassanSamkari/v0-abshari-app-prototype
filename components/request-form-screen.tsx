"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Calendar } from "lucide-react"

interface RequestFormScreenProps {
  type: string
  onNavigate: (screen: string) => void
}

const requestTypes = {
  "maternity-leave": "Maternity Leave Request",
  "breastfeeding-time": "Breastfeeding Time Request",
  "medical-appointment": "Medical Appointment Request",
  documents: "Document Request",
}

export default function RequestFormScreen({ type, onNavigate }: RequestFormScreenProps) {
  const [formData, setFormData] = useState({
    requestType: type,
    date: "",
    notes: "",
  })

  const handleSubmit = () => {
    onNavigate("request-status")
  }

  const title = requestTypes[type as keyof typeof requestTypes] || "New Request"

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground p-6">
        <button
          onClick={() => onNavigate("dashboard")}
          className="flex items-center gap-2 mb-4 hover:opacity-80 transition"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </button>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>

      {/* Form */}
      <div className="p-6 max-w-md mx-auto">
        <Card className="border border-border shadow-sm p-6">
          <div className="space-y-6">
            {/* Date Picker */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Start Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 border border-border rounded-lg text-foreground bg-input placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Notes (Optional)</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Add any additional details or comments..."
                rows={4}
                className="w-full px-3 py-2.5 border border-border rounded-lg text-foreground bg-input placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none text-sm"
              />
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 rounded-lg text-base transition-colors"
            >
              Submit Request
            </Button>
          </div>
        </Card>

        {/* Info */}
        <p className="text-center text-xs text-muted-foreground mt-6 px-4">
          Your request will be reviewed by your employer within 2-3 business days.
        </p>
      </div>
    </div>
  )
}
