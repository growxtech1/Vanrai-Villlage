"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { motion } from "framer-motion";
import { FileText, ArrowLeft, Clock, ShieldCheck, Utensils, Waves, CheckCircle2, AlertTriangle, Phone, Mail, MapPin } from "lucide-react";
import { SITE_NAME, SITE_PHONE_DISPLAY, SITE_LOCATION } from "@/constants/site";
import { RESORT_CONTACT } from "@/lib/contact-config";

export function TermsClient() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-emerald-500/30 flex flex-col justify-between">
      <Header />

      <main className="flex-1 pt-32 pb-24 container mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
        </div>

        {/* Hero Title */}
        <header className="mb-12 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5" /> Stay Guidelines & Policies
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Terms & Conditions
          </h1>
          <p className="text-sm text-neutral-400 font-light">
            Effective Date: January 2025 · Applicable to all reservations and guests at {SITE_NAME}
          </p>
        </header>

        {/* Content */}
        <div className="space-y-10 text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block" />
              1. Reservation & Deposit
            </h2>
            <p>
              Reservations can be placed through our official website, verified booking partners, or directly with our resort concierge. A minimum 50% advance deposit is required to confirm room reservations and date blocking. The remaining balance must be cleared upon arrival during the physical check-in process.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block" />
              2. Timings & Identification
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold block mb-1">Check-in</span>
                <span className="text-lg font-bold text-white font-mono">12:00 PM (Noon)</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold block mb-1">Check-out</span>
                <span className="text-lg font-bold text-white font-mono">10:00 AM</span>
              </div>
            </div>
            <p>
              Early check-in or late check-out is subject to room availability on the date of travel and may incur additional tariff charges. Per Indian government regulations, all adult guests must present valid government photo identification (Aadhaar Card, Passport, Voter ID, or Driving License) at the reception desk upon check-in.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block" />
              3. Dining & Property Guidelines
            </h2>
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-200">
              <p className="font-semibold text-emerald-300 mb-1">In-House Dining & Guest Courtesy:</p>
              <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                {SITE_NAME} provides delicious in-house multi-cuisine dining prepared with farm-fresh produce. Guests are requested to maintain the tranquility and cleanliness of the resort grounds. Additionally, the consumption of alcoholic beverages is not permitted within public zones.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block" />
              4. Inclusions & Complimentary Amenities
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              <li>
                <strong className="text-neutral-200 font-medium">Complimentary Breakfast:</strong> Served buffet-style at our dining hall from 8:00 AM to 10:30 AM exclusively for guests staying in Luxury Wooden Cottages and Deluxe AC Rooms. Guests staying in Standard Rooms may purchase breakfast separately.
              </li>
              <li>
                <strong className="text-neutral-200 font-medium">Resort Swimming Pool:</strong> Complimentary access is provided for all registered staying guests during operational pool hours. Proper nylon or polyester swimwear is strictly required. Waterpark slides are operated as a separate resort attraction.
              </li>
              <li>
                <strong className="text-neutral-200 font-medium">Children & Extra Beds:</strong> Children up to 5 years stay complimentary with existing bedding. Additional beds or extra adult mattresses are available upon advance request at standard nominal rates.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block" />
              5. Cancellation & Rescheduling
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              <li>
                <strong className="text-neutral-200 font-medium">Rescheduling:</strong> Free date rescheduling is permitted up to 72 hours prior to scheduled check-in, subject to seasonal rate differences and room availability.
              </li>
              <li>
                <strong className="text-neutral-200 font-medium">Cancellations:</strong> Cancellations received more than 7 days prior to check-in will receive a refund minus a 10% administrative processing fee. Cancellations made within 48 hours of check-in are non-refundable.
              </li>
              <li>
                <strong className="text-neutral-200 font-medium">No-Show:</strong> Failure to check-in on the scheduled reservation date will result in cancellation of the booking and forfeiture of the deposit.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block" />
              6. Property Conduct & Safety
            </h2>
            <p>
              Guests are expected to respect the tranquil rural agro-tourism environment. Quiet hours are observed from 10:30 PM to 7:00 AM across all cottage blocks. Any intentional damage to resort property, teak furnishings, or landscape features will be charged to the guest account.
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block" />
              7. Concierge Inquiries
            </h2>
            <p>
              If you have any questions about our reservation terms or stay regulations, please reach out to our team:
            </p>
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10 space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{SITE_LOCATION.full}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={RESORT_CONTACT.phoneTel} className="hover:text-emerald-400 transition-colors">
                  {SITE_PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={RESORT_CONTACT.emailMailto} className="hover:text-emerald-400 transition-colors">
                  {RESORT_CONTACT.emailAddress}
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default TermsClient;

