"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Star, Calendar, Tag, Crown, ArrowRight } from "lucide-react";

export function PrivilegeClubSection() {
    const benefits = [
        {
            icon: <Tag className="w-5 h-5 text-green-400" />,
            title: "Flat 10% Discount",
            description: "On all direct room bookings.",
        },
        {
            icon: <Check className="w-5 h-5 text-green-400" />,
            title: "Member-Only Rates",
            description: "Lower than any third-party platform.",
        },
        {
            icon: <Calendar className="w-5 h-5 text-green-400" />,
            title: "Priority Access",
            description: "To festivals, weddings, and special events.",
        },
        {
            icon: <Star className="w-5 h-5 text-green-400" />,
            title: "Exclusive Offers",
            description: "Repeat-guest privileges and seasonal deals.",
        },
    ];

    return (
        <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0a0a0a] text-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-950/30 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-950/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-6 sm:space-y-7"
                    >
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 sm:mb-5"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
                                <span className="text-white/90 text-[11px] font-medium tracking-[0.15em] uppercase flex items-center gap-1.5">
                                    <Crown className="w-3.5 h-3.5 text-amber-400" />Loyalty Program
                                </span>
                            </motion.div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans tracking-tight mb-3 text-white">
                                Vanrai <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-amber-300">Privilege Club</span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-300 font-light">
                                Exclusive Benefits for Our Direct Guests.
                            </p>
                        </div>

                        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl">
                            Become a member of the Vanrai Privilege Club and enjoy privileged access to special pricing, exclusive offers, and priority bookings. Designed to reward our loyal guests with enhanced experiences every time you visit.
                        </p>

                        <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
                            {benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + (idx * 0.1), duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col sm:flex-row sm:items-start gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 hover:bg-white/[0.06] transition-all duration-300"
                                >
                                    <div className="p-2 rounded-lg sm:rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit shrink-0">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-xs sm:text-sm md:text-base mb-0.5 leading-snug">{benefit.title}</h4>
                                        <p className="text-neutral-400 text-[11px] sm:text-xs leading-relaxed font-light">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row gap-3.5 pt-2"
                        >
                            <Link
                                href="/membership"
                                className="group relative px-6 py-3 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-white font-medium rounded-full shadow-lg shadow-green-950/40 hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden text-sm"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Join the Privilege Club <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>

                            <Link
                                href="/membership"
                                className="px-6 py-3 bg-white/5 border border-white/15 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center hover:border-white/30 text-sm"
                            >
                                View Membership Benefits
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Visual Side - Abstract Premium Card Representation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, rotate: 3 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 w-full max-w-md mx-auto aspect-[1.586/1] rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-2xl border border-white/15 bg-gradient-to-br from-neutral-900/95 via-neutral-950/95 to-black/95 overflow-hidden transform transition-transform hover:scale-[1.02] duration-500 group">

                            {/* Gold/Emerald Subtle Ambient Lighting */}
                            <div className="absolute top-0 -left-1/2 w-full h-full bg-gradient-to-r from-transparent via-amber-400/10 to-transparent skew-x-12 animate-shimmer" />
                            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-emerald-500/15 via-amber-500/10 to-transparent blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                                        <span className="text-lg font-bold text-neutral-950">V</span>
                                    </div>
                                    <span className="text-base font-medium tracking-[0.25em] text-white/90">VANRAI</span>
                                </div>
                                <Crown className="w-6 h-6 text-amber-400" />
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 sm:bottom-7 sm:left-7 sm:right-7 z-10">
                                <div className="text-amber-400/90 text-[11px] tracking-[0.25em] mb-1.5 uppercase font-medium">Privilege Club VIP</div>
                                <div className="flex justify-between items-end">
                                    <div className="text-lg sm:text-xl font-mono text-white/80 tracking-widest">•••• •••• •••• 8899</div>
                                </div>
                            </div>

                            {/* Subtle Grid Ambient Overlay */}
                            <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                        </div>

                        {/* Background Decorative Subtle Rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border border-amber-500/10 rounded-full pointer-events-none" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[135%] h-[135%] border border-white/5 rounded-full pointer-events-none" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
