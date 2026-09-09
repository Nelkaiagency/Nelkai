import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary mb-6">
          Property management · Estate agents · Small car dealerships
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
          <span className="text-gradient">Fix the workflow before adding more software.</span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
          NELKAI maps how your team handles enquiries, maintenance, viewings, test drives, and follow-up, then builds focused software or automation where it genuinely helps.
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
              See Industry Use Cases
            </Button>
          </Link>
        </div>

        <p className="mt-6 text-sm text-muted-foreground max-w-2xl mx-auto">
          No generic AI package. Start with one recurring process, understand the bottleneck, then decide whether software is worth building.
        </p>
      </div>
    </section>
  )
}
