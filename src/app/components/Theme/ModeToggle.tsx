import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  // Function to toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  // Set default theme to light if it's the first visit
  useEffect(() => {
    if (!theme) {
      setTheme("light")
    }
  }, [theme, setTheme])

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative flex items-center justify-center"
    >
      {/* Sun icon (visible when dark theme is active) */}
      <Sun 
        className={`h-[1.2rem] w-[1.2rem] transition-transform duration-300 absolute ${theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`} 
      />
      
      {/* Moon icon (visible when light theme is active) */}
      <Moon 
        className={`h-[1.2rem] w-[1.2rem] transition-transform duration-300 absolute ${theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"}`} 
      />

      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
