"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Gift, Bell, Heart, Trophy, Sparkles, Star } from "lucide-react";

export function ExclusivePrivileges() {
    const privileges = [
        {
            icon: <Bell className="w-6 h-6" />,
            title: "Festival Invitations",
            description: "Exclusive access to our curated cultural and seasonal festivals.",
            color: "text-amber-400"
        },
        {
            icon: <Trophy className="w-6 h-6" />,
            title: "Early Event Access",
            description: "Be the first to secure spots for high-demand resort events.",
            color: "text-blue-400"
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Dedicated Support",
            description: "A personal concierge for all your booking and resort needs.",
            color: "text-rose-400"
        },
        {
            icon: <Star className="w-6 h-6" />,
            title: "Occasion Offers",
            description: "Tailored surprises for your anniversaries and birthdays.",
            color: "text-purple-400"
        },
        {
            icon: <Gift className="w-6 h-6" />,
            title: "Surprise Benefits",
            description: "Unexpected perks and gifts throughout your membership year.",
            color: "text-green-400"
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Member Lounging",
            description: "Priority seating and services in our premium dining areas.",
            color: "text-emerald-400"   
        }
    ];

    return (
        <section className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-900/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-10 sm:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center mb-4"
                    >
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </motion.div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">Platinum <span className="text-white/40 italic font-light">Privileges</span></h2>
                    <p className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">Beyond stays and savings, we offer a world of curated experiences designed exclusively for our members.</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-6xl mx-auto">
                    {privileges.map((priv, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-3.5 sm:p-6 md:p-8 rounded-[18px] sm:rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 group flex flex-col justify-start"
                        >
                            <div className={`w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center mb-3 sm:mb-6 md:mb-8 ${priv.color} group-hover:scale-110 transition-transform duration-500 shadow-xl shrink-0`}>
                                <div className="scale-75 sm:scale-100">
                                    {priv.icon}
                                </div>
                            </div>
                            <h3 className="text-xs sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2 md:mb-3 tracking-tight leading-snug">{priv.title}</h3>
                            <p className="text-white/40 text-[11px] sm:text-xs md:text-sm leading-relaxed font-light">{priv.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


