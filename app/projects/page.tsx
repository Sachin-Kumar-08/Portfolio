import type { Metadata } from "next"
import ProjectsSection from "@/components/projects-section"

export const metadata: Metadata = {
  title: "Projects | Sachin Kumar P",
  description: "Portfolio of projects developed by Sachin Kumar P",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 md:pt-32 md:pb-20">
      <ProjectsSection />
    </main>
  )
}

