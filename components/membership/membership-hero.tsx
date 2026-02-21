"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedCTAButton } from "@/components/ui/animated-cta-button";
import { ArrowDown, Crown, Star } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export function MembershipHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920&auto=format&fit=crop"
                    alt="Luxury Resort"
                    fill
                    priority
                    className="object-cover brightness-[0.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]" />
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-10 w-24 h-24 bg-green-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 relative z-20 text-center">
                <motion.div
                    style={{ opacity }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-5xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                    >
                        <Crown className="w-4 h-4 text-amber-500" />
                        <span className="text-white/80 text-xs font-semibold tracking-[0.2em] uppercase">
                            The Vanrai Privilege Account
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
                        Vanrai Exclusive <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 italic font-light">
                            Membership
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
                        Experience Vanrai beyond a single stay. A private annual club offering complimentary stays, unlimited waterpark access, and exclusive privileges.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-green-500 text-black font-bold rounded-full shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:bg-green-400 transition-all duration-300 flex items-center gap-2"
                        >
                            Join the Club <Star className="w-5 h-5 fill-current" />
                        </motion.button>
                        <a
                            href="#plans"
                            className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium hover:bg-white/10 transition-all duration-300"
                        >
                            Compare Plans
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
                    <motion.div className="w-1 h-2 bg-green-500 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
