import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  const lastUpdated = "May 31, 2026"

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none text-muted-foreground">
            <p className="text-sm">Last updated: {lastUpdated}</p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">Overview</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              Nelkai ("we", "us", or "our") operates as an AI automation consultancy.
              We respect your privacy and are committed to handling personal information
              responsibly. This Privacy Policy describes what information we collect,
              how we use it, and the choices available to you.
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">Information We Collect</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              We collect information you provide directly (for example, when you
              contact us or submit a form) and information collected automatically
              when you use our website (such as analytics and device information).
              Personal details may include name, email address, phone number, company,
              and job title.
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">How We Use Your Information</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              We use personal information to respond to inquiries, provide and improve
              services, schedule meetings, process transactions, and communicate
              updates. Aggregated or anonymized data is used for analytics and product
              improvement.
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">Sharing and Disclosure</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              We share information only as necessary to deliver our services or when
              required by law. We may use trusted third-party providers (for hosting,
              analytics, scheduling integrations such as Calendly, and email delivery)
              who are contractually obligated to protect your information.
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">Security</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              We implement reasonable administrative, technical, and physical
              safeguards to protect personal data. No transmission over the internet
              or electronic storage is completely secure; users should take care when
              sharing sensitive information online.
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">Your Rights</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              Depending on your jurisdiction, you may have rights to access, correct,
              or delete your personal information. To exercise these rights, please
              contact us using the details below.
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">Contact</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              For privacy inquiries or to exercise your data rights, please visit our
              <Link href="/contact" className="text-primary hover:underline"> contact page</Link>
              or email us at <a href="mailto:info@nelkai.com" className="text-primary hover:underline">info@nelkai.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
