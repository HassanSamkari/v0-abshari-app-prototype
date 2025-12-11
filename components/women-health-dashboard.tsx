"use client"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Download, Share2, CheckCircle } from "lucide-react"

interface WomenHealthDashboardProps {
  onNavigate: (screen: string) => void
}

export default function WomenHealthDashboard({ onNavigate }: WomenHealthDashboardProps) {
  // Sample data for demonstration
  const userData = {
    name: "Sara Al-Mansouri",
    age: 32,
    phone: "+966 50 123 4567",
    email: "sara.mansouri@company.com",
    position: "Senior HR Manager",
    department: "Human Resources",
  }

  const stats = [
    { label: "Children", value: "2", color: "bg-blue-50 text-blue-700" },
    { label: "Vaccination", value: "Complete", color: "bg-green-50 text-green-700" },
    { label: "Employment", value: "Active", color: "bg-green-50 text-green-700" },
    { label: "Marital Status", value: "Married", color: "bg-purple-50 text-purple-700" },
  ]

  const sections = [
    {
      title: "Birth History",
      icon: "👶",
      items: [
        { label: "Number of Births", value: "2" },
        { label: "First Child Age", value: "4 years" },
        { label: "Last Birth Date", value: "June 2022" },
        { label: "Delivery Type", value: "Natural" },
      ],
    },
    {
      title: "Vaccination Records",
      icon: "💉",
      items: [
        { label: "Last Checkup", value: "December 2024", status: "complete" },
        { label: "Vaccinations Up-to-Date", value: "Yes", status: "complete" },
        { label: "Next Scheduled", value: "June 2025" },
      ],
    },
    {
      title: "Breastfeeding Information",
      icon: "🍼",
      items: [
        { label: "Current Status", value: "Active (3 months)" },
        { label: "Planned Duration", value: "12 months" },
        { label: "Latest Check", value: "November 2024", status: "complete" },
      ],
    },
    {
      title: "Marriage & Family Status",
      icon: "👨‍👩‍👧",
      items: [
        { label: "Marital Status", value: "Married" },
        { label: "Spouse Name", value: "Mohammed Al-Mansouri" },
        { label: "Marriage Date", value: "July 2018" },
        { label: "Dependent Children", value: "2" },
        { label: "Family Support", value: "Yes" },
      ],
    },
    {
      title: "Career & Job Information",
      icon: "💼",
      items: [
        { label: "Position", value: "Senior HR Manager" },
        { label: "Department", value: "Human Resources" },
        { label: "Employment Type", value: "Full-time" },
        { label: "Start Date", value: "January 2019" },
        { label: "Years of Experience", value: "8 years" },
      ],
    },
    {
      title: "Education & Specializations",
      icon: "🎓",
      items: [
        { label: "Degree", value: "Bachelor's in Business Administration" },
        { label: "University", value: "King Saud University" },
        { label: "Specialization", value: "Human Resources Management" },
        { label: "Professional Certification", value: "CIPD Level 5" },
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground sticky top-0 z-10">
        <div className="p-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => onNavigate("dashboard")} className="p-2 hover:bg-primary/80 rounded transition">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold">Professional Profile</h1>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-primary/80 rounded transition">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-primary/80 rounded transition">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 max-w-4xl mx-auto pb-12">
        {/* Personal Details Header */}
        <Card className="mb-8 border border-border shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 border-b border-border">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">{userData.name}</h2>
                <p className="text-primary font-semibold mb-3">{userData.position}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Age</p>
                    <p className="font-semibold text-foreground">{userData.age} years</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Department</p>
                    <p className="font-semibold text-foreground">{userData.department}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground text-xs">{userData.phone}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground text-xs">{userData.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="border border-border shadow-sm overflow-hidden">
              <div className={`p-4 ${stat.color} rounded-t`}>
                <p className="text-xs font-semibold opacity-75">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
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

          {/* Key Responsibilities */}
          <Card className="border border-border shadow-sm overflow-hidden">
            <div className="bg-muted/40 px-6 py-4 border-b border-border flex items-center gap-3">
              <span className="text-xl">📋</span>
              <h3 className="font-semibold text-foreground">Key Responsibilities</h3>
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
