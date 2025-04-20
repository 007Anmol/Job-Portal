"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Briefcase, Menu, Moon, Sun, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2" onClick={closeMenu}>
          <Briefcase className="h-6 w-6 text-purple-500" />
          <span className="hidden bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-xl font-bold text-transparent sm:inline-block">
            JobPortal
          </span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-6 md:flex">
          <Link
            href="/jobs"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/jobs") ? "text-purple-500" : "text-muted-foreground",
            )}
          >
            Jobs
          </Link>
          <Link
            href="/profile"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/profile") ? "text-purple-500" : "text-muted-foreground",
            )}
          >
            Profile
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 pb-4">
            <Link
              href="/jobs"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/jobs") ? "text-purple-500" : "text-muted-foreground",
              )}
              onClick={closeMenu}
            >
              Jobs
            </Link>
            <Link
              href="/profile"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/profile") ? "text-purple-500" : "text-muted-foreground",
              )}
              onClick={closeMenu}
            >
              Profile
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}
