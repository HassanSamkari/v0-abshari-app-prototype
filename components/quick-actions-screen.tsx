"use client"

import { Card } from "@/components/ui/card"
import { LogOut, ChevronRight } from "lucide-react"
import { Calendar, Droplets, Stethoscope, FileText } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface QuickActionsScreenProps {
  onNavigate: (screen: string, type?: string) => void
}

export default function QuickActionsScreen({ onNavigate }: QuickActionsScreenProps) {
  const { language, t } = useLanguage()

  const actionCards = [
    {
      icon: Calendar,
      titleKey: "action.maternityLeave",
      descKey: "action.maternityLeaveDesc",
      type: "maternity-leave",
      color: "bg-blue-50 text-blue-700",
    },
    {
      icon: Droplets,
      titleKey: "action.breastfeedingTime",
      descKey: "action.breastfeedingTimeDesc",
      type: "breastfeeding-time",
      color: "bg-green-50 text-green-700",
    },
    {
      icon: Stethoscope,
      titleKey: "action.medicalAppointment",
      descKey: "action.medicalAppointmentDesc",
      type: "medical-appointment",
      color: "bg-red-50 text-red-700",
    },
    {
      icon: FileText,
      titleKey: "action.viewDocuments",
      descKey: "action.viewDocumentsDesc",
      type: "documents",
      color: "bg-purple-50 text-purple-700",
    },
  ]

  return (
    <div className="min-h-screen bg-background" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="bg-primary text-primary-foreground p-6 shadow-sm">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">{t("header.quickActions")}</h1>
          <button
            onClick={() => onNavigate("login")}
            className="p-2 hover:bg-primary/80 rounded transition"
            title={language === "en" ? "Back to Login" : "العودة إلى تسجيل الدخول"}
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 max-w-6xl mx-auto pb-12">
        <div className="grid grid-cols-1 gap-4 mb-8">
          {actionCards.map((card) => {
            const Icon = card.icon
            return (
              <Card
                key={card.type}
                onClick={() => onNavigate("request-form", card.type)}
                className="border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-pointer overflow-hidden"
              >
                <div className="flex items-center">
                  <div className={`p-6 flex-shrink-0 ${card.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1 px-6 py-4">
                    <h3 className="font-semibold text-foreground mb-1">{t(card.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(card.descKey)}</p>
                  </div>
                  <div className="px-6 flex-shrink-0">
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="border border-border shadow-sm p-6">
          <button
            onClick={() => onNavigate("dashboard")}
            className="w-full text-primary font-semibold text-center hover:text-primary/90 transition py-2"
          >
            {t("action.toDashboard")}
          </button>
        </Card>
      </div>
    </div>
  )
}
