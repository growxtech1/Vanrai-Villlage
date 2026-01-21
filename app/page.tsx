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

export default function Home() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Stays", link: "#stays" },
    { name: "Experiences", link: "#experiences" },
    { name: "Events", link: "#events" },
    { name: "Gallery", link: "#gallery" },
    { name: "Memberships", link: "#memberships" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto p-8 pt-4">
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

        <main className="mx-auto flex max-w-5xl flex-col gap-24 px-4 pb-24">
          <section className="space-y-6">
            <h1 className="mb-4 text-center text-3xl font-extrabold text-gray-900">Check the navbar at the top of the container</h1>
            <p className="mb-10 text-center text-sm text-gray-600">
              For demo purpose we have kept the position as{" "}
              <span className="font-medium text-gray-900">Sticky</span>. Keep in mind that this
              component is <span className="font-medium text-gray-900">fixed</span> and will not
              move when scrolling.
            </p>
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {[
                {
                  id: 1,
                  title: "Welcome",
                  width: "md:col-span-1",
                  height: "h-60",
                  bg: "bg-neutral-100 dark:bg-neutral-800",
                },
                {
                  id: 2,
                  title: "To Vanrai",
                  width: "md:col-span-2",
                  height: "h-60",
                  bg: "bg-neutral-100 dark:bg-neutral-800",
                },
                {
                  id: 3,
                  title: "Village",
                  width: "md:col-span-1",
                  height: "h-60",
                  bg: "bg-neutral-100 dark:bg-neutral-800",
                },
                {
                  id: 4,
                  title: "Sustainable",
                  width: "md:col-span-3",
                  height: "h-60",
                  bg: "bg-neutral-100 dark:bg-neutral-800",
                },
                {
                  id: 5,
                  title: "Living",
                  width: "md:col-span-1",
                  height: "h-60",
                  bg: "bg-neutral-100 dark:bg-neutral-800",
                },
                {
                  id: 6,
                  title: "Community",
                  width: "md:col-span-2",
                  height: "h-60",
                  bg: "bg-neutral-100 dark:bg-neutral-800",
                },
                {
                  id: 7,
                  title: "Modern",
                  width: "md:col-span-2",
                  height: "h-60",
                  bg: "bg-neutral-100 dark:bg-neutral-800",
                },
                {
                  id: 8,
                  title: "Comfort",
                  width: "md:col-span-1",
                  height: "h-60",
                  bg: "bg-neutral-100 dark:bg-neutral-800",
                },
                {
                  id: 9,
                  title: "Experience Rural Life",
                  width: "md:col-span-2",
                  height: "h-60",
                  bg: "bg-neutral-100 dark:bg-neutral-800",
                },
                {
                  id: 10,
                  title: "With Us",
                  width: "md:col-span-1",
                  height: "h-60",
                  bg: "bg-neutral-100 dark:bg-neutral-800",
                },
              ].map((box) => (
                <div
                  key={box.id}
                  className={`${box.width} ${box.height} bg-gray-100 border border-gray-200 flex items-center justify-center rounded-lg p-4 shadow-sm`}
                >
                  <h2 className="text-xl font-extrabold text-center text-gray-900">{box.title}</h2>
                </div>
              ))}
            </div>
          </section>
        <section id="home" className="space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900">
            Welcome to Vanrai Village
          </h1>
          <p className="max-w-2xl text-lg text-gray-600">
            Experience the beauty of rural life with modern amenities. Our resizable navbar 
            adapts as you scroll, providing an elegant navigation experience across all devices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-extrabold mb-2 text-gray-900">Eco-Friendly</h3>
              <p className="text-gray-600">
                Sustainable living practices integrated into daily village life.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-extrabold mb-2 text-gray-900">Community</h3>
              <p className="text-gray-600">
                Strong bonds and collaborative spirit among all residents.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-extrabold mb-2 text-gray-900">Modern Comfort</h3>
              <p className="text-gray-600">
                All modern amenities while maintaining rural charm.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="space-y-6">
          <h2 className="text-3xl font-extrabold text-gray-900">About Vanrai Village</h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-600">
              Vanrai Village represents a harmonious blend of traditional rural living and modern convenience. 
              Nestled in the heart of nature, our community offers a unique lifestyle that prioritizes 
              sustainability, community bonds, and personal well-being.
            </p>
            <p className="text-gray-600">
              Our village features organic farming practices, renewable energy systems, and a strong 
              emphasis on preserving local culture and traditions. Residents enjoy access to modern 
              healthcare, education, and technology while living in harmony with nature.
            </p>
            <p className="text-gray-600">
              The resizable navbar you see above demonstrates our commitment to modern web technologies 
              and user experience. It smoothly transitions from a full-width transparent design to a 
              more compact, focused layout as you scroll through the content.
            </p>
          </div>
        </section>

        <section id="services" className="space-y-6">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-gray-900">Residential Living</h3>
              <p className="text-gray-600">
                Comfortable homes designed with sustainable materials and energy-efficient systems.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-gray-900">Organic Farming</h3>
              <p className="text-gray-600">
                Community gardens and individual plots for growing organic produce.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-gray-900">Education Center</h3>
              <p className="text-gray-600">
                Learning facilities focused on sustainable practices and traditional skills.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-gray-900">Wellness Programs</h3>
              <p className="text-gray-600">
                Yoga, meditation, and holistic health programs for all residents.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="space-y-6">
          <h2 className="text-3xl font-extrabold text-gray-900">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-gray-900">Visit Us</h3>
              <p className="text-gray-600">
                Schedule a visit to experience Vanrai Village firsthand. Our community tours 
                are available every weekend.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Address:</strong> Vanrai Village, Rural District
                </p>
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Phone:</strong> +91 98765 43210
                </p>
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Email:</strong> info@vanraivillage.com
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-gray-900">Join Our Community</h3>
              <p className="text-gray-600">
                Interested in becoming a resident? Fill out our application form and 
                we'll get back to you with more information.
              </p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                Apply Now
              </button>
            </div>
          </div>
        </section>
        </main>
      </div>
    </div>
  );
}
