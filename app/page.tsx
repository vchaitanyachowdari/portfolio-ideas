import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-950 text-white overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
