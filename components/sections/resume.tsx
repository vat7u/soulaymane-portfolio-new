import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, GraduationCap, Code, Trophy } from "lucide-react"

export function ResumeSection() {
  return (
    <div className="space-y-12">
      
      {/* Experience */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            Experience
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
            {/* Item 1 */}
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-lg">President</CardTitle>
                            <CardDescription className="font-semibold text-primary/80">MICROTECH CLUB</CardDescription>
                        </div>
                        <Badge variant="outline">Oct 2024 - Present</Badge>
                    </div>
                </CardHeader>
                 <CardContent>
                    <p className="text-sm text-muted-foreground">
                       In our club, we target students interested in Electronics, Robotics, IoT, and Embedded Systems, providing a supportive and creative environment for growth and learning.
                    </p>
                 </CardContent>
            </Card>
            
             {/* Item 2 */}
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-lg">Freelance Altium Designer</CardTitle>
                        </div>
                         <Badge variant="outline">Jul 2024 - Present</Badge>
                    </div>
                </CardHeader>
                 <CardContent>
                    <p className="text-sm text-muted-foreground">
                      As a freelance PCB Design expert on Fiverr, I specialize in custom circuit layouts, from simple to complex designs. I focus on precision and efficiency.
                    </p>
                 </CardContent>
            </Card>

             {/* Item 3 */}
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-lg">Director and Founder</CardTitle>
                            <CardDescription className="font-semibold text-primary/80">Touch of Sacrifice</CardDescription>
                        </div>
                         <Badge variant="outline">2023 - Present</Badge>
                    </div>
                </CardHeader>
                 <CardContent>
                    <p className="text-sm text-muted-foreground">
                      <b>Touch of Sacrifice</b> is an online chess community hosted primarily on Discord. We offer high quality chess lessons, organize tournaments, and provide a space for players.
                    </p>
                 </CardContent>
            </Card>

             {/* Item 4 */}
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-lg">Chess Coach</CardTitle>
                            <CardDescription className="font-semibold text-primary/80">Innov'ed Center</CardDescription>
                        </div>
                         <Badge variant="outline">Oct 2023 - Dec 2023</Badge>
                    </div>
                </CardHeader>
                 <CardContent>
                    <p className="text-sm text-muted-foreground">
                      I've honed my skills in coaching and mentoring aspiring chess players, fostering strategic thinking, and instilling a passion for the game.
                    </p>
                 </CardContent>
            </Card>
            
            {/* Item 5 */}
             <Card>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-lg">Consultant and Treasurer</CardTitle>
                            <CardDescription className="font-semibold text-primary/80">FS Chess Club</CardDescription>
                        </div>
                         <Badge variant="outline">Sep 2022 - Present</Badge>
                    </div>
                </CardHeader>
                 <CardContent>
                    <p className="text-sm text-muted-foreground">
                       Our club helps students learn chess basics, master openings, improve skills, and participate in tournaments.
                    </p>
                 </CardContent>
            </Card>

             {/* Item 6 */}
             <Card>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-lg">Discord Developer and Manager</CardTitle>
                            <CardDescription className="font-semibold text-primary/80">Freelance</CardDescription>
                        </div>
                         <Badge variant="outline">2020 - Present</Badge>
                    </div>
                </CardHeader>
                 <CardContent>
                    <p className="text-sm text-muted-foreground">
                      I am a Discord Developer specializing in custom bot creation and server optimization to streamline management and enhance user engagement.
                    </p>
                 </CardContent>
            </Card>
        </div>
      </div>

       {/* Education */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                             <CardTitle className="text-lg">Master's degree, Microelectronics & Radio Frequency</CardTitle>
                            <CardDescription>Faculty of sciences Tetouan</CardDescription>
                        </div>
                        <Badge variant="outline">2024 - Present</Badge>
                    </div>
                </CardHeader>
            </Card>
             <Card>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                             <CardTitle className="text-lg">Bachelor's degree, Microelectronics & Radio Frequency</CardTitle>
                            <CardDescription>Faculty of sciences Tetouan</CardDescription>
                        </div>
                        <Badge variant="outline">2023 - 2024</Badge>
                    </div>
                </CardHeader>
            </Card>
             <Card>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                             <CardTitle className="text-lg">Deug en SMP mention bien</CardTitle>
                            <CardDescription>Faculty of sciences Tetouan</CardDescription>
                        </div>
                        <Badge variant="outline">2021 - 2023</Badge>
                    </div>
                </CardHeader>
            </Card>
             <Card>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                             <CardTitle className="text-lg">Baccalauréat sciences physiques</CardTitle>
                            <CardDescription>LYCEE MOULAY RACHID - CHEFCHAOUEN</CardDescription>
                        </div>
                        <Badge variant="outline">2020 - 2021</Badge>
                    </div>
                </CardHeader>
            </Card>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
             <Code className="h-6 w-6 text-primary" />
            Skills and Technologies
        </h2>
        <div className="flex flex-wrap gap-4">
            {[
                { name: "Arduino", icon: "/assets/images/Arduino.svg" },
                { name: "Altium Designer", icon: "/assets/images/Altium Designer.svg" },
                { name: "Matlab", icon: "/assets/images/Matlab.svg" },
                { name: "Python", icon: "/assets/images/python.svg" },
                { name: "C#", icon: "/assets/images/c.svg" },
                { name: "GitHub", icon: "/assets/images/github.svg" },
                { name: "Mplab", icon: "/assets/images/Mplab.svg" },
                { name: "VS Code", icon: "/assets/images/VS_code.svg" },
                { name: "Ltspice", icon: "https://images.sftcdn.net/images/t_app-icon-s/p/d55e21eb-857a-4b0e-8403-584ec5ce0543/1490032411/ltspice-icon.jpg" },
                { name: "PicsimLab", icon: "https://lcgamboa.github.io/picsimlab_docs/stable/img/logo.png" },
                { name: "VHDL", icon: "/assets/images/VHDL.svg" },
                 { name: "Proteus", icon: "https://upload.wikimedia.org/wikipedia/en/5/5a/Proteus_Design_Suite_Atom_Logo.png" }
            ].map((skill, index) => (
                <div key={index} className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full border border-border/50 transition-colors hover:bg-secondary hover:border-primary/50">
                    <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
                    <span className="text-sm font-medium">{skill.name}</span>
                </div>
            ))}
        </div>
      </div>
      
       {/* Licenses & Certifications */}
       <div className="space-y-6">
         <h2 className="text-2xl font-bold flex items-center gap-2">
             <Trophy className="h-6 w-6 text-primary" />
             Licenses & Certifications
         </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
             {[
                {
                    title: "SolidWorks Advanced",
                    skills: "3D Modeling · Assembly Design · Parametric Design...",
                    image: "/assets/images/SolidWorks Advanced.png"
                },
                {
                    title: "Machine Learning Onramp",
                    skills: "Machine Learning · Neural Networks · Deep Learning...",
                    image: "/assets/images/Machine Learning Onramp.png"
                },
                {
                    title: "PCB basic Design ALTIUM DESIGNER",
                    skills: "PCB Design",
                    image: "/assets/images/PCB basic Design ALTIUM DESIGNER.png"
                },
                {
                    title: "Python Programming Udemy",
                    skills: "Python Programming",
                    image: "/assets/images/Python Programming Udemy.png"
                },
                {
                    title: "Python Basic Programs",
                    skills: "Python Programming",
                    image: "/assets/images/PBP.png"
                },
                 {
                    title: "C for beginners",
                    skills: "C Programming",
                    image: "/assets/images/C.png"
                },
                {
                    title: "Introduction to Computer Vision",
                    skills: "Computer Vision · Object Detection...",
                    image: "/assets/images/ICV.png"
                },
                {
                     title: "CISCO Python Essentials 1",
                    skills: "Python Programming",
                    image: "/assets/images/CISCO.png"
                }

             ].map((cert, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-md transition-all">
                     <div className="relative aspect-video overflow-hidden bg-muted">
                        <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover"
                        />
                    </div>
                     <CardHeader className="p-4 space-y-1">
                         <CardTitle className="text-sm font-semibold line-clamp-2" title={cert.title}>{cert.title}</CardTitle>
                         <CardDescription className="text-xs line-clamp-2" title={cert.skills}>{cert.skills}</CardDescription>
                     </CardHeader>
                </Card>
             ))}
          </div>
       </div>

    </div>
  )
}
