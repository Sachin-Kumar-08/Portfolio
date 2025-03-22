"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Download } from "lucide-react"

export default function QualificationSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          Qualifications
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-full mb-8"></div>
        <p className="text-muted-foreground text-center max-w-2xl mb-8">
          My academic journey and educational background that has shaped my knowledge and skills.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        <Card className="border border-muted bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 animate-fade-in">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Masters of Computer Application</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Institution:</span>
              <span className="font-medium">SNS College of Technology</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Percentage:</span>
              <span className="font-medium">NA (In Progress)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-medium">2024 - Present</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-muted bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 animate-fade-in delay-100">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Bachelor of Computer Science</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Institution:</span>
              <span className="font-medium">Bharathiar University</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">CGPA:</span>
              <span className="font-medium">7.093</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-medium">2018 - 2021</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-12">
        <Button
          asChild
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
        >
          <a href="https://drive.google.com/drive/folders/1pT2EuiixrKpp2UGKXwfXK--36EQPwI6F" download>
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </a>
        </Button>
      </div>
    </div>
  )
}

