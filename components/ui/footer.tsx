"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Instagram,
    Facebook,
    Youtube,
    ArrowRight,
    Heart,
    Globe,
    Clock,
    ExternalLink
} from "lucide-react";
import { RESORT_CONTACT, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/contact-config";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinksArr = [
        {
            title: "Navigation",
            links: [
                { name: "Home", href: "/" },
                { name: "Stays", href: "/stays" },
                { name: "Experiences", href: "/experiences" },
                { name: "About Us", href: "/about" },
                { name: "Gallery", href: "/gallery" },
            ]
        },
        {
            title: "Explore",
            links: [
                { name: "Privilege Club", href: "/membership" },
                { name: "Water Activities", href: "/experiences" },
                { name: "Event Spaces", href: "/events" },
                { name: "Dining Menu", href: "/experiences" },
            ]
        },
        {
            title: "Support",
            links: [
                { name: "Contact Us", href: "/contact" },
                { name: "Location Map", href: "/contact" },
                { name: "Terms & Conditions", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy-policy" },
            ]
        }
    ];

    return (
        <footer className="relative bg-[#050505] text-neutral-400 overflow-hidden border-t border-white/[0.04]">
            {/* Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-[-10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-emerald-500/10 blur-[140px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-green-900/10 blur-[150px]" />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.03) 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            {/* MOBILE FOOTER COMPOSITION (per §20) */}
            <div className="block md:hidden relative z-10 px-5 py-9">
                <div className="flex flex-col space-y-7">
                    {/* LOGO & Short brand statement */}
                    <div className="flex flex-col space-y-3">
                        <Link href="/" className="flex items-center gap-3">
                            <img
                                src="/svg/Vanrai.svg"
                                alt="Vanrai Resort Logo"
                                className="w-12 h-12 brightness-110 contrast-125"
                            />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-white tracking-[0.12em] uppercase">
                                    VANRAI
                                </span>
                                <span className="text-[10px] text-emerald-400 font-semibold tracking-[0.3em] uppercase">
                                    Resort
                                </span>
                            </div>
                        </Link>
                        <p className="text-neutral-400 text-sm leading-relaxed font-light">
                            Where Rustic Charm Meets Refined Luxury. An Eco-Conscious Sanctuary Designed For The Modern Soul.
                        </p>
                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="flex items-center gap-2.5">
                        {[
                            { icon: <Instagram size={17} />, href: RESORT_CONTACT.socials.instagram, label: "Instagram" },
                            { icon: <Facebook size={17} />, href: RESORT_CONTACT.socials.facebook, label: "Facebook" },
                            { icon: <Youtube size={17} />, href: RESORT_CONTACT.socials.youtube, label: "YouTube" },
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#00c97b] transition-colors"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* 2-COLUMN GRID: EXPLORE & CONNECT */}
                    <div className="grid grid-cols-2 gap-6 pt-2 border-t border-white/10">
                        {/* EXPLORE */}
                        <div className="space-y-3">
                            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.18em] flex items-center gap-1.5">
                                <span className="w-1 h-3 bg-[#00c97b] rounded-full inline-block" />
                                Explore
                            </h4>
                            <ul className="space-y-2">
                                {[
                                    { name: "Home", href: "/" },
                                    { name: "Stays", href: "/stays" },
                                    { name: "Experiences", href: "/experiences" },
                                    { name: "Gallery", href: "/gallery" },
                                    { name: "Events", href: "/events" },
                                    { name: "Membership", href: "/membership" },
                                ].map((link, idx) => (
                                    <li key={idx}>
                                        <Link href={link.href} className="text-neutral-400 hover:text-white text-xs font-normal transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CONNECT */}
                        <div className="space-y-3">
                            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.18em] flex items-center gap-1.5">
                                <span className="w-1 h-3 bg-[#00c97b] rounded-full inline-block" />
                                Connect
                            </h4>
                            <div className="space-y-2.5 text-xs text-neutral-400">
                                <div>
                                    <span className="text-[10px] text-neutral-500 uppercase block">Phone & WhatsApp</span>
                                    <a href={RESORT_CONTACT.phoneTel} className="text-neutral-300 hover:text-[#00c97b] transition-colors">
                                        {RESORT_CONTACT.phoneDisplay}
                                    </a>
                                </div>
                                <div>
                                    <span className="text-[10px] text-neutral-500 uppercase block">Email</span>
                                    <a href={RESORT_CONTACT.emailMailto} className="text-neutral-300 hover:text-[#00c97b] transition-colors break-all">
                                        {RESORT_CONTACT.emailAddress}
                                    </a>
                                </div>
                                <div>
                                    <span className="text-[10px] text-neutral-500 uppercase block">Location</span>
                                    <p className="text-neutral-300 leading-snug">Ahmednagar Bypass, MH</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BOOK YOUR STAY CTA */}
                    <div className="pt-2">
                        <Link
                            href="/book"
                            className="w-full max-w-[340px] mx-auto h-12 bg-[#00c97b] hover:bg-[#00b06c] text-neutral-950 font-bold text-sm rounded-[16px] flex items-center justify-center shadow-lg shadow-emerald-950/40 transition-transform active:scale-[0.98]"
                        >
                            Book Your Stay
                        </Link>
                    </div>

                    {/* COPYRIGHT & CREDITS */}
                    <div className="pt-5 border-t border-white/10 flex flex-col items-center gap-2.5 text-[11px] text-neutral-500 text-center">
                        <div className="flex items-center gap-3 text-[11px] text-neutral-400">
                            <Link href="/privacy-policy" className="hover:text-[#00c97b] transition-colors">Privacy Policy</Link>
                            <span className="text-neutral-600">·</span>
                            <Link href="/terms" className="hover:text-[#00c97b] transition-colors">Terms & Conditions</Link>
                        </div>
                        <p suppressHydrationWarning>© {currentYear} Vanrai Resort. All Rights Reserved.</p>
                        <div className="flex items-center gap-1 text-[11px] text-neutral-400">
                            <span>Crafted with</span>
                            <Heart size={11} className="text-rose-500 fill-rose-500 inline" />
                            <span>by</span>
                            <a href="https://growxtech.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00c97b] font-medium">
                                GrowX Technologies
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* DESKTOP & TABLET FOOTER (spacious & editorial) */}
            <div className="hidden md:block container mx-auto px-6 lg:px-12 pt-14 sm:pt-16 pb-10 relative z-10">
                {/* Top Section: Brand & Newsletter */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
                    <div className="lg:col-span-5 space-y-5">
                        <Link href="/" className="flex items-center group">
                            <img
                                src="/svg/Vanrai.svg"
                                alt="Vanrai Resort Logo"
                                className="w-12 h-12 brightness-110 contrast-125 transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="ml-3 flex flex-col">
                                <span className="text-xl font-bold text-white tracking-[0.1em] uppercase leading-none">
                                    VANRAI
                                </span>
                                <span className="text-[10px] text-emerald-400 font-semibold tracking-[0.35em] mt-1 uppercase">
                                    Resort
                                </span>
                            </div>
                        </Link>
                        <p className="text-neutral-400 text-sm leading-relaxed font-light max-w-md">
                            Where Rustic Charm Meets Refined Luxury. Experience An Eco-Conscious Sanctuary Designed For The Modern Soul.
                        </p>
                        <div className="flex items-center gap-2.5">
                            {[
                                { icon: <Instagram size={17} />, href: RESORT_CONTACT.socials.instagram, label: "Instagram" },
                                { icon: <Facebook size={17} />, href: RESORT_CONTACT.socials.facebook, label: "Facebook" },
                                { icon: <Youtube size={17} />, href: RESORT_CONTACT.socials.youtube, label: "YouTube" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7 lg:pl-6">
                        <div className="p-6 sm:p-7 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl relative overflow-hidden">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 relative z-10">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold text-white tracking-tight">Stay In The Loop</h3>
                                    <p className="text-neutral-400 text-xs sm:text-sm font-light">Join Our Insider List For Seasonal Offers And Resort News.</p>
                                </div>
                                <form 
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        alert("Thank you for subscribing to Vanrai updates!");
                                    }}
                                    className="relative min-w-[240px] w-full sm:w-auto"
                                >
                                    <input
                                        type="email"
                                        required
                                        placeholder="your@email.com"
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#00c97b] transition-all placeholder:text-neutral-600 pr-11"
                                    />
                                    <button
                                        type="submit"
                                        aria-label="Subscribe to newsletter"
                                        className="absolute right-1 top-1 bottom-1 aspect-square bg-[#00c97b] text-neutral-950 rounded-lg flex items-center justify-center hover:bg-[#00b06c] transition-colors shadow-md cursor-pointer"
                                    >
                                        <ArrowRight size={15} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Links & Contact */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 mb-12">
                    {footerLinksArr.map((section, idx) => (
                        <div key={idx} className="space-y-3.5">
                            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em] relative inline-block pl-2.5">
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-2.5 bg-[#00c97b] rounded-full" />
                                {section.title}
                            </h4>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link
                                            href={link.href}
                                            className="text-neutral-400 hover:text-white text-xs sm:text-sm transition-colors duration-200 block font-light"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Column */}
                    <div className="col-span-2 space-y-3.5">
                        <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em] relative inline-block pl-2.5">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-2.5 bg-[#00c97b] rounded-full" />
                            Contact & Location
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-neutral-400">
                            <div className="space-y-1.5">
                                <span className="text-xs text-white font-medium block">Resort Location</span>
                                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                                    Vanrai Resort, <br />Ahmednagar City Bypass, MH 414111
                                </p>
                            </div>
                            <div className="space-y-1.5">
                                <span className="text-xs text-white font-medium block">Direct Inquiries & WhatsApp</span>
                                <a href={RESORT_CONTACT.phoneTel} className="text-xs text-[#00c97b] font-medium block hover:underline">
                                    {RESORT_CONTACT.phoneDisplay}
                                </a>
                                <a href={RESORT_CONTACT.emailMailto} className="text-xs text-neutral-400 font-light block hover:text-white transition-colors">
                                    {RESORT_CONTACT.emailAddress}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <div className="w-full h-px bg-white/10 mb-6" />

                {/* Footer Bottom */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-neutral-500">
                    <p suppressHydrationWarning>© {currentYear} Vanrai Resort. All Rights Reserved.</p>
                    <div className="flex items-center gap-4 text-xs text-neutral-400">
                        <Link href="/privacy-policy" className="hover:text-[#00c97b] transition-colors">Privacy Policy</Link>
                        <span className="text-neutral-600">·</span>
                        <Link href="/terms" className="hover:text-[#00c97b] transition-colors">Terms & Conditions</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Crafted with</span>
                        <Heart size={12} className="text-rose-500 fill-rose-500" />
                        <span>by</span>
                        <a
                            href="https://growxtech.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[#00c97b] font-medium flex items-center gap-1 transition-colors"
                        >
                            GrowX Technologies
                            <ExternalLink size={10} className="opacity-50" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
