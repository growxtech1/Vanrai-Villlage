"use client";

import { useState } from "react";
import { ChevronDown, ShieldAlert, Clock, Utensils, HelpCircle, PhoneCall, MessageCircle } from "lucide-react";
import { STAY_POLICIES } from "@/lib/stays-data";
import { RESORT_CONTACT, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/contact-config";

export function StaysPolicies() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden border-t border-white/[0.06]">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Guest Guidelines & FAQs
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Important Stay Information
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-light">
            Everything you need to know before your visit to ensure a pleasant and seamless retreat.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-12">
          {STAY_POLICIES.map((policy, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.08] bg-neutral-900/40 backdrop-blur-xl overflow-hidden transition-all duration-200 hover:border-white/15"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left select-none"
                >
                  <span className="text-sm sm:text-base font-medium text-white">
                    {policy.title}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-emerald-500/20 text-emerald-400" : "text-neutral-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed border-t border-white/[0.05]">
                    <p className="pt-3">{policy.content}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Concierge Support Banner */}
        <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-neutral-900/90 via-emerald-950/30 to-neutral-900/90 border border-emerald-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">
              Have Special Stay Requests or Group Bookings?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              Our front desk team is on standby 24/7 to assist with room customization and celebrations.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:${RESORT_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium border border-white/15 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call Front Desk</span>
            </a>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.stay)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-bold shadow-md shadow-emerald-950/40 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
