"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Briefcase, MapPin, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Job } from "@/lib/data"

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden border-border bg-card transition-all duration-200 hover:border-purple-500/50 hover:shadow-md">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
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
            <h3 className="font-semibold leading-none tracking-tight">{job.title}</h3>
            <p className="text-sm text-muted-foreground">{job.company}</p>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="mb-4 space-y-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-1 h-4 w-4" />
              {job.location}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Briefcase className="mr-1 h-4 w-4" />
              {job.type}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-4 w-4" />
              Posted {job.posted}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-purple-500/10 text-purple-500">
              {job.salary}
            </Badge>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            asChild
            className="w-full bg-gradient-to-r from-purple-600 to-amber-500 text-white transition-all duration-300 hover:shadow-md"
          >
            <Link href={`/jobs/${job.id}`}>View Details</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
