import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const industrialCards = [
  {
    category: "CONSTRUCTION OPERATIONS",
    title: "Job-site coordination and contractor handoffs",
    inputChannel: "Site updates / project messages / contractor check-ins",
    aiLogic: "Routing tasks by trade, priority, and site status so work moves through the right sequence.",
    outcome: "Keeps construction work organised without relying on manual follow-up across crews and subcontractors.",
  },
  {
    category: "STEEL MANUFACTURING",
    title: "Production visibility and operational handoffs",
    inputChannel: "Shop-floor updates / supplier documentation / internal workflow logs",
    aiLogic: "Capturing production updates, stock movement, and daily exceptions in one place.",
    outcome: "Improves visibility for steel manufacturing teams without spreading work across spreadsheets and messages.",
  },
  {
    category: "TRUCKING LOGISTICS",
    title: "Dispatch tracking and driver communication",
    inputChannel: "Dispatch messages / load updates / driver check-ins",
    aiLogic: "Tracking job status, loading progress, and delivery exceptions as they happen.",
    outcome: "Helps trucking logistics teams keep dispatch and field operations aligned.",
  },
  {
    category: "GENERAL CONTRACTING",
    title: "Trade sequencing and subcontractor coordination",
    inputChannel: "Task lists / contractor updates / site progress notes",
    aiLogic: "Linking field tasks to the right trade sequence so team members can see what needs to happen next.",
    outcome: "Supports more reliable coordination for general contracting work with multiple moving parts.",
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
            Operational systems for construction, steel manufacturing, trucking logistics, and general contracting
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            Practical workflows for teams coordinating crews, sites, dispatch, and field operations without relying on disconnected processes.
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
                  OPERATIONAL SAFEGUARDS
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Clear controls for active field and site operations
                </h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    Role-based access and task control
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    Operational systems can be configured so supervisors, site teams, and admin staff each work from the right view, with task ownership and status updates tracked in a clear structure.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    Workflow integration for existing operations
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    The systems are shaped around the tools and routines teams already use, so field communication, dispatch updates, and operational reporting can be brought into one working layer.
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
