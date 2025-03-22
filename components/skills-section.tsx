"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Database, GitGraphIcon as Git, Globe } from "lucide-react"

export default function SkillsSection() {
  const [mounted, setMounted] = useState(false)
  const [progressValues, setProgressValues] = useState({
    html: 0,
    css: 0,
    js: 0,
    java: 0,
    python: 0,
    mysql: 0,
    mongodb: 0,
    git: 0,
    github: 0,
  })

  useEffect(() => {
    setMounted(true)

    // Animate progress bars
    const timer = setTimeout(() => {
      setProgressValues({
        html: 90,
        css: 70,
        js: 45,
        java: 65,
        python: 70,
        mysql: 65,
        mongodb: 35,
        git: 70,
        github: 70,
      })
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          Skills
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-full mb-8"></div>
        <p className="text-muted-foreground text-center max-w-2xl mb-8">
          My technical expertise and professional skills that I've developed throughout my career.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        <Card className="border border-muted bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 animate-fade-in">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Web Technology</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">HTML</span>
                <span className="text-sm text-muted-foreground">{progressValues.html}%</span>
              </div>
              <Progress value={progressValues.html} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">CSS</span>
                <span className="text-sm text-muted-foreground">{progressValues.css}%</span>
              </div>
              <Progress value={progressValues.css} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">JavaScript</span>
                <span className="text-sm text-muted-foreground">{progressValues.js}%</span>
              </div>
              <Progress value={progressValues.js} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="border border-muted bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 animate-fade-in delay-100">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Programming Language</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Java</span>
                <span className="text-sm text-muted-foreground">{progressValues.java}%</span>
              </div>
              <Progress value={progressValues.java} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Python</span>
                <span className="text-sm text-muted-foreground">{progressValues.python}%</span>
              </div>
              <Progress value={progressValues.python} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="border border-muted bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 animate-fade-in delay-200">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Database</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">MySQL</span>
                <span className="text-sm text-muted-foreground">{progressValues.mysql}%</span>
              </div>
              <Progress value={progressValues.mysql} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">MongoDB</span>
                <span className="text-sm text-muted-foreground">{progressValues.mongodb}%</span>
              </div>
              <Progress value={progressValues.mongodb} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="border border-muted bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 animate-fade-in delay-300">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <Git className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Version Control</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Git</span>
                <span className="text-sm text-muted-foreground">{progressValues.git}%</span>
              </div>
              <Progress value={progressValues.git} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">GitHub</span>
                <span className="text-sm text-muted-foreground">{progressValues.github}%</span>
              </div>
              <Progress value={progressValues.github} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

