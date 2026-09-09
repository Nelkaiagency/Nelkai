import Link from "next/link"
import { ArrowRight, Building2, Home, Car, Search, Workflow, Wrench } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { SimpleAutomationCtaSection } from "@/components/home/simple-automation-cta-section"
import { Button } from "@/components/ui/button"

const tracks = [
  {
    icon: Building2,
    title: "Property Management",
    description: "Maintenance requests, contractor coordination, inspections, tenant updates, and visibility across multiple properties.",
  },
  {
    icon: Home,
    title: "Real Estate & Estate Agents",
    description: "Property enquiries, viewing arrangements, buyer and seller follow-up, and keeping every lead tied to a clear next action.",
  },
  {
    icon: Car,
    title: "Small Car Dealerships",
    description: "Vehicle enquiries, test-drive scheduling, salesperson follow-up, preparation tasks, and handover coordination.",
  },
]

const process = [
  {
    icon: Search,
    step: "01",
    title: "Understand the process",
    description: "We start with how the work is actually handled today: people, tools, handoffs, delays, and exceptions.",
  },
  {
    icon: Workflow,
    step: "02",
    title: "Find the bottleneck",
    description: "We narrow the problem to one recurring workflow where better structure or automation could create a measurable improvement.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Build only what is useful",
    description: "If software is justified, we scope a focused pilot, agree what success looks like, and expand only after it proves useful.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />

        <section className="py-20 sm:py-24 border-t border-border/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Focused industries</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Built around businesses with constant follow-up and coordination.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                NELKAI focuses on three operationally busy sectors where enquiries, appointments, maintenance, handovers, and internal follow-up can easily become fragmented across email, phone, spreadsheets, and messaging apps.
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

        <section className="py-20 sm:py-24 border-t border-border/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">How we work</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Research first. Build second.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We do not begin by forcing an AI tool into your business. We begin with the process, identify what is actually causing friction, and only recommend software where it makes sense.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {process.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.step} className="rounded-2xl border border-border/50 bg-card/40 p-8">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-primary">{item.step}</span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{item.description}</p>
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
                Show us the process your team keeps chasing.
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Bring one real example: a maintenance request that gets lost, a viewing that needs repeated follow-up, a vehicle enquiry with no clear owner, or another recurring workflow. We will start there.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-purple text-base px-8 py-6">
                    Book a Discovery Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 text-base px-8 py-6">
                    See Example Workflows
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
