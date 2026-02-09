"use client";

import { useState } from "react";

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
import { GoogleMap } from "@/components/ui/google-map";
import { SectionHeader } from "@/components/ui/section-header";
import { HeroSlider } from "@/components/ui/hero-slider";
import { StaysSection } from "@/components/ui/stays-section";
import { ExperiencesSection } from "@/components/ui/experiences-section";
import { AboutVanraiSection } from "@/components/ui/about-vanrai-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { PrivilegeClubSection } from "@/components/ui/privilege-club-section";
import { GallerySection } from "@/components/ui/gallery-section";

export default function Home() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Stays", link: "#stays" },
    { name: "Experiences", link: "#experiences" },
    { name: "About", link: "#about-vanrai" },
    { name: "Events", link: "#events" },
    { name: "Gallery", link: "#gallery" },
    { name: "Memberships", link: "#memberships" },
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
                <NavbarButton variant="secondary">Contact</NavbarButton>
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
                  <NavbarButton
                    onClick={() => setIsMobileOpen(false)}
                    variant="secondary"
                    className="w-full"
                  >
                    Contact
                  </NavbarButton>
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

      {/* Testimonials Section */}
      {/* Privilege Club Section */}
      <PrivilegeClubSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Gallery Section */}
      <GallerySection />

      <main className="mx-auto flex max-w-5xl flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24 px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20 lg:pb-24">

        <section id="about" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900/50 w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            <SectionHeader title="About Vanrai Village" subtitle="A harmonious blend of traditional rural living and modern convenience." />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
                <p>
                  Nestled in the heart of nature, our community offers a unique lifestyle that prioritizes
                  <strong className="text-gray-900 dark:text-white"> sustainability</strong>,
                  <strong className="text-gray-900 dark:text-white"> community bonds</strong>, and
                  <strong className="text-gray-900 dark:text-white"> personal well-being</strong>.
                </p>
                <p>
                  Our village features organic farming practices, renewable energy systems, and a strong
                  emphasis on preserving local culture and traditions. Residents enjoy access to modern
                  healthcare, education, and technology while living in harmony with nature.
                </p>
                <div className="pt-2 sm:pt-3 md:pt-4">
                  <button className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 hover:underline">
                    Read our story &rarr;
                  </button>
                </div>
              </div>

              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 group-hover:opacity-10 transition-opacity" />
                {/* Placeholder for About Image */}
                <div className="h-full w-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl md:text-6xl">🏡</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-10 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <SectionHeader title="Our Services" subtitle="Everything you need for a comfortable and sustainable life." />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                { title: "Residential Living", icon: "🏠", desc: "Comfortable homes designed with sustainable materials and energy-efficient systems." },
                { title: "Organic Farming", icon: "🌱", desc: "Community gardens and individual plots for growing organic produce." },
                { title: "Education Center", icon: "📚", desc: "Learning facilities focused on sustainable practices and traditional skills." },
                { title: "Wellness Programs", icon: "🧘", desc: "Yoga, meditation, and holistic health programs for all residents." }
              ].map((service, idx) => (
                <div key={idx} className="group p-5 sm:p-6 md:p-8 bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 py-8 sm:py-10 md:py-12">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-[100px] dark:bg-blue-900/20" />
          <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-green-100/30 blur-[100px] dark:bg-green-900/20" />

          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Get in Touch
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
              We&apos;d love to hear from you. Schedule a visit or apply to be part of our sustainable community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Contact Info Card */}
            <div className="flex flex-col justify-between space-y-6 sm:space-y-8 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-black/30 backdrop-blur-md border border-white/20 shadow-xl transition-all hover:shadow-2xl hover:bg-white/80 dark:hover:bg-black/40">
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span>📍</span> Visit Us
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Experience Vanrai Village firsthand. Our community tours are available every weekend.
                  Come breathe the fresh air and see our organic farms.
                </p>

                <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-3 md:pt-4">
                  <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-50/50 dark:bg-gray-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                    <span className="text-lg sm:text-xl">🏠</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Address</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Vanrai Village, Rural District, Maharashtra</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-50/50 dark:bg-gray-800/50 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                    <span className="text-lg sm:text-xl">📞</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Phone</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-50/50 dark:bg-gray-800/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                    <span className="text-lg sm:text-xl">✉️</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Email</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">info@vanraivillage.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-5 md:pt-6 border-t border-gray-100 dark:border-gray-800">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Join Our Community</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Interested in becoming a resident?
                </p>
                <button className="w-full py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                  Apply for Membership
                </button>
              </div>
            </div>

            {/* Map Section */}
            <div className="h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative group">
              <GoogleMap className="w-full h-full" />
              {/* Shiny border effect on hover */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-white/10 group-hover:ring-white/30 pointer-events-none transition-all" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
