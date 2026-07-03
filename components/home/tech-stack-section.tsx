import { Workflow, ShieldCheck, ArrowRightLeft, MessageSquareText } from "lucide-react"

const techStackItems = [
  {
    icon: Workflow,
    title: "One place for the day-to-day",
    description: "Bookings, jobs, invoices, and payments are brought together so owners can see what is moving through the business without switching between tools.",
    size: "large",
  },
  {
    icon: ShieldCheck,
    title: "Tools built around your operation",
    description: "We create custom software shaped around how your team actually works, rather than forcing you into a generic tool.",
    size: "small",
  },
  {
    icon: ArrowRightLeft,
    title: "Dispatch and follow-through",
    description: "Dispatch, invoicing, and communication are set up so work keeps moving without manual chasing.",
    size: "small",
  },
  {
    icon: MessageSquareText,
    title: "Clear permissions and handoffs",
    description: "The right people see the right information, and every task has a clear next step.",
    size: "large",
  },
]

export function TechStackSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            How the systems work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The operational layer is built around connected work, clear ownership, and better visibility so owners can manage the business from one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {techStackItems.map((item, index) => {
            const Icon = item.icon
            const isLarge = item.size === "large"

            return (
              <div
                key={index}
                className={`group relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/80 ${
                  isLarge ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-purple pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/30 transition-colors duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
