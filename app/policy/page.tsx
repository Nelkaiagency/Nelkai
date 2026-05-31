// app/privacy/page.tsx
import Link from "next/link"

export default function PrivacyPolicyPage() {
  const lastUpdated = "May 30, 2025"

  return (
    <div className="min-h-screen bg-[#0A0A0C]">
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-zinc-400">
            Last updated: {lastUpdated}
          </p>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-zinc-400 leading-relaxed">
                Nelkai (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is an AI automation agency based in Cork, Ireland. 
                We are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website at{" "}
                <Link href="https://nelkai.com" className="text-[#9D4EDD] hover:underline">
                  nelkai.com
                </Link>{" "}
                or engage with our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                  <p className="text-zinc-400 leading-relaxed mb-3">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4">
                    <li>Fill out our contact or inquiry forms</li>
                    <li>Subscribe to our newsletter or updates</li>
                    <li>Request a consultation or quote</li>
                    <li>Engage with our services</li>
                    <li>Communicate with us via email or other channels</li>
                  </ul>
                  <p className="text-zinc-400 leading-relaxed mt-3">
                    This information may include your name, email address, phone number, company name, 
                    job title, and any other information you choose to provide.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Automatically Collected Information</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your 
                    device and usage patterns, including your IP address, browser type, operating system, 
                    referring URLs, pages viewed, and the dates and times of your visits.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                We use the information we collect for purposes including responding to
                inquiries, providing and improving our services, processing bookings and
                transactions, sending administrative or marketing communications (when
                permitted), and maintaining the security and operation of our website.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                We may share information with service providers who perform services on
                our behalf (for example, hosting, analytics, scheduling integrations such
                as Calendly, and email delivery). We require these providers to protect
                your information and only use it for the purposes we specify.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                We take reasonable measures to protect your information, but no method of
                transmission or storage is completely secure. If you have questions about
                our privacy practices or wish to exercise your data rights, please contact
                us at:
              </p>
              <p className="text-zinc-400 leading-relaxed">
                <Link href="/contact" className="text-[#9D4EDD] hover:underline">Contact Us</Link>
              </p>
            </div>

          </div>
        </section>

      </main>
    </div>
  )
}