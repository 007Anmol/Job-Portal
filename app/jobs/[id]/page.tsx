"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, Briefcase, Calendar, Clock, MapPin, Share2 } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { jobs, type Job } from "@/lib/data"

export default function JobDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [job, setJob] = useState<Job | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const foundJob = jobs.find((j) => j.id === params.id)
      setJob(foundJob || null)
      setLoading(false)
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4 py-8 sm:px-6">
        <div className="text-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="mt-4 text-muted-foreground">Loading job details...</p>
        </div>
      </div>
    )
  }

  if (!job) {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-8 sm:px-6">
        <h1 className="mb-4 text-2xl font-bold">Job Not Found</h1>
        <p className="mb-6 text-muted-foreground">The job you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => router.push("/jobs")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Jobs
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6">
      <Button variant="ghost" className="mb-6" onClick={() => router.push("/jobs")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Jobs
      </Button>

      <div className="grid gap-8 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:col-span-2"
        >
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-md">
                  <Image
                    src={job.logo || "/placeholder.svg"}
                    alt={`${job.company} logo`}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{job.title}</h1>
                  <p className="text-muted-foreground">{job.company}</p>
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  {job.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Briefcase className="mr-1 h-4 w-4" />
                  {job.type}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  Posted {job.posted}
                </div>
              </div>

              <div className="mb-6">
                <Badge variant="outline" className="bg-purple-500/10 text-purple-500">
                  {job.salary}
                </Badge>
              </div>

              <div className="mb-8 space-y-6">
                <div>
                  <h2 className="mb-2 text-xl font-semibold">Job Description</h2>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>

                <div>
                  <h2 className="mb-2 text-xl font-semibold">Requirements</h2>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="flex-1 bg-gradient-to-r from-purple-600 to-amber-500 text-white transition-all duration-300 hover:shadow-lg">
                  Apply Now
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="mr-2 h-4 w-4" /> Share Job
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="md:col-span-1"
        >
          <Card className="sticky top-24 border-border bg-card">
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Company Information</h2>
              <div className="mb-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-md">
                    <Image
                      src={job.logo || "/placeholder.svg"}
                      alt={`${job.company} logo`}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{job.company}</p>
                    <p className="text-sm text-muted-foreground">{job.location}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {job.company} is a leading company in the tech industry, focused on innovation and creating
                  cutting-edge solutions.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Job Posted</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  {job.posted}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
