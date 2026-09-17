"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl, WHATSAPP_MESSAGES, RESORT_CONTACT } from "@/lib/contact-config";

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappHref = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-3">
      {/* Tooltip Label */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex items-center px-3.5 py-1.5 rounded-full bg-neutral-900/90 text-white text-xs font-medium border border-white/10 shadow-2xl backdrop-blur-md whitespace-nowrap"
          >
            <span>Chat on WhatsApp</span>
            <span className="ml-1.5 text-emerald-400 font-mono text-[11px] font-semibold">{RESORT_CONTACT.phoneDisplay}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Action Button */}
      <motion.a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sales Concierge on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
        className="relative group w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] transition-all duration-300"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />

        {/* WhatsApp Vector Icon */}
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fill-white text-white drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
        >
          <path
            d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"
            fill="#25D366"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>

        {/* Active Online Indicator */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-neutral-950 rounded-full" />
      </motion.a>
    </div>
  );
}
