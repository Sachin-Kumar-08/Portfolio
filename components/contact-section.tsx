"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    // For now, we'll just log the data
    console.log(formData)

    // Create mailto link with form data
    const mailtoLink = `mailto:sachinkumar@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  if (!mounted) return null

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          Contact Me
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-full mb-8"></div>
        <p className="text-muted-foreground text-center max-w-2xl mb-8">
          Feel free to reach out to me for any inquiries or opportunities.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        <div className="space-y-6 animate-slide-in-left">
          <h2 className="text-2xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>

          <div className="space-y-4">
            <Card className="border border-muted bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+919789449634" className="font-medium hover:text-primary transition-colors">
                    +91 978-944-9634
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-muted bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:sachinkumar@example.com" className="font-medium hover:text-primary transition-colors">
                    sachinpremkumar369@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-muted bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Coimbatore, Tamil Nadu, IND</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/Sachin-Kumar-08"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
            >
              <Github className="h-5 w-5 text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/sachin-kumar-mca-snsinstitutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </a>
          </div>

          <div className="pt-4">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
            >
              <a href="https://drive.google.com/drive/folders/1pT2EuiixrKpp2UGKXwfXK--36EQPwI6F" download>
                Download CV
              </a>
            </Button>
          </div>
        </div>

        <Card className="border border-muted bg-card/50 backdrop-blur-sm animate-slide-in-right">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

