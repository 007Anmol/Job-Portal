"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JobCard } from "@/components/job-card"
import { jobs } from "@/lib/data"

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredJobs, setFilteredJobs] = useState(jobs)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const filtered = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredJobs(filtered)
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Available Jobs</h1>
        <p className="text-muted-foreground">Browse through our curated list of job opportunities</p>
      </div>

      <div className="mb-8 rounded-lg border border-border bg-card p-4 shadow-sm">
        <form onSubmit={handleSearch} className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search jobs, companies, or locations..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-amber-500 text-white transition-all duration-300 hover:shadow-lg"
          >
            Search Jobs
          </Button>
        </form>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <div className="col-span-full text-center">
            <p className="text-lg text-muted-foreground">No jobs found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
