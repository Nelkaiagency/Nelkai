import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, ClipboardList, Users, Wrench } from "lucide-react"
import Link from "next/link"

const focusAreas = [
  {
    icon: Wrench,
    title: "Maintenance and housekeeping dispatch",
  },
  {
    icon: ClipboardList,
    title: "Trade-sequence task routing",
  },
  {
    icon: Users,
    title: "Role-based access for staff",
  },
  {
    icon: Building2,
    title: "A structure that can be reused across more properties",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Case studies in operational build work
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Nelkai works on practical systems for property operations and field-based teams, bringing the day-to-day flow into one place and building software around the way each business actually operates.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border/50 bg-card/30 overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                Featured case study
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Stay Cork
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Stay Cork is an active build and deployment for a Cork-based property and hostel operation, with Nelkai shaping a working operations platform around maintenance dispatch, housekeeping workflows, contractor task routing, and staff permissions. The work is centred on operational flow rather than a finished product launch: it includes task logic so work moves in the correct order, clear access for staff across different operational responsibilities, and a structure intended to support deployment across additional properties over time. The focus is on building a practical operating layer for day-to-day property operations, with the system being developed and used in a live context rather than presented as a completed, static solution.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {focusAreas.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex items-start gap-3 rounded-xl border border-border/30 bg-background/50 p-4">
                      <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-muted-foreground">{item.title}</div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-purple">
                    Discuss a similar workflow
                    <ArrowRight className="ml-2 w-4 h-4" />
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
