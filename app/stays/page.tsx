"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { AnimatedCTAButton } from "@/components/ui/animated-cta-button";
import { AnimatedCTAButton2 } from "@/components/ui/animated-cta-button2";
import { StaysHero } from "@/components/stays/stays-hero";
import { StaysFilterNav, FilterCategory } from "@/components/stays/stays-filter-nav";
import { RoomShowcaseCard } from "@/components/stays/room-showcase-card";
import { StaysComparison } from "@/components/stays/stays-comparison";
import { StaysPrivileges } from "@/components/stays/stays-privileges";
import { StaysPolicies } from "@/components/stays/stays-policies";
import { StaysMobileBar } from "@/components/stays/stays-mobile-bar";
import { ROOMS_DATA } from "@/lib/stays-data";
import { RESORT_CONTACT, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/contact-config";
import { Calendar, MessageCircle, PhoneCall, Sparkles, BedDouble } from "lucide-react";

export default function StaysPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const roomsSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToRooms = () => {
    if (roomsSectionRef.current) {
      roomsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToCompare = () => {
    const compareEl = document.getElementById("compare");
    if (compareEl) {
      compareEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectCategory = (cat: FilterCategory) => {
    setActiveCategory(cat);
    if (cat === "compare") {
      handleScrollToCompare();
      return;
    }

    if (cat === "all") {
      handleScrollToRooms();
      return;
    }

    // Scroll to specific room
    const target = document.getElementById(cat);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Filter rooms if a single category is selected, or show all
  const filteredRooms =
    activeCategory === "all" || activeCategory === "compare"
      ? ROOMS_DATA
      : ROOMS_DATA.filter((r) => r.id === activeCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans selection:bg-emerald-500 selection:text-neutral-950">
      {/* Site Header */}
      <Header />

      {/* Hero Section */}
      <StaysHero
        onScrollToRooms={handleScrollToRooms}
        onSelectCategory={handleSelectCategory}
      />

      {/* Sticky Filter & Category Switcher */}
      <StaysFilterNav
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onScrollToCompare={handleScrollToCompare}
      />

      {/* Rooms Showcase Section */}
      <div ref={roomsSectionRef} className="py-12 sm:py-16 lg:py-20 relative">
        {/* Subtle background ambient lights for large screens */}
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/3 -left-40 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          {/* Section Subheading */}
          <div className="max-w-3xl mb-8 sm:mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-emerald-400" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-emerald-400">
                Tailored Spaces
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Select Your Sanctuary
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-neutral-400 font-light leading-relaxed">
              Every room is maintained with meticulous care and provides direct access to Vanrai&apos;s natural gardens, pure-veg dining, and water activities.
            </p>
          </div>

          {/* Room Cards Stack */}
          <div className="space-y-10 sm:space-y-14 lg:space-y-16">
            <AnimatePresence mode="wait">
              {filteredRooms.map((room, idx) => (
                <RoomShowcaseCard
                  key={room.id}
                  room={room}
                  index={idx}
                  isReversed={idx % 2 === 1}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Reset filter button if single room is selected */}
          {activeCategory !== "all" && (
            <div className="text-center mt-8">
              <button
                onClick={() => setActiveCategory("all")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-emerald-400 text-xs sm:text-sm font-semibold border border-white/10 transition-colors"
              >
                <span>View All 3 Accommodations</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Interactive Side-By-Side Comparison Matrix */}
      <StaysComparison />

      {/* Resort Privileges & Activities Included With Stays */}
      <StaysPrivileges />

      {/* Guest Guidelines, Policies & FAQs */}
      <StaysPolicies />

      {/* Bottom CTA Banner */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-5xl">
          <div className="rounded-3xl bg-neutral-900/70 border border-white/10 backdrop-blur-2xl p-8 sm:p-12 md:p-16 text-center shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              Plan Your Countryside Escape
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
              Ready for a Refreshing Stay at <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#00c97b]">
                Vanrai Village Resort?
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed mb-8">
              Whether you are planning a weekend family holiday, couple&apos;s getaway, or group retreat, reserve early to secure your preferred cottages and dates.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link href="/availability" className="w-full sm:w-auto">
                <AnimatedCTAButton text="Check Room Availability" className="w-full sm:w-auto h-12 px-7 text-sm font-semibold" />
              </Link>
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.stay)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white border border-white/15 text-sm font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat with Concierge</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Mobile Action Bar (visible on mobile when scrolled) */}
      <StaysMobileBar />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
