"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

interface ThemeContextProps {
  theme: "light" | "dark"
  setTheme: (theme: "light" | "dark") => void
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => {},
})

export const ThemeProvider = ({
  attribute,
  defaultTheme,
  enableSystem,
  disableTransitionOnChange,
  children,
}: {
  attribute: string
  defaultTheme: "system" | "light" | "dark"
  enableSystem: boolean
  disableTransitionOnChange: boolean
  children: React.ReactNode
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

    let initialTheme: "light" | "dark"
    if (storedTheme) {
      initialTheme = storedTheme
    } else if (enableSystem && defaultTheme === "system") {
      initialTheme = systemTheme
    } else {
      initialTheme = defaultTheme === "dark" ? "dark" : "light"
    }

    setTheme(initialTheme)
  }, [defaultTheme, enableSystem])

  useEffect(() => {
    if (attribute === "class") {
      document.documentElement.classList.remove("light", "dark")
      document.documentElement.classList.add(theme)
    } else {
      document.documentElement.setAttribute(attribute, theme)
    }
    localStorage.setItem("theme", theme)
  }, [theme, attribute])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
