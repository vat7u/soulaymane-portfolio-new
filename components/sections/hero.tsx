import Image from "next/image"
import { Mail, Phone, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="relative h-60 w-60 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
            <Image
              src="/assets/images/soul.jpg"
              alt="Soulaymane Azzouz"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-2">
            <Badge variant="outline" className="text-base px-4 py-1 border-primary/50 bg-background/50 backdrop-blur-sm">
              Master's Student - Microelectronics & Radio Frequency
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              AZZOUZ Soulaymane
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl" suppressHydrationWarning>
              {(() => {
                const birthDate = new Date("2003-08-01")
                const today = new Date()
                let age = today.getFullYear() - birthDate.getFullYear()
                const m = today.getMonth() - birthDate.getMonth()
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                  age--
                }
                return age
              })()} years old, Chess player from <span className="font-semibold text-primary">Chefchaouen</span> Morocco
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild variant="default" className="rounded-full">
              <a href="mailto:soulaymaneazzouz@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                soulaymaneazzouz@gmail.com
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href="tel:+212628740564">
                <Phone className="mr-2 h-4 w-4" />
                +212 628 740 564
              </a>
            </Button>
            <Button asChild variant="secondary" className="rounded-full">
              <a href="/assets/PDF/french.pdf" download>
                <FileText className="mr-2 h-4 w-4" />
                French Resume
              </a>
            </Button>
            <Button asChild variant="secondary" className="rounded-full">
              <a href="/assets/PDF/english.pdf" download>
                <FileText className="mr-2 h-4 w-4" />
                English Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
