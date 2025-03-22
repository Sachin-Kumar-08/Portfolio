import Hero from "@/components/hero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sachin Kumar P | Portfolio",
  description: "Personal portfolio website of Sachin Kumar P, a passionate programmer and developer",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
    </main>
  )
}

