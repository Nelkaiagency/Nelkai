import Link from "next/link"
import { ArrowRight, MessageCircleOff, CalendarClock, Receipt, MailWarning, Zap, CalendarCheck2, Banknote } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const problems = [
  {
    icon: MessageCircleOff,
    title: "Missed messages, missed bookings",
    description:
      "Someone DMs you at 9pm asking about a lesson or a slot. You see it the next afternoon. They've already booked with someone who replied first.",
  },
  {
    icon: CalendarClock,
    title: "Back-and-forth just to book a time",
    description:
      "Ten texts to agree on a time, then a manual check that you haven't double-booked yourself. All for one appointment.",
  },
  {
    icon: Receipt,
    title: "Chasing people for payment",
    description:
      "Invoices you wrote yourself from your phone, then a follow-up text a week later because it never got paid.",
  },
  {
    icon: MailWarning,
    title: "Real messages buried in the noise",
    description:
      "A new client or a supplier reply gets lost between newsletters and spam. You find it three days too late.",
  },
]

const fixes = [
  {
    icon: Zap,
    title: "Faster replies, without you typing them",
    description:
      "Instagram DMs and messages get answered in seconds, even when you're mid-lesson or with a customer. No more losing people to whoever replied first.",
  },
  {
    icon: CalendarCheck2,
    title: "Booking that runs itself",
    description:
      "People pick a time that actually works, it lands straight on your calendar, and they get a reminder before it starts. No texting back and forth.",
  },
  {
    icon: Banknote,
    title: "Getting paid without the awkward follow-up",
    description:
      "Invoices go out automatically and get chased automatically, so you're not the one sending the third reminder text.",
  },
]

export default function SimpleAutomationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Simple Automation
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
            Stop losing customers to a missed message.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            You didn't start your business to spend your evenings on admin. We set up a few simple tools that
            reply, book, and follow up for you — so nothing slips through the cracks while you're busy doing the
            actual work.
          </p>
          <p className="mt-4 text-sm text-muted-foreground max-w-xl mx-auto">
            Built for driving instructors, tradespeople, small studios, and anyone running their business
            mostly out of Instagram, WhatsApp, and a notebook.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Sound familiar?</p>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              The stuff that quietly costs you money every week.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {problems.map((problem) => {
              const Icon = problem.icon
              return (
                <div key={problem.title} className="rounded-2xl border border-border/50 bg-card/60 p-7">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{problem.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">What we set up</p>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              A few small fixes that save you hours a week.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nothing complicated, nothing you need to learn to run. It works quietly in the background so you can
              stay focused on your customers, not your phone.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {fixes.map((fix) => {
              const Icon = fix.icon
              return (
                <div key={fix.title} className="rounded-2xl border border-border/50 bg-card/60 p-7">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{fix.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{fix.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="rounded-3xl border border-border/50 bg-card/60 p-8 sm:p-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">How it starts</p>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              A free 15-minute call. No pitch, no pressure.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We just want to hear what's actually eating your time right now — missed messages, no-shows, chasing
              invoices, whatever it is. No slideshow, no sales pitch. We'll pick the one thing that's costing you
              the most and fix that first, before we ever talk about anything bigger.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Ready to get some time back?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Book a free 15-minute call and let's talk about what's actually slowing you down.
          </p>
          <div className="mt-8">
            <a
              href="https://calendly.com/nelkai-info/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-purple text-base px-8 py-6">
                Book Your Free Call
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
