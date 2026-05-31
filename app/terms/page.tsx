import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  const effectiveDate = "May 31, 2026"

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>

          <div className="prose prose-invert max-w-none text-muted-foreground">
            <p className="text-sm">Effective date: {effectiveDate}</p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">Acceptance of Terms</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              These Terms of Service ("Terms") govern your access to and use of Nelkai's
              website and services. By using our site or engaging our services, you agree
              to these Terms. If you do not agree, please do not use our services.
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">Services</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              Nelkai provides AI automation consulting and implementation services. Any
              specific engagement will be governed by a separate statement of work or
              contract describing the scope, fees, and deliverables.
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">User Responsibilities</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              You represent that you have the authority to provide any information you
              submit. You agree to use our services in compliance with applicable law and
              not to infringe the rights of others.
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">Intellectual Property</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              Unless otherwise agreed in writing, Nelkai retains all intellectual property
              rights in the deliverables we create. We grant clients a license to use
              deliverables for their internal business purposes as specified in the
              applicable agreement.
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">Limitation of Liability</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              To the maximum extent permitted by law, Nelkai's liability for any claim
              arising from these Terms or your use of our services is limited to fees
              paid to Nelkai for the services giving rise to the claim. We are not liable
              for indirect, incidental, or consequential damages.
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">Termination</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              Either party may terminate an engagement in accordance with the terms of
              the applicable agreement. Upon termination, you will pay for services
              performed and any non-cancellable commitments made on your behalf.
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">Governing Law</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              These Terms are governed by the laws of Ireland, without regard to its
              conflicts of law principles. Any disputes will be resolved in the courts
              located in Cork, Ireland, unless otherwise agreed in writing.
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">Contact</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              For questions about these Terms, please visit our
              <Link href="/contact" className="text-primary hover:underline"> contact page</Link>
              or email <a href="mailto:info@nelkai.com" className="text-primary hover:underline">info@nelkai.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}