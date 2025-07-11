"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accessibility, X, Plus, Minus, Eye, Contrast, Type, MousePointer, RotateCcw, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

interface AccessibilitySettings {
  fontSize: number
  highContrast: boolean
  darkMode: boolean
  largerCursor: boolean
  reducedMotion: boolean
  focusOutlines: boolean
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 100,
  highContrast: false,
  darkMode: false,
  largerCursor: false,
  reducedMotion: false,
  focusOutlines: false,
}

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings)
  const { theme, setTheme } = useTheme()

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("accessibility-settings")
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings)
      setSettings(parsedSettings)
    }
  }, [])
  
  // We don't need to sync theme changes back to settings
  // This was causing an infinite loop with the other useEffect
  // that syncs settings.darkMode to theme

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement

    // Font size
    root.style.fontSize = `${settings.fontSize}%`

    // High contrast
    if (settings.highContrast) {
      root.classList.add("accessibility-high-contrast")
    } else {
      root.classList.remove("accessibility-high-contrast")
    }

    // Larger cursor
    if (settings.largerCursor) {
      root.classList.add("accessibility-large-cursor")
    } else {
      root.classList.remove("accessibility-large-cursor")
    }

    // Reduced motion
    if (settings.reducedMotion) {
      root.classList.add("accessibility-reduced-motion")
    } else {
      root.classList.remove("accessibility-reduced-motion")
    }

    // Focus outlines
    if (settings.focusOutlines) {
      root.classList.add("accessibility-focus-outlines")
    } else {
      root.classList.remove("accessibility-focus-outlines")
    }

    // Save to localStorage
    localStorage.setItem("accessibility-settings", JSON.stringify(settings))
  }, [settings])
  
  // Handle dark mode changes separately
  useEffect(() => {
    if (settings.darkMode && theme !== 'dark') {
      setTheme('dark')
    } else if (!settings.darkMode && theme === 'dark') {
      setTheme('light')
    }
  }, [settings.darkMode, theme, setTheme])

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const adjustFontSize = (increment: number) => {
    const newSize = Math.max(75, Math.min(150, settings.fontSize + increment))
    updateSetting("fontSize", newSize)
  }

  const resetSettings = () => {
    setSettings(defaultSettings)
  }

  const toggleWidget = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Accessibility Button */}
      <Button
        onClick={toggleWidget}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
        aria-label="Open accessibility options"
        title="Accessibility Options"
      >
        <Accessibility className="h-6 w-6" />
      </Button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Card className="w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Accessibility className="h-5 w-5 text-blue-600" />
                  Accessibility Options
                </h2>
                <Button variant="ghost" size="sm" onClick={toggleWidget} aria-label="Close accessibility options">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-6">
                {/* Font Size */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Type className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">Font Size</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => adjustFontSize(-10)}
                      disabled={settings.fontSize <= 75}
                      aria-label="Decrease font size"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-sm font-medium">{settings.fontSize}%</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => adjustFontSize(10)}
                      disabled={settings.fontSize >= 150}
                      aria-label="Increase font size"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* High Contrast */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Contrast className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">High Contrast</span>
                  </div>
                  <Button
                    variant={settings.highContrast ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateSetting("highContrast", !settings.highContrast)}
                    className="w-full"
                  >
                    {settings.highContrast ? "Disable" : "Enable"} High Contrast
                  </Button>
                </div>

                {/* Dark Mode */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    {settings.darkMode ? 
                      <Moon className="h-4 w-4 text-blue-600" /> : 
                      <Sun className="h-4 w-4 text-blue-600" />}
                    <span className="font-medium">Dark Mode</span>
                  </div>
                  <Button
                    variant={settings.darkMode ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      const newDarkMode = !settings.darkMode;
                      updateSetting("darkMode", newDarkMode);
                      setTheme(newDarkMode ? 'dark' : 'light');
                    }}
                    className="w-full"
                  >
                    {settings.darkMode ? "Disable" : "Enable"} Dark Mode
                  </Button>
                </div>

                {/* Larger Cursor */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MousePointer className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">Larger Cursor</span>
                  </div>
                  <Button
                    variant={settings.largerCursor ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateSetting("largerCursor", !settings.largerCursor)}
                    className="w-full"
                  >
                    {settings.largerCursor ? "Disable" : "Enable"} Larger Cursor
                  </Button>
                </div>

                {/* Reduced Motion */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <RotateCcw className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">Reduce Motion</span>
                  </div>
                  <Button
                    variant={settings.reducedMotion ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateSetting("reducedMotion", !settings.reducedMotion)}
                    className="w-full"
                  >
                    {settings.reducedMotion ? "Disable" : "Enable"} Reduced Motion
                  </Button>
                </div>

                {/* Enhanced Focus */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">Enhanced Focus</span>
                  </div>
                  <Button
                    variant={settings.focusOutlines ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateSetting("focusOutlines", !settings.focusOutlines)}
                    className="w-full"
                  >
                    {settings.focusOutlines ? "Disable" : "Enable"} Focus Outlines
                  </Button>
                </div>

                {/* Reset Button */}
                <div className="pt-4 border-t">
                  <Button variant="outline" size="sm" onClick={resetSettings} className="w-full">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset All Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
