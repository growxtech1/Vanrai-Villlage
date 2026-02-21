"use client";

import { motion } from "framer-motion";
import { MousePointer2, CreditCard, IdCard, Sparkles, ArrowRight } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            icon: <MousePointer2 className="w-6 h-6" />,
            title: "Select Your Plan",
            description: "Choose between Couple or Family membership based on your needs."
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: "Flexible Payment",
            description: "Pay annually or opt for two equal instalments for your convenience."
        },
        {
            icon: <IdCard className="w-6 h-6" />,
            title: "Digital ID",
            description: "Receive your Digital Membership ID instantly on your registered email."
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Enjoy Benefits",
            description: "Start using your privileges, discounts, and complimentary stays immediately."
        }
    ];

    return (
        <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                    >
                        The Path to <span className="text-white/40">Exclusivity</span>
                    </motion.h2>
                    <p className="text-white/40 text-lg font-light">Four simple steps to unlock a year of unparalleled luxury.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line for desktop */}
                    <div className="hidden lg:block absolute top-[2.75rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center mb-8 relative z-10 transition-all duration-500 group-hover:border-green-500/50 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                                <div className="absolute inset-2 rounded-2xl bg-white/[0.02] flex items-center justify-center text-white/50 group-hover:text-green-500 transition-colors">
                                    {step.icon}
                                </div>
                                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-green-500 text-black text-[10px] font-black flex items-center justify-center border-4 border-[#0a0a0a]">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-500 transition-colors">{step.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed max-w-[240px] font-light">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-8 py-4 rounded-3xl bg-white/[0.02] border border-white/5 text-white/60 text-sm font-medium">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-[pulse_2s_infinite]"></span>
                        Instant Activation • Digital Delivery • Ready to Use
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
