import Link from "next/link"
import { ArrowRight, Building2, Home, Car } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { SimpleAutomationCtaSection } from "@/components/home/simple-automation-cta-section"
import { Button } from "@/components/ui/button"

const tracks = [
  { icon: Car, title: "Small Car Dealerships", description: "Organise vehicle enquiries, test drives, sales follow-ups, and preparation tasks with a clear next action for your team." },
  {
    icon: Building2,
    title: "Property Management",
    description: "Keep maintenance requests, contractor assignments, inspections, and tenant updates organised across your properties.",
  },
  {
    icon: Home,
    title: "Real Estate & Estate Agents",
    description: "Track property enquiries, arrange viewings, and keep buyer, seller, and landlord follow-ups moving.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />

        <section className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Our approach</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Start with the work that needs attention.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We start by understanding your current process, the tools you use, and where work gets delayed. Together, we can choose one useful workflow to improve and agree how to assess it before building.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 border-t border-border/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">What we build</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Practical tools for three kinds of business.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                NELKAI offers custom software and workflow automation for property managers, estate agents, and small car dealerships. The focus is on enquiries, coordination, and everyday follow-up.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {tracks.map((track) => {
                const Icon = track.icon
                return (
                  <div key={track.title} className="rounded-2xl border border-border/50 bg-card/60 p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-foreground">{track.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{track.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <SimpleAutomationCtaSection />

        <section className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-primary/30 bg-card/80 p-8 sm:p-12 lg:p-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                What is taking up too much of your day?
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Tell us about a recurring problem: tenant requests, viewing arrangements, vehicle enquiries, or another task your team keeps chasing. We can explore whether a simpler process or a small automation would help.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-purple text-base px-8 py-6">
                    Book a Discovery Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
