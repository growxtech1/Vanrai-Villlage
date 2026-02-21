"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
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
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
                        alt="Vanrai Village Resort"
                        fill
                        priority
                        className="object-cover brightness-[0.35]"
                    />
                </motion.div>

                <div className="relative z-10 text-center max-w-4xl px-6">
                    <h1 className="text-5xl md:text-8xl font-light leading-tight">
                        Where Nature Meets <br />
                        <span className="italic text-neutral-400">Refined Luxury</span>
                    </h1>
                    <p className="mt-8 text-neutral-400 text-lg md:text-xl">
                        Vanrai Village Resort — A luxury retreat near Ahmednagar crafted
                        for celebrations, escapes, and unforgettable moments.
                    </p>
                </div>
            </section>

            {/* ================= OUR STORY ================= */}
            <section className="py-32 border-t border-white/5 text-center">
                <div className="max-w-4xl mx-auto px-6 space-y-8">
                    <h2 className="text-4xl md:text-6xl font-light">
                        A Story Rooted In <span className="text-white">Nature</span>
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        Inspired by the serene landscapes of Ahmednagar, Vanrai Village
                        Resort was envisioned as a sanctuary blending village charm with
                        contemporary elegance.
                    </p>
                    <p className="text-neutral-500 leading-relaxed">
                        We believe luxury is not loud — it’s thoughtful, peaceful, and
                        immersive. Every corner of Vanrai is designed to offer calmness,
                        comfort, and curated hospitality.
                    </p>
                </div>
            </section>

            {/* ================= AMENITIES ================= */}
            <section className="py-32 bg-[#050505]">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl text-center mb-20 font-light">
                        Luxury In Every Detail
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">
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
                                className="p-10 rounded-3xl bg-white/5 border border-white/10 text-center hover:border-green-500/30 transition-all"
                            >
                                <div className="mb-6 text-green-400 flex justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-medium">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= EVENTS SECTION ================= */}
            <section className="py-40 text-center">
                <div className="max-w-4xl mx-auto px-6 space-y-8">
                    <Sparkles className="mx-auto text-green-500 w-8 h-8" />
                    <h2 className="text-4xl md:text-6xl font-light">
                        The Perfect Venue For <br />
                        <span className="italic text-white">Grand Celebrations</span>
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        From destination weddings to corporate retreats, Vanrai provides a
                        refined setting tailored to create lifelong memories.
                    </p>
                </div>
            </section>

            {/* ================= WHY CHOOSE ================= */}
            <section className="py-32 bg-[#050505] border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-2xl mb-4">Proximity Yet Peace</h3>
                        <p className="text-neutral-500 leading-relaxed">
                            Located near Ahmednagar city yet surrounded by greenery, Vanrai
                            offers the perfect escape from urban chaos.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl mb-4">Personalized Hospitality</h3>
                        <p className="text-neutral-500 leading-relaxed">
                            Our dedicated team ensures every guest experiences comfort,
                            warmth, and seamless service.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= TESTIMONIAL ================= */}
            <section className="py-40 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <Camera className="mx-auto text-green-500 mb-8 w-10 h-10" />
                    <h2 className="text-4xl md:text-6xl font-light mb-12">
                        Words From Our Guests
                    </h2>

                    <div className="p-12 rounded-3xl bg-white/5 border border-white/10">
                        <p className="italic text-neutral-300 text-xl leading-relaxed">
                            “Vanrai Village Resort exceeded our expectations. The ambience,
                            elegance, and hospitality made our wedding truly magical.”
                        </p>
                        <p className="mt-6 text-neutral-500">
                            — Priya & Rohan, Wedding Guests
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= CLOSING CTA ================= */}
            <section className="py-48 text-center bg-[#0a0a0a]">
                <div className="max-w-4xl mx-auto px-6 space-y-10">
                    <h2 className="text-4xl md:text-6xl font-light leading-relaxed">
                        Timeless Surroundings, <br />
                        <span className="text-white">Elevated Comfort.</span>
                    </h2>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-12 py-5 bg-green-600 rounded-full font-semibold shadow-xl hover:bg-green-500 transition-all"
                    >
                        Start Your Story
                    </motion.button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
