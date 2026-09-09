import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function SimpleAutomationCtaSection() {
  return (
    <section className="py-20 sm:py-24 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/50 bg-card/60 p-8 sm:p-12 lg:p-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Start with one workflow
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground max-w-2xl">
            Make everyday follow-up easier to manage.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Enquiry routing, viewing and test-drive reminders, or maintenance updates: choose a focused starting point for your property business or dealership. Scope and costs are agreed before implementation.
          </p>
          <div className="mt-8">
            <Link href="/simple-automation">
              <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-full transition-colors group">
                <span>See Simple Automation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
