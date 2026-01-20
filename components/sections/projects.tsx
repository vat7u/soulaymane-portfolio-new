import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Object detection and tracking using and YOLOv8 and Python",
    category: "Python | Deep Learning",
    image: "/assets/images/Object Detection and Tracking Python.jpg",
    link: "https://www.linkedin.com/posts/soulaymane-azzouz_objectdetection-computervision-yolo-activity-7183135754607284224-fUUq?utm_source=share&utm_medium=member_desktop"
  },
  {
    title: "Design of XY Computer Numeric Control (CNC) Drawing Machine Plotter",
    category: "PCB Design",
    image: "/assets/images/FYP.jpg",
    link: "https://www.linkedin.com/posts/soulaymane-azzouz_finalyearproject-cnc-engineering-activity-7222972836640944128-zj9-?utm_source=share&utm_medium=member_desktop"
  },
  {
    title: "IoT-Based Smart Parking System",
    category: "PCB Design",
    image: "/assets/images/PARKING-.png",
    link: "https://www.linkedin.com/posts/soulaymane-azzouz_iot-based-smart-parking-system-using-eps32-activity-7202823088500015104-MPLR?utm_source=share&utm_medium=member_desktop"
  },
  {
    title: "ESP32 LoRa GPS Tracking System",
    category: "PCB Design",
    image: "/assets/images/ESP32 LoRa GPS Tracking System-1.png",
    link: "https://www.linkedin.com/posts/soulaymane-azzouz_esp32-lora-gps-tracking-system-activity-7243674809115582464-4WUW?utm_source=share&utm_medium=member_desktop"
  },
  {
    title: "PIC16F877A microcontroller",
    category: "PCB Design",
    image: "/assets/images/PIC16F877A-01.png",
    link: "https://www.linkedin.com/posts/soulaymane-azzouz_embeddedsystems-pcbdesign-microcontroller-activity-7228781782475640832-ooH5?utm_source=share&utm_medium=member_desktop"
  }
]

export function ProjectsSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block"
        >
            <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:border-primary/50">
            <div className="relative aspect-video overflow-hidden">
                <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <CardHeader className="p-4">
                <div className="mb-2">
                    <Badge variant="secondary" className="text-xs font-normal">
                        {project.category}
                    </Badge>
                </div>
                <CardTitle className="text-base leading-tight group-hover:text-primary transition-colors">
                {project.title}
                </CardTitle>
            </CardHeader>
            </Card>
        </a>
      ))}
    </div>
  )
}
