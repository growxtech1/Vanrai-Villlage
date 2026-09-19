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
    Dumbbell,
    Infinity
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { AnimatedCTAButton } from "@/components/ui/animated-cta-button";
import { cn } from "@/lib/utils";

// For missing icons in lucide
const Engagement = Heart;
const Yoga = Wind;

interface ExperienceItemDef {
    id: string;
    name: string;
    summary: string;
    image: string;
    icon: any;
    accent: string;
}

interface ExperienceCategoryDef {
    title: string;
    icon: any;
    items: ExperienceItemDef[];
}

const experienceCategories: ExperienceCategoryDef[] = [
    {
        title: "Leisure Experiences",
        icon: Sparkles,
        items: [
            {
                id: "bonfire",
                name: "Bonfire & Night Activities",
                summary: "Cozy evenings under the stars with crackling wood and warm stories.",
                image: "/img/evening-bonfire.jpg",
                icon: Flame,
                accent: "from-orange-500 to-red-500",
            },
            {
                id: "candle-light",
                name: "Candle Light Dinner",
                summary: "Intimate dining experience with curated menus and romantic settings.",
                image: "/img/candle-light-dinner.jpg",
                icon: Heart,
                accent: "from-rose-500 to-pink-500",
            },
            {
                id: "waterpark",
                name: "Waterpark & Pool",
                summary: "Refresh yourself with thrilling slides and crystal clear waters.",
                image: "/img/waterpark-slides.jpg",
                icon: Waves,
                accent: "from-blue-500 to-cyan-500",
            },
            {
                id: "rain-dance",
                name: "Rain Dance & Poolside Fun",
                summary: "Dance under the refreshing overhead rain showers with music and friends.",
                image: "/img/rain-dance.jpg",
                icon: Sparkles,
                accent: "from-cyan-500 to-blue-500",
            },
            {
                id: "dining",
                name: "Dining",
                summary: "Exquisite culinary journey featuring authentic local and global flavors.",
                image: "/img/dining-hall-wide.webp",
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
                image: "/img/vanrai-lawn-sunset.webp",
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
                image: "/img/event-wedding-hall-stage.webp",
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
                name: "Sports & Cricket",
                summary: "Box cricket, badminton, and outdoor sports under the blue sky.",
                image: "/img/vanrai-open-lawn-sports.webp",
                icon: Trophy,
                accent: "from-lime-500 to-green-500",
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

export function ExperiencesClient() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans">
            <Header />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/img/vanrai-walkway-night.webp"
                        alt="Vanrai Resort Experiences"
                        fill
                        className="object-cover brightness-[0.3]"
                        preload={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />
                </div>

                <div className="container relative z-10 mx-auto px-4 text-center">
                    <div className="max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-5 sm:mb-6 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-green-400" />
                            <span className="text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-green-400">Curated Experiences</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal mb-5 sm:mb-7 leading-[1.08] tracking-tight text-white">
                            Experiences <br />
                            <span className="text-neutral-300 italic font-normal">Beyond the Stay</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
                            Discover a world where every moment is crafted for joy. From romantic dinners under the stars
                            to thrilling adventures for the whole family, find your perfect memory here.
                        </p>
                    </div>
                </div>

                {/* Ambient Orbs */}
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
            </section>

            {/* Content Section */}
            <section className="py-24 sm:py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    {experienceCategories.map((category, catIdx) => (
                        <div key={catIdx} className="mb-20 sm:mb-28 last:mb-0">
                            {/* Category Header */}
                            <motion.div
                                className="flex items-center gap-3.5 mb-8 sm:mb-10"
                                {...fadeInUp}
                            >
                                <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/10">
                                    <category.icon className="w-5 h-5 text-green-400" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">
                                    {category.title}
                                </h2>
                                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                            </motion.div>

                            {/* Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {category.items.map((item, itemIdx) => (
                                    <motion.div
                                        key={item.id}
                                        {...fadeInUp}
                                        transition={{ delay: itemIdx * 0.1 }}
                                        className="group relative"
                                    >
                                        <Link href={`/experiences/${item.id}`} className="block">
                                            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-900 mb-4 shadow-xl">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

                                                {/* Icon Badge */}
                                                <div className="absolute top-4 left-4">
                                                    <div className={cn(
                                                        "p-2 rounded-xl backdrop-blur-xl border border-white/20 shadow-xl",
                                                        "bg-white/10 transition-colors"
                                                    )}>
                                                        <item.icon className="w-4 h-4 text-white" />
                                                    </div>
                                                </div>

                                                {/* Learn More Badge */}
                                                <div className="absolute bottom-4 right-4 opacity-90 group-hover:opacity-100 transition-opacity">
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-white group-hover:bg-[#00c97b] group-hover:text-neutral-950 transition-colors">
                                                        View Details <ArrowUpRight className="w-3.5 h-3.5" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="px-1.5">
                                                <h3 className="text-lg sm:text-xl font-medium mb-1.5 group-hover:text-[#00c97b] transition-colors">
                                                    {item.name}
                                                </h3>
                                                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                                                    {item.summary}
                                                </p>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-28 sm:py-36 md:py-40 relative overflow-hidden">
                <div className="absolute inset-0 bg-neutral-900/50 backdrop-blur-3xl" />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <motion.div
                        {...fadeInUp}
                        className="max-w-3xl mx-auto space-y-6 sm:space-y-8"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
                            Ready to Live the <br />
                            <span className="italic text-green-400">Experience?</span>
                        </h2>
                        <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
                            Book your customized package or reach out to our team to plan
                            a memorable outing for you and your loved ones.
                        </p>
                        <div className="flex justify-center pt-2">
                            <Link href="/contact">
                                <AnimatedCTAButton text="Plan Your Experience" className="h-11 px-7 text-sm font-semibold" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
