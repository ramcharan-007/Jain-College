import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import AboutSection from "./components/AboutSection";
import ProgramsSection from "./components/ProgramsSection";
import WhyJAINSection from "./components/WhyJAINSection";
import HallmarksSection from "./components/HallmarksSection";
import LegacySection from "./components/LegacySection";
import AlumniSection from "./components/AlumniSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProgramsSection />
      <WhyJAINSection />
      <HallmarksSection />
      <LegacySection />
      <AlumniSection />
      <CTASection />
      <Footer />
    </main>
  );
}
