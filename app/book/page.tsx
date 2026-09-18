"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import hero3 from "@/public/img/hero-3.png";
import { ArrowLeft, Clock, Phone, Mail, ShieldCheck, CalendarClock, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { RESORT_CONTACT, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/contact-config";

export default function BookPage() {
  return (
    <main className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero3}
          alt="Vanrai Village Resort"
          fill
          priority
          unoptimized
          className="object-cover object-center brightness-[0.45] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
      </div>

      {/* Top Header */}
      <header className="relative z-20 w-full px-4 sm:px-8 pt-6 sm:pt-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-xl border border-white/10 text-white/90 hover:text-white text-xs sm:text-sm font-semibold tracking-wide transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Resort</span>
        </Link>

        <Link href="/" className="flex items-center gap-2">
          <span className="text-sm sm:text-base font-bold tracking-[0.2em] text-white/90 uppercase">
            Vanrai Village
          </span>
        </Link>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00c97b] text-xs font-semibold tracking-wider uppercase">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Best Rate Guarantee</span>
        </div>
      </header>

      {/* Center Content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-lg"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 shadow-xl shadow-emerald-950/30"
          >
            <CalendarClock className="w-9 h-9 text-[#00c97b]" />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c97b] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c97b]"></span>
            </span>
            <span className="text-xs font-semibold text-white/70 tracking-[0.18em] uppercase">Coming Soon</span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 leading-tight">
            Online Booking{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-500">
              Engine
            </span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed mb-10 max-w-sm">
            We&apos;re building a seamless reservation experience for you. In the meantime, reach out directly — we&apos;ll be happy to arrange your perfect stay.
          </p>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.stay)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-emerald-950/40"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Sales</span>
            </a>
            <a
              href={RESORT_CONTACT.phoneTel}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#00c97b] hover:bg-[#00b06c] text-neutral-950 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-emerald-950/40"
            >
              <Phone className="w-4 h-4" />
              <span>Call to Reserve</span>
            </a>
            <a
              href={RESORT_CONTACT.emailMailto}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 text-white rounded-xl font-medium text-sm transition-all duration-300 backdrop-blur-sm"
            >
              <Mail className="w-4 h-4 text-green-400" />
              <span>Email Us</span>
            </a>
          </div>

          {/* Quick link to live availability engine */}
          <div className="mt-8 pt-6 border-t border-white/10 w-full max-w-sm">
            <p className="text-xs text-neutral-400 mb-2 font-light">Want to check room availability?</p>
            <Link
              href="/availability"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-wider"
            >
              <span>Explore Live Availability</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 text-xs text-white/30 tracking-wide"
          >
            <Clock className="w-3 h-3 inline mr-1 -mt-0.5" />
            Online bookings launching soon
          </motion.p>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative z-20 w-full py-4 pb-8 sm:pb-6 px-4 text-center text-xs text-white/40 tracking-wider">
        <span>Direct bookings receive complimentary welcome drink &amp; breakfast privileges</span>
      </footer>
    </main>
  );
}


