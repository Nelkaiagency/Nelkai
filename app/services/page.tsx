import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const tiers = [
  {
    name: "Optimization",
    target: "Sole Traders & Freelancers",
    description: "Essential automation foundations for independent professionals.",
    features: [
      "Basic workflow mapping",
      "Unified messaging setups",
      "Automated customer communication",
      "Core template delivery",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Automation",
    target: "Growing SMEs with Staff",
    description: "Full-scale business operations stack for scaling teams.",
    features: [
      "Full operations stack",
      "Invoice processing automations",
      "CRM management integrations",
      "Ongoing active retainer support",
      "Priority support channel",
      "Monthly strategy calls",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    target: "B2B, Logistics & Industrial",
    description: "Bespoke solutions for complex operational requirements.",
    features: [
      "Bespoke logistics workflow integrations",
      "Automated supply chain tracking",
      "Custom database pipelines",
      "High-volume data triage",
      "Dedicated automation architect",
      "24/7 support SLA",
    ],
    highlighted: false,
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Enterprise-Grade Architectures Built to Deploy
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            We eliminate technical complexity. Every workflow we design seamlessly integrates 
            with your existing framework.
          </p>
        </section>

        {/* Pricing Tiers */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-xl border p-8 flex flex-col ${
                  tier.highlighted
                    ? "border-primary/50 bg-card/80 glow-purple-strong"
                    : "border-border/50 bg-card/30"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                  <p className="text-sm text-primary mt-1">{tier.target}</p>
                  <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="mt-8">
                  <Button
                    className={`w-full ${
                      tier.highlighted
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 text-center border-t border-gray-900 pt-12 max-w-3xl mx-auto px-4">
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-3 font-mono">
            Enterprise & Heavy Infrastructure
          </p>
          <h3 className="text-white text-lg md:text-xl font-medium mb-6">
            Operating in supply chain, heavy freight, or tier-1 construction?
          </h3>
          <a
            href="/industrial"
            className="inline-flex items-center gap-2 bg-[#111115] hover:bg-[#16161c] text-white text-sm font-medium py-3.5 px-8 rounded-full border border-gray-800 hover:border-[#7C3AED] transition-all duration-300 group shadow-lg"
          >
            <span>Explore Industrial Frameworks</span>
            <span className="text-[#7C3AED] group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
