"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Send } from "lucide-react"
import { useState } from "react"

const bottleneckOptions = [
  "Customer Booking",
  "Invoice Tracking",
  "Email Sorting",
  "Lead Management",
  "Other",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    website: "",
    budget: "",
    bottleneck: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  const response = await fetch("https://formspree.io/f/xeedwabr", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  })

  if (response.ok) {
    setIsSubmitted(true)
  } else {
    alert("Something went wrong. Please try again.")
  }
}

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Let&apos;s Build Your Automation Stack
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose how you&apos;d like to connect with our automation architects.
            </p>
          </div>

          {/* Dual Action Zone */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Calendar Booking */}
            <div className="rounded-2xl border border-border/50 bg-card/30 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Schedule an Operations Audit</h2>
                  <p className="text-sm text-muted-foreground">Option A: Direct Booking</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Select a time below to lock in a 15-minute technical discovery call directly 
                with an automation architect.
              </p>

              {/* Calendar Placeholder */}
              <div className="rounded-xl border border-border/30 bg-background/50 p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Calendar integration ready for Calendly or TidyCal embed
                </p>
                <a href="https://calendly.com/nelkai-info/30min" target="_blank" rel="noopener noreferrer">
  <Button variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10">
    Book a Discovery Call
  </Button>
</a>
              </div>
            </div>

            {/* Right Column - Intake Form */}
            <div className="rounded-2xl border border-border/50 bg-card/30 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Tell Us About Your Bottlenecks</h2>
                  <p className="text-sm text-muted-foreground">Option B: Pre-Qualification</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Prefer an email assessment? Provide your business operational details to see 
                if you qualify for an integration sprint.
              </p>

              {isSubmitted ? (
                <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Request Submitted</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team will review your details and reach out within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background/50 border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Corporate Title
                      </label>
                      <Input
                        placeholder="Operations Manager"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="bg-background/50 border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Domain / Website URL
                    </label>
                    <Input
                      placeholder="https://yourcompany.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="bg-background/50 border-border/50 focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Current Monthly Operations Budget
                    </label>
                    <Input
                      placeholder="$5,000 - $10,000"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="bg-background/50 border-border/50 focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Primary Operations Bottleneck
                    </label>
                    <select
                      value={formData.bottleneck}
                      onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                      className="w-full rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    >
                      <option value="" disabled>Select your primary bottleneck</option>
                      {bottleneckOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-purple mt-2"
                  >
                    Submit Audit Request
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
