import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const works = [
  {
    title: "Freelance PCB Design Specialist | Expert in Custom Circuit Layouts & Design Solutions.",
    category: "PCB Design",
    image: "/assets/images/PCB Design.jpg",
    link: "https://www.fiverr.com/hundredfiftytwo/design-pcb-kits-and-gerber-files-for-manufacturing"
  },
  {
    title: "Offering tailored solutions for server setup, bot integration, role management, and community engagement.",
    category: "Discord Development & Management",
    image: "/assets/images/DSC.jpg",
    link: "https://www.fiverr.com/hundredfiftytwo/set-up-and-manage-your-discord-community-server?context_referrer=seller_page&ref_ctx_id=eb42fda38b8e44028f166bf43d185184&pckg_id=1&pos=2&imp_id=55b36652-64a6-4683-8f5b-2e9317399a2e"
  }
]

export function WorkSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {works.map((work, index) => (
        <a 
            key={index} 
            href={work.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block"
        >
            <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:border-primary/50">
            <div className="relative aspect-video overflow-hidden">
                <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <CardHeader className="p-4">
                <div className="mb-2">
                    <Badge variant="secondary" className="text-xs font-normal">
                        {work.category}
                    </Badge>
                </div>
                <CardTitle className="text-base leading-tight group-hover:text-primary transition-colors">
                {work.title}
                </CardTitle>
            </CardHeader>
            </Card>
        </a>
      ))}
    </div>
  )
}
