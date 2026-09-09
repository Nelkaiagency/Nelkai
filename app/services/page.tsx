import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const sections = [
  {
    "label": "Property Management",
    "title": "Coordinate requests and maintenance",
    "description": "Keep property work clear from the first tenant report to completion.",
    "items": [
      "Maintenance request intake with property details and an assigned owner.",
      "Contractor task tracking, inspection reminders, and outstanding-work lists.",
      "Tenant and landlord update drafts, with staff review where needed."
    ]
  },
  {
    "label": "Real Estate & Estate Agents",
    "title": "Keep enquiries and viewings moving",
    "description": "Give every property enquiry a clear next step for your team.",
    "items": [
      "Capture and route enquiries from agreed sources into your existing workflow.",
      "Viewing scheduling, reminders, and follow-up tasks.",
      "Buyer, seller, and landlord progress tracking with a named owner."
    ]
  },
  {
    "label": "Small Car Dealerships",
    "title": "Follow through from enquiry to handover",
    "description": "Organise sales admin around the vehicles and people involved.",
    "items": [
      "Vehicle enquiry tracking and salesperson follow-up reminders.",
      "Test-drive scheduling and appointment confirmations.",
      "Vehicle preparation checklists, document reminders, and handover tasks."
    ]
  }
]

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Workflow support for property businesses and small dealerships</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">NELKAI offers process mapping, focused automation, and custom tools for three target industries. We begin with your existing tools and agree the scope, integrations, and costs before implementation.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {sections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-border/50 bg-card/60 p-7">
                <p className="text-sm font-semibold text-primary mb-3">{section.label}</p>
                <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{section.description}</p>
                <ul className="mt-6 space-y-3 text-muted-foreground list-disc pl-5">
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-16 rounded-3xl border border-primary/30 bg-card/60 p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-foreground">Start with your current process</h2>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">Walk us through one recurring task. We can map the steps, check what your current tools support, and propose a small pilot with an agreed measure of success. AI can help with drafting or sorting information where appropriate; your team stays responsible for decisions and exceptions.</p>
            <Link href="/contact" className="inline-block mt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">Discuss Your Workflow<ArrowRight className="ml-2 w-5 h-5" /></Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
