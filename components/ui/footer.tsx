"use client";

import React from "react";
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
import { IconBrandX } from "@tabler/icons-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinksArr = [
        {
            title: "Navigation",
            links: [
                { name: "Home", href: "#home" },
                { name: "Stays", href: "#stays" },
                { name: "Experiences", href: "#experiences" },
                { name: "About Vanrai", href: "#about-vanrai" },
                { name: "Gallery", href: "/gallery" },
            ]
        },
        {
            title: "Explore",
            links: [
                { name: "Privilege Club", href: "#privilege-club" },
                { name: "Water Activities", href: "#experiences" },
                { name: "Event Spaces", href: "#contact" },
                { name: "Dining Menu", href: "#" },
            ]
        },
        {
            title: "Support",
            links: [
                { name: "Contact Us", href: "#contact" },
                { name: "Location Map", href: "#contact" },
                { name: "Terms & Conditions", href: "#" },
                { name: "Privacy Policy", href: "#" },
            ]
        }
    ];

    return (
        <footer className="relative bg-[#050505] text-neutral-400 pt-28 pb-12 overflow-hidden border-t border-white/[0.03]">
            {/* Background Orbs - More subtle and artistic */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-[-10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-emerald-500/10 blur-[140px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-green-900/10 blur-[150px] animate-pulse" style={{ animationDelay: '3s' }} />
                {/* Fine grid pattern for premium texture */}
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.03) 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Top Section: Brand & Newsletter */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start mb-24">
                    <div className="lg:col-span-5 space-y-8">
                        <div className="flex flex-col space-y-6">
                            <a href="#" className="flex items-center group">
                                <div className="relative">
                                    <img
                                        src="/svg/Vanrai.svg"
                                        alt="Vanrai Village Logo"
                                        className="w-16 h-16 brightness-110 contrast-125 transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute -inset-2 bg-emerald-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="ml-4 flex flex-col">
                                    <span className="text-3xl font-bold text-white tracking-[0.1em] leading-none uppercase">
                                        VANRAI
                                    </span>
                                    <span className="text-[11px] text-emerald-500 font-semibold tracking-[0.4em] mt-1 uppercase">
                                        Village Resort
                                    </span>
                                </div>
                            </a>
                            <p className="text-neutral-500 text-lg leading-relaxed font-light max-w-md">
                                Where rustic charm meets refined luxury. Experience an eco-conscious sanctuary designed for the modern soul.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            {[
                                { icon: <Instagram size={20} />, href: "#" },
                                { icon: <Facebook size={20} />, href: "#" },
                                { icon: <IconBrandX size={20} />, href: "#" },
                                { icon: <Youtube size={20} />, href: "#" },
                            ].map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    whileHover={{ y: -5, backgroundColor: "rgba(16, 185, 129, 0.1)", borderColor: "rgba(16, 185, 129, 0.3)", color: "#10b981" }}
                                    className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center transition-all duration-300 text-neutral-400 group"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7 lg:pl-12">
                        <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-emerald-500/5 rounded-full blur-[80px] -z-10 group-hover:bg-emerald-400/10 transition-colors duration-700" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold text-white tracking-tight">Stay in the Loop</h3>
                                    <p className="text-neutral-500 font-light">Join our insider list for exclusive offers and seasonal news.</p>
                                </div>

                                <div className="relative min-w-[300px] w-full md:w-auto">
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-neutral-700 font-light pr-16"
                                    />
                                    <button className="absolute right-2 top-2 bottom-2 aspect-square bg-emerald-500 text-black rounded-xl flex items-center justify-center hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Links & Contact */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-16 gap-x-8 mb-24">
                    {footerLinksArr.map((section, idx) => (
                        <div key={idx} className="space-y-8">
                            <h4 className="text-white font-semibold text-sm uppercase tracking-[0.2em] relative inline-block pl-4">
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-emerald-500 rounded-full" />
                                {section.title}
                            </h4>
                            <ul className="space-y-4">
                                {section.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <a
                                            href={link.href}
                                            className="text-neutral-500 hover:text-white text-[15px] transition-all duration-300 flex items-center group/link font-light"
                                        >
                                            <span className="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all">
                                                <ArrowRight size={12} className="mr-2 text-emerald-500" />
                                            </span>
                                            <span className="group-hover/link:translate-x-1 transition-transform">{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Details x2 Columns for layout */}
                    <div className="col-span-2 lg:col-span-2 space-y-10">
                        <h4 className="text-white font-semibold text-sm uppercase tracking-[0.2em] relative inline-block pl-4">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-emerald-500 rounded-full" />
                            Contact & Location
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex gap-4 group/item">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center shrink-0 group-hover/item:border-emerald-500/30 transition-all duration-300">
                                        <MapPin size={20} className="text-emerald-500" />
                                    </div>
                                    <div>
                                        <span className="block text-white text-sm font-medium mb-1">Our Sanctuary</span>
                                        <address className="not-italic text-sm text-neutral-500 leading-relaxed font-light hover:text-neutral-300 transition-colors">
                                            Vanrai Village Resort, <br />Ahmednagar, MH 414001
                                        </address>
                                    </div>
                                </div>

                                <div className="flex gap-4 group/item">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center shrink-0 group-hover/item:border-emerald-500/30 transition-all duration-300">
                                        <Clock size={20} className="text-emerald-500" />
                                    </div>
                                    <div>
                                        <span className="block text-white text-sm font-medium mb-1">Reception Hours</span>
                                        <span className="text-sm text-neutral-500 font-light">Mon - Sun: 08:00 - 22:00</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4 group/item">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center shrink-0 group-hover/item:border-emerald-500/30 transition-all duration-300">
                                        <Phone size={20} className="text-emerald-500" />
                                    </div>
                                    <div>
                                        <span className="block text-white text-sm font-medium mb-1">Direct Line</span>
                                        <a href="tel:+919765122888" className="text-lg text-emerald-400/90 font-medium hover:text-emerald-400 transition-colors">
                                            +91 97651 22888
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-4 group/item">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center shrink-0 group-hover/item:border-emerald-500/30 transition-all duration-300">
                                        <Mail size={20} className="text-emerald-500" />
                                    </div>
                                    <div>
                                        <span className="block text-white text-sm font-medium mb-1">Support</span>
                                        <a href="mailto:contact@vanrai.com" className="text-sm text-neutral-500 font-light hover:text-emerald-400 transition-colors">
                                            contact@vanrai.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent mb-12" />

                {/* Footer Bottom */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-sm font-light">
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-neutral-600">
                        <p suppressHydrationWarning>© {currentYear} Vanrai Village Resort. All sanctuary rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Use</a>
                            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy</a>
                            <a href="#" className="hover:text-neutral-400 transition-colors">Cookies</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-neutral-500 px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/5 transition-colors hover:border-white/10 group">
                        <span className="text-[13px]">Crafted with</span>
                        <Heart size={14} className="text-rose-500 animate-pulse fill-rose-500 group-hover:scale-125 transition-transform" />
                        <span className="text-[13px]">by</span>
                        <a
                            href="https://growxtech.com"
                            target="_blank"
                            className="text-white hover:text-emerald-500 transition-colors font-semibold flex items-center gap-1.5"
                        >
                            GrowX Technologies
                            <ExternalLink size={12} className="opacity-40" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
