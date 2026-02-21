"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Clock, Wallet, CheckCircle2, Star } from "lucide-react";

export function WhyJoin() {
    const features = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Priority Booking",
            description: "Skip the queue with guaranteed priority during peak festival seasons and long weekends.",
            delay: 0.1
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Unlimited Waterpark",
            description: "365 days of unlimited access to our world-class waterpark for you and your family.",
            delay: 0.2
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Flexible Check-In",
            description: "Professional flexibility with early check-in and late check-out privileges.",
            delay: 0.3
        },
        {
            icon: <Wallet className="w-6 h-6" />,
            title: "Consistent Savings",
            description: "Flat 10-15% discount across all room bookings and luxury dining experiences.",
            delay: 0.4
        }
    ];

    return (
        <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 blur-[120px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/10 bg-green-500/5 text-green-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8"
                        >
                            <Star className="w-3 h-3 fill-current" /> Membership Value
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter"
                        >
                            Why the Vanrai <br />
                            <span className="text-white/40 italic font-light">Privilege Account?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-white/40 text-lg font-light leading-relaxed mb-10"
                        >
                            Our membership isn't just about savings; it's about belonging. Become part of an inner circle that values tradition, family, and the luxury of nature.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="space-y-4"
                        >
                            {["Guaranteed ROI after 22 visits", "Priority festive access", "Personal concierge support"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/60 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: feature.delay }}
                                viewport={{ once: true }}
                                className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-green-500/20 hover:bg-white/[0.04] transition-all duration-500"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-green-400">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
                                <p className="text-white/30 text-xs leading-relaxed font-light">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
