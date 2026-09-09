import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Home, Car } from "lucide-react"

const sections = [
  {
    icon: Building2,
    label: "Property Management",
    title: "Keep maintenance and property work visible",
    description: "For teams managing multiple properties, contractors, inspections, and tenant communication.",
    items: [
      "Capture maintenance requests with the right property and issue details.",
      "Assign an internal owner or contractor and keep the current status visible.",
      "Create reminders for inspections, overdue work, and unresolved requests.",
      "Prepare tenant or landlord update drafts for staff review where useful.",
    ],
  },
  {
    icon: Home,
    label: "Real Estate & Estate Agents",
    title: "Give every enquiry and viewing a next action",
    description: "For agencies handling buyer, seller, landlord, and property enquiries across multiple channels.",
    items: [
      "Route property enquiries into a clear team workflow.",
      "Organise viewing scheduling, confirmations, and reminders.",
      "Create post-viewing follow-up tasks so leads do not disappear.",
      "Keep buyer, seller, and landlord progress tied to a named owner.",
    ],
  },
  {
    icon: Car,
    label: "Small Car Dealerships",
    title: "Follow vehicle enquiries through to handover",
    description: "For smaller sales teams that need consistent follow-up without adding unnecessary admin.",
    items: [
      "Track the vehicle of interest and assign each enquiry to a salesperson.",
      "Organise test-drive scheduling, confirmations, and reminders.",
      "Create follow-up tasks after calls, visits, and test drives.",
      "Coordinate vehicle preparation, document reminders, and handover tasks.",
    ],
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Industries</p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Operational software for property businesses and small dealerships
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              The examples below are starting points, not pre-packaged products. We first map how your team works today, identify the bottleneck, and then decide whether a focused tool or automation is justified.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <article key={section.title} className="rounded-2xl border border-border/50 bg-card/60 p-7">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-primary mb-3">{section.label}</p>
                  <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{section.description}</p>
                  <ul className="mt-6 space-y-3 text-muted-foreground list-disc pl-5">
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              )
            })}
          </div>

          <div className="mt-16 rounded-3xl border border-primary/30 bg-card/60 p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">First step</p>
            <h2 className="mt-4 text-3xl font-bold text-foreground">Bring us one process that is harder to manage than it should be.</h2>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
              We can walk through the current steps, who is involved, where information lives, and what gets delayed. If there is a useful opportunity, we can scope a small pilot and agree how to judge whether it works before expanding.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Discuss Your Workflow
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10">
                  View Illustrative Use Cases
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
