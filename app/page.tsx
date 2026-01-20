import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { WorkSection } from "@/components/sections/work";
import { ResumeSection } from "@/components/sections/resume";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative bg-background text-foreground">
      <Navbar />
      <HeroSection />

      <section className="container px-4 md:px-6 py-8 pb-20">
        <Tabs defaultValue="about" className="w-full space-y-8">
          <div className="flex justify-center flex-wrap">
            <TabsList className="grid w-full max-w-[500px] grid-cols-4 bg-muted/50 p-1">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="work">Work</TabsTrigger>
              <TabsTrigger value="resume">Resume</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="about" className="space-y-4 focus-visible:outline-none focus-visible:ring-0">
            <AboutSection />
          </TabsContent>

          <TabsContent value="projects" className="space-y-4 focus-visible:outline-none focus-visible:ring-0">
            <ProjectsSection />
          </TabsContent>

          <TabsContent value="work" className="space-y-4 focus-visible:outline-none focus-visible:ring-0">
            <WorkSection />
          </TabsContent>

          <TabsContent value="resume" className="space-y-4 focus-visible:outline-none focus-visible:ring-0">
            <ResumeSection />
          </TabsContent>
        </Tabs>
      </section>

      <footer className="py-6 border-t border-border/40 text-center text-sm text-muted-foreground bg-background">
        <div className="container">
          <a target="_blank" href="https://vat7u.github.io/Portfolio/" className="hover:text-primary transition-colors">
            @Vat7u was here
          </a>
        </div>
      </footer>
    </main>
  );
}
