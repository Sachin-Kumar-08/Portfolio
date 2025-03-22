"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone, Twitter, Youtube, Code, FileCode, BookOpen } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Sachin Kumar P
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed typing-animation">
                Programmer & Developer
              </p>
            </div>

            <div className="space-y-4">
              <p className="max-w-[600px] text-muted-foreground">
                As a highly passionate programmer with a strong understanding of programming languages and tools, I am
                actively seeking a position as a developer to leverage my skills and knowledge for the company's
                advancement.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                >
                  <a href="https://drive.google.com/drive/folders/1pT2EuiixrKpp2UGKXwfXK--36EQPwI6F" download>
                    Download CV
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href="./contact">Contact Me</Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Card className="bg-background/50 backdrop-blur-sm border-muted">
                <CardContent className="p-3 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+919789449634" className="text-sm hover:text-primary transition-colors">
                    +91 978-944-9634
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-background/50 backdrop-blur-sm border-muted">
                <CardContent className="p-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">Coimbatore, Tamil Nadu, IND</span>
                </CardContent>
              </Card>

              <Card className="bg-background/50 backdrop-blur-sm border-muted">
                <CardContent className="p-3 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a
                    href="mailto:sachinpremkumar369@gmail.com"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    sachinpremkumar369@gmail.com
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://github.com/Sachin-Kumar-08"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/sachin-kumar-mca-snsinstitutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://x.com/SachinKumar0079"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                aria-label="Twitter/X"
              >
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://leetcode.com/u/Sachin-Kumar-08/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                aria-label="Stack Overflow"
              >
                <Code className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://www.youtube.com/@SachinKumar-r3c3b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://www.hackerrank.com/profile/sachinpremkumar2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                aria-label="HackerRank"
              >
                <FileCode className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://stackoverflow.com/users/30024791/sachin-kumar?tab=profile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                aria-label="LeetCode"
              >
                <BookOpen className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end animate-slide-in-right">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-primary/20">
              <Image src="/images/profile.jpg" alt="Sachin Kumar P" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

