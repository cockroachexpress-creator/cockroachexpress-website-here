import Navbar from "@/components/Navbar";
import NewsTicker from "@/components/NewsTicker";
import HeroSection from "@/components/HeroSection";
import TrendingSection from "@/components/TrendingSection";
import OpinionSection from "@/components/OpinionSection";
import ManifestoSection from "@/components/ManifestoSection";
import StatsNarrativeSection from "@/components/StatsNarrativeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import InteractiveEffects from "@/components/InteractiveEffects";

export default function Home() {
  return (
    <>
      <div className="grain-overlay" />
      <Navbar />
      <NewsTicker />
      <main className="w-full">
        <HeroSection />
        <TrendingSection />
        <OpinionSection />
        <ManifestoSection />
        <StatsNarrativeSection />
        <ContactSection />
      </main>
      <Footer />
      <InteractiveEffects />
    </>
  );
}
