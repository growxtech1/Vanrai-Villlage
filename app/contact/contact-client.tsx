"use client";

import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { ContactFormStepper } from "@/components/ui/contact-form-stepper";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function ContactClient() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-green-500/30 font-sans">
      <Header />

      {/* Hero Intro */}
      <section className="relative pt-24 pb-6 sm:pt-28 sm:pb-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-5 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-xs sm:text-sm font-medium text-white/90 tracking-[0.25em] uppercase">
              Get In Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[1.08] tracking-tight mb-5 sm:mb-6"
          >
            Connect With <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent font-normal">
              Vanrai Resort
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-neutral-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
          >
            Whether planning a relaxing weekend stay, a dream wedding, or a corporate retreat, our team is ready to curate your exceptional experience.
          </motion.p>
        </div>
      </section>

      {/* Embedded Contact Form & Stepper */}
      <section className="relative z-10">
        <ContactFormStepper />
      </section>

      <Footer />
    </main>
  );
}
