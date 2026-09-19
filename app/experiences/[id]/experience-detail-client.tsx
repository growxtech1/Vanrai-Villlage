"use client";

import { motion } from "framer-motion";
import {
    Sparkles,
    CheckCircle2,
    UserCircle2,
    ArrowLeft
} from "lucide-react";
import { FallbackImage } from "@/components/ui/fallback-image";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { AnimatedCTAButton } from "@/components/ui/animated-cta-button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import type { ExperienceItem } from "@/lib/experiences-data";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
};

interface ExperienceDetailClientProps {
    experience: ExperienceItem;
}

export function ExperienceDetailClient({ experience }: ExperienceDetailClientProps) {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className="min-h-screen bg-[#070808] text-white overflow-x-hidden font-sans">
            <Header />

            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden pt-16">
                <div className="absolute inset-0 z-0">
                    <FallbackImage
                        src={experience.image}
                        alt={experience.name}
                        fill
                        className="object-cover brightness-[0.25]"
                        preload={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070808] via-black/40 to-transparent" />
                </div>

                <div className="container relative z-10 mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <Link
                            href="/experiences"
                            className="inline-flex items-center gap-1.5 text-emerald-400 text-xs sm:text-sm font-medium mb-6 hover:text-emerald-300 transition-colors group"
                        >
                            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                            Back to Experiences
                        </Link>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal mb-5 sm:mb-6 leading-[1.08] tracking-tight text-white">
                            {experience.name}
                        </h1>
                        <Link href="/book" className="inline-block">
                            <AnimatedCTAButton text="Plan This Experience" className="w-full sm:w-auto h-11 px-5 text-sm font-medium" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-24 sm:py-32 relative">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                        {/* Description & Carousel */}
                        <div className="flex-1">
                            <motion.div {...fadeInUp} className="mb-12">
                                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Overview</h2>
                                <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed mb-8">
                                    {experience.description}
                                </p>

                                {/* Image Carousel/Gallery */}
                                <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 group">
                                    <FallbackImage
                                        src={experience.gallery[activeImage] || experience.image}
                                        alt={experience.name}
                                        fill
                                        className="object-cover transition-all duration-500"
                                    />
                                    {/* Thumbnails */}
                                    {experience.gallery.length > 1 && (
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 p-1.5 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                                            {experience.gallery.map((img, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setActiveImage(i)}
                                                    className={cn(
                                                        "relative w-10 h-10 rounded-lg overflow-hidden border transition-all",
                                                        activeImage === i ? "border-emerald-400 scale-105" : "border-transparent opacity-60 hover:opacity-100"
                                                    )}
                                                >
                                                    <FallbackImage src={img} alt="thumb" fill className="object-cover" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar details */}
                        <div className="w-full lg:w-80 space-y-6">
                            {/* Highlights */}
                            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="p-6 rounded-2xl bg-neutral-900/80 border border-white/10">
                                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-emerald-400" />
                                    Highlights
                                </h3>
                                <div className="space-y-3.5">
                                    {experience.highlights.map((h, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                                            <span className="text-neutral-300 text-xs sm:text-sm font-light">{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Ideal For */}
                            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="p-6 rounded-2xl bg-neutral-900/80 border border-white/10">
                                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                                    <UserCircle2 className="w-4 h-4 text-emerald-400" />
                                    Ideal For
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {experience.idealFor.map((item, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-light">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Booking CTA */}
                            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="pt-2 text-center">
                                <Link href="/book" className="block w-full">
                                    <AnimatedCTAButton text="Book Now" className="w-full h-12" />
                                </Link>
                                <p className="mt-3 text-neutral-500 text-xs">
                                    Contact us for custom arrangements
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
