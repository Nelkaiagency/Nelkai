import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const sections = [
  {
    "label": "Property Management · Illustrative example",
    "title": "A maintenance request with a clear owner",
    "description": "A tenant reports a repair. A proposed workflow could keep the request and its next action together.",
    "items": [
      "Collect the property, issue description, and supporting details.",
      "Let a staff member review urgency and assign the appropriate contractor.",
      "Track progress and prepare updates for staff to approve.",
      "Evaluate the pilot using time to assignment and overdue requests."
    ]
  },
  {
    "label": "Estate Agents · Illustrative example",
    "title": "From property enquiry to viewing follow-up",
    "description": "A buyer asks about a listing. A proposed workflow could help the agent organise the response.",
    "items": [
      "Record the enquiry against the relevant property and agent.",
      "Offer agreed viewing times and send appointment reminders.",
      "Create a follow-up task after the viewing.",
      "Evaluate the pilot using response times and completed follow-ups."
    ]
  },
  {
    "label": "Small Car Dealerships · Illustrative example",
    "title": "From vehicle enquiry to test drive",
    "description": "A customer asks about a vehicle. A proposed workflow could help a small sales team follow through.",
    "items": [
      "Record the vehicle of interest and assign a salesperson.",
      "Have staff confirm availability before arranging a test drive.",
      "Keep appointment reminders and preparation tasks together.",
      "Evaluate the pilot using response times and missed follow-ups."
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
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Illustrative workflow use cases</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">These are example workflows to explore, not client case studies, live deployments, or measured results. They show possible starting points for a conversation about your business.</p>
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
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">The right setup depends on your tools, workload, and team. Bring a real example of where a task gets delayed, and we can explore whether one of these workflows would be useful.</p>
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
