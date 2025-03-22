import type { Metadata } from "next"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contact | Sachin Kumar P",
  description: "Get in touch with Sachin Kumar P",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 md:pt-32 md:pb-20">
      <ContactSection />
    </main>
  )
}

