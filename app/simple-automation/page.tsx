import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const sections = [
  {
    "label": "Enquiries",
    "title": "Route messages to the right person",
    "description": "Explore a shared enquiry list and acknowledgement messages for agreed channels.",
    "items": [
      "Property and vehicle enquiries assigned to a team member.",
      "A reminder when an enquiry is waiting for a response.",
      "Staff review for questions that need individual judgement."
    ]
  },
  {
    "label": "Appointments",
    "title": "Make scheduling easier to track",
    "description": "Explore calendar workflows for viewings, inspections, and test drives.",
    "items": [
      "Booking steps based on confirmed staff availability.",
      "Appointment confirmations and reminders.",
      "A clear route to reschedule or contact your team."
    ]
  },
  {
    "label": "Follow-up",
    "title": "Keep the next action visible",
    "description": "Explore reminders and status tracking for work that currently needs manual chasing.",
    "items": [
      "Maintenance updates and contractor follow-up tasks.",
      "Post-viewing and post-test-drive reminders.",
      "Exception lists so a person can handle anything unresolved."
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
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Small automations for everyday follow-up</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">For property managers, estate agents, and small car dealerships: start with one repetitive step, such as routing an enquiry, reminding someone about an appointment, or collecting a status update.</p>
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
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">We will check which connections your existing tools support before proposing a setup. Agree the scope and cost, test it on a small workflow, and review whether it helps before expanding.</p>
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
