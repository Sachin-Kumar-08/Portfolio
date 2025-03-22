"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Github } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          Projects
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-full mb-8"></div>
        <p className="text-muted-foreground text-center max-w-2xl mb-8">
          A showcase of my projects and development work.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <Card className="border border-muted bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 animate-fade-in overflow-hidden">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src="/placeholder.svg?height=192&width=384"
              alt="Staff Management System"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle>Staff Management System</CardTitle>
              <a
                href="https://github.com/Sachin-Kumar-08"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-4 w-4" />
              Jan 2021 - Mar 2021
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Final year project: Created a web-based staff management system with HTML and CSS. Collaborated with
              college seniors to integrate backend functionality using PHP and SQL.
            </p>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2">
            <div className="bg-primary/10 px-2 py-1 rounded-md text-xs font-medium text-primary">HTML</div>
            <div className="bg-primary/10 px-2 py-1 rounded-md text-xs font-medium text-primary">CSS</div>
            <div className="bg-primary/10 px-2 py-1 rounded-md text-xs font-medium text-primary">PHP</div>
            <div className="bg-primary/10 px-2 py-1 rounded-md text-xs font-medium text-primary">SQL</div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

