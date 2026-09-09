import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
          <span className="text-gradient">Less admin. Clearer follow-up.</span>
          <br />
          <span className="text-foreground">For property and vehicle businesses.</span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          Custom software and workflow automation for property management, real estate and estate agents, and small car dealerships. Start with one everyday process that needs to work better.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-purple text-base px-8 py-6">
              Book a Discovery Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary text-base px-8 py-6">
              Explore Your Industry
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
