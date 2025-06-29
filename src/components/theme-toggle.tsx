"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-10 h-10">
        <div className="w-4 h-4" />
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="w-10 h-10 hover:bg-violet-100 dark:hover:bg-violet-800 transition-all duration-200 border border-violet-200 dark:border-violet-700 bg-violet-50/50 dark:bg-violet-900/50 backdrop-blur-sm"
    >
      {resolvedTheme === "light" ? (
        <Moon className="w-4 h-4 text-violet-700 dark:text-violet-300" />
      ) : (
        <Sun className="w-4 h-4 text-violet-700 dark:text-violet-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
