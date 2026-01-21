import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center mx-auto justify-between px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Logic: Logo_dark.png has existing class 'dark'. Logo_light.png has existing class 'light'.
               In the original site, simple display switching was used.
               Here 'dark' class on element usually means it is styled FOR dark mode (or inside dark container).
               Assuming: 
               Logo_dark.png -> Visible in Dark Mode
               Logo_light.png -> Visible in Light Mode
           */}
          <div className="relative h-40 w-60">
            <Image
              src="/assets/images/Logo_dark.png"
              alt="Soulaymane Portfolio"
              fill
              className="hidden dark:block object-contain object-left"
              priority
            />
            <Image
              src="/assets/images/Logo_light.png"
              alt="Soulaymane Portfolio"
              fill
              className="block dark:hidden object-contain object-left"
              priority
            />
          </div>
        </Link>
        <div className="flex items-center space-x-2">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {/* Add nav links if needed later, currently site is single page with tabs */}
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
