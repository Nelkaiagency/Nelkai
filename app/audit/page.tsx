"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, Send } from "lucide-react"
import { useState } from "react"

const businessTypes = [
  "Hostel or hotel",
  "Property management",
  "Hospitality operations",
  "Construction",
  "General contracting",
  "Logistics or trucking",
  "Industrial operations",
  "Other",
]

const staffOptions = [
  "Just me",
  "2–5",
  "6–20",
  "20+",
]

const timeDrainOptions = [
  "Maintenance dispatch",
  "Contractor coordination",
  "Staff scheduling",
  "Invoicing & payments",
  "Job or fleet tracking",
  "Operations visibility",
  "Other",
]

export default function AuditPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    yourName: "",
    email: "",
    businessType: "",
    staffCount: "",
    timeDrains: [] as string[],
    usingAutomation: "",
    automationTools: "",
    additionalNotes: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleTimeDrainChange = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      timeDrains: prev.timeDrains.includes(option)
        ? prev.timeDrains.filter((item) => item !== option)
        : [...prev.timeDrains, option],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formattedData = {
      ...formData,
      timeDrains: formData.timeDrains.join(", "),
      _subject: `New Automation Audit Request: ${formData.businessName}`,
    }

    try {
      const response = await fetch("https://formspree.io/f/xeedwabr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formattedData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Free Operations Audit
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Tell us about your operation. We’ll point out where the work is slowing down and where a better workflow or custom tool would make the most difference.
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl border border-border/50 bg-card/30 p-8 lg:p-10">
            {isSubmitted ? (
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Your audit request has been received.
                </h2>
                <p className="text-muted-foreground mb-8">
                  Thanks {formData.yourName}, we've received your audit request. We'll review your operation and send your free audit within 48 hours.
                </p>
                <p className="text-sm text-muted-foreground">
                  Check your inbox at <span className="text-primary font-semibold">{formData.email}</span> for confirmation and updates.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Business Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Business Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g. Harbour House Hostel"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="bg-background/50 border-border/50 focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g. Alex"
                      value={formData.yourName}
                      onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                      className="bg-background/50 border-border/50 focus:border-primary"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                </div>

                {/* Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Business Type <span className="text-destructive">*</span>
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full rounded-lg border border-border/50 bg-background/50 px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
                      required
                    >
                      <option value="" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
                        Select business type...
                      </option>
                      {businessTypes.map((type) => (
                        <option
                          key={type}
                          value={type}
                          style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
                        >
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      How many staff do you have? <span className="text-destructive">*</span>
                    </label>
                    <select
                      value={formData.staffCount}
                      onChange={(e) => setFormData({ ...formData, staffCount: e.target.value })}
                      className="w-full rounded-lg border border-border/50 bg-background/50 px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
                      required
                    >
                      <option value="" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
                        Select staff count...
                      </option>
                      {staffOptions.map((option) => (
                        <option
                          key={option}
                          value={option}
                          style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Time Drains - Checkboxes */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    What are your biggest time drains? <span className="text-destructive">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {timeDrainOptions.map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`timeDrain-${option}`}
                          checked={formData.timeDrains.includes(option)}
                          onChange={() => handleTimeDrainChange(option)}
                          className="w-4 h-4 rounded border-border/50 bg-background/50 text-primary cursor-pointer"
                        />
                        <label
                          htmlFor={`timeDrain-${option}`}
                          className="ml-2 text-sm text-muted-foreground cursor-pointer"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                  {formData.timeDrains.length === 0 && (
                    <p className="text-xs text-destructive mt-2">Please select at least one</p>
                  )}
                </div>

                {/* Currently Using Automation - Radio */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Are you currently using any automation tools? <span className="text-destructive">*</span>
                  </label>
                  <div className="flex gap-6">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="automation-yes"
                        name="usingAutomation"
                        value="yes"
                        checked={formData.usingAutomation === "yes"}
                        onChange={(e) => setFormData({ ...formData, usingAutomation: e.target.value })}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <label htmlFor="automation-yes" className="ml-2 text-sm text-muted-foreground cursor-pointer">
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="automation-no"
                        name="usingAutomation"
                        value="no"
                        checked={formData.usingAutomation === "no"}
                        onChange={(e) => setFormData({ ...formData, usingAutomation: e.target.value })}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <label htmlFor="automation-no" className="ml-2 text-sm text-muted-foreground cursor-pointer">
                        No
                      </label>
                    </div>
                  </div>
                </div>

                {/* Automation Tools - Conditional */}
                {formData.usingAutomation === "yes" && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      If yes, which ones?
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g. Zapier, HubSpot, Mailchimp"
                      value={formData.automationTools}
                      onChange={(e) => setFormData({ ...formData, automationTools: e.target.value })}
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                )}

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional notes (optional)
                  </label>
                  <textarea
                    placeholder="Tell us anything else about your business or automation needs..."
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    rows={4}
                    className="w-full rounded-lg border border-border/50 bg-background/50 px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading || formData.timeDrains.length === 0 || !formData.usingAutomation}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-purple disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Submitting..." : "Request Your Free Audit"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll send your free operations audit report within 48 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
