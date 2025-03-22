import type { Metadata } from "next"
import ExperienceSection from "@/components/experience-section"

export const metadata: Metadata = {
  title: "Experience | Sachin Kumar P",
  description: "Professional experience and work history of Sachin Kumar P",
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-24 pb-12 md:pt-32 md:pb-20">
      <ExperienceSection />
    </main>
  )
}

