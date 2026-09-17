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
import { FallbackImage } from "@/components/ui/fallback-image";
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
        image: "/img/evening-bonfire.jpg",
        gallery: [
            "/img/evening-bonfire.jpg",
            "/img/vanrai-walkway-night.webp",
            "/img/vanrai-lawn-sunset.webp"
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
        image: "/img/candle-light-dinner.jpg",
        gallery: [
            "/img/candle-light-dinner.jpg",
            "/img/dining-hall-wide.webp",
            "/img/dining-banquet-table.webp"
        ],
        icon: Heart,
        accent: "from-rose-500 to-pink-500",
        highlights: ["Private Styling", "Curated 5-Course Menu", "Soft Ambient Music", "Sparkling Sunset Views"],
        idealFor: ["Couples", "Anniversary Celebrations"]
    },
    "rain-dance": {
        id: "rain-dance",
        name: "Rain Dance & Poolside Fun",
        tagline: "Feel the rain, dance to the rhythm.",
        summary: "Refreshing artificial rain dance setup with music, water mist, and poolside joy.",
        description: "Immerse yourself in our signature Rain Dance experience at Vanrai Village Resort. Step under our custom ring of overhead water sprinklers as high-energy music sets the mood. Perfect for friends, families, and team outings looking to beat the heat and celebrate together right beside our swimming pool and water slides.",
        image: "/img/rain-dance.jpg",
        gallery: [
            "/img/rain-dance.jpg",
            "/img/waterpark-slides.jpg",
            "/img/pool-sunset-luxury.jpg"
        ],
        icon: Sparkles,
        accent: "from-cyan-500 to-blue-500",
        highlights: ["Dedicated Rain Shower Ring", "High-Energy Sound System", "Poolside Location", "All-Age Friendly Fun"],
        idealFor: ["Groups of Friends", "Families", "Corporate Outings", "Celebrations"]
    },
    "waterpark": {
        id: "waterpark",
        name: "Waterpark & Pool",
        tagline: "Dive into a world of pure liquid joy.",
        summary: "Refresh yourself with thrilling slides and crystal clear waters.",
        description: "Our waterpark is the ultimate destination for family fun. From high-speed slides for adrenaline seekers to gentle ripples for those who want to relax, there's something for everyone. Our pool is maintained to the highest standards, ensuring a safe and refreshing escape from the sun.",
        image: "/img/waterpark-slides.jpg",
        gallery: [
            "/img/waterpark-slides.jpg",
            "/img/rain-dance.jpg",
            "/img/pool-sunset-luxury.jpg",
            "/img/pool-aerial-sunset.jpg"
        ],
        icon: Waves,
        accent: "from-blue-500 to-cyan-500",
        highlights: ["Safety Monitored", "Themed Slides", "Kid-safe Splash Zones", "Poolside Service"],
        idealFor: ["Families", "Kids", "Group Outings"]
    },
    "dining": {
        id: "dining",
        name: "Dining & Restaurant",
        tagline: "Authentic culinary journeys with farm-fresh flavors.",
        summary: "Exquisite dining hall and banquet setups serving traditional Maharashtrian and multi-cuisine feasts.",
        description: "Experience the joy of hearty dining at Vanrai Village Resort. Our spacious air-conditioned restaurant welcomes you with comfortable family seating, panoramic garden windows, and dedicated banquet tables for large gatherings. Savor genuine local delicacies prepared by master chefs using organic, farm-fresh ingredients.",
        image: "/img/dining-hall-wide.webp",
        gallery: [
            "/img/dining-hall-wide.webp",
            "/img/dining-banquet-table.webp",
            "/img/dining-hall-interior.webp",
            "/img/hero-2.png"
        ],
        icon: UtensilsCrossed,
        accent: "from-amber-500 to-yellow-500",
        highlights: ["Air-Conditioned Dining Hall", "Authentic Local & Multi-Cuisine", "Family & Large Banquet Seating", "Organic Farm-Fresh Produce"],
        idealFor: ["Families", "Large Groups", "Food Enthusiasts"]
    },
    "weddings": {
        id: "weddings",
        name: "Destination Wedding & Halls",
        tagline: "Royal stages and timeless vows amidst nature.",
        summary: "Magnificent wedding halls, illuminated stages with royal thrones, and expansive event lawns.",
        description: "Celebrate your dream wedding at Vanrai Village Resort. We offer breathtaking floral stages with royal throne seating, vibrant event lighting, chandelier elegance, and sprawling lawns accommodating over 500 guests. Our dedicated hospitality team manages decor, catering, sound, and luxury stays to ensure a seamless and unforgettable royal wedding.",
        image: "/img/event-wedding-hall-stage.webp",
        gallery: [
            "/img/event-wedding-hall-stage.webp",
            "/img/event-banquet-stage-lights.webp",
            "/img/vanrai-lawn-sunset.webp",
            "/img/vanrai-open-lawn-sports.webp"
        ],
        icon: Church,
        accent: "from-pink-500 to-rose-500",
        highlights: ["Royal Floral Stage & Golden Throne", "AC Banquet & Wedding Hall", "Lush Open Lawns for 500+ Guests", "Full Coordination & Gourmet Feasts"],
        idealFor: ["Weddings", "Grand Receptions", "Engagements & Sangeet"]
    }
};

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
};

export default function ExperienceDetailPage() {
    const params = useParams();
    const id = params.id as string;
    const experience = experiencesData[id] || experiencesData["bonfire"];

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
                        priority
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
                        <a href="/book" className="inline-block">
                            <AnimatedCTAButton text="Plan This Experience" className="w-full sm:w-auto h-11 px-5 text-sm font-medium" />
                        </a>
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
                                        src={experience.gallery[activeImage]}
                                        alt={experience.name}
                                        fill
                                        className="object-cover transition-all duration-500"
                                    />
                                    {/* Thumbnails */}
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
                                <a href="/book" className="block w-full">
                                    <AnimatedCTAButton text="Book Now" className="w-full h-12" />
                                </a>
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
