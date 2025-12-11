"use client"
import { Card } from "@/components/ui/card"
import { LogOut, CheckCircle, Download, Share2, Eye } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface DashboardScreenProps {
  onNavigate: (screen: string, type?: string) => void
  showFullDashboard?: boolean
  onToggleDashboard?: () => void
}

export default function DashboardScreen({
  onNavigate,
  showFullDashboard = false,
  onToggleDashboard,
}: DashboardScreenProps) {
  const { language, t } = useLanguage()

  const profileData = {
    name: "Sara Abdullah Al-Dosari",
    age: 32,
    position: "Senior HR Manager",
    department: "Human Resources",
    email: "sara.dosari@company.com",
    phone: "+966-50-123-4567",
    location: "Riyadh, Saudi Arabia",
    children: 2,
    vaccinationStatus: "Complete",
    employmentStatus: "Full-time",
    marriageStatus: "Married",
  }

  const profileSections = [
    {
      title: t("section.birthHistory"),
      icon: "👶",
      items: [
        { label: t("label.numberOfBirths"), value: "2" },
        { label: t("label.firstChildAge"), value: "4 years" },
        { label: t("label.lastBirthDate"), value: "June 2022" },
        { label: t("label.deliveryType"), value: "Natural" },
      ],
    },
    {
      title: t("section.vaccination"),
      icon: "💉",
      items: [
        { label: t("label.lastCheckup"), value: "December 2024", status: "complete" },
        { label: t("label.vaccinationsUpToDate"), value: "Yes", status: "complete" },
        { label: t("label.nextScheduled"), value: "June 2025" },
      ],
    },
    {
      title: t("section.breastfeeding"),
      icon: "🍼",
      items: [
        { label: t("label.currentStatus"), value: "Active (3 months)" },
        { label: t("label.plannedDuration"), value: "12 months" },
        { label: t("label.latestCheck"), value: "November 2024", status: "complete" },
      ],
    },
    {
      title: t("section.marriage"),
      icon: "👨‍👩‍👧",
      items: [
        { label: t("label.maritalStatus"), value: "Married" },
        { label: t("label.spouseName"), value: "Mohammed Al-Dosari" },
        { label: t("label.marriageDate"), value: "July 2018" },
        { label: t("label.dependentChildren"), value: "2" },
        { label: t("label.familySupport"), value: "Yes" },
      ],
    },
    {
      title: t("section.career"),
      icon: "💼",
      items: [
        { label: t("label.position"), value: "Senior HR Manager" },
        { label: t("label.department"), value: "Human Resources" },
        { label: t("label.employmentType"), value: "Full-time" },
        { label: t("label.startDate"), value: "January 2019" },
        { label: t("label.yearsOfExperience"), value: "8 years" },
      ],
    },
    {
      title: t("section.education"),
      icon: "🎓",
      items: [
        { label: t("label.degree"), value: "Bachelor's in Business Administration" },
        { label: t("label.university"), value: "King Saud University" },
        { label: t("label.specialization"), value: "Human Resources Management" },
        { label: t("label.certification"), value: "CIPD Level 5" },
      ],
    },
  ]

  const responsibilities = [
    "Manage recruitment and onboarding processes",
    "Oversee employee benefits and compensation",
    "Lead workplace compliance and safety initiatives",
    "Mentor junior HR team members",
    "Conduct performance reviews and career development planning",
  ]

  if (showFullDashboard) {
    return (
      <div className="min-h-screen bg-background" dir={language === "ar" ? "rtl" : "ltr"}>
        <div className="bg-primary text-primary-foreground p-6 shadow-sm">
          <div className="flex items-center justify-between max-w-6xl mx-auto mb-6">
            <h1 className="text-2xl font-bold">{t("header.fullDashboard")}</h1>
            <div className="flex items-center gap-2">
              <button
                onClick={onToggleDashboard}
                className="p-2 hover:bg-primary/80 rounded transition"
                title={t("header.backToProfile")}
              >
                <Eye className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-primary/80 rounded transition">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-primary/80 rounded transition">
                <Download className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-primary/80 rounded transition">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 max-w-6xl mx-auto pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileSections.map((section) => (
              <Card key={section.title} className="border border-border shadow-sm overflow-hidden h-fit">
                <div className="bg-muted/40 px-6 py-4 border-b border-border flex items-center gap-3">
                  <span className="text-xl">{section.icon}</span>
                  <h3 className="font-semibold text-foreground text-sm">{section.title}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="pb-3 border-b border-border last:border-0">
                        <p className="text-muted-foreground text-xs mb-1">{item.label}</p>
                        <div className="flex items-center gap-2">
                          {item.status === "complete" && <CheckCircle className="w-4 h-4 text-green-600" />}
                          <span className="font-semibold text-foreground text-sm">{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="border border-border shadow-sm overflow-hidden mt-6">
            <div className="bg-muted/40 px-6 py-4 border-b border-border flex items-center gap-3">
              <span className="text-xl">📋</span>
              <h3 className="font-semibold text-foreground">{t("section.keyResponsibilities")}</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {responsibilities.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="bg-primary text-primary-foreground p-6 shadow-sm">
        <div className="flex items-center justify-between max-w-6xl mx-auto mb-6">
          <h1 className="text-2xl font-bold">{t("header.dashboard")}</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleDashboard}
              className="p-2 hover:bg-primary/80 rounded transition"
              title={t("header.viewFullDashboard")}
            >
              <Eye className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-primary/80 rounded transition">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-primary/80 rounded transition">
              <Download className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-primary/80 rounded transition">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="max-w-6xl mx-auto space-y-1">
          <h2 className="text-xl font-semibold">{t("header.profile")}</h2>
          <p className="text-primary-foreground/90 text-sm">{t("header.profileDesc")}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 max-w-6xl mx-auto pb-12">
        <Card className="mb-8 border border-border shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 border-b border-border">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">{profileData.name}</h2>
                <p className="text-primary font-semibold mb-3">{profileData.position}</p>
                <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
                  <div>
                    <p className="text-muted-foreground">{t("personal.age")}</p>
                    <p className="font-semibold text-foreground">
                      {profileData.age} {t("personal.years")}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">{t("personal.department")}</p>
                    <p className="font-semibold text-foreground">{profileData.department}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">{t("personal.phone")}</p>
                    <p className="font-semibold text-foreground text-xs">{profileData.phone}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">{t("personal.email")}</p>
                    <p className="font-semibold text-foreground text-xs">{profileData.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-4">
          <Card className="border border-border shadow-sm overflow-hidden">
            <div className="bg-blue-50 text-blue-700 p-4 rounded-t">
              <p className="text-xs font-semibold opacity-75">{t("personal.children")}</p>
              <p className="text-2xl font-bold mt-1">{profileData.children}</p>
            </div>
          </Card>
          <Card className="border border-border shadow-sm overflow-hidden">
            <div className="bg-green-50 text-green-700 p-4 rounded-t">
              <p className="text-xs font-semibold opacity-75">{t("personal.vaccination")}</p>
              <p className="text-2xl font-bold mt-1">{profileData.vaccinationStatus}</p>
            </div>
          </Card>
          <Card className="border border-border shadow-sm overflow-hidden">
            <div className="bg-green-50 text-green-700 p-4 rounded-t">
              <p className="text-xs font-semibold opacity-75">{t("personal.employment")}</p>
              <p className="text-2xl font-bold mt-1">{profileData.employmentStatus}</p>
            </div>
          </Card>
          <Card className="border border-border shadow-sm overflow-hidden">
            <div className="bg-purple-50 text-purple-700 p-4 rounded-t">
              <p className="text-xs font-semibold opacity-75">{t("personal.maritalStatus")}</p>
              <p className="text-2xl font-bold mt-1">{profileData.marriageStatus}</p>
            </div>
          </Card>
        </div>

        <div className="space-y-6 mb-8">
          {profileSections.map((section) => (
            <Card key={section.title} className="border border-border shadow-sm overflow-hidden">
              <div className="bg-muted/40 px-6 py-4 border-b border-border flex items-center gap-3">
                <span className="text-xl">{section.icon}</span>
                <h3 className="font-semibold text-foreground">{section.title}</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between pb-3 border-b border-border last:border-0"
                    >
                      <span className="text-muted-foreground text-sm">{item.label}</span>
                      <div className="flex items-center gap-2">
                        {item.status === "complete" && <CheckCircle className="w-4 h-4 text-green-600" />}
                        <span className="font-semibold text-foreground text-sm">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}

          <Card className="border border-border shadow-sm overflow-hidden">
            <div className="bg-muted/40 px-6 py-4 border-b border-border flex items-center gap-3">
              <span className="text-xl">📋</span>
              <h3 className="font-semibold text-foreground">{t("section.keyResponsibilities")}</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {responsibilities.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
