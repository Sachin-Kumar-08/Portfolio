import type { Metadata } from "next"
import SkillsSection from "@/components/skills-section"

export const metadata: Metadata = {
  title: "Skills | Sachin Kumar P",
  description: "Technical skills and expertise of Sachin Kumar P",
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 md:pt-32 md:pb-20">
      <SkillsSection />
    </main>
  )
}

