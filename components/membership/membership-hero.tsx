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
                    preload={true}
                    className="object-cover brightness-[0.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-black/20" />
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
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-5xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
                    >
                        <Crown className="w-4 h-4 text-amber-500" />
                        <span className="text-white/90 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase">
                            The Vanrai Privilege Account
                        </span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-white tracking-tight leading-[1.08] mb-6 sm:mb-8">
                        Vanrai Exclusive <br />
                        <span className="text-green-400 italic font-normal">
                            Membership
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 font-light">
                        Experience Vanrai beyond a single stay. A private annual club offering complimentary stays, unlimited waterpark access, and exclusive privileges.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5">
                        <motion.a
                            href="#plans"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="h-11 px-6 bg-green-500 text-black font-medium text-sm rounded-[14px] shadow-lg shadow-green-500/25 hover:bg-green-400 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Join the Club <Star className="w-4 h-4 fill-current" />
                        </motion.a>
                        <a
                            href="#plans"
                            className="inline-flex items-center justify-center h-11 px-6 rounded-[14px] border border-white/20 bg-white/5 backdrop-blur-md text-white text-sm font-medium hover:bg-white/10 transition-all duration-300"
                        >
                            Compare Plans
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
                    <motion.div className="w-1 h-1.5 bg-green-500 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
