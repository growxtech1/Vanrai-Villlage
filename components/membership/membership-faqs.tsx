"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ChevronDown } from "lucide-react";

export function MembershipFAQs() {
    const faqs = [
        {
            question: "How do I book my complimentary stay days?",
            answer: "Members can book their complimentary stays by contacting our dedicated member helpline or through our website's member portal. Stays are subject to availability, and we recommend booking at least 14 days in advance for weekends and peak periods."
        },
        {
            question: "Is the membership transferable to family or friends?",
            answer: "Currently, our memberships are designed for the primary member and their immediate family (as per the selected plan). However, members receive a 10% discount for any additional guests they bring along during their visits."
        },
        {
            question: "Can I upgrade from Couple to Family membership mid-year?",
            answer: "Yes, you can upgrade your membership at any time by paying the difference in the membership fee. Your benefits will be adjusted immediately to reflect the new plan."
        },
        {
            question: "How do the instalment payments work?",
            answer: "The membership fee can be paid in two equal instalments. The first instalment is due at the time of joining, and the second instalment is payable within six months. Note that all benefits are activated upon the first payment."
        },
        {
            question: "What does 'unlimited waterpark access' mean?",
            answer: "Members can visit the Vanrai Waterpark as many times as they like during the resort's operational hours, 365 days a year. This includes all slides, pools, and standard water activities."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-10 sm:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex justify-center mb-3 sm:mb-4"
                        viewport={{ once: true }}
                    >
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <HelpCircle className="w-5 h-5 text-green-400" />
                        </div>
                    </motion.div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 tracking-tight">Got <span className="text-white/40 italic font-light">Questions?</span></h2>
                    <p className="text-white/50 text-sm sm:text-base font-light leading-relaxed">Everything you need to know about the Vanrai Privilege program.</p>
                </div>

                <div className="space-y-3.5 sm:space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className={`rounded-[20px] sm:rounded-[22px] border transition-all duration-300 ${openIndex === index
                                    ? "bg-white/[0.04] border-white/20 shadow-xl"
                                    : "bg-white/[0.02] border-white/5 hover:border-white/10"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 sm:px-8 sm:py-6 min-h-[56px] flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/50 rounded-[20px] sm:rounded-[22px]"
                                aria-expanded={openIndex === index}
                            >
                                <span className={`text-base sm:text-lg font-semibold transition-colors duration-300 pr-4 ${openIndex === index ? "text-green-400" : "text-white"}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full bg-white/5 transition-transform duration-300 shrink-0 ${openIndex === index ? "rotate-180 bg-green-500/10 text-green-400" : "text-white/40"}`}>
                                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 sm:px-8 sm:pb-7 text-white/50 text-xs sm:text-sm leading-relaxed font-light">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
