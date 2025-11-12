import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SpecsSection from "@/components/sections/SpecsSection";
import ContactSection from "@/components/sections/ContactSection";
import WhatsappFloat from "@/components/WhatsappFloat";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <TestimonialsSection />
        <SpecsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
};

export default Index;