import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Gamepad2,
  Trophy,
  Users,
  Lightbulb,
  MapPin,
  Linkedin,
  Monitor
} from "lucide-react"

export function AboutSection() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Who am I?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Master’s student (M2) specializing in telecommunications and mobile networks (2G-5G), with strong skills in embedded systems and microelectronics.
              <br />
              Actively seeking an end-of-studies internship (PFE) to apply my technical knowledge in an innovative professional environment.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Tetouan, Morocco</span>
              </li>
              <li className="flex items-center gap-2">
                <Gamepad2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Discord: IVII#0626</span>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-muted-foreground" />
                <a 
                  href="https://www.linkedin.com/in/soulaymane-azzouz-8b03792ab/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  in/soulaymane-azzouz
                </a>
              </li>
               <li className="flex items-center gap-2">
                <Monitor className="h-4 w-4 text-muted-foreground" />
                <a 
                  href="https://www.fiverr.com/s/XLWy7BP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  Fiverr Account
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Interests & Opinions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 text-sm text-primary">Interests:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>I Like playing Chess, sometimes I play Valorant and COD BO2.</li>
                <li>I like creating discord communities.</li>
                <li>I watch football like Premier League and La Liga and sometimes playing it.</li>
                <li>Ronaldo is far better than Messi.</li>
              </ul>
            </div>
            <Separator />
            <div>
              <h4 className="font-semibold mb-2 text-sm text-primary">Opinions:</h4>
              <p className="text-sm text-muted-foreground">I'm still thinking...</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <Trophy className="h-5 w-5" />
          Show me your skills ;)
        </h3>
        <div className="w-full flex justify-center p-4 bg-muted/50 rounded-xl overflow-hidden shadow-inner">
             <iframe 
                src="https://lichess1.org/assets/vendor/ChessPursuit/bin-release/index.html" 
                frameBorder="0" 
                width="400" 
                height="500" 
                className="max-w-full rounded-lg"
                 // @ts-ignore
                credentialless="credentialless"
             ></iframe>
        </div>
      </div>
    </div>
  )
}
