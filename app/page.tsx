import Link from "next/link"
import { ArrowRight, Briefcase, Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-900/20 to-amber-700/20" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center justify-center space-y-10 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
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
            <div className="flex flex-col gap-4 sm:flex-row">
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

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Our Platform</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-amber-500">
                <Search className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Smart Job Search</h3>
              <p className="text-muted-foreground">
                Our AI-powered search helps you find the perfect job match based on your skills and preferences.
              </p>
            </div>
            <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-amber-500">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Curated Job Listings</h3>
              <p className="text-muted-foreground">
                We partner with top companies to bring you exclusive job opportunities not found elsewhere.
              </p>
            </div>
            <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-amber-500">
                <User className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Profile Management</h3>
              <p className="text-muted-foreground">
                Easily manage your professional profile and track all your job applications in one place.
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
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-amber-500 text-white">
                <Link href="/jobs">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
