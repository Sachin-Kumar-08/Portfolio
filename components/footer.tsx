import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-6 md:px-6 md:py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Sachin Kumar P</h3>
            <p className="text-sm text-muted-foreground">
              Passionate programmer and developer.
            </p>
          </div>
          <div className="space-y-2 md:text-right">
            <div className="flex gap-4 md:justify-end">
              <a
                href="https://github.com/Sachin-Kumar-08"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sachin-kumar-mca-snsinstitutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:sachinpremkumar369@gmail.com" className="p-2 rounded-full hover:bg-muted transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} 
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

