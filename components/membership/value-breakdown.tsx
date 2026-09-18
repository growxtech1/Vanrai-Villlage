"use client";

import { motion } from "framer-motion";
import { Calculator, BedDouble, ArrowRight, TrendingUp, PiggyBank, CheckCircle2, Waves, Gift, Infinity as InfinityIcon } from "lucide-react";

export function ValueBreakdown() {
    return (
        <section className="py-16 sm:py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
            {/* Texture background */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/15 bg-green-500/5 text-green-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4"
                    >
                        <Calculator className="w-3 h-3" /> Financial Transparency
                    </motion.div>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2.5 sm:mb-4 tracking-tight">
                        The Mathematics of <span className="italic font-light text-white/60">Value.</span>
                    </h2>
                    <p className="text-white/50 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
                        You enjoy <span className="text-white font-medium">unlimited, 365-day access</span> to our waterpark and swimming pool all year long. 22 visits is simply the mathematical threshold where you fully recover 100% of your investment.
                    </p>
                </div>

                {/* Prominent Unlimited Access Banner (Mobile Optimized) */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto mb-8 sm:mb-10 rounded-2xl bg-gradient-to-r from-green-500/10 via-emerald-500/5 to-green-500/10 border border-green-500/25 p-4 sm:p-5 flex flex-col sm:flex-row items-center sm:items-start gap-3.5 sm:gap-4 text-center sm:text-left shadow-[0_0_40px_rgba(34,197,94,0.06)]"
                >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0 text-green-400">
                        <InfinityIcon className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 mb-1.5">
                            <span className="text-white font-bold text-sm sm:text-base">Unlimited 365-Day Waterpark & Pool Access</span>
                            <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 text-[10px] font-bold uppercase tracking-wider">
                                Zero Visit Limits
                            </span>
                        </div>
                        <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                            Your pass is <strong className="text-white font-semibold">NOT restricted to 22 days</strong>. You have unlimited access all 365 days of the year. 22 visits is simply the number of trips it takes to recover 100% of your money. Every visit after that is 100% free fun!
                        </p>
                    </div>
                </motion.div>

                {/* Main Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch max-w-7xl mx-auto mb-6 sm:mb-8">
                    {/* Left: Guaranteed Fixed Value */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 p-5 sm:p-7 rounded-[20px] sm:rounded-[26px] bg-white/[0.02] border border-white/10 flex flex-col justify-between group overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-36 h-36 bg-green-500/5 blur-3xl -z-10 group-hover:bg-green-500/10 transition-colors duration-700" />

                        <div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 sm:mb-6 text-green-400">
                                <BedDouble className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="inline-block text-green-400/90 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-1">Guaranteed Base</div>
                            <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3">2 Complimentary Stays</h3>
                            <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-light">
                                Every membership tier includes two full overnight resort stays with breakfast included.
                            </p>

                            <div className="space-y-3 rounded-xl bg-white/[0.02] border border-white/5 p-3.5 sm:p-4">
                                <div className="flex justify-between items-center text-xs sm:text-sm gap-2">
                                    <span className="text-white/40">Standard Cottage Tariff</span>
                                    <span className="text-white font-medium whitespace-nowrap">₹3,000 / night</span>
                                </div>
                                <div className="flex justify-between items-center text-xs sm:text-sm gap-2">
                                    <span className="text-white/40">Included Night Allowance</span>
                                    <span className="text-white font-medium whitespace-nowrap">2 Nights (Free)</span>
                                </div>
                                <div className="h-px bg-white/5" />
                                <div className="flex justify-between items-center text-xs sm:text-sm gap-2">
                                    <span className="text-white/40">Included Breakfast</span>
                                    <span className="text-emerald-400 font-medium whitespace-nowrap">100% Free</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10">
                            <div className="text-white/40 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-1">Guaranteed Stay Value</div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl sm:text-4xl font-bold text-white tracking-tight">₹6,000</span>
                                <span className="text-xs text-white/40 font-light">cash equivalent</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Usage Projection & Comparison */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 p-5 sm:p-7 md:p-8 rounded-[20px] sm:rounded-[26px] bg-gradient-to-br from-green-500/[0.04] to-transparent border border-green-500/20 relative overflow-hidden flex flex-col justify-between"
                    >
                        {/* Background Decoration */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-green-500/5 rounded-full blur-[100px]" />

                        <div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-6 sm:mb-8">
                                <div>
                                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-1">Annual Savings Projection</h3>
                                    <p className="text-white/40 text-xs sm:text-sm font-light">
                                        Breakeven model based on standard ₹350/person day pass rate over 22 visits (~1.8 visits/month) + 2 stays.
                                    </p>
                                </div>
                                <div className="self-start sm:self-auto px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider whitespace-nowrap">
                                    Breakeven Milestone
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                {/* Couple Plan ROI Card */}
                                <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-all duration-300 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-4">
                                            <div className="flex items-center gap-2 sm:gap-2.5">
                                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                                                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
                                                </div>
                                                <div>
                                                    <span className="text-white font-bold text-sm sm:text-base block">Couple Plan</span>
                                                    <span className="text-white/40 text-[11px] sm:text-xs">2 Adults (Unlimited 365 Days)</span>
                                                </div>
                                            </div>
                                            <span className="px-2 py-0.5 rounded-md bg-white/5 text-white/70 text-[11px] sm:text-xs font-mono font-medium whitespace-nowrap">
                                                ₹20,000/yr
                                            </span>
                                        </div>

                                        <div className="space-y-2.5 text-xs sm:text-sm">
                                            <div className="flex justify-between items-start gap-2">
                                                <span className="text-white/50">
                                                    Waterpark Utility <span className="text-[10px] text-white/30 block min-[420px]:inline">(22 × 2 × ₹350)</span>
                                                </span>
                                                <span className="text-white/90 font-mono font-medium whitespace-nowrap">₹15,400</span>
                                            </div>
                                            <div className="flex justify-between items-start gap-2">
                                                <span className="text-white/50">
                                                    2 Luxury Stay Nights <span className="text-[10px] text-white/30 block min-[420px]:inline">(2 × ₹3,000)</span>
                                                </span>
                                                <span className="text-white/90 font-mono font-medium whitespace-nowrap">₹6,000</span>
                                            </div>
                                            <div className="h-px bg-white/5 my-1" />
                                            <div className="flex justify-between items-center gap-2">
                                                <span className="text-white font-medium">Total Breakeven Benefit</span>
                                                <span className="text-green-400 text-base sm:text-lg font-bold font-mono whitespace-nowrap">₹21,400</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-3 sm:pt-4 border-t border-white/5 flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-1.5 bg-green-500/[0.05] -mx-4 -mb-4 sm:-mx-6 sm:-mb-6 p-3 sm:p-4 rounded-b-2xl">
                                        <span className="text-[11px] sm:text-xs text-green-300/80 font-medium">Net Gain at 22 Visits</span>
                                        <span className="text-[11px] sm:text-xs font-bold font-mono text-green-400 px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-center whitespace-nowrap">
                                            +₹1,400 (107% Return)
                                        </span>
                                    </div>
                                </div>

                                {/* Family Plan ROI Card */}
                                <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-4">
                                            <div className="flex items-center gap-2 sm:gap-2.5">
                                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                                                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                                                </div>
                                                <div>
                                                    <span className="text-white font-bold text-sm sm:text-base block">Family Plan</span>
                                                    <span className="text-white/40 text-[11px] sm:text-xs">2 Adults + 2 Kids (Unlimited 365 Days)</span>
                                                </div>
                                            </div>
                                            <span className="px-2 py-0.5 rounded-md bg-white/5 text-white/70 text-[11px] sm:text-xs font-mono font-medium whitespace-nowrap">
                                                ₹30,000/yr
                                            </span>
                                        </div>

                                        <div className="space-y-2.5 text-xs sm:text-sm">
                                            <div className="flex justify-between items-start gap-2">
                                                <span className="text-white/50">
                                                    Waterpark Utility <span className="text-[10px] text-white/30 block min-[420px]:inline">(22 × 4 × ₹350)</span>
                                                </span>
                                                <span className="text-white/90 font-mono font-medium whitespace-nowrap">₹30,800</span>
                                            </div>
                                            <div className="flex justify-between items-start gap-2">
                                                <span className="text-white/50">
                                                    2 Luxury Stay Nights <span className="text-[10px] text-white/30 block min-[420px]:inline">(2 × ₹3,000)</span>
                                                </span>
                                                <span className="text-white/90 font-mono font-medium whitespace-nowrap">₹6,000</span>
                                            </div>
                                            <div className="h-px bg-white/5 my-1" />
                                            <div className="flex justify-between items-center gap-2">
                                                <span className="text-white font-medium">Total Breakeven Benefit</span>
                                                <span className="text-amber-400 text-base sm:text-lg font-bold font-mono whitespace-nowrap">₹36,800</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-3 sm:pt-4 border-t border-white/5 flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-1.5 bg-amber-500/[0.05] -mx-4 -mb-4 sm:-mx-6 sm:-mb-6 p-3 sm:p-4 rounded-b-2xl">
                                        <span className="text-[11px] sm:text-xs text-amber-300/80 font-medium">Net Gain at 22 Visits</span>
                                        <span className="text-[11px] sm:text-xs font-bold font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-center whitespace-nowrap">
                                            +₹6,800 (123% Return)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Uncapped Upside Bar (Mobile Responsive CTA) */}
                        <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col sm:flex-row sm:items-center gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                                <PiggyBank className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-white font-bold text-xs sm:text-sm mb-1">Every Visit Beyond 22 is Pure Profit</h4>
                                <p className="text-white/40 text-[11px] sm:text-xs leading-relaxed font-light">
                                    There is no limit on visits! Whether you visit 30, 50, or 80 times, admission is always free. Plus enjoy 10–15% dining discounts, free candlelight dinner, and priority holiday bookings.
                                </p>
                            </div>
                            <a
                                href="#plans"
                                aria-label="Explore Membership Plans"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-semibold transition-colors shrink-0"
                            >
                                Compare Plans <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Breakeven Explanation Callout (Mobile 3-Card Grid) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto rounded-2xl border border-white/5 bg-white/[0.015] p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
                >
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5 text-green-400">
                            <Waves className="w-4 h-4" />
                        </div>
                        <div>
                            <h4 className="text-white text-xs sm:text-sm font-bold mb-1">365-Day Unlimited Access</h4>
                            <p className="text-white/40 text-[11px] sm:text-xs leading-relaxed font-light">
                                Your pass is <strong className="text-white font-medium">not capped at 22 days</strong>. You have unlimited waterpark and pool access all 365 days of the year.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                            <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                            <h4 className="text-white text-xs sm:text-sm font-bold mb-1">22 Visits = 100% Breakeven</h4>
                            <p className="text-white/40 text-[11px] sm:text-xs leading-relaxed font-light">
                                22 visits is simply the mathematical threshold where you fully recover your membership fee. Every visit after that is 100% pure profit!
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5 text-amber-400">
                            <Gift className="w-4 h-4" />
                        </div>
                        <div>
                            <h4 className="text-white text-xs sm:text-sm font-bold mb-1">Pay in 2 Instalments</h4>
                            <p className="text-white/40 text-[11px] sm:text-xs leading-relaxed font-light">
                                Both plans are payable in two equal instalments, making your investment and returns effortless from day one.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
