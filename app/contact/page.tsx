"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Send } from "lucide-react"
import { useState } from "react"

const bottleneckOptions = [
  "Maintenance & contractor dispatch",
  "Property enquiries & viewing arrangements",
  "Invoicing & payments",
  "Vehicle enquiries & test-drive follow-up",
  "General operations visibility",
  "Other",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    website: "",
    scope: "",
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
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Let&apos;s talk through your operations
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              For property managers, estate agents, and small car dealerships. Book a discovery call or tell us which recurring task is slowing your team down.
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
                  <h2 className="text-xl font-bold text-foreground">Book a Discovery Call</h2>
                  <p className="text-sm text-muted-foreground">Option A: Direct Booking</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Select a time below for a discovery call to talk through the work, the workflow, and the next step.
              </p>

              <div className="rounded-3xl border border-gray-800 bg-[#0A0A0F] p-6">
              <div className="mb-6">
                <p className="text-sm text-gray-300 leading-relaxed">
                  Bring an example of a task you repeat and the tools you use today. We can discuss a useful starting point.
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-gray-900 bg-[#0A0A0F] shadow-[0_20px_80px_rgba(124,58,237,0.12)]">
                <iframe
                  src="https://calendly.com/nelkai-info/new-meeting"
                  title="Nelkai Schedule Audit"
                  className="w-full h-[420px]"
                  frameBorder="0"
                  scrolling="no"
                />
              </div>

              <p className="mt-4 text-xs leading-relaxed text-gray-500">
                If the embed does not render, <a href="https://calendly.com/nelkai-info/new-meeting" target="_blank" rel="noreferrer" className="text-primary">open the booking experience</a>.
              </p>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-gray-500">
              Please share a general description of the workflow and avoid including sensitive customer or tenant information.
            </p>
          </div>

            {/* Right Column - Intake Form */}
            <div className="rounded-2xl border border-border/50 bg-card/30 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Tell Us About Your Bottlenecks</h2>
                  <p className="text-sm text-muted-foreground">Send a few details</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Prefer to send a few details first? Share the basics and we’ll get back to you with an appropriate next step.
              </p>

              {isSubmitted ? (
                <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Request Submitted</h3>
                  <p className="text-sm text-muted-foreground">
                    Thank you. We will review your details and reply using the email address you provided.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">Email address</label>
                    <Input id="contact-email" type="email" autoComplete="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-background/50 border-border/50 focus:border-primary" />
                  </div>
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
                        Your Role
                      </label>
                      <Input
                        placeholder="Operations Manager"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
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
                      Tell us a bit about your operation
                    </label>
                    <textarea
                      placeholder="Tell us whether you manage properties, run an estate agency, or sell vehicles, and describe the task you want to improve"
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      rows={3}
                      className="w-full rounded-2xl border border-gray-800 bg-[#0A0A0F] px-4 py-3 text-sm text-white focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]/20 resize-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      What is the main challenge?
                    </label>
                    <select
                      value={formData.bottleneck}
                      onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                      className="w-full rounded-2xl border border-gray-800 bg-[#0A0A0F] px-4 py-3 text-sm text-white focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]/20"
                      required
                    >
                      <option value="" disabled>
                        Select the main issue
                      </option>
                      {bottleneckOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-purple mt-2"
                  >
                    Discuss My Workflow
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
