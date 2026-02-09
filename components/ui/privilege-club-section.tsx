"use client";

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
        <section className="relative py-20 overflow-hidden bg-[#0e0f0e] text-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6"
                            >
                                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
                                <span className="text-white/90 text-[11px] sm:text-xs font-medium  tracking-[0.15em] uppercase flex items-center gap-2"><Crown className="w-4 h-4 text-green-500" />Loyalty Program</span>
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tight mb-4 text-white">
                                Vanrai <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300">Privilege Club</span>
                            </h2>
                            <p className="text-xl text-gray-300 font-light">
                                Exclusive Benefits for Our Direct Guests.
                            </p>
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                            Become a member of the Vanrai Privilege Club and enjoy privileged access to special pricing, exclusive offers, and priority bookings. Designed to reward our loyal guests with enhanced experiences every time you visit.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + (idx * 0.1), duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                    <div className="mt-1 p-2 rounded-lg bg-green-500/10">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-lg">{benefit.title}</h4>
                                        <p className="text-gray-400 text-sm">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <a
                                href="#memberships"
                                className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-medium rounded-full shadow-md shadow-green-500/20 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Join the Privilege Club <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>

                            <a
                                href="#memberships"
                                className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center hover:border-white/40"
                            >
                                View Membership Benefits
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Visual Side - Abstract Premium Card Representation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 w-full max-w-md mx-auto aspect-[1.586/1] rounded-2xl p-8 shadow-2xl backdrop-blur-xl border border-white/10 bg-gradient-to-br from-gray-900/90 to-black/90 overflow-hidden transform transition-transform hover:scale-105 duration-500 group">

                            {/* Gold Shine Effect */}
                            <div className="absolute top-0 -left-1/2 w-full h-full bg-gradient-to-r from-transparent via-amber-400/10 to-transparent skew-x-12 animate-shimmer" />
                            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-amber-500/20 to-transparent blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex justify-between items-start mb-12">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                                        <span className="text-xl font-bold text-white">V</span>
                                    </div>
                                    <span className="text-xl font-medium tracking-widest text-white/90">VANRAI</span>
                                </div>
                                <Crown className="w-8 h-8 text-amber-500/80" />
                            </div>

                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="text-amber-500/80 text-sm tracking-[0.2em] mb-2 uppercase">Privilege Club</div>
                                <div className="flex justify-between items-end">
                                    <div className="text-2xl font-mono text-white/80 tracking-widest">**** **** **** 8899</div>
                                </div>
                            </div>

                            {/* Noise Texture Overlay */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                        </div>

                        {/* Background Decorative Rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-amber-500/10 rounded-full animate-[spin_60s_linear_infinite]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
