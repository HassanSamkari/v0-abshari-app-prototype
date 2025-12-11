"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

interface LoginScreenProps {
  onNavigate: () => void
}

export default function LoginScreen({ onNavigate }: LoginScreenProps) {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="min-h-screen bg-background" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo and title */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <div className="w-1 h-8 bg-primary rounded"></div>
              <div className="w-1 h-8 bg-primary rounded"></div>
              <div className="w-1 h-8 bg-primary rounded"></div>
              <div className="w-1 h-8 bg-primary rounded"></div>
            </div>
            <span className="font-semibold text-sm text-primary">Abshari</span>
          </div>

          {/* Navigation items */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-foreground hover:text-primary transition">
              {language === "en" ? "Home" : "الرئيسية"}
            </a>
            <a href="#" className="text-sm text-foreground hover:text-primary transition">
              {language === "en" ? "Services" : "الخدمات"}
            </a>
          </div>

          {/* Language toggle and login */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="text-sm font-medium text-primary hover:text-primary/80 transition"
            >
              {language === "en" ? "العربية" : "English"}
            </button>
          </div>
        </div>
      </div>

      {/* Main content - Absher style with olive/khaki background */}
      <div className="bg-gradient-to-r from-[#3d5a3f] to-[#4d6a4f] min-h-[calc(100vh-80px)] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">{t("app.name")}</h1>
            <p className="text-white/80 text-lg">{t("app.subtitle")}</p>
          </div>

          {/* Login card */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-semibold text-foreground mb-6 text-center">{t("app.login")}</h2>

            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === "en" ? "Username or ID Number" : "اسم المستخدم أو رقم الهوية"}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={language === "en" ? "Enter your ID" : "أدخل رقم هويتك"}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === "en" ? "Password" : "كلمة المرور"}
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="••••••••"
                />
              </div>

              <Button
                onClick={onNavigate}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg text-base transition-colors"
              >
                {t("app.login")}
              </Button>
            </div>

            <div className="pt-6 border-t border-border text-center text-xs text-muted-foreground">
              <p className="mb-2">
                {language === "en" ? "Government of Saudi Arabia" : "حكومة المملكة العربية السعودية"}
              </p>
              <p>
                {language === "en"
                  ? "Ministry of Human Resources & Social Development"
                  : "وزارة الموارد البشرية والتنمية الاجتماعية"}
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-white/70 mt-8">{t("app.security")}</p>
        </div>
      </div>
    </div>
  )
}
