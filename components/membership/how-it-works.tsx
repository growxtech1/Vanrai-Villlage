"use client";

import { motion } from "framer-motion";
import { MousePointer2, CreditCard, IdCard, Crown, ArrowRight } from "lucide-react";

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
            icon: <Crown className="w-6 h-6" />,
            title: "Enjoy Benefits",
            description: "Start using your privileges, discounts, and complimentary stays immediately."
        }
    ];

    return (
        <section className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10 sm:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight"
                    >
                        The Path to <span className="text-white/40">Exclusivity</span>
                    </motion.h2>
                    <p className="text-white/50 text-sm sm:text-base font-light">Four simple steps to unlock a year of unparalleled luxury.</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 relative">
                    {/* Connecting Line for desktop */}
                    <div className="hidden lg:block absolute top-[2.75rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col items-center text-center group p-3.5 sm:p-5 lg:p-0 rounded-2xl bg-white/[0.02] lg:bg-transparent border border-white/5 lg:border-none"
                        >
                            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl sm:rounded-3xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center mb-3 sm:mb-5 lg:mb-8 relative z-10 transition-all duration-500 group-hover:border-green-500/50 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                                <div className="absolute inset-1.5 sm:inset-2 rounded-xl sm:rounded-2xl bg-white/[0.02] flex items-center justify-center text-white/50 group-hover:text-green-500 transition-colors scale-75 sm:scale-100">
                                    {step.icon}
                                </div>
                                <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-green-500 text-black text-[9px] sm:text-[10px] font-black flex items-center justify-center border-2 sm:border-4 border-[#0a0a0a]">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-xs sm:text-base lg:text-xl font-bold text-white mb-1 sm:mb-2 lg:mb-4 group-hover:text-green-500 transition-colors leading-snug">{step.title}</h3>
                            <p className="text-white/40 text-[11px] sm:text-xs lg:text-sm leading-relaxed max-w-[240px] font-light">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 sm:mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 text-white/60 text-xs sm:text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_infinite]"></span>
                        Instant Activation • Digital Delivery • Ready to Use
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
