import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const industrialCards = [
  {
    category: "TIER 1 CONSTRUCTION",
    title: "Sub-contractor Compliance & Material Dockets",
    inputChannel: "Site WhatsApp / Project Email Dropbox",
    aiLogic: "Parsing diverse insurance certificates and concrete delivery volumes.",
    outcome: "Eliminates manual verification. Compresses compliance onboarding from 5 days to 4 minutes.",
  },
  {
    category: "HEAVY FREIGHT & FLEET BROKERAGE",
    title: "Cross-Border Customs & Proof of Delivery (POD)",
    inputChannel: "Carrier API Webhooks / Driver Document Scans",
    aiLogic: "Extracting itemized freight line items, route codes, and fuel surcharge rates.",
    outcome: "Protects margin leakage. Instantly matches carrier invoices against original customer quotes.",
  },
  {
    category: "STEEL & INDUSTRIAL PRODUCTION",
    title: "Raw Stock Inventory Logs & Procurement Invoices",
    inputChannel: "Supplier EDI Feeds / Supplier PDF Ingestion",
    aiLogic: "Tracking batch numbers, laser stock specifications, and heat certificate metrics.",
    outcome: "Automates raw material logging. Flags pricing variances before invoicing approval lines.",
  },
]

export default function IndustrialPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-widest uppercase text-gray-400/70 mb-4">
            INDUSTRIAL USE CASES
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Operational AI for heavy industry and logistics
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            Real-world workflows built to tame complex compliance, freight, and procurement data.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industrialCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-gray-800 bg-[#111115] p-8 shadow-[0_20px_80px_rgba(124,58,237,0.12)]"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-gray-400 mb-4">
                  {card.category}
                </p>
                <h2 className="text-xl font-semibold text-white mb-5">
                  {card.title}
                </h2>

                <div className="space-y-5 text-sm text-gray-300">
                  <div>
                    <p className="font-medium text-white">Input Channel</p>
                    <p className="mt-2 leading-relaxed">{card.inputChannel}</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">AI Logic</p>
                    <p className="mt-2 leading-relaxed">{card.aiLogic}</p>
                  </div>
                </div>

                <div className="mt-8 rounded-3xl border border-gray-800 bg-[#0F1116] p-5">
                  <p className="text-sm font-semibold text-white mb-3">Outcome</p>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {card.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="rounded-[2rem] border border-gray-800 bg-[#111115]/90 p-10 shadow-[0_30px_80px_rgba(124,58,237,0.14)]">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-xs font-mono uppercase tracking-[0.32em] text-gray-500 mb-4">
                  DATA GOVERNANCE & SECURITY
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Enterprise-Grade Safeguards for Heavy Infrastructure
                </h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    Zero-Retention Data Isolation
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    All processing pipelines route document buffers through isolated, zero-retention enterprise API endpoints. Your operational data, site dockets, and financial ledgers are fully encrypted in transit and at rest. Data processed through Nelkai solutions is structurally excluded from public LLM training sets or external model optimizations.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    Legacy System Interoperability
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    Our custom middleware layers bridge cutting-edge automation models with existing heavy equipment, ERP, and project management ecosystems. We offer seamless direct-write and ingestion pipelines for Procore, Autodesk BIM 360, SAP, Oracle Primavera, Wave Accounting, and standard relational SQL databases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
