"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, TreePine, Users, Star, Gem, Leaf, Heart, Play, Sparkles, PartyPopper, MapPin } from "lucide-react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
        },
    },
};

const letterAnimation: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.02,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export function AboutVanraiSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "200px 0px 0px 0px" });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
    const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
    const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const titleText = "Vanrai Village";
    const subtitleText = "Resort";

    return (
        <motion.section
            ref={sectionRef}
            id="about-vanrai"
            className="relative w-full min-h-screen overflow-hidden bg-neutral-950"
        >
            {/* Full-width immersive image background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute inset-0"
                    style={{ scale: imageScale, opacity: imageOpacity }}
                >
                    <Image
                        src="/artifacts/vanrai_resort_view.png"
                        alt="Vanrai Village Resort"
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                    />
                </motion.div>

                {/* Premium gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/60" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950" />

                {/* Noise texture overlay */}
                <div className="absolute inset-0 opacity-[0.015]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Animated light streaks */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-400/20 to-transparent"
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent"
                    animate={{ y: ["100%", "-100%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 min-h-screen flex items-center">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-28 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                        {/* Left Content - Takes 7 columns */}
                        <motion.div
                            className="lg:col-span-7 space-y-8"
                            variants={staggerContainer}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            {/* Premium Badge */}
                            <motion.div
                                className="inline-flex items-center gap-3"
                                variants={fadeInUp}
                            >
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-green-400"
                                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <span className="text-sm font-medium text-white/70 tracking-widest uppercase">Est. 2019</span>
                                </div>
                                <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/20">
                                    <Sparkles className="w-3.5 h-3.5 text-green-400" />
                                    <span className="text-sm font-medium text-green-400 tracking-wide">Premium Resort</span>
                                </div>
                            </motion.div>

                            {/* Animated Title */}
                            <motion.div variants={fadeInUp} className="space-y-2">
                                <div className="overflow-hidden">
                                    <motion.h2
                                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tighter"
                                        style={{ y: textY }}
                                    >
                                        {titleText.split("").map((char, i) => (
                                            <motion.span
                                                key={i}
                                                custom={i}
                                                variants={letterAnimation}
                                                initial="hidden"
                                                animate={isInView ? "visible" : "hidden"}
                                                className="inline-block"
                                                style={{ marginRight: char === " " ? "0.3em" : "0" }}
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </motion.h2>
                                </div>
                                <div className="overflow-hidden">
                                    <motion.h2
                                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold italic leading-[0.95] tracking-tighter"
                                        initial={{ y: 60, opacity: 0 }}
                                        animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
                                        transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                                            {subtitleText}
                                        </span>
                                    </motion.h2>
                                </div>
                            </motion.div>

                            {/* Elegant divider */}
                            <motion.div
                                variants={fadeInUp}
                                className="flex items-center gap-4 py-2"
                            >
                                <div className="h-px w-16 bg-gradient-to-r from-green-500 to-transparent" />
                                <span className="text-white/30 text-sm tracking-[0.3em] uppercase">About Us</span>
                                <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                            </motion.div>

                            {/* Description with luxury typography */}
                            <motion.div variants={fadeInUp} className="space-y-6 max-w-xl">
                                <p className="text-xl sm:text-2xl leading-relaxed text-white/60 font-light">
                                    A <span className="text-white font-normal">peaceful village-style sanctuary</span> near Ahmednagar,
                                    where time slows down and nature embraces you.
                                </p>
                                <p className="text-lg leading-relaxed text-white/40">
                                    Surrounded by lush greenery and open skies, Vanrai offers an escape
                                    from the ordinary — a place to reconnect, rejuvenate, and create lasting memories.
                                </p>
                            </motion.div>

                            {/* Feature pills */}
                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                                {[
                                    { icon: <Leaf className="w-4 h-4" />, text: "Eco-Luxury" },
                                    { icon: <MapPin className="w-4 h-4" />, text: "Ahmednagar" },
                                    { icon: <TreePine className="w-4 h-4" />, text: "10+ Acres" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="text-green-400 group-hover:text-green-300 transition-colors">{item.icon}</span>
                                        <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{item.text}</span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Premium CTA Buttons */}
                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                                <motion.button
                                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 overflow-hidden rounded-full"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {/* Button gradient background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500 transition-all duration-300" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Shimmer effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.6 }}
                                    />

                                    <span className="relative font-semibold text-white">Explore Our Story</span>
                                    <ArrowRight className="relative w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                                </motion.button>

                                <motion.button
                                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 hover:border-white/40 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Play className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" fill="currentColor" />
                                    <span className="font-medium text-white/70 group-hover:text-white transition-colors">Watch Video</span>
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Stats Cards */}
                        <motion.div
                            className="lg:col-span-5 grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            {/* Large Featured Stat */}
                            <motion.div
                                className="col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-green-500/30 transition-all duration-500"
                                whileHover={{ y: -5 }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                                <div className="relative flex items-center justify-between">
                                    <div>
                                        <p className="text-6xl sm:text-7xl font-bold text-white mb-2">5+</p>
                                        <p className="text-white/50 font-medium">Years of Excellence</p>
                                    </div>
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
                                        <Heart className="w-10 h-10 text-white" fill="white" />
                                    </div>
                                </div>

                                {/* Decorative lines */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0" />
                            </motion.div>

                            {/* Stat Card 1 */}
                            <motion.div
                                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-blue-500/30 transition-all duration-500"
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-3xl font-bold text-white">5K+</p>
                                <p className="text-white/40 text-sm mt-1">Happy Guests</p>
                            </motion.div>

                            {/* Stat Card 2 */}
                            <motion.div
                                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-amber-500/30 transition-all duration-500"
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/20">
                                    <Star className="w-6 h-6 text-white" fill="white" />
                                </div>
                                <p className="text-3xl font-bold text-white">4.8</p>
                                <p className="text-white/40 text-sm mt-1">Guest Rating</p>
                            </motion.div>

                            {/* Stat Card 3 - Destination Weddings */}
                            <motion.div
                                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-pink-500/30 transition-all duration-500"
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-4 shadow-lg shadow-pink-500/20">
                                    <Gem className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-3xl font-bold text-white">50+</p>
                                <p className="text-white/40 text-sm mt-1">Dream Weddings</p>
                            </motion.div>

                            {/* Stat Card 4 - Corporate Events */}
                            <motion.div
                                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:border-purple-500/30 transition-all duration-500"
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
                                    <PartyPopper className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-3xl font-bold text-white">100+</p>
                                <p className="text-white/40 text-sm mt-1">Events Hosted</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
            >
                <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
                <motion.div
                    className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1 h-2 rounded-full bg-green-400"
                        animate={{ opacity: [1, 0.3, 1], y: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
