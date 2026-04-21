"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { AnimatedCTAButton } from "@/components/ui/animated-cta-button";
import { SectionHeader } from "@/components/ui/section-header";
import { HeroSlider } from "@/components/ui/hero-slider";
import { StaysSection } from "@/components/ui/stays-section";
import { ExperiencesSection } from "@/components/ui/experiences-section";
import { Footer } from "@/components/ui/footer";

// Dynamic imports for sections below the fold to improve performance
const AboutVanraiSection = dynamic(() => import("@/components/ui/about-vanrai-section").then(mod => mod.AboutVanraiSection));
const PrivilegeClubSection = dynamic(() => import("@/components/ui/privilege-club-section").then(mod => mod.PrivilegeClubSection));
const GallerySection = dynamic(() => import("@/components/ui/gallery-section").then(mod => mod.GallerySection));
const TestimonialsSection = dynamic(() => import("@/components/ui/testimonials-section").then(mod => mod.TestimonialsSection));
const ContactFormStepper = dynamic(() => import("@/components/ui/contact-form-stepper").then(mod => mod.ContactFormStepper));

export default function Home() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Stays", link: "/stays" },
    { name: "Experiences", link: "/experiences" },
    { name: "About", link: "/about-vanrai" },
    { name: "Gallery", link: "/gallery" },
    { name: "Events", link: "/events" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Navbar - Fixed positioned to overlay hero */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:pt-4">
          <Navbar>
            <NavBody>
              <NavbarLogo />
              <NavItems items={navItems} onItemClick={() => setIsMobileOpen(false)} />
              <div className="flex items-center gap-4">
                <AnimatedCTAButton text="Book Now" />
              </div>
            </NavBody>

            <MobileNav>
              <MobileNavHeader>
                <NavbarLogo />
                <MobileNavToggle
                  isOpen={isMobileOpen}
                  onClick={() => setIsMobileOpen((open) => !open)}
                />
              </MobileNavHeader>
              <MobileNavMenu
                isOpen={isMobileOpen}
                onClose={() => setIsMobileOpen(false)}
              >
                {navItems.map((item, idx) => (
                  <a
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileOpen(false)}
                    className="relative text-neutral-600 dark:text-neutral-300"
                  >
                    <span className="block">{item.name}</span>
                  </a>
                ))}
                <div className="flex w-full flex-col gap-4">
                  <AnimatedCTAButton
                    text="Book Now"
                    className="w-full"
                    onClick={() => setIsMobileOpen(false)}
                  />
                </div>
              </MobileNavMenu>
            </MobileNav>
          </Navbar>
        </div>
      </div>

      {/* Hero Section - Full Width, starts from top */}
      <HeroSlider />

      {/* Stays Section - Room Cards */}
      <StaysSection />

      {/* Experiences & Activities Section - Reduced spacing */}
      <div className="-mt-12 sm:-mt-16 md:-mt-20">
        <ExperiencesSection />
      </div>

      {/* About Vanrai Section */}
      <AboutVanraiSection />

      {/* Privilege Club Section */}
      <PrivilegeClubSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Form Stepper */}
      <ContactFormStepper />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
