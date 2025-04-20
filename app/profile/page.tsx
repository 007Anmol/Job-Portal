"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Mail, Linkedin, FileText, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

interface ProfileData {
  name: string
  email: string
  linkedinUrl: string
  resumeUrl: string
}

export default function ProfilePage() {
  const { toast } = useToast()
  const [profile, setProfile] = useState<ProfileData>({
    name: "John Doe",
    email: "john.doe@example.com",
    linkedinUrl: "https://linkedin.com/in/johndoe",
    resumeUrl: "https://resume.com/johndoe",
  })

  const [errors, setErrors] = useState<Partial<ProfileData>>({})

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validateUrl = (url: string) => {
    try {
      new URL(url)
      return true
    } catch (e) {
      return false
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof ProfileData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const newErrors: Partial<ProfileData> = {}

    if (!profile.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!profile.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(profile.email)) {
      newErrors.email = "Invalid email format"
    }

    if (profile.linkedinUrl && !validateUrl(profile.linkedinUrl)) {
      newErrors.linkedinUrl = "Invalid URL format"
    }

    if (profile.resumeUrl && !validateUrl(profile.resumeUrl)) {
      newErrors.resumeUrl = "Invalid URL format"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Form is valid, show success message
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">My Profile</h1>
        <p className="text-muted-foreground">Manage your personal information and resume</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="md:col-span-1"
        >
          <Card className="sticky top-24 border-border bg-card">
            <CardHeader>
              <CardTitle>Profile Summary</CardTitle>
              <CardDescription>Your public information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-amber-500">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">{profile.name}</p>
                  <p className="text-sm text-muted-foreground">{profile.email}</p>
                </div>
              </div>
              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Linkedin className="h-4 w-4 text-muted-foreground" />
                  <span className="truncate">{profile.linkedinUrl || "No LinkedIn URL provided"}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="truncate">{profile.resumeUrl || "No resume URL provided"}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="md:col-span-2"
        >
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>Edit Profile</CardTitle>
              <CardDescription>Update your personal information and resume</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      className="pl-10"
                      value={profile.name}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="pl-10"
                      value={profile.email}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
                  <div className="relative">
                    <Linkedin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="linkedinUrl"
                      name="linkedinUrl"
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="pl-10"
                      value={profile.linkedinUrl}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.linkedinUrl && <p className="text-sm text-red-500">{errors.linkedinUrl}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resumeUrl">Resume URL</Label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="resumeUrl"
                      name="resumeUrl"
                      placeholder="https://resume.com/yourresume"
                      className="pl-10"
                      value={profile.resumeUrl}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.resumeUrl && <p className="text-sm text-red-500">{errors.resumeUrl}</p>}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-amber-500 text-white transition-all duration-300 hover:shadow-md"
                >
                  <Save className="mr-2 h-4 w-4" /> Save Profile
                </Button>
              </CardFooter>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
