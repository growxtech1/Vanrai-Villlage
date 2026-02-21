"use client";

import { motion } from "framer-motion";
import {
    Flame,
    Heart,
    Waves,
    UtensilsCrossed,
    Users,
    Cake,
    Church,
    Wind,
    Trophy,
    Gamepad2,
    Sparkles,
    ArrowUpRight,
    Search,
    ChevronRight,
    Dumbbell,
    PartyPopper,
    Infinity
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { AnimatedCTAButton } from "@/components/ui/animated-cta-button";
import { cn } from "@/lib/utils";
import { useState } from "react";

// For missing icons in lucide
const Engagement = Heart;
const Yoga = Wind;

interface ExperienceItem {
    id: string;
    name: string;
    summary: string;
    image: string;
    icon: any;
    accent: string;
}

interface ExperienceCategory {
    title: string;
    icon: any;
    items: ExperienceItem[];
}

const experienceCategories: ExperienceCategory[] = [
    {
        title: "Leisure Experiences",
        icon: Sparkles,
        items: [
            {
                id: "bonfire",
                name: "Bonfire & Night Activities",
                summary: "Cozy evenings under the stars with crackling wood and warm stories.",
                image: "https://images.unsplash.com/photo-1536207447787-8e6f9e3e9854?q=80&w=2070&auto=format&fit=crop",
                icon: Flame,
                accent: "from-orange-500 to-red-500",
            },
            {
                id: "candle-light",
                name: "Candle Light Dinner",
                summary: "Intimate dining experience with curated menus and romantic settings.",
                image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2070&auto=format&fit=crop",
                icon: Heart,
                accent: "from-rose-500 to-pink-500",
            },
            {
                id: "waterpark",
                name: "Waterpark & Pool",
                summary: "Refresh yourself with thrilling slides and crystal clear waters.",
                image: "https://images.unsplash.com/photo-1561150169-371f366b828a?q=80&w=2070&auto=format&fit=crop",
                icon: Waves,
                accent: "from-blue-500 to-cyan-500",
            },
            {
                id: "dining",
                name: "Dining",
                summary: "Exquisite culinary journey featuring authentic local and global flavors.",
                image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop",
                icon: UtensilsCrossed,
                accent: "from-amber-500 to-yellow-500",
            },
        ]
    },
    {
        title: "Social Experiences",
        icon: Users,
        items: [
            {
                id: "picnics",
                name: "Group Picnics",
                summary: "Perfect bonding time for families and teams in our lush green lawns.",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
                icon: Users,
                accent: "from-green-500 to-emerald-500",
            },
            {
                id: "birthdays",
                name: "Birthday Events",
                summary: "Celebrate your special day with vibrant decor and joyful celebrations.",
                image: "https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=2070&auto=format&fit=crop",
                icon: Cake,
                accent: "from-purple-500 to-fuchsia-500",
            },
            {
                id: "anniversary",
                name: "Engagement & Anniversary",
                summary: "Mark your milestones with elegance and timeless memories.",
                image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop",
                icon: Engagement,
                accent: "from-red-400 to-rose-400",
            },
            {
                id: "weddings",
                name: "Destination Wedding",
                summary: "Experience a dream wedding amidst the soulful breeze of nature.",
                image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
                icon: Church,
                accent: "from-pink-500 to-rose-500",
            },
        ]
    },
    {
        title: "Wellness & Activities",
        icon: Dumbbell,
        items: [
            {
                id: "yoga",
                name: "Yoga Events",
                summary: "Find your inner peace with sunrise yoga sessions in the open air.",
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop",
                icon: Yoga,
                accent: "from-teal-500 to-emerald-500",
            },
            {
                id: "sports",
                name: "Sports Events",
                summary: "From cricket tournaments to friendly matches on our grounds.",
                image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2070&auto=format&fit=crop",
                icon: Trophy,
                accent: "from-indigo-500 to-blue-500",
            },
            {
                id: "indoor",
                name: "Indoor Events",
                summary: "Engaging indoor games and activities for groups of all sizes.",
                image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop",
                icon: Infinity,
                accent: "from-violet-500 to-purple-500",
            },
            {
                id: "kids-zone",
                name: "Kids Gaming Zone",
                summary: "A world of fun and games designed specifically for our young guests.",
                image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=2070&auto=format&fit=crop",
                icon: Gamepad2,
                accent: "from-orange-400 to-amber-500",
            },
        ]
    }
];

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: "easeOut" as const }
};

export default function ExperiencesPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
                        alt="Vanrai Village Experiences"
                        fill
                        className="object-cover brightness-[0.3]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />
                </div>

                <div className="container relative z-10 mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6 backdrop-blur-sm"
                        >
                            <Sparkles className="w-4 h-4 text-green-400" />
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-green-400">Curated Experiences</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-8 leading-[1.1] tracking-tight">
                            Experiences <br />
                            <span className="text-neutral-400 italic font-light">Beyond the Stay</span>
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Discover a world where every moment is crafted for joy. From romantic dinners under the stars
                            to thrilling adventures for the whole family, find your perfect memory here.
                        </p>
                    </motion.div>
                </div>

                {/* Ambient Orbs */}
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
            </section>

            {/* Content Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    {experienceCategories.map((category, catIdx) => (
                        <div key={catIdx} className="mb-32 last:mb-0">
                            {/* Category Header */}
                            <motion.div
                                className="flex items-center gap-4 mb-16"
                                {...fadeInUp}
                            >
                                <div className="p-3 rounded-2xl bg-neutral-900 border border-white/10">
                                    <category.icon className="w-6 h-6 text-green-400" />
                                </div>
                                <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
                                    {category.title}
                                </h2>
                                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                            </motion.div>

                            {/* Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.items.map((item, itemIdx) => (
                                    <motion.div
                                        key={item.id}
                                        {...fadeInUp}
                                        transition={{ delay: itemIdx * 0.1 }}
                                        className="group relative"
                                    >
                                        <div className="relative aspect-[16/11] rounded-[2rem] overflow-hidden bg-neutral-900 mb-6 shadow-2xl">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

                                            {/* Icon Badge */}
                                            <div className="absolute top-6 left-6">
                                                <div className={cn(
                                                    "p-3 rounded-2xl backdrop-blur-xl border border-white/20 shadow-xl",
                                                    "bg-white/10 transition-colors"
                                                )}>
                                                    <item.icon className="w-5 h-5 text-white" />
                                                </div>
                                            </div>

                                            {/* Learn More Button (Overlay on hover) */}
                                            <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                                <Link
                                                    href={`/experiences/${item.id}`}
                                                    className="w-full py-4 bg-white text-black font-bold rounded-full flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors"
                                                >
                                                    Learn More
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="px-4">
                                            <h3 className="text-2xl font-medium mb-3 group-hover:text-green-400 transition-colors">
                                                {item.name}
                                            </h3>
                                            <p className="text-neutral-400 font-light leading-relaxed">
                                                {item.summary}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-neutral-900/50 backdrop-blur-3xl" />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <motion.div
                        {...fadeInUp}
                        className="max-w-4xl mx-auto bg-gradient-to-b from-white/5 to-transparent p-12 md:p-24 rounded-[4rem] border border-white/10"
                    >
                        <h2 className="text-4xl md:text-6xl font-medium mb-8">
                            Ready for an <br />
                            <span className="text-green-400 italic">Unforgettable Escape?</span>
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Whether it's a quiet evening or a grand celebration, our team is here to
                            make it perfect. Plan your experience today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <AnimatedCTAButton text="Plan Your Experience" className="w-full sm:w-auto h-16 px-10 text-lg group shadow-2xl shadow-green-500/10" />
                            <button className="flex items-center gap-2 px-8 py-4 bg-neutral-900/80 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-neutral-800 hover:border-white/30 transition-all duration-300 font-medium">
                                Contact Support
                                <ArrowUpRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
