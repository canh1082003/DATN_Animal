"use client"
import '../mode-toggle/mode-toggle.css'
import { useTheme } from './ThemeContext'

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className="theme-dropdown">
      <div className="theme-option" onClick={() => setTheme("light")}>
        🌞 Sáng
      </div>
      <div className="theme-option" onClick={() => setTheme("dark")}>
        🌙 Tối
      </div>
    </div>
  )
}
