import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { TechStackSection } from "@/components/home/tech-stack-section"
import { IndustrialCtaSection } from "@/components/home/industrial-cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TechStackSection />
        <IndustrialCtaSection />
      </main>
      <Footer />
    </div>
  )
}
