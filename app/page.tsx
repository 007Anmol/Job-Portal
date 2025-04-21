"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Briefcase, Search, User, CheckCircle, Star, ChevronRight, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { WavyBackground } from "@/components/ui/wavy-background"
import { useState } from "react"

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-background">
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-slow {
          animation: gradient 15s ease infinite;
        }
      `}</style>
      {/* Hero Section */}
      <WavyBackground
        className="max-w-4xl mx-auto"
        colors={["#9333ea", "#d946ef", "#f59e0b"]}
        waveOpacity={0.3}
        blur={20}
      >
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 z-0 animate-gradient-slow bg-gradient-to-br from-purple-900/20 via-pink-800/20 to-amber-700/20 bg-[length:200%_200%]" />
          <div className="container relative z-10 mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-10 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Find Your{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">
                    Dream Job
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover thousands of job opportunities with all the information you need. Manage your profile and
                  applications all in one place.
                </p>
              </div>

              {/* Search Bar */}
              <div className="mx-auto w-full max-w-3xl">
                <div className="flex flex-col gap-4 rounded-xl bg-card p-2 shadow-lg sm:flex-row sm:p-1 md:p-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Job title, keyword, or company"
                      className="h-12 border-0 pl-10 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-amber-500 text-white">
                    Find Jobs <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  Popular: Developer, Designer, Marketing, Remote
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-amber-500 text-white">
                  <Link href="/jobs">
                    Browse Jobs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/profile">
                    My Profile <User className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </WavyBackground>
      {/* Stats Section */}
      <section className="border-t border-border/40 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-500 md:text-4xl">10K+</p>
              <p className="text-sm text-muted-foreground md:text-base">Active Jobs</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-500 md:text-4xl">8M+</p>
              <p className="text-sm text-muted-foreground md:text-base">Job Seekers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-500 md:text-4xl">1.5K+</p>
              <p className="text-sm text-muted-foreground md:text-base">Companies</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-500 md:text-4xl">95%</p>
              <p className="text-sm text-muted-foreground md:text-base">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Our Platform</h2>
            <p className="text-muted-foreground">
              We've built a comprehensive platform that helps job seekers find their dream jobs and manage their career
              effectively.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative rounded-xl border-2 border-purple-500/30 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-amber-500">
                <Search className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Smart Job Search</h3>
              <p className="text-muted-foreground">
                Our AI-powered search helps you find the perfect job match based on your skills and preferences.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="mr-2 h-4 w-4 text-purple-500" /> Personalized job recommendations
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="mr-2 h-4 w-4 text-purple-500" /> Filter by salary, location, and more
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="mr-2 h-4 w-4 text-purple-500" /> Save searches and get alerts
                </li>
              </ul>
            </div>
            <div className="group relative rounded-xl border-2 border-purple-500/30 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-amber-500">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Curated Job Listings</h3>
              <p className="text-muted-foreground">
                We partner with top companies to bring you exclusive job opportunities not found elsewhere.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="mr-2 h-4 w-4 text-purple-500" /> Verified employers and listings
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="mr-2 h-4 w-4 text-purple-500" /> Detailed job descriptions
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="mr-2 h-4 w-4 text-purple-500" /> Transparent salary information
                </li>
              </ul>
            </div>
            <div className="group relative rounded-xl border-2 border-purple-500/30 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-amber-500">
                <User className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Profile Management</h3>
              <p className="text-muted-foreground">
                Easily manage your professional profile and track all your job applications in one place.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="mr-2 h-4 w-4 text-purple-500" /> Resume builder and storage
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="mr-2 h-4 w-4 text-purple-500" /> Application tracking system
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="mr-2 h-4 w-4 text-purple-500" /> Interview scheduling and reminders
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900/10 to-amber-700/10 py-20">
        <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
            <p className="text-muted-foreground">
              Finding your dream job has never been easier. Follow these simple steps to get started.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="relative z-10 rounded-xl bg-card/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-amber-500 text-2xl font-bold text-white shadow-lg shadow-purple-500/20 ring-4 ring-white/10">
                1
              </div>
              <h3 className="mb-2 text-xl font-bold">Create Profile</h3>
              <p className="text-muted-foreground">Sign up and complete your profile with your skills and experience</p>

              {/* Connector line - visible on desktop only */}
              <div className="absolute right-0 top-8 hidden h-0.5 w-full -translate-x-1/2 bg-gradient-to-r from-purple-600 to-amber-500 md:block"></div>
            </div>

            <div className="relative z-10 rounded-xl bg-card/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-amber-500 text-2xl font-bold text-white shadow-lg shadow-purple-500/20 ring-4 ring-white/10">
                2
              </div>
              <h3 className="mb-2 text-xl font-bold">Discover Jobs</h3>
              <p className="text-muted-foreground">
                Browse through thousands of job listings or get personalized recommendations
              </p>

              {/* Connector line - visible on desktop only */}
              <div className="absolute right-0 top-8 hidden h-0.5 w-full -translate-x-1/2 bg-gradient-to-r from-purple-600 to-amber-500 md:block"></div>
            </div>

            <div className="relative z-10 rounded-xl bg-card/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-amber-500 text-2xl font-bold text-white shadow-lg shadow-purple-500/20 ring-4 ring-white/10">
                3
              </div>
              <h3 className="mb-2 text-xl font-bold">Apply Easily</h3>
              <p className="text-muted-foreground">
                Apply to jobs with just a few clicks and track your application status
              </p>

              {/* Connector line - visible on desktop only */}
              <div className="absolute right-0 top-8 hidden h-0.5 w-full -translate-x-1/2 bg-gradient-to-r from-purple-600 to-amber-500 md:block"></div>
            </div>

            <div className="z-10 rounded-xl bg-card/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-amber-500 text-2xl font-bold text-white shadow-lg shadow-purple-500/20 ring-4 ring-white/10">
                4
              </div>
              <h3 className="mb-2 text-xl font-bold">Get Hired</h3>
              <p className="text-muted-foreground">Receive interview invitations and land your dream job</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Jobs</h2>
              <p className="text-muted-foreground">Explore some of our top job opportunities</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/jobs">
                View All Jobs <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Featured Job Card 1 */}
            <Card className="overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 border-b border-border p-4">
                  <div className="h-12 w-12 overflow-hidden rounded-md bg-purple-100 dark:bg-purple-900/20">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="TechCorp logo"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Frontend Developer</h3>
                    <p className="text-sm text-muted-foreground">TechCorp</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Briefcase className="mr-2 h-4 w-4" />
                      Full-time
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Search className="mr-2 h-4 w-4" />
                      $90,000 - $120,000
                    </div>
                  </div>
                  <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-amber-500 text-white">
                    <Link href="/jobs/1">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Featured Job Card 2 */}
            <Card className="overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 border-b border-border p-4">
                  <div className="h-12 w-12 overflow-hidden rounded-md bg-purple-100 dark:bg-purple-900/20">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="DataSystems logo"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Backend Engineer</h3>
                    <p className="text-sm text-muted-foreground">DataSystems</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Briefcase className="mr-2 h-4 w-4" />
                      Full-time
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Search className="mr-2 h-4 w-4" />
                      $100,000 - $140,000
                    </div>
                  </div>
                  <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-amber-500 text-white">
                    <Link href="/jobs/2">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Featured Job Card 3 */}
            <Card className="overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 border-b border-border p-4">
                  <div className="h-12 w-12 overflow-hidden rounded-md bg-purple-100 dark:bg-purple-900/20">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="CreativeMinds logo"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">UX/UI Designer</h3>
                    <p className="text-sm text-muted-foreground">CreativeMinds</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Briefcase className="mr-2 h-4 w-4" />
                      Full-time
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Search className="mr-2 h-4 w-4" />
                      $85,000 - $110,000
                    </div>
                  </div>
                  <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-amber-500 text-white">
                    <Link href="/jobs/3">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-purple-900/10 to-amber-700/10 py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">What Our Users Say</h2>
            <p className="text-muted-foreground">
              Thousands of job seekers have found their dream jobs using our platform. Here's what they have to say.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-xl border-2 border-purple-500/30 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="mb-6 text-muted-foreground">
                "I found my dream job within two weeks of using JobPortal. The platform is intuitive, and the job
                recommendations were spot on. I'm now working at a company I love!"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-amber-500">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Sarah Johnson"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Frontend Developer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-xl border-2 border-purple-500/30 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="mb-6 text-muted-foreground">
                "The application tracking system is a game-changer. I could see exactly where I was in the hiring
                process for each job. The interface is clean and user-friendly."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-amber-500">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Michael Chen"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">Data Scientist</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-xl border-2 border-purple-500/30 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="mb-6 text-muted-foreground">
                "As someone changing careers, JobPortal made the transition so much easier. The job descriptions were
                detailed, and I could filter by entry-level positions in my new field."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-amber-500">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Emily Rodriguez"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Emily Rodriguez</p>
                  <p className="text-sm text-muted-foreground">UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Top Companies</h2>
            <p className="text-muted-foreground">
              We partner with leading companies across industries to bring you the best job opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="h-16 w-32 overflow-hidden rounded-md bg-card p-4 opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0">
                  <Image
                    src={`/placeholder.svg?height=64&width=128&text=Company ${i}`}
                    alt={`Company ${i}`}
                    width={128}
                    height={64}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900/10 to-amber-700/10 py-20">
        <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute -right-40 bottom-40 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Find answers to common questions about our platform and services.</p>
          </div>

          <div className="mx-auto max-w-4xl">
            {/* FAQ Item 1 */}
            <div
              className={`group mb-4 overflow-hidden rounded-xl border-2 ${openFaq === 0 ? "border-purple-500" : "border-purple-500/30"} bg-card/80 backdrop-blur-sm transition-all duration-300`}
            >
              <button
                onClick={() => toggleFaq(0)}
                className="flex w-full items-center justify-between p-6 text-left transition-all duration-300 hover:bg-purple-500/5"
              >
                <h3 className="text-xl font-bold">Is JobPortal completely free to use?</h3>
                <div
                  className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-amber-500 text-white transition-transform duration-300 ${openFaq === 0 ? "rotate-90" : ""}`}
                >
                  <ChevronRight className="h-5 w-5" />
                </div>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === 0 ? "pb-6 max-h-40" : "max-h-0"}`}
              >
                <p className="text-muted-foreground">
                  Yes, JobPortal is completely free for job seekers. You can create a profile, search for jobs, and
                  apply to as many positions as you want without any cost.
                </p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div
              className={`group mb-4 overflow-hidden rounded-xl border-2 ${openFaq === 1 ? "border-purple-500" : "border-purple-500/30"} bg-card/80 backdrop-blur-sm transition-all duration-300`}
            >
              <button
                onClick={() => toggleFaq(1)}
                className="flex w-full items-center justify-between p-6 text-left transition-all duration-300 hover:bg-purple-500/5"
              >
                <h3 className="text-xl font-bold">How do I create an effective profile?</h3>
                <div
                  className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-amber-500 text-white transition-transform duration-300 ${openFaq === 1 ? "rotate-90" : ""}`}
                >
                  <ChevronRight className="h-5 w-5" />
                </div>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === 1 ? "pb-6 max-h-40" : "max-h-0"}`}
              >
                <p className="text-muted-foreground">
                  To create an effective profile, make sure to fill out all sections completely, upload a professional
                  resume, and highlight your key skills and experiences. The more complete your profile, the better your
                  job matches will be.
                </p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div
              className={`group mb-4 overflow-hidden rounded-xl border-2 ${openFaq === 2 ? "border-purple-500" : "border-purple-500/30"} bg-card/80 backdrop-blur-sm transition-all duration-300`}
            >
              <button
                onClick={() => toggleFaq(2)}
                className="flex w-full items-center justify-between p-6 text-left transition-all duration-300 hover:bg-purple-500/5"
              >
                <h3 className="text-xl font-bold">Can I get notified about new job postings?</h3>
                <div
                  className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-amber-500 text-white transition-transform duration-300 ${openFaq === 2 ? "rotate-90" : ""}`}
                >
                  <ChevronRight className="h-5 w-5" />
                </div>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === 2 ? "pb-6 max-h-40" : "max-h-0"}`}
              >
                <p className="text-muted-foreground">
                  Yes, you can set up job alerts based on your preferences. You'll receive notifications when new jobs
                  matching your criteria are posted, ensuring you never miss an opportunity.
                </p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div
              className={`group mb-4 overflow-hidden rounded-xl border-2 ${openFaq === 3 ? "border-purple-500" : "border-purple-500/30"} bg-card/80 backdrop-blur-sm transition-all duration-300`}
            >
              <button
                onClick={() => toggleFaq(3)}
                className="flex w-full items-center justify-between p-6 text-left transition-all duration-300 hover:bg-purple-500/5"
              >
                <h3 className="text-xl font-bold">How can I track my job applications?</h3>
                <div
                  className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-amber-500 text-white transition-transform duration-300 ${openFaq === 3 ? "rotate-90" : ""}`}
                >
                  <ChevronRight className="h-5 w-5" />
                </div>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === 3 ? "pb-6 max-h-40" : "max-h-0"}`}
              >
                <p className="text-muted-foreground">
                  Once you apply for a job through JobPortal, you can track the status of your application in the "My
                  Applications" section of your profile. You'll see updates as your application progresses through the
                  hiring process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-card p-8 shadow-lg sm:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Stay Updated</h2>
              <p className="mb-8 text-muted-foreground">
                Subscribe to our newsletter to receive job tips, career advice, and the latest job postings directly in
                your inbox.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type="email" placeholder="Enter your email address" className="h-12 pl-10" />
                </div>
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-amber-500 text-white">
                  Subscribe Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-gradient-to-r from-purple-900/40 to-amber-800/40 p-8 sm:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to start your job search?</h2>
              <p className="mb-8 text-muted-foreground">
                Create your profile and start applying to jobs today. It only takes a few minutes to get started.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-amber-500 text-white">
                  <Link href="/jobs">
                    Browse Jobs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/profile">
                    Create Profile <User className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
