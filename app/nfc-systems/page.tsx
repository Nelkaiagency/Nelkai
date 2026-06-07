import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Zap, Tag, Smartphone, Gift, Lock, BarChart3, ArrowRight } from "lucide-react"
import Link from "next/link"

const featureCards = [
  {
    icon: Tag,
    title: "Branded NFC Cards & Tags",
    description: "Custom-printed in your brand colours and logo. Applied to counters, tables, walls, menus, and equipment.",
  },
  {
    icon: Zap,
    title: "Instant Digital Actions",
    description: "Tap triggers a booking page, menu, loyalty card, contact details, or any URL — updated in real time without touching the card.",
  },
  {
    icon: Smartphone,
    title: "Booking Integration",
    description: "Customer taps, booking flow opens, confirmation email fires automatically. Zero friction, zero manual input.",
  },
  {
    icon: Gift,
    title: "Loyalty & Savings Cards",
    description: "NFC-enabled loyalty programmes. Tap to earn points, tap to redeem. Works for any business with repeat customers.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Staff credential cards, VIP access tiers, entry management. Enterprise-grade security for venues, hotels, and large organisations.",
  },
  {
    icon: BarChart3,
    title: "Live Analytics Dashboard",
    description: "Every tap logged with time, location, and device type. Conversion rates and engagement data updated live.",
  },
]

const useCases = [
  {
    title: "Restaurants & Bars",
    description: "Table-tap menus, booking triggers, loyalty cards",
  },
  {
    title: "Hotels & Venues",
    description: "Room key NFC, guest check-in automation, concierge",
  },
  {
    title: "Event Management",
    description: "Guest check-in, digital programmes, entry wristbands",
  },
  {
    title: "Retail & Beauty",
    description: "Loyalty cards, booking, after-visit follow-up",
  },
  {
    title: "Corporate & Offices",
    description: "Visitor badges, meeting room booking, access control",
  },
  {
    title: "Freelancers & Creatives",
    description: "NFC business card — tap opens full portfolio",
  },
]

export default function NFCSystemsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            NFC Systems
          </h1>
          <p className="mt-4 text-xl font-semibold text-primary">
            One tap. The machine starts.
          </p>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            NFC (Near Field Communication) is a short-range wireless technology embedded in branded cards, tags, and wristbands. A customer taps their phone to a Nelkai NFC card and it instantly triggers a digital action — booking, menu, loyalty, payment, or any custom flow. No app required. Works on any modern smartphone.
          </p>
        </section>

        {/* Feature Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="rounded-xl border border-border/50 bg-card/30 p-6 hover:bg-card/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* NFC + AI Automation Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="rounded-2xl border border-border/50 bg-card/30 overflow-hidden p-8 lg:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              NFC + AI Automation — The Full System
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              When NFC and AI automation are integrated, one tap by a customer starts a fully automated business operation. They tap → they book → confirmation email fires → invoice is generated on completion → follow-up review request sent three days later. The business owner does none of this manually.
            </p>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-10">
            Use Cases Across Industries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="rounded-xl border border-border/50 bg-card/30 p-6 flex flex-col hover:bg-card/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-foreground mb-3">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl border border-primary/50 bg-card/80 glow-purple-strong p-8 lg:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how NFC Systems integrated with AI Automation can eliminate manual processes and scale your business effortlessly.
            </p>
            <a
              href="https://calendly.com/nelkai-info/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-purple text-base px-8 py-6">
                Book a Free Discovery Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
