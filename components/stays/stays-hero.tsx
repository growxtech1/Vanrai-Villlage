"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Sparkles, Waves, Utensils, ShieldCheck, ArrowDown, Coffee } from "lucide-react";
import { AnimatedCTAButton } from "@/components/ui/animated-cta-button";
import { FilterCategory } from "@/components/stays/stays-filter-nav";

interface StaysHeroProps {
  onScrollToRooms: () => void;
  onSelectCategory?: (cat: FilterCategory) => void;
}

export function StaysHero({ onScrollToRooms }: StaysHeroProps) {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Image with Ambient Zoom */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      >
        <Image
          src="/img/Rooms/StaysCoversHero.webp"
          alt="Vanrai Resort Stays & Cottages"
          fill
          preload={true}
          sizes="100vw"
          className="object-cover object-center brightness-[0.78] contrast-[1.04]"
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/70" />
      </motion.div>

      {/* Main Hero Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 backdrop-blur-md mb-5 sm:mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Accommodation & Cottages · Vanrai Resort
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.12] sm:leading-[1.1] mb-5 sm:mb-6"
          >
            Rustic Serenity, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-teal-200">
              Modern Comfort.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10"
          >
            Experience handcrafted wooden cottages, deluxe air-conditioned rooms, and peaceful standard stays surrounded by 2.5 acres of relaxing agro-tourism greenery.
          </motion.p>

          {/* Key Metric / Highlight Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-8 sm:mb-10 max-w-3xl mx-auto lg:mx-0"
          >
            {[
              { icon: Waves, label: "Swimming Pool", sub: "Included with stays" },
              { icon: Coffee, label: "Breakfast Included", sub: "Cottage & Deluxe AC" },
              { icon: Utensils, label: "Farm Fresh Dining", sub: "Multi-cuisine meals" },
              { icon: ShieldCheck, label: "Family Friendly", sub: "Safe gated sanctuary" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className="text-xs sm:text-sm font-medium text-white truncate">{item.label}</p>
                    <p className="text-[10px] sm:text-[11px] text-neutral-400 truncate font-light">{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Primary CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4"
          >
            <Link href="/availability" className="w-full sm:w-auto">
              <AnimatedCTAButton
                text="Check Live Availability"
                className="w-full sm:w-auto h-12 px-7 text-sm font-semibold shadow-xl shadow-emerald-950/50"
              />
            </Link>
            <button
              onClick={onScrollToRooms}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-white/15 text-sm font-medium backdrop-blur-md transition-all duration-200"
            >
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>Explore Accommodations</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={onScrollToRooms}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 2.2, ease: "easeInOut" }
        }}
        aria-label="Scroll to stay options"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-400 hover:text-emerald-400 transition-colors z-20 group"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-neutral-400 group-hover:text-emerald-400">
          Explore Stays
        </span>
        <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors">
          <ArrowDown className="w-3.5 h-3.5 text-emerald-400" />
        </div>
      </motion.button>
    </section>
  );
}
