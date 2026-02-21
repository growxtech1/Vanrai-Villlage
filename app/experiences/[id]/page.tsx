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
    Infinity,
    CheckCircle2,
    Calendar,
    MapPin,
    Clock,
    UserCircle2,
    ArrowLeft
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
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
    tagline: string;
    summary: string;
    description: string;
    image: string;
    gallery: string[];
    icon: any;
    accent: string;
    highlights: string[];
    idealFor: string[];
}

const experiencesData: Record<string, ExperienceItem> = {
    "bonfire": {
        id: "bonfire",
        name: "Bonfire & Night Activities",
        tagline: "Warm memories under the velvet sky.",
        summary: "Cozy evenings under the stars with crackling wood and warm stories.",
        description: "Experience the magic of a Maharashtrian night. Our bonfire sessions are designed to bring people together. Enjoy the warmth of the fire as you roast marshmallows, share stories, and listen to the gentle whispers of the surrounding nature. It's the perfect way to unwind after a day of exploration.",
        image: "https://images.unsplash.com/photo-1536207447787-8e6f9e3e9854?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1536207447787-8e6f9e3e9854?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526491109672-7474bd63d42b?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop"
        ],
        icon: Flame,
        accent: "from-orange-500 to-red-500",
        highlights: ["Natural Wood Fire", "Stargazing Opportunity", "Musical Nights", "Signature Roastings"],
        idealFor: ["Families", "Couples", "Groups of Friends"]
    },
    "candle-light": {
        id: "candle-light",
        name: "Candle Light Dinner",
        tagline: "Romantic symphonies in every bite.",
        summary: "Intimate dining experience with curated menus and romantic settings.",
        description: "Celebrate your love with a dining experience that touches the soul. Set in a private, beautifully decorated corner of our resort, your candlelit table awaits. Enjoy a multi-course meal prepared by our finest chefs, served with the soundtrack of nature and the soft glow of flickering candles.",
        image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop"
        ],
        icon: Heart,
        accent: "from-rose-500 to-pink-500",
        highlights: ["Private Styling", "Curated 5-Course Menu", "Soft Ambient Music", "Sparkling Sunset Views"],
        idealFor: ["Couples", "Anniversary Celebrations"]
    },
    // Adding few more for demonstration
    "waterpark": {
        id: "waterpark",
        name: "Waterpark & Pool",
        tagline: "Dive into a world of pure liquid joy.",
        summary: "Refresh yourself with thrilling slides and crystal clear waters.",
        description: "Our waterpark is the ultimate destination for family fun. From high-speed slides for adrenaline seekers to gentle ripples for those who want to relax, there's something for everyone. Our pool is maintained to the highest standards, ensuring a safe and refreshing escape from the sun.",
        image: "https://images.unsplash.com/photo-1561150169-371f366b828a?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1561150169-371f366b828a?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
        ],
        icon: Waves,
        accent: "from-blue-500 to-cyan-500",
        highlights: ["Safety Monitored", "Themed Slides", "Kid-safe Splash Zones", "Poolside Service"],
        idealFor: ["Families", "Kids", "Group Outings"]
    }
};

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
};

export default function ExperienceDetailPage() {
    const params = useParams();
    const id = params.id as string;
    const experience = experiencesData[id] || experiencesData["bonfire"];

    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={experience.image}
                        alt={experience.name}
                        fill
                        className="object-cover brightness-[0.4]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent" />
                </div>

                <div className="container relative z-10 mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl"
                    >
                        <Link
                            href="/experiences"
                            className="inline-flex items-center gap-2 text-green-400 mb-8 hover:text-green-300 transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Experiences
                        </Link>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-6 leading-[1.1] tracking-tight">
                            {experience.name}
                        </h1>
                        <p className="text-2xl md:text-3xl font-light text-neutral-300 italic mb-10">
                            "{experience.tagline}"
                        </p>
                        <AnimatedCTAButton text="Plan This Experience" className="h-16 px-10 text-lg group shadow-2xl shadow-green-500/10" />
                    </motion.div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* Description & Carousel */}
                        <div className="flex-1">
                            <motion.div {...fadeInUp} className="mb-16">
                                <h2 className="text-4xl font-medium mb-8">Overview</h2>
                                <p className="text-lg text-neutral-400 font-light leading-relaxed mb-12">
                                    {experience.description}
                                </p>

                                {/* Image Carousel/Gallery */}
                                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-neutral-900 group">
                                    <Image
                                        src={experience.gallery[activeImage]}
                                        alt={experience.name}
                                        fill
                                        className="object-cover transition-all duration-700"
                                    />
                                    {/* Thumbnails */}
                                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 p-2 bg-black/30 backdrop-blur-md rounded-2xl border border-white/10">
                                        {experience.gallery.map((img, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setActiveImage(i)}
                                                className={cn(
                                                    "w-12 h-12 rounded-xl overflow-hidden border-2 transition-all",
                                                    activeImage === i ? "border-green-500 scale-110" : "border-transparent opacity-50 hover:opacity-100"
                                                )}
                                            >
                                                <Image src={img} alt="thumb" fill className="object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar details */}
                        <div className="w-full lg:w-96 space-y-12">
                            {/* Highlights */}
                            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="p-10 rounded-[3rem] bg-neutral-900 border border-white/10">
                                <h3 className="text-2xl font-medium mb-8 flex items-center gap-3">
                                    <Sparkles className="w-6 h-6 text-green-400" />
                                    Highlights
                                </h3>
                                <div className="space-y-6">
                                    {experience.highlights.map((h, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                            <span className="text-neutral-300 font-light">{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Ideal For */}
                            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="p-10 rounded-[3rem] bg-gradient-to-b from-green-500/10 to-transparent border border-green-500/20">
                                <h3 className="text-2xl font-medium mb-8 flex items-center gap-3">
                                    <UserCircle2 className="w-6 h-6 text-green-400" />
                                    Ideal For
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {experience.idealFor.map((item, i) => (
                                        <span key={i} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm font-medium">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Booking CTA */}
                            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="text-center pt-8">
                                <AnimatedCTAButton text="Book Now" className="w-full h-16 shadow-2xl shadow-green-500/20" />
                                <p className="mt-4 text-neutral-500 text-sm">
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
