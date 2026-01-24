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
        {/* Hero Section */}
        <section id="home" className="relative flex flex-col items-center justify-center py-20 lg:py-32 text-center space-y-8">
           {/* Background decorative blobs */}
           <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-50/50 blur-[120px] dark:bg-indigo-900/20 pointer-events-none" />
          
           <div className="space-y-4 max-w-4xl mx-auto px-4">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Experience the Future of Rural Living
             </div>

             <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-7xl lg:text-8xl">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Vanrai Village
              </span>
             </h1>

             <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
               A harmonious blend of traditional rural living and modern convenience. 
               Sustainable, connected, and designed for a better quality of life.
             </p>

             <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
               <button className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                 Book a Visit
               </button>
               <button className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-full font-bold text-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:bg-gray-50 dark:hover:bg-gray-800">
                 Learn More
               </button>
             </div>
           </div>

           {/* Stats / Highlights - Quick glance */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl px-4">
             <div className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl border border-white/20 shadow-sm hover:shadow-md transition-all">
                <div className="h-10 w-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-2xl mb-4">🌿</div>
               <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">Eco-Friendly</h3>
               <p className="text-sm text-gray-600 dark:text-gray-400">
                 100% sustainable energy and organic farming practices.
               </p>
             </div>
             <div className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl border border-white/20 shadow-sm hover:shadow-md transition-all">
                <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-2xl mb-4">🤝</div>
               <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">Community</h3>
               <p className="text-sm text-gray-600 dark:text-gray-400">
                 Strong bonds and collaborative spirit among residents.
               </p>
             </div>
             <div className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl border border-white/20 shadow-sm hover:shadow-md transition-all">
                <div className="h-10 w-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-2xl mb-4">⚡</div>
               <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">Modern Comfort</h3>
               <p className="text-sm text-gray-600 dark:text-gray-400">
                 High-speed internet and smart home integration.
               </p>
             </div>
           </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="space-y-12 py-12">
           <SectionHeader title="Life at Vanrai" subtitle="A glimpse into our daily life and surroundings." />
           
           <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[800px]">
             {/* Large Item */}
             <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group shadow-sm hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-black/20 group-hover:bg-black/30 transition-colors">
                  <h3 className="text-white text-2xl font-bold">Lush Greenery</h3>
                  <p className="text-white/80">Every corner is embraced by nature.</p>
                </div>
             </div>
             
             {/* Tall Item */}
             <div className="md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden relative group shadow-sm hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-black/10 group-hover:bg-black/20 transition-colors">
                   <h3 className="text-white text-xl font-bold">Sunsets</h3>
                </div>
             </div>

             {/* Small Item */}
             <div className="md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden relative group shadow-sm hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">💧</span>
                 </div>
             </div>

              {/* Wide Item */}
             <div className="md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden relative group shadow-sm hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 flex flex-col justify-center p-8 bg-black/10">
                   <h3 className="text-white text-2xl font-bold">Community Events</h3>
                 </div>
             </div>

              {/* Small Item */}
             <div className="md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden relative group shadow-sm hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-500 group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">🎉</span>
                 </div>
             </div>

              {/* Small Item */}
             <div className="md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden relative group shadow-sm hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500 group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">🪴</span>
                 </div>
             </div>
           </div>
        </section>

        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
           <div className="max-w-6xl mx-auto px-4">
             <SectionHeader title="About Vanrai Village" subtitle="A harmonious blend of traditional rural living and modern convenience." />
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
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
                 <div className="pt-4">
                    <button className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 hover:underline">
                      Read our story &rarr;
                    </button>
                 </div>
               </div>
               
               <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 group-hover:opacity-10 transition-opacity" />
                  {/* Placeholder for About Image */}
                  <div className="h-full w-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                     <span className="text-6xl">🏡</span>
                  </div>
               </div>
             </div>
           </div>
        </section>

        <section id="services" className="py-20">
           <div className="max-w-6xl mx-auto px-4">
              <SectionHeader title="Our Services" subtitle="Everything you need for a comfortable and sustainable life." />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { title: "Residential Living", icon: "🏠", desc: "Comfortable homes designed with sustainable materials and energy-efficient systems." },
                   { title: "Organic Farming", icon: "🌱", desc: "Community gardens and individual plots for growing organic produce." },
                   { title: "Education Center", icon: "📚", desc: "Learning facilities focused on sustainable practices and traditional skills." },
                   { title: "Wellness Programs", icon: "🧘", desc: "Yoga, meditation, and holistic health programs for all residents." }
                 ].map((service, idx) => (
                    <div key={idx} className="group p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                       <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                         {service.icon}
                       </div>
                       <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                         {service.title}
                       </h3>
                       <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                         {service.desc}
                       </p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        <section id="contact" className="relative space-y-12 py-12">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-[100px] dark:bg-blue-900/20" />
          <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-green-100/30 blur-[100px] dark:bg-green-900/20" />

          <div className="text-center space-y-4">
             <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              We&apos;d love to hear from you. Schedule a visit or apply to be part of our sustainable community.
            </p>
          </div>
         
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Contact Info Card */}
            <div className="flex flex-col justify-between space-y-8 p-8 rounded-3xl bg-white/70 dark:bg-black/30 backdrop-blur-md border border-white/20 shadow-xl transition-all hover:shadow-2xl hover:bg-white/80 dark:hover:bg-black/40">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <span>📍</span> Visit Us
                </h3>
                 <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Experience Vanrai Village firsthand. Our community tours are available every weekend.
                  Come breathe the fresh air and see our organic farms.
                </p>
                
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                    <span className="text-xl">🏠</span>
                    <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">Address</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Vanrai Village, Rural District, Maharashtra</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                    <span className="text-xl">📞</span>
                    <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">Phone</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                    <span className="text-xl">✉️</span>
                    <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">Email</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">info@vanraivillage.com</p>
                    </div>
                  </div>
                </div>
              </div>

               <div className="space-y-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Join Our Community</h3>
                   <p className="text-sm text-gray-600 dark:text-gray-300">
                    Interested in becoming a resident?
                  </p>
                   <button className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                    Apply for Membership
                  </button>
               </div>
            </div>

            {/* Map Section */}
            <div className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative group">
               <GoogleMap className="w-full h-full" />
                 {/* Shiny border effect on hover */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-white/30 pointer-events-none transition-all" />
            </div>
          </div>
        </section>
        </main>
      </div>
    </div>
  );
}
