import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MessageSquare, FileText, Mail, ArrowRight, Clock, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"

const metrics = [
  {
    icon: MessageSquare,
    value: "24/7",
    label: "Automated Lead Capture & DM Triage",
  },
  {
    icon: FileText,
    value: "Instant",
    label: "Automated Invoicing & PDF Generation",
  },
  {
    icon: Mail,
    value: "Smart",
    label: "AI Email Classification & Drafting Pipeline",
  },
]

const features = [
  {
    icon: Clock,
    title: "Always-On Operations",
    description: "Business runs autonomously around the clock without manual intervention.",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Customer inquiries handled in real-time across all channels.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Infrastructure designed to handle increasing demand effortlessly.",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Proven Frameworks. Real-World Case Studies.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            We do not sell abstract promises. We build operational proof of concepts.
          </p>
        </section>

        {/* Flagship Case Study */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border/50 bg-card/30 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Metrics */}
              <div className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="space-y-6">
                  {metrics.map((metric, index) => {
                    const Icon = metric.icon
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/30"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">{metric.value}</div>
                          <div className="text-sm text-muted-foreground">{metric.label}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Right Column - Story */}
              <div className="p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-border/30">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  Featured Case Study
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Modernizing Service Infrastructure for PT & Threads
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A deep dive into how Nelkai engineered a complete, automated backend operations hub 
                  for a modern alterations enterprise. From instant Instagram DM triage to intelligent 
                  document ingestion, invoicing pipelines, and order logging, the business runs 
                  completely autonomously.
                </p>

                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium text-foreground text-sm">{feature.title}</div>
                          <div className="text-xs text-muted-foreground">{feature.description}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-purple">
                    View Live Workflow Demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="text-center p-12 rounded-2xl border border-border/50 bg-card/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-glow opacity-50" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Operations?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join enterprises that have already automated their workflows and scaled their operations.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-purple">
                  Schedule Your Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
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
