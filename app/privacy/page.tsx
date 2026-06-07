import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  const lastUpdated = "June 7, 2026"

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
            <p className="mb-8 leading-8 text-muted-foreground">
              <strong className="text-white">NFC Interaction Data:</strong> When NFC cards or tags deployed by Nelkai are tapped, we collect the timestamp of the tap, general device type, and geographic location data if enabled. We do not collect personal data from NFC taps unless the user actively submits information through a form triggered by the tap.
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">How We Use Your Information</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              We use personal information to respond to inquiries, provide and improve
              services, schedule meetings, process transactions, and communicate
              updates. Aggregated or anonymized data is used for analytics and product
              improvement.
            </p>
            <p className="mb-8 leading-8 text-muted-foreground">
              <strong className="text-white">NFC Analytics:</strong> NFC analytics data is used solely to provide clients with performance reporting on their NFC deployments. This data is aggregated and anonymised for reporting purposes. It is not sold or shared with third parties.
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">Sharing and Disclosure</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              We share information only as necessary to deliver our services or when
              required by law. We may use trusted third-party providers (for hosting,
              analytics, scheduling integrations such as Calendly, and email delivery)
              who are contractually obligated to protect your information.
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">Data Retention</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              NFC tap data is retained for 12 months and then automatically deleted unless the client requests extended retention in writing. Personal information provided through our website or contact forms is retained for as long as necessary to fulfil the purposes outlined in this policy unless a longer retention period is required by law.
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
            <p className="mb-8 leading-8 text-muted-foreground">
              If you have interacted with a Nelkai NFC tag and wish to request deletion of any associated data, contact <a href="mailto:info@nelkai.com" className="text-primary hover:underline">info@nelkai.com</a> with the subject line "NFC Data Request".
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">Third Party NFC Platforms</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              Nelkai may use third-party NFC management platforms to deliver tap analytics and landing page functionality. These platforms process tap data under their own privacy policies. Nelkai selects only platforms compliant with GDPR and applicable data protection law.
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">GDPR Consent</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              By interacting with a Nelkai NFC tag, users consent to the collection of anonymised interaction data as described above. No personal data is collected without explicit user input.
            </p>

            <h2 className="mt-12 mb-4 text-3xl font-semibold text-white">Contact</h2>
            <p className="mb-8 leading-8 text-muted-foreground">
              For privacy inquiries or to exercise your data rights, please visit our
              <Link href="/contact" className="text-primary hover:underline"> contact page</Link>{' '}
              or email us at <a href="mailto:info@nelkai.com" className="text-primary hover:underline">info@nelkai.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
