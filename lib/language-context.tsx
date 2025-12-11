"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "app.name": "Abshari",
    "app.subtitle": "Supporting Working Mothers",
    "app.login": "Login with Absher",
    "app.security": "Your data is secure and encrypted",
    "header.quickActions": "Quick Actions",
    "header.dashboard": "Abshari",
    "header.profile": "Professional Profile",
    "header.fullDashboard": "Full Dashboard",
    "header.backToLogin": "Back to Login",
    "header.backToProfile": "Back to Profile",
    "header.viewFullDashboard": "View Full Dashboard",
    "header.profileDesc": "Complete health and career information",
    "stats.children": "Children",
    "stats.vaccination": "Vaccination",
    "stats.employment": "Employment",
    "stats.marital": "Marital Status",
    "section.birthHistory": "Birth History",
    "section.vaccination": "Vaccination Records",
    "section.breastfeeding": "Breastfeeding Information",
    "section.marriage": "Marriage & Family Status",
    "section.career": "Career & Job Information",
    "section.education": "Education & Specializations",
    "section.keyResponsibilities": "Key Responsibilities",
    "action.maternityLeave": "Request Maternity Leave",
    "action.breastfeedingTime": "Request Breastfeeding Time",
    "action.medicalAppointment": "Medical Appointment",
    "action.viewDocuments": "View Documents",
    "action.maternityLeaveDesc": "Apply for maternity leave benefits",
    "action.breastfeedingTimeDesc": "Request flexible breastfeeding hours",
    "action.medicalAppointmentDesc": "Schedule a health checkup",
    "action.viewDocumentsDesc": "Access your health records",
    "action.toDashboard": "Go to Dashboard",
    "personal.age": "Age",
    "personal.department": "Department",
    "personal.phone": "Phone",
    "personal.email": "Email",
    "personal.location": "Location",
    "personal.years": "years",
    "button.share": "Share",
    "button.download": "Download",
    "button.logout": "Logout",
    "label.numberOfBirths": "Number of Births",
    "label.firstChildAge": "First Child Age",
    "label.lastBirthDate": "Last Birth Date",
    "label.deliveryType": "Delivery Type",
    "label.lastCheckup": "Last Checkup",
    "label.vaccinationsUpToDate": "Vaccinations Up-to-Date",
    "label.nextScheduled": "Next Scheduled",
    "label.currentStatus": "Current Status",
    "label.plannedDuration": "Planned Duration",
    "label.latestCheck": "Latest Check",
    "label.maritalStatus": "Marital Status",
    "label.spouseName": "Spouse Name",
    "label.marriageDate": "Marriage Date",
    "label.dependentChildren": "Dependent Children",
    "label.familySupport": "Family Support",
    "label.position": "Position",
    "label.employmentType": "Employment Type",
    "label.startDate": "Start Date",
    "label.yearsOfExperience": "Years of Experience",
    "label.degree": "Degree",
    "label.university": "University",
    "label.specialization": "Specialization",
    "label.certification": "Professional Certification",
  },
  ar: {
    "app.name": "أبشري",
    "app.subtitle": "دعم الأمهات العاملات",
    "app.login": "تسجيل الدخول عبر أبشر",
    "app.security": "بيانات آمنة ومشفرة",
    "header.quickActions": "الإجراءات السريعة",
    "header.dashboard": "أبشري",
    "header.profile": "الملف الشخصي الاحترافي",
    "header.fullDashboard": "لوحة المعلومات الكاملة",
    "header.backToLogin": "العودة إلى تسجيل الدخول",
    "header.backToProfile": "العودة إلى الملف الشخصي",
    "header.viewFullDashboard": "عرض لوحة المعلومات الكاملة",
    "header.profileDesc": "معلومات صحية ومهنية شاملة",
    "stats.children": "الأطفال",
    "stats.vaccination": "التطعيم",
    "stats.employment": "العمل",
    "stats.marital": "الحالة الاجتماعية",
    "section.birthHistory": "سجل الولادات",
    "section.vaccination": "سجلات التطعيم",
    "section.breastfeeding": "معلومات الرضاعة الطبيعية",
    "section.marriage": "حالة الزواج والأسرة",
    "section.career": "المعلومات الوظيفية والمهنية",
    "section.education": "التعليم والتخصصات",
    "section.keyResponsibilities": "المسؤوليات الرئيسية",
    "action.maternityLeave": "طلب إجازة الأمومة",
    "action.breastfeedingTime": "طلب وقت الرضاعة الطبيعية",
    "action.medicalAppointment": "موعد طبي",
    "action.viewDocuments": "عرض المستندات",
    "action.maternityLeaveDesc": "التقدم بطلب لفوائد إجازة الأمومة",
    "action.breastfeedingTimeDesc": "طلب ساعات رضاعة مرنة",
    "action.medicalAppointmentDesc": "جدولة فحص صحي",
    "action.viewDocumentsDesc": "الوصول إلى سجلاتك الصحية",
    "action.toDashboard": "انتقل إلى لوحة المعلومات",
    "personal.age": "العمر",
    "personal.department": "القسم",
    "personal.phone": "الهاتف",
    "personal.email": "البريد الإلكتروني",
    "personal.location": "الموقع",
    "personal.years": "سنة",
    "button.share": "مشاركة",
    "button.download": "تحميل",
    "button.logout": "تسجيل خروج",
    "label.numberOfBirths": "عدد الولادات",
    "label.firstChildAge": "عمر الطفل الأول",
    "label.lastBirthDate": "تاريخ آخر ولادة",
    "label.deliveryType": "نوع الولادة",
    "label.lastCheckup": "آخر فحص",
    "label.vaccinationsUpToDate": "التطعيمات محدثة",
    "label.nextScheduled": "الموعد التالي",
    "label.currentStatus": "الحالة الحالية",
    "label.plannedDuration": "المدة المخططة",
    "label.latestCheck": "آخر فحص",
    "label.maritalStatus": "الحالة الاجتماعية",
    "label.spouseName": "اسم الزوج/الزوجة",
    "label.marriageDate": "تاريخ الزواج",
    "label.dependentChildren": "الأطفال المعالين",
    "label.familySupport": "دعم الأسرة",
    "label.position": "المنصب",
    "label.employmentType": "نوع التوظيف",
    "label.startDate": "تاريخ البدء",
    "label.yearsOfExperience": "سنوات الخبرة",
    "label.degree": "الشهادة",
    "label.university": "الجامعة",
    "label.specialization": "التخصص",
    "label.certification": "الشهادة المهنية",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
