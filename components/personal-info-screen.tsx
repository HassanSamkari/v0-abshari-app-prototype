"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, LogOut } from "lucide-react"

interface PersonalInfoScreenProps {
  onNavigate: (screen: string) => void
}

export default function PersonalInfoScreen({ onNavigate }: PersonalInfoScreenProps) {
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold">Abshari</h1>
          <button className="p-2 hover:bg-primary/80 rounded transition">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 max-w-4xl mx-auto pb-12">
        {/* Main Profile Card */}
        <Card className="mb-8 border border-border shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 border-b border-border">
            <h2 className="text-2xl font-bold text-foreground mb-1">{profileData.name}</h2>
            <p className="text-primary font-semibold mb-4">{profileData.position}</p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-sm">
              <div>
                <p className="text-muted-foreground text-xs">Age</p>
                <p className="font-semibold text-foreground">{profileData.age} years</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Department</p>
                <p className="font-semibold text-foreground">{profileData.department}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Phone</p>
                <p className="font-semibold text-foreground text-xs">{profileData.phone}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Email</p>
                <p className="font-semibold text-foreground text-xs">{profileData.email}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-4">
          <Card className="border border-border shadow-sm overflow-hidden">
            <div className="bg-blue-50 text-blue-700 p-4">
              <p className="text-xs font-semibold opacity-75">Children</p>
              <p className="text-2xl font-bold mt-2">{profileData.children}</p>
            </div>
          </Card>
          <Card className="border border-border shadow-sm overflow-hidden">
            <div className="bg-green-50 text-green-700 p-4">
              <p className="text-xs font-semibold opacity-75">Vaccination</p>
              <p className="text-2xl font-bold mt-2">{profileData.vaccinationStatus}</p>
            </div>
          </Card>
          <Card className="border border-border shadow-sm overflow-hidden">
            <div className="bg-green-50 text-green-700 p-4">
              <p className="text-xs font-semibold opacity-75">Employment</p>
              <p className="text-2xl font-bold mt-2">{profileData.employmentStatus}</p>
            </div>
          </Card>
          <Card className="border border-border shadow-sm overflow-hidden">
            <div className="bg-purple-50 text-purple-700 p-4">
              <p className="text-xs font-semibold opacity-75">Marital Status</p>
              <p className="text-2xl font-bold mt-2">{profileData.marriageStatus}</p>
            </div>
          </Card>
        </div>

        {/* View Full Dashboard Button */}
        <Button
          onClick={() => onNavigate("dashboard")}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-lg text-base transition-colors flex items-center justify-center gap-2"
        >
          View Full Dashboard
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
