import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Building2, Wrench, ClipboardList, Users, Banknote, HardHat, Factory, Truck, Blocks } from "lucide-react"

const hospitalityModules = [
  {
    icon: Wrench,
    title: "Maintenance & Contractor Dispatch",
    description: "Ticket creation, contractor assignment, and completion tracking for maintenance work that needs a clear sequence of trades.",
  },
  {
    icon: ClipboardList,
    title: "Housekeeping & Unit Operations",
    description: "Checklists by property or unit type, staff dispatch, and live tracking across rooms, units, or sites.",
  },
  {
    icon: Users,
    title: "Staff Roles & Permissions",
    description: "Role-based access for maintenance, housekeeping, admin, and multi-site teams so the right people see the right actions.",
  },
  {
    icon: Building2,
    title: "Guest & Tenant Communication",
    description: "Booking confirmations, issue reporting, and automated status updates for guests, tenants, and internal teams.",
  },
  {
    icon: Banknote,
    title: "Invoicing & Financial Ops",
    description: "Automated billing, payment tracking, and support for retainers or contract-based work.",
  },
]

const industrialModules = [
  {
    icon: HardHat,
    title: "Construction operations",
    description: "Operational systems for construction companies that need dependable coordination across crews, tasks, and job sites.",
  },
  {
    icon: Factory,
    title: "Steel manufacturing",
    description: "Workflow support for steel manufacturing teams managing internal handoffs, production coordination, and daily operational visibility.",
  },
  {
    icon: Truck,
    title: "Trucking logistics",
    description: "Practical systems for trucking logistics work that depends on clear dispatch, job tracking, and field communication.",
  },
  {
    icon: Blocks,
    title: "General contracting",
    description: "Structured operational support for general contracting work where multiple trades and moving parts need a shared workflow.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Operations systems for two kinds of teams
          </h1>
          <p className="mt-4 text-xl font-semibold text-primary">
            Hospitality & property operations, and industrial field operations.
          </p>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Nelkai builds practical infrastructure for operators managing properties, contractors, crews, and daily work across complex environments. We bring bookings, invoices, jobs, and payments into one place, build custom tools around the way each business actually operates, and automate the dispatch, invoicing, and communication steps that usually slow teams down.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="mb-10">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Track A
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Hospitality & Property Ops
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We work with businesses that need cleaner day-to-day operations across maintenance, housekeeping, staff coordination, and communication.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {hospitalityModules.map((module, index) => {
              const Icon = module.icon
              return (
                <div key={index} className="rounded-2xl border border-border/50 bg-card/30 p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{module.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{module.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="mb-10">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Track B
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Industrial Operations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              For construction companies, steel manufacturing teams, trucking logistics operations, and general contracting work that depends on field coordination.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {industrialModules.map((module, index) => {
              const Icon = module.icon
              return (
                <div key={index} className="rounded-2xl border border-border/50 bg-card/30 p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{module.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{module.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="rounded-2xl border border-primary/50 bg-card/80 glow-purple-strong p-8 lg:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              A practical operating layer, not a patchwork of tools.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              The work is built around process clarity: who owns the task, what happens next, and how the team stays informed when conditions change. It is also about bringing the day-to-day pieces of the business into one view so owners are not chasing updates across disconnected tools.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl border border-border/50 bg-card/30 p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to talk through your operations?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We can outline the structure of the workflow, the permissions model, and the handoffs that matter most.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-purple text-base px-8 py-6">
                Book a Discovery Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
