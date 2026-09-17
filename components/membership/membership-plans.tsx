"use client";

import { motion } from "framer-motion";
import { Check, Users, Baby, Crown, Sparkles, TrendingUp } from "lucide-react";
import { AnimatedCTAButton } from "@/components/ui/animated-cta-button";

export function MembershipPlans() {
    const plans = [
        {
            title: "Couple Membership",
            price: "20,000",
            period: "/ Year",
            instatment: "Payable in Two Equal Instalments",
            for: "2 Adults",
            icon: <Users className="w-8 h-8 text-green-400" />,
            benefits: [
                "2 Complimentary Stay Days (Breakfast Included)",
                "Full Resort Access (Pool, Waterpark, Gym)",
                "Unlimited Waterpark Access – 365 Days",
                "10–15% Discount on Room & Dining",
                "10% Discount for Additional Guests",
                "1 Complimentary Candle Light Dinner",
                "Priority Booking During Festivals",
                "Flexible Check-in / Late Check-out"
            ],
            highlight: false,
            theme: "emerald"
        },
        {
            title: "Family Membership",
            price: "30,000",
            period: "/ Year",
            instatment: "Payable in Two Equal Instalments",
            for: "2 Adults + 2 Children (< 16 Years)",
            icon: <Crown className="w-8 h-8 text-amber-400" />,
            benefits: [
                "2 Complimentary Stay Days (Breakfast Included)",
                "Full Resort Access (Pool, Waterpark, Gym)",
                "Unlimited Waterpark Access – 365 Days",
                "10–15% Discount on Room & Dining",
                "10% Discount for Additional Guests",
                "Complimentary Kids Gaming Zone Access",
                "Birthday Celebration Basic Setup (Once/Year)",
                "Priority Access for Festive Packages"
            ],
            highlight: true,
            theme: "amber"
        }
    ];

    return (
        <section id="plans" className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-10 sm:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex justify-center mb-3"
                    >
                        <span className="px-3.5 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs font-bold tracking-[0.25em] uppercase">
                            Membership Plans
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight"
                    >
                        Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Level of Privilege</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed"
                    >
                        Whether for a romantic getaway or a family tradition, our memberships are designed to reward your loyalty with exceptional value.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className={`group relative flex flex-col p-6 sm:p-7 md:p-8 rounded-[22px] sm:rounded-[26px] border transition-all duration-500 hover:-translate-y-1 ${plan.highlight
                                    ? "border-amber-500/30 bg-gradient-to-b from-amber-500/[0.08] to-transparent shadow-[0_20px_50px_rgba(245,158,11,0.05)]"
                                    : "border-white/10 bg-white/[0.03] hover:border-green-500/30"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-3.5 right-6 sm:right-10 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-black text-[10px] font-black tracking-[0.2em] uppercase shadow-xl">
                                    Most Recommended
                                </div>
                            )}

                            <div className="flex justify-between items-start mb-6 sm:mb-8">
                                <div className={`p-3 sm:p-3.5 rounded-xl sm:rounded-2xl ${plan.highlight ? "bg-amber-500/10 border border-amber-500/20" : "bg-white/5 border border-white/10"}`}>
                                    {plan.icon}
                                </div>
                                <div className="text-right">
                                    <div className="text-white/30 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-0.5">Annual Fee</div>
                                    <div className="flex items-baseline gap-1 justify-end">
                                        <span className="text-white/50 text-lg sm:text-xl font-light">₹</span>
                                        <span className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{plan.price}</span>
                                        <span className="text-white/30 text-xs sm:text-sm font-medium">{plan.period}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">{plan.title}</h3>
                                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs font-medium flex items-center gap-1.5">
                                        <Users className="w-3.5 h-3.5" /> {plan.for}
                                    </span>
                                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/40 text-[10px] font-medium uppercase tracking-wider flex items-center gap-1.5">
                                        <TrendingUp className="w-3.5 h-3.5" /> {plan.instatment}
                                    </span>
                                </div>
                            </div>

                            <div className="flex-grow space-y-3 mb-6 sm:mb-8">
                                <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-3">Platinum Privileges</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-5">
                                    {plan.benefits.map((benefit, bIndex) => (
                                        <div key={bIndex} className="flex items-start gap-2 group/item">
                                            <div className={`mt-0.5 p-0.5 rounded-full shrink-0 ${plan.highlight ? "bg-amber-500/20" : "bg-green-500/20"}`}>
                                                <Check className={`w-3 h-3 ${plan.highlight ? "text-amber-400" : "text-green-400"}`} />
                                            </div>
                                            <span className="text-white/60 text-xs sm:text-sm font-light leading-snug group-hover/item:text-white transition-colors">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto">
                                <a
                                    href={`/contact?subject=membership&plan=${encodeURIComponent(plan.title)}`}
                                    className={`w-full h-11 rounded-[14px] font-semibold text-sm transition-all duration-300 flex items-center justify-center ${plan.highlight
                                            ? "bg-amber-500 text-black hover:bg-amber-400 shadow-lg shadow-amber-500/20"
                                            : "bg-white/10 text-white border border-white/10 hover:bg-white/15"
                                        }`}
                                >
                                    Select {plan.title.split(' ')[0]} Plan
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
