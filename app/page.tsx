import { Header } from "@/components/ui/header";
import { HeroSlider } from "@/components/ui/hero-slider";
import { StaysSection } from "@/components/ui/stays-section";
import { ExperiencesSection } from "@/components/ui/experiences-section";
import { AboutVanraiSection } from "@/components/ui/about-vanrai-section";
import { PrivilegeClubSection } from "@/components/ui/privilege-club-section";
import { GallerySection } from "@/components/ui/gallery-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { ContactFormStepper } from "@/components/ui/contact-form-stepper";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-green-500/30">
      {/* Universal Floating Header */}
      <Header />

      {/* Hero Section - Full Width, starts from top */}
      <HeroSlider />

      {/* Stays Section - Room Cards */}
      <StaysSection />

      {/* Experiences & Activities Section */}
      <ExperiencesSection />

      {/* About Vanrai Section */}
      <AboutVanraiSection />

      {/* Privilege Club Section */}
      <PrivilegeClubSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Form Stepper */}
      <div id="contact">
        <ContactFormStepper />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
