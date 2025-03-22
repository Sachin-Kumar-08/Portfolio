"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function ExperienceSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          Experience
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-full mb-8"></div>
        <p className="text-muted-foreground text-center max-w-2xl mb-8">
          My professional journey and work experience that has shaped my career.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="border border-muted bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 animate-slide-in-left">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle>Process Executive</CardTitle>
              <p className="text-muted-foreground">Cognizant Technologies and Solutions</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                Mar 2023 - Apr 2024
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
                Coimbatore, Tamil Nadu, IND
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Work Summary:</h4>
              <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                <li>
                  Contributed to a U.S.-based insurance claim authorization project for Health Care Service Corporation.
                </li>
                <li>Collaborated effectively with team members to consistently meet daily targets.</li>
                <li>
                  Undertook responsibilities including documentation preparation, updates, and facilitating knowledge
                  transfer.
                </li>
                <li>Conducted Quality Checking processes to maintain project integrity.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-muted bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 animate-slide-in-right">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle>Graphic Designer/Video Editor</CardTitle>
              <p className="text-muted-foreground">Freelancer</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                Apr 2021 - Mar 2023
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
                Tamil Nadu, IND
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Work Summary:</h4>
              <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                <li>Worked on diverse projects, including posters, logos, business cards, and storyboards.</li>
                <li>Utilized Illustrator and Photoshop for design tasks.</li>
                <li>Proficient in video editing for short films, wedding videos, ads, and 2D animation.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

