import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function IndustrialCtaSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-800 bg-gradient-to-br from-[#111115] via-[#0F1116] to-[#0A0A0F] p-12 md:p-16 shadow-[0_30px_80px_rgba(124,58,237,0.14)] overflow-hidden relative">
          {/* Accent glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/5 via-transparent to-transparent opacity-50 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-xs font-mono uppercase tracking-[0.32em] text-gray-500 mb-4">
              Enterprise & Heavy Infrastructure
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Operating in supply chain, heavy freight, or tier-1 construction?
            </h2>
            
            <p className="text-base text-gray-400 mb-8 leading-relaxed">
              Explore purpose-built automation frameworks engineered for zero-retention data isolation, legacy system interoperability, and compliance-grade enterprise architecture.
            </p>

            <Link href="/industrial">
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] text-white font-semibold py-4 px-8 rounded-full border border-[#7C3AED]/30 hover:border-[#7C3AED] transition-all duration-300 shadow-[0_20px_50px_rgba(124,58,237,0.3)] hover:shadow-[0_30px_70px_rgba(124,58,237,0.4)] group">
                <span>Explore Industrial Frameworks</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
