"use client";

import { motion } from "framer-motion";
import { ArrowRight, Crown } from "lucide-react";
import Image from "next/image";

export function FinalCTA() {
    return (
        <section className="py-28 sm:py-36 md:py-40 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury Interior"
                    fill
                    className="object-cover opacity-20 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-5 sm:mb-6"
                    >
                        <Crown className="w-3.5 h-3.5 text-green-500" />
                        <span className="text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase">Limited Memberships Available</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight"
                    >
                        Begin Your Year of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 italic font-light">Unrivaled Privilege.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-white/50 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed"
                    >
                        Join the Vanrai Privilege Account today and transform every visit into an extraordinary homecoming.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5"
                    >
                        <motion.a
                            href="/contact?subject=membership&plan=Couple"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="h-11 px-6 bg-green-500 text-black font-semibold text-sm rounded-[14px] shadow-lg shadow-green-500/25 hover:bg-green-400 transition-all duration-300 flex items-center justify-center"
                        >
                            Apply for Couple Plan
                        </motion.a>
                        <motion.a
                            href="/contact?subject=membership&plan=Family"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="h-11 px-6 bg-white/10 border border-white/15 text-white font-semibold text-sm rounded-[14px] hover:bg-white/15 transition-all duration-300 flex items-center justify-center"
                        >
                            Apply for Family Plan
                        </motion.a>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-6 sm:mt-8 text-white/30 text-xs font-medium flex items-center justify-center gap-2"
                    >
                        <ArrowRight className="w-3.5 h-3.5 text-green-400" /> Secure Enrollment • Instant Access • Dedicated Support
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
