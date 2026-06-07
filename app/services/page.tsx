import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, FileText, Clock, Instagram, CheckCircle, Zap, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Mail,
    number: 1,
    title: "Email Management",
    whatItDoes: "AI reads every inbound email, classifies it by type and priority, drafts a contextual reply, and either saves it for review or sends automatically.",
    automated: ["Reading", "Sorting", "Drafting", "Labelling", "Archiving"],
    example: "A hotel receives 40 emails per day. Booking enquiries get a draft reply with availability. Spam is archived. Invoices are flagged. The owner spends 10 minutes reviewing instead of 2 hours replying.",
  },
  {
    icon: FileText,
    number: 2,
    title: "Invoice Automation",
    whatItDoes: "When a job or session is marked complete, an invoice is automatically generated, personalised, and emailed to the client.",
    automated: ["Invoice creation", "PDF generation", "Email delivery", "Payment tracking"],
    example: "A personal trainer finishes a session. The job tracker is updated. Within seconds the client receives a branded invoice with payment details. No manual input from the trainer.",
  },
  {
    icon: Clock,
    number: 3,
    title: "Payment Chasing",
    whatItDoes: "Monitors all invoices daily. Sends escalating reminder emails at 7, 14, and 21 days overdue. Stops automatically when the invoice is paid.",
    automated: ["Overdue detection", "Reminder scheduling", "Email sending", "Status tracking"],
    example: "A photography studio has 3 unpaid invoices. At day 7 a friendly reminder goes out. Day 14 a firmer message. Day 21 a final notice. All without the photographer touching anything.",
  },
  {
    icon: Instagram,
    number: 4,
    title: "Instagram Content Agent",
    whatItDoes: "Pulls content briefs from a spreadsheet, uses AI to write captions and hashtags, queues posts to Buffer for scheduling. Owner approves before posts go live.",
    automated: ["Caption writing", "Hashtag generation", "Post scheduling", "Content calendar management"],
    example: "A barbershop fills in a weekly content brief — 4 post topics. AI writes all 4 captions with hashtags. Posts are queued. The barber approves in Buffer in 5 minutes. Consistent posting every week.",
  },
  {
    icon: CheckCircle,
    number: 5,
    title: "Booking Confirmation",
    whatItDoes: "When a new booking is added to the system, a personalised confirmation email is sent to the client automatically with all session details.",
    automated: ["Email creation", "Personalisation", "Delivery", "Logging"],
    example: "A music studio gets a new booking via their website. Within seconds the artist receives a confirmation with session time, engineer name, studio address, and preparation notes. No manual email needed.",
  },
  {
    icon: Zap,
    number: 6,
    title: "NFC Systems",
    whatItDoes: "Branded NFC cards and tags are deployed at client locations. Each tap triggers a digital action connected to the automation stack.",
    automated: ["Booking triggers", "Loyalty tracking", "Access logging", "Analytics reporting"],
    example: "A restaurant places NFC tags on every table. Customers tap to view the menu and book a table. The booking triggers a confirmation email. After the visit an automated review request is sent. The manager sees all tap analytics in a live dashboard.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            What We Automate
          </h1>
          <p className="mt-4 text-xl font-semibold text-primary">
            Built once. Running forever.
          </p>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Six core automation services that eliminate manual work and scale your operations effortlessly.
          </p>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="space-y-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.number}
                  className="rounded-2xl border border-border/50 bg-card/30 overflow-hidden hover:bg-card/50 transition-colors"
                >
                  <div className="p-8 lg:p-10">
                    {/* Header */}
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3 mb-2">
                          <span className="text-sm font-semibold text-primary">SERVICE {service.number}</span>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{service.title}</h2>
                      </div>
                    </div>

                    {/* What It Does */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-primary mb-3">What It Does</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.whatItDoes}</p>
                    </div>

                    {/* What's Automated */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-primary mb-3">What's Automated</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {service.automated.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Real Example */}
                    <div className="bg-background/50 rounded-xl border border-border/30 p-6">
                      <h3 className="text-sm font-semibold text-primary mb-3">Real Example</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.example}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Everything Connects Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="rounded-2xl border border-primary/50 bg-card/80 glow-purple-strong p-8 lg:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Everything Connects.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Every Nelkai service is built on the same infrastructure. Email, invoicing, Instagram, bookings, and NFC all feed into one system. Data flows between them automatically. The result is a business that runs itself.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl border border-border/50 bg-card/30 p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Automate Your Business?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's design a custom automation stack tailored to your operations.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-purple text-base px-8 py-6">
                Book a Free Discovery Call
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
