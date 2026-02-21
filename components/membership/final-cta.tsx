"use client";

import { motion } from "framer-motion";
import { ArrowRight, Crown } from "lucide-react";
import Image from "next/image";

export function FinalCTA() {
    return (
        <section className="py-40 bg-[#0a0a0a] relative overflow-hidden">
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
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10"
                    >
                        <Crown className="w-4 h-4 text-green-500" />
                        <span className="text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase">Limited Memberships Available</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-tighter leading-none"
                    >
                        Begin Your Year of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 italic font-light">Unrivaled Privilege.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-white/40 text-lg md:text-2xl max-w-3xl mx-auto mb-16 font-light leading-relaxed"
                    >
                        Join the Vanrai Privilege Account today and transform every visit into an extraordinary homecoming.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-6 bg-green-500 text-black font-black text-sm uppercase tracking-widest rounded-full shadow-[0_20px_40px_rgba(34,197,94,0.2)] hover:bg-green-400 transition-all duration-300"
                        >
                            Apply for Couple Plan
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-white/10 transition-all duration-300"
                        >
                            Apply for Family Plan
                        </motion.button>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-12 text-white/20 text-xs font-medium flex items-center justify-center gap-2"
                    >
                        <ArrowRight className="w-3 h-3" /> Secure Enrollment • Instant Access • Premium Support
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
