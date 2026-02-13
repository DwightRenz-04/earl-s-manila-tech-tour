import HeroSection from "@/components/HeroSection";
import CostBreakdown from "@/components/CostBreakdown";
import WhyImportant from "@/components/WhyImportant";
import AboutSection from "@/components/AboutSection";
import ItinerarySection from "@/components/ItinerarySection";
import DonateSection from "@/components/DonateSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="min-h-screen">
    <HeroSection />
    <CostBreakdown />
    <WhyImportant />
    <AboutSection />
    <ItinerarySection />
    <DonateSection />
    
    <ContactSection />
    <Footer />
  </main>
);

export default Index;
