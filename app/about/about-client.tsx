"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { AnimatedCTAButton } from "@/components/ui/animated-cta-button";
import {
    Sparkles,
    Trees,
    UtensilsCrossed,
    Waves,
    Heart,
    MapPin,
    ShieldCheck,
    ArrowRight,
    Star,
    Flame,
    Users,
    BedDouble,
    Trophy,
    CheckCircle2,
    Compass,
    PhoneCall,
    Car,
} from "lucide-react";
import { SITE_PHONE } from "@/constants/site";

const fadeInUp = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const staggerContainer = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-80px" },
    variants: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export function AboutClient() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.08]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.45]);

    const stats = [
        { value: "2.5", label: "Acres of Greenery", desc: "Serene agro-tourism sanctuary" },
        { value: "Gourmet", label: "Farm-Fresh Dining", desc: "Authentic multi-cuisine delicacies" },
        { value: "Handcrafted", label: "Teak Architecture", desc: "Natural wooden cottages & suites" },
        { value: "500+", label: "Guest Capacity", desc: "Grand celebration & wedding lawns" },
    ];

    const amenities = [
        {
            icon: <BedDouble className="w-6 h-6 text-[#00c97b]" />,
            title: "Handcrafted Wooden Cottages",
            desc: "Constructed with authentic teak wood, private verandas, and peaceful forest views.",
            tag: "Accommodation",
        },
        {
            icon: <UtensilsCrossed className="w-6 h-6 text-[#00c97b]" />,
            title: "Multi-Cuisine Dining",
            desc: "Authentic Maharashtrian thalis, farm-to-table vegetables, and multi-cuisine banquets.",
            tag: "Dining",
        },
        {
            icon: <Users className="w-6 h-6 text-[#00c97b]" />,
            title: "Grand Event Lawns (500+)",
            desc: "Sprawling manicured green lawns with designer stage lights for weddings and corporate galas.",
            tag: "Celebration",
        },
        {
            icon: <Waves className="w-6 h-6 text-[#00c97b]" />,
            title: "Waterpark & Splash Pool",
            desc: "Family waterpark slides, luxury leisure swimming pool, and dedicated kids' water play zones.",
            tag: "Leisure",
        },
        {
            icon: <Sparkles className="w-6 h-6 text-[#00c97b]" />,
            title: "Rain Dance Arena",
            desc: "High-energy artificial rain showers paired with vibrant music and party lighting.",
            tag: "Experience",
        },
        {
            icon: <Flame className="w-6 h-6 text-[#00c97b]" />,
            title: "Twilight Bonfire & Stargazing",
            desc: "Cozy evenings under unpolluted rural skies, crackling wood fire, and acoustic melodies.",
            tag: "Evening",
        },
        {
            icon: <Trophy className="w-6 h-6 text-[#00c97b]" />,
            title: "Floodlit Sports Grounds",
            desc: "Expansive open lawn grounds equipped for competitive cricket matches and sports tournaments.",
            tag: "Activity",
        },
        {
            icon: <Heart className="w-6 h-6 text-[#00c97b]" />,
            title: "Candlelight Lawn Dinners",
            desc: "Intimate dining arrangements under lanterns and stars for anniversaries and romantic dates.",
            tag: "Romance",
        },
    ];

    return (
        <div
            ref={containerRef}
            className="min-h-screen bg-[#070908] text-white overflow-x-hidden font-sans selection:bg-[#00c97b]/30 selection:text-white"
        >
            <Header />

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ scale: heroScale, opacity: heroOpacity }}
                >
                    <Image
                        src="/img/pool-sunset-luxury.jpg"
                        alt="Vanrai Resort twilight pool and luxury estate"
                        fill
                        priority
                        className="object-cover brightness-[0.38] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#070908]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#070908_100%)] opacity-80" />
                </motion.div>

                {/* Subtle Ambient Glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00c97b]/10 rounded-full blur-[140px] pointer-events-none" />

                <div className="relative z-10 text-center max-w-5xl px-6 pt-16">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#00c97b] animate-pulse" />
                        <span className="text-xs uppercase tracking-[0.25em] text-neutral-300 font-medium">
                            Agro-Tourism Sanctuary · Ahmednagar, MH
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.05]"
                    >
                        Where Nature Meets <br />
                        <span className="italic font-light text-neutral-300">
                            Refined Luxury
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-6 sm:mt-8 text-neutral-300 text-base sm:text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed"
                    >
                        Spanning 2.5 acres of peaceful rural landscape, Vanrai Resort combines
                        handcrafted wooden architecture, gourmet farm-fresh gastronomy, and
                        grand celebration venues near Ahmednagar.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.45 }}
                        className="mt-10 flex flex-wrap items-center justify-center gap-4"
                    >
                        <Link href="/book">
                            <AnimatedCTAButton text="Reserve Your Stay" className="h-12 px-7 text-sm font-semibold" />
                        </Link>
                        <Link
                            href="/stays"
                            className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/10 text-white text-sm font-medium transition-all backdrop-blur-sm"
                        >
                            <span>Explore Cottages</span>
                            <ArrowRight className="w-4 h-4 text-[#00c97b]" />
                        </Link>
                    </motion.div>
                </div>

                {/* Bottom Scroll Cue */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500 pointer-events-none">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll to Discover</span>
                    <div className="w-px h-8 bg-gradient-to-b from-[#00c97b]/60 to-transparent" />
                </div>
            </section>

            {/* ================= PRESTIGE METRICS BAR ================= */}
            <section className="relative -mt-12 z-20 max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    {...fadeInUp}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl shadow-black/80"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-2">
                            <span className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
                                {stat.value}
                            </span>
                            <span className="mt-1 text-xs sm:text-sm font-medium text-[#00c97b] tracking-wider uppercase">
                                {stat.label}
                            </span>
                            <span className="mt-1 text-xs text-neutral-400 font-light hidden sm:block">
                                {stat.desc}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* ================= OUR STORY / GENESIS ================= */}
            <section className="py-24 sm:py-36 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        {/* Narrative Left */}
                        <motion.div
                            {...fadeInUp}
                            className="lg:col-span-6 space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#00c97b] font-medium">
                                <Trees className="w-4 h-4" />
                                <span>The Origin & Vision</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight">
                                Rooted in the Soil, <br />
                                <span className="italic font-light text-neutral-300">
                                    Crafted for Tranquility.
                                </span>
                            </h2>

                            <div className="space-y-5 text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
                                <p>
                                    Born from a passion to celebrate Maharashtra’s countryside without sacrificing
                                    modern elegance, <strong className="text-white font-medium">Vanrai Resort</strong> was
                                    envisioned as an oasis on the outskirts of Ahmednagar.
                                </p>
                                <p>
                                    Set across 2.5 acres of fertile agro-tourism soil, our estate replaces the noise
                                    of the city with rustling leaves, bird calls, and the sweet aroma of natural teak wood.
                                    Here, hospitality is sincere, personal, and deeply connected to nature.
                                </p>
                                <p className="text-sm text-neutral-400">
                                    Whether welcoming families seeking weekend serenity, couples celebrating milestones,
                                    or hosts orchestrating a 500-guest wedding, we offer an authentic setting where
                                    luxury feels effortless and grounded.
                                </p>
                            </div>

                            <div className="pt-2 flex items-center gap-6 border-t border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#00c97b]/10 border border-[#00c97b]/30 flex items-center justify-center text-[#00c97b]">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">Verified Excellence</p>
                                        <p className="text-xs text-neutral-400">Farm-Fresh Dining & Agro-Tourism</p>
                                    </div>
                                </div>
                                <div className="h-8 w-px bg-white/10" />
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#00c97b]/10 border border-[#00c97b]/30 flex items-center justify-center text-[#00c97b]">
                                        <Compass className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">Ahmednagar Bypass</p>
                                        <p className="text-xs text-neutral-400">Effortless Highway Access</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image Grid Right */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:col-span-6 relative"
                        >
                            <div className="relative aspect-[4/5] sm:aspect-[1] md:aspect-[4/5] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                <Image
                                    src="/img/vanrai_resort_view.webp"
                                    alt="Scenic aerial perspective of Vanrai Resort cottages and landscape"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                                    <span className="text-xs uppercase tracking-[0.2em] text-[#00c97b] font-medium block mb-1">
                                        The Vanrai Estate
                                    </span>
                                    <p className="text-sm text-neutral-200 font-light italic">
                                        “A seamless sanctuary where rural heritage meets refined contemporary living.”
                                    </p>
                                </div>
                            </div>

                            {/* Floating Accent Card */}
                            <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-neutral-900/95 to-black/95 border border-white/15 backdrop-blur-xl shadow-2xl max-w-[220px] hidden sm:block">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-3 h-3 rounded-full bg-[#00c97b]" />
                                    <span className="text-xs uppercase tracking-wider font-semibold text-white">Agro-Estate</span>
                                </div>
                                <p className="text-xs text-neutral-400 leading-snug">
                                    2.5 acres of organic greenery, shaded walkways, and open skies.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= THE THREE PILLARS (EDITORIAL SPLIT) ================= */}
            <section className="py-24 sm:py-36 bg-[#040605] border-y border-white/5 relative">
                <div className="max-w-7xl mx-auto px-6 space-y-28 sm:space-y-36">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <motion.span
                            {...fadeInUp}
                            className="inline-block text-xs uppercase tracking-[0.35em] text-[#00c97b] font-medium"
                        >
                            The Vanrai Experience
                        </motion.span>
                        <motion.h2
                            {...fadeInUp}
                            className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight"
                        >
                            Three Pillars of Distinction
                        </motion.h2>
                        <motion.p
                            {...fadeInUp}
                            className="text-neutral-400 text-sm sm:text-base font-light max-w-2xl mx-auto"
                        >
                            Every dimension of Vanrai Resort is curated to balance indulgence, tranquility, and authentic hospitality.
                        </motion.p>
                    </div>

                    {/* Pillar 01: Handcrafted Wooden Architecture */}
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                        <motion.div
                            {...fadeInUp}
                            className="lg:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl"
                        >
                            <Image
                                src="/img/Rooms/StaysCoversHero.webp"
                                alt="Handcrafted wooden cottages at Vanrai Resort"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-xs text-neutral-300">
                                01 · Accommodations
                            </div>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            className="lg:col-span-5 space-y-6"
                        >
                            <span className="text-xs uppercase tracking-[0.25em] text-[#00c97b] font-medium">
                                Handcrafted Architecture
                            </span>
                            <h3 className="text-2xl sm:text-4xl font-normal leading-tight text-white">
                                Teak Wooden Cottages & Deluxe Retreats
                            </h3>
                            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                                Our bespoke wooden cottages are handcrafted from authentic timber, infusing every room
                                with a calming natural scent and warmth. Each cottage features private sit-outs overlooking
                                the lawns, king-sized comfort, air conditioning, and modern en-suite amenities.
                            </p>
                            <ul className="space-y-2.5 text-sm text-neutral-300">
                                <li className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#00c97b] flex-shrink-0" />
                                    <span>Private verandas with lush garden views</span>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#00c97b] flex-shrink-0" />
                                    <span>Independent wooden cottages & family suites</span>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#00c97b] flex-shrink-0" />
                                    <span>Air-conditioned sanctuary with high-speed Wi-Fi</span>
                                </li>
                            </ul>
                            <div className="pt-2">
                                <Link
                                    href="/stays"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#00c97b] transition-colors"
                                >
                                    <span>Discover Accommodations</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Pillar 02: Pure Vegetarian Gastronomy */}
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                        <motion.div
                            {...fadeInUp}
                            className="lg:col-span-5 space-y-6 lg:order-1 order-2"
                        >
                            <span className="text-xs uppercase tracking-[0.25em] text-[#00c97b] font-medium">
                                Multi-Cuisine Dining
                            </span>
                            <h3 className="text-2xl sm:text-4xl font-normal leading-tight text-white">
                                Farm-to-Table Maharashtrian & Multi-Cuisine
                            </h3>
                            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                                Food at Vanrai is a celebration of flavor and hospitality. Our culinary
                                team sources fresh vegetables straight from surrounding farmland to prepare rich Maharashtrian
                                thalis, festive North Indian delicacies, and Chinese specialties.
                            </p>
                            <ul className="space-y-2.5 text-sm text-neutral-300">
                                <li className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#00c97b] flex-shrink-0" />
                                    <span>Chef-crafted kitchen using fresh farm-to-table produce</span>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#00c97b] flex-shrink-0" />
                                    <span>Romantic open-air candlelight dinners on the lawn</span>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#00c97b] flex-shrink-0" />
                                    <span>Expansive banquet hall for celebrations and buffets</span>
                                </li>
                            </ul>
                            <div className="pt-2">
                                <Link
                                    href="/experiences"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#00c97b] transition-colors"
                                >
                                    <span>View Dining & Experiences</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            className="lg:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl lg:order-2 order-1"
                        >
                            <Image
                                src="/img/dining-hall-wide.webp"
                                alt="Grand multi-cuisine dining hall at Vanrai Resort"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-xs text-neutral-300">
                                02 · Gastronomy
                            </div>
                            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-black/60 border border-white/15 backdrop-blur-md text-xs text-neutral-200 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00c97b]" />
                                <span>Farm-Fresh Dining</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Pillar 03: Grand Celebrations & Water Adventures */}
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                        <motion.div
                            {...fadeInUp}
                            className="lg:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl"
                        >
                            <Image
                                src="/img/vanrai-lawn-sunset.webp"
                                alt="Sunset view across the grand celebration lawns"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-xs text-neutral-300">
                                03 · Gatherings & Leisure
                            </div>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            className="lg:col-span-5 space-y-6"
                        >
                            <span className="text-xs uppercase tracking-[0.25em] text-[#00c97b] font-medium">
                                Celebrations & Recreation
                            </span>
                            <h3 className="text-2xl sm:text-4xl font-normal leading-tight text-white">
                                500+ Guest Lawns, Waterpark & Sports Turf
                            </h3>
                            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                                From dream destination weddings illuminated by twilight fairy lights to joyful family
                                waterpark afternoons, Vanrai is designed to bring people together. Complete with slides,
                                rain dance arena, open sports grounds, and starlit bonfire circles.
                            </p>
                            <ul className="space-y-2.5 text-sm text-neutral-300">
                                <li className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#00c97b] flex-shrink-0" />
                                    <span>Lush celebration lawns accommodating 500+ attendees</span>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#00c97b] flex-shrink-0" />
                                    <span>Exciting waterpark slides, swimming pool & rain dance</span>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#00c97b] flex-shrink-0" />
                                    <span>Floodlit open grounds for cricket matches & tournaments</span>
                                </li>
                            </ul>
                            <div className="pt-2">
                                <Link
                                    href="/events"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#00c97b] transition-colors"
                                >
                                    <span>Explore Event Hosting</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= ARCHITECTURAL & ECOLOGICAL ETHOS BANNER ================= */}
            <section className="py-24 sm:py-36 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        {...fadeInUp}
                        className="relative rounded-[2.5rem] overflow-hidden border border-white/10 p-8 sm:p-14 lg:p-20 shadow-2xl"
                    >
                        <Image
                            src="/img/vanrai-reception-night.webp"
                            alt="Architectural night view of Vanrai Resort reception"
                            fill
                            className="object-cover brightness-[0.38]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

                        <div className="relative z-10 max-w-2xl space-y-6">
                            <span className="text-xs uppercase tracking-[0.3em] text-[#00c97b] font-medium">
                                Ecological Commitment
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight">
                                Designed in Harmony <br />
                                <span className="italic font-light text-neutral-300">With the Rural Landscape</span>
                            </h2>
                            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                                We believe authentic luxury nurtures the land that hosts it. Our 2.5-acre grounds protect
                                native trees, incorporate natural ventilation across our wooden cottages, utilize organic
                                farm compost, and maintain low-pollution ambient lighting to preserve Ahmednagar’s
                                brilliant starlit night sky.
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
                                <div>
                                    <span className="block text-2xl font-light text-white">100%</span>
                                    <span className="text-xs uppercase tracking-wider text-neutral-400">Natural Airflow</span>
                                </div>
                                <div>
                                    <span className="block text-2xl font-light text-white">Native</span>
                                    <span className="text-xs uppercase tracking-wider text-neutral-400">Flora Preserved</span>
                                </div>
                                <div>
                                    <span className="block text-2xl font-light text-white">Dark Sky</span>
                                    <span className="text-xs uppercase tracking-wider text-neutral-400">Night Ambiance</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= RESORT AMENITIES & EXPERIENCES ================= */}
            <section className="py-24 sm:py-36 bg-[#040605] relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-24">
                        <motion.span
                            {...fadeInUp}
                            className="inline-block text-xs uppercase tracking-[0.3em] text-[#00c97b] font-medium"
                        >
                            Curated Inclusions
                        </motion.span>
                        <motion.h2
                            {...fadeInUp}
                            className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight"
                        >
                            Luxury in Every Detail
                        </motion.h2>
                        <motion.p
                            {...fadeInUp}
                            className="text-neutral-400 text-sm sm:text-base font-light"
                        >
                            Everything you need for a restful stay, joyful celebration, or memorable family gathering.
                        </motion.p>
                    </div>

                    <motion.div
                        {...staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {amenities.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={cardVariant}
                                className="group p-7 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#00c97b]/40 hover:bg-white/[0.05] transition-all duration-500 backdrop-blur-sm flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-[#00c97b]/10 border border-[#00c97b]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                            {item.icon}
                                        </div>
                                        <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/5">
                                            {item.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#00c97b] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ================= LOCATION & ARRIVAL EXPERIENCE ================= */}
            <section className="py-24 sm:py-32 relative border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                        <motion.div
                            {...fadeInUp}
                            className="lg:col-span-5 space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#00c97b] font-medium">
                                <MapPin className="w-4 h-4" />
                                <span>Prime Location</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight">
                                Proximity Yet Total Peace
                            </h2>
                            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                                Strategically situated along the <strong className="text-white font-medium">Ahmednagar City Bypass</strong>,
                                Vanrai Resort allows guests to bypass congested inner-city routes while enjoying rapid access
                                from Pune, Aurangabad, and Mumbai highways.
                            </p>
                            <div className="space-y-4 pt-2">
                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div className="flex items-center gap-3">
                                        <Car className="w-5 h-5 text-[#00c97b]" />
                                        <div>
                                            <p className="text-sm font-medium text-white">Ahmednagar City Bypass</p>
                                            <p className="text-xs text-neutral-400">Direct highway connectivity & scenic approach</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div className="flex items-center gap-3">
                                        <PhoneCall className="w-5 h-5 text-[#00c97b]" />
                                        <div>
                                            <p className="text-sm font-medium text-white">Concierge & Route Support</p>
                                            <p className="text-xs text-neutral-400">Call {SITE_PHONE} for gate assistance</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-2">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#00c97b] text-black text-sm font-semibold hover:bg-[#00b06c] transition-all"
                                >
                                    <span>Get Directions & Contact</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            className="lg:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                        >
                            <Image
                                src="/img/vanrai-resort-aerial-lawn.webp"
                                alt="Aerial landscape of Vanrai Resort grounds"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-[#00c97b] font-medium">Ahmednagar, Maharashtra</p>
                                    <p className="text-sm text-white font-medium">Vanrai Resort</p>
                                </div>
                                <Link
                                    href="/contact"
                                    className="text-xs font-semibold text-[#00c97b] hover:underline"
                                >
                                    View Full Map →
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= GUEST REFLECTION & TESTIMONIAL ================= */}
            <section className="py-24 sm:py-36 bg-[#040605] relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        {...fadeInUp}
                        className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-xl relative"
                    >
                        <div className="flex justify-center gap-1.5 mb-6 text-amber-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-amber-400" />
                            ))}
                        </div>
                        <blockquote className="text-xl sm:text-2xl md:text-3xl font-light italic text-neutral-100 leading-relaxed">
                            “The handcrafted wooden cottages, lush open lawns, and peaceful agro-tourism atmosphere
                            made our family gathering unforgettable. The delicious farm-fresh food tasted just like
                            authentic home cooking with resort finesse.”
                        </blockquote>
                        <div className="mt-8">
                            <p className="text-sm sm:text-base font-semibold text-white tracking-wide">
                                Priya & Rohan Deshmukh
                            </p>
                            <p className="text-xs text-neutral-400 uppercase tracking-widest mt-1">
                                Family Reunion · Pune & Ahmednagar
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= CLOSING CALL TO ACTION ================= */}
            <section className="py-28 sm:py-40 relative overflow-hidden flex items-center justify-center text-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/img/evening-bonfire.jpg"
                        alt="Evening bonfire under the stars at Vanrai Resort"
                        fill
                        className="object-cover brightness-[0.25]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#040605] via-transparent to-[#070908]" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
                    <motion.div
                        {...fadeInUp}
                        className="space-y-4"
                    >
                        <span className="text-xs uppercase tracking-[0.35em] text-[#00c97b] font-medium">
                            Plan Your Escape
                        </span>
                        <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[1.08]">
                            Timeless Moments <br />
                            <span className="italic font-light text-neutral-300">
                                Await Your Arrival.
                            </span>
                        </h2>
                        <p className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed pt-2">
                            Step away from the ordinary into 2.5 acres of rural serenity, teak wooden comfort,
                            and soulful hospitality.
                        </p>
                    </motion.div>

                    <motion.div
                        {...fadeInUp}
                        className="flex flex-wrap items-center justify-center gap-4 pt-4"
                    >
                        <Link href="/book">
                            <AnimatedCTAButton text="Reserve Your Stay" className="h-12 px-8 text-sm font-semibold" />
                        </Link>
                        <Link
                            href="/events"
                            className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/10 text-white text-sm font-medium transition-all backdrop-blur-sm"
                        >
                            <span>Host an Event</span>
                            <ArrowRight className="w-4 h-4 text-[#00c97b]" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
