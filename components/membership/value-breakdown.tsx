"use client";

import { motion } from "framer-motion";
import { Calculator, Sparkles, ArrowRight, TrendingUp, PiggyBank } from "lucide-react";

export function ValueBreakdown() {
    return (
        <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
            {/* Texture background */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/10 bg-green-500/5 text-green-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
                    >
                        <Calculator className="w-3 h-3" /> Financial Analysis
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        The Mathematics of <span className="italic font-light text-white/60">Value.</span>
                    </h2>
                    <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed">
                        We believe in transparency. Here's exactly how your membership pays for itself through curated benefits and consistent usage.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-7xl mx-auto">
                    {/* Left: Component of Value */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between group overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-3xl -z-10 group-hover:bg-green-500/10 transition-colors duration-700" />

                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                                <Sparkles className="w-6 h-6 text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6">Complimentary Stays</h3>
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <div className="text-white/30 text-[10px] font-bold tracking-widest uppercase">Base Premium Rate</div>
                                    <div className="text-white text-xl font-medium">₹3,000 <span className="text-white/20 text-sm italic">per visit</span></div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-white/30 text-[10px] font-bold tracking-widest uppercase">Annual Allowance</div>
                                    <div className="text-white text-xl font-medium">2 Premium Stays</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <div className="text-white/20 text-xs font-bold tracking-widest uppercase mb-2">Guaranteed Value</div>
                            <div className="text-4xl font-bold text-white tracking-tighter">₹6,000</div>
                        </div>
                    </motion.div>

                    {/* Right: Usage Projection */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-green-500/[0.03] to-transparent border border-green-500/10 relative overflow-hidden"
                    >
                        {/* Background Decoration */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-green-500/5 rounded-full blur-[100px]" />

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Annual Savings Projection</h3>
                                <p className="text-white/40 text-sm">Based on 22 waterpark visits + 2 premium stays.</p>
                            </div>
                            <div className="px-4 py-2 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold uppercase tracking-widest">
                                High ROI Projection
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-green-500/20 transition-colors transition-duration-500">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                                            <TrendingUp className="w-4 h-4 text-green-400" />
                                        </div>
                                        <span className="text-white font-bold tracking-tight">Couple Plan ROI</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-white/40 text-sm">Waterpark Utility</span>
                                            <span className="text-white/80 font-mono">₹15,400</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-white/40 text-sm">Stay Benefits</span>
                                            <span className="text-white/80 font-mono">₹6,000</span>
                                        </div>
                                        <div className="h-px bg-white/5 my-2" />
                                        <div className="flex justify-between items-center">
                                            <span className="text-white font-bold">Total Benefit</span>
                                            <span className="text-green-400 text-xl font-bold font-mono">₹21,400</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-amber-500/20 transition-colors transition-duration-500">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                                            <TrendingUp className="w-4 h-4 text-amber-400" />
                                        </div>
                                        <span className="text-white font-bold tracking-tight">Family Plan ROI</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-white/40 text-sm">Waterpark Utility</span>
                                            <span className="text-white/80 font-mono">₹30,800</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-white/40 text-sm">Stay Benefits</span>
                                            <span className="text-white/80 font-mono">₹6,000</span>
                                        </div>
                                        <div className="h-px bg-white/5 my-2" />
                                        <div className="flex justify-between items-center">
                                            <span className="text-white font-bold">Total Benefit</span>
                                            <span className="text-amber-400 text-xl font-bold font-mono">₹36,800</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 flex flex-col md:flex-row md:items-center gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <PiggyBank className="w-7 h-7 text-green-500" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Uncapped Savings Potential</h4>
                                <p className="text-white/40 text-sm leading-relaxed">
                                    The ROI increases further with 15% dining discounts and priority booking privileges throughout the seasonal year.
                                </p>
                            </div>
                            <button className="md:ml-auto p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
