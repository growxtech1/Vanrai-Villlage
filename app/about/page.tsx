"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { AnimatedCTAButton } from "@/components/ui/animated-cta-button";
import Image from "next/image";
import { useRef } from "react";
import {
    Leaf,
    Sparkles,
    MapPin,
    Heart,
    ArrowUpRight,
    Camera,
    Users,
    Hotel,
    Utensils,
} from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
};

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.08]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);

    return (
        <div
            ref={containerRef}
            className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans"
        >
            <Header />

            {/* ================= HERO ================= */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    style={{ scale: heroScale, opacity: heroOpacity }}
                >
                    <Image
                        src="/img/pool-sunset-luxury.jpg"
                        alt="Vanrai Village Resort Luxury Pool at Sunset"
                        fill
                        priority
                        className="object-cover brightness-[0.4]"
                    />
                </motion.div>

                <div className="relative z-10 text-center max-w-5xl px-6">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[1.08] tracking-tight">
                        Where Nature Meets <br />
                        <span className="italic text-neutral-300 font-normal">Refined Luxury</span>
                    </h1>
                    <p className="mt-5 sm:mt-7 text-neutral-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
                        Vanrai Village Resort — A luxury retreat near Ahmednagar crafted
                        for celebrations, escapes, and unforgettable moments.
                    </p>
                </div>
            </section>

            {/* ================= OUR STORY ================= */}
            <section className="py-24 sm:py-32 border-t border-white/5 text-center">
                <div className="max-w-4xl mx-auto px-6 space-y-5">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
                        A Story Rooted In <span className="text-white">Nature</span>
                    </h2>
                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                        Inspired by the serene landscapes of Ahmednagar, Vanrai Village
                        Resort was envisioned as a sanctuary blending village charm with
                        contemporary elegance.
                    </p>
                    <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                        We believe luxury is not loud — it’s thoughtful, peaceful, and
                        immersive. Every corner of Vanrai is designed to offer calmness,
                        comfort, and curated hospitality.
                    </p>
                </div>
            </section>

            {/* ================= AMENITIES ================= */}
            <section className="py-24 sm:py-32 bg-[#050505]">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-12 sm:mb-16 font-light">
                        Luxury In Every Detail
                    </h2>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
                        {[
                            { icon: <Hotel />, title: "Premium AC Rooms" },
                            { icon: <Users />, title: "Grand Event Lawns" },
                            { icon: <Utensils />, title: "In-House Catering" },
                            { icon: <Sparkles />, title: "Wedding Decor Services" },
                            { icon: <Leaf />, title: "Infinity Style Pool" },
                            { icon: <MapPin />, title: "Private Parking" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeInUp}
                                className="p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center hover:border-emerald-500/30 transition-all flex flex-col items-center justify-center"
                            >
                                <div className="mb-2 sm:mb-3 text-[#00c97b] flex justify-center scale-90 sm:scale-100">
                                    {item.icon}
                                </div>
                                <h3 className="text-xs sm:text-sm md:text-base font-medium leading-snug">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= EVENTS SECTION ================= */}
            <section className="py-24 sm:py-32 text-center">
                <div className="max-w-4xl mx-auto px-6 space-y-5">
                    <Sparkles className="mx-auto text-[#00c97b] w-6 h-6" />
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
                        The Perfect Venue For <br />
                        <span className="italic text-white">Grand Celebrations</span>
                    </h2>
                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                        From destination weddings to corporate retreats, Vanrai provides a
                        refined setting tailored to create lifelong memories.
                    </p>
                </div>
            </section>

            {/* ================= WHY CHOOSE ================= */}
            <section className="py-24 sm:py-32 bg-[#050505] border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 sm:gap-12">
                    <div>
                        <h3 className="text-xl sm:text-2xl mb-3">Proximity Yet Peace</h3>
                        <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                            Located near Ahmednagar city yet surrounded by greenery, Vanrai
                            offers the perfect escape from urban chaos.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl sm:text-2xl mb-3">Personalized Hospitality</h3>
                        <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                            Our dedicated team ensures every guest experiences comfort,
                            warmth, and seamless service.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= TESTIMONIAL ================= */}
            <section className="py-24 sm:py-32 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <Sparkles className="mx-auto text-[#00c97b] mb-5 w-7 h-7" />
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-8">
                        Words From Our Guests
                    </h2>

                    <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                        <blockquote className="italic text-neutral-200 text-base sm:text-lg leading-relaxed relative z-10">
                            “Vanrai Village Resort exceeded our expectations. The ambience,
                            elegance, and hospitality made our celebration truly magical.”
                        </blockquote>
                        <p className="mt-4 text-neutral-400 text-xs sm:text-sm relative z-10 font-medium">
                            — Priya & Rohan, Ahmednagar
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= CLOSING CTA ================= */}
            <section className="py-28 sm:py-36 md:py-40 text-center bg-[#0a0a0a]">
                <div className="max-w-4xl mx-auto px-6 space-y-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight">
                        Timeless Surroundings, <br />
                        <span className="text-[#00c97b] font-medium">Elevated Comfort.</span>
                    </h2>
                    <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
                        Step into our sanctuary and craft memories that linger for a lifetime.
                    </p>

                    <div className="flex justify-center pt-2">
                        <a href="/book">
                            <AnimatedCTAButton text="Start Your Story" className="h-11 px-6 text-sm font-semibold" />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
