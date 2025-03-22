import type { Metadata } from "next"
import QualificationSection from "@/components/qualification-section"

export const metadata: Metadata = {
  title: "Qualifications | Sachin Kumar P",
  description: "Academic qualifications and education details of Sachin Kumar P",
}

export default function QualificationPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 md:pt-32 md:pb-20">
      <QualificationSection />
    </main>
  )
}

