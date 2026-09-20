"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { SITE_NAME, SITE_PHONE_DISPLAY, SITE_LOCATION } from "@/constants/site";
import { RESORT_CONTACT } from "@/lib/contact-config";

export function PrivacyPolicyClient() {
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
            <ShieldCheck className="w-3.5 h-3.5" /> Data Protection & Transparency
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-400 font-light">
            Last Updated: January 2025 · Effective Date: Immediate
          </p>
        </header>

        {/* Policy Content */}
        <div className="space-y-10 text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block" />
              1. Overview & Commitment
            </h2>
            <p>
              At {SITE_NAME} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we respect your privacy and are committed to safeguarding the personal data of our guests, visitors, and website users. This Privacy Policy details our practices concerning data collection, usage, and disclosure through our website, online booking services, and on-premise guest interactions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block" />
              2. Information We Collect
            </h2>
            <p>We only collect information necessary to deliver exceptional hospitality services:</p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              <li>
                <strong className="text-neutral-200 font-medium">Guest Identity & Contact Info:</strong> Full name, email address, telephone/WhatsApp number, residential address, and government-issued photo ID upon physical check-in (mandated by applicable local hospitality regulations).
              </li>
              <li>
                <strong className="text-neutral-200 font-medium">Reservation Specifications:</strong> Check-in and check-out dates, room type preferences (Wooden Cottages, Deluxe AC, Standard Rooms), guest counts, dietary notes, and event enquiry requirements.
              </li>
              <li>
                <strong className="text-neutral-200 font-medium">Payment Information:</strong> Transaction identifiers, payment methods (UPI, Netbanking, Card), and payment statuses. Please note that credit card details and UPI PINs are processed securely by PCI-DSS compliant payment gateways and are never stored on our servers.
              </li>
              <li>
                <strong className="text-neutral-200 font-medium">Technical & Usage Data:</strong> Anonymized browser type, operating system, device characteristics, and IP addresses collected automatically to ensure website stability and performance.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block" />
              3. Purpose of Processing
            </h2>
            <p>Your data is used strictly for legitimate resort operations:</p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              <li>Facilitating room bookings, event reservations, and instant confirmations.</li>
              <li>Sending essential transactional updates, receipts, and arrival check-in instructions.</li>
              <li>Complying with statutory guest registration requirements enforced by regional authorities.</li>
              <li>Improving our agro-tourism stays, dining quality, and digital user experiences.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block" />
              4. Sharing & Disclosure
            </h2>
            <p>
              We do not sell, rent, or trade your personal information to third-party advertisers. Data is shared strictly on a need-to-know basis with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              <li>Verified infrastructure providers (cloud database hosting and transactional email systems).</li>
              <li>Licensed law enforcement or regulatory authorities only when mandated by valid legal processes.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block" />
              5. Data Security & Storage
            </h2>
            <p>
              We employ strict industry-standard technical safeguards, including 256-bit SSL encryption, restricted database access controls, and regular audits to protect your data from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block" />
              6. Your Privacy Rights
            </h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections to inaccurate information, or request deletion of data that is no longer required for legal compliance.
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block" />
              7. Contact Our Privacy Concierge
            </h2>
            <p>
              For privacy inquiries, data access requests, or policy questions, please contact our administrative desk:
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

export default PrivacyPolicyClient;

