"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FallbackImage } from "@/components/ui/fallback-image";
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring, type Variants } from "framer-motion";
import { Sparkles, Droplets, Flame, Heart, UtensilsCrossed, PartyPopper, Church, ArrowRight, Trophy, Gavel, ChevronLeft, ChevronRight } from "lucide-react";

interface Experience {
    id: number;
    name: string;
    image: string;
    icon: React.ReactNode;
    description: string;
    accent: string;
}

const experiences: Experience[] = [
    {
        id: 1,
        name: "Water Park",
        image: "/img/waterpark-slides.jpg",
        icon: <Droplets className="w-5 h-5" />,
        description: "Splash into fun with exciting water slides and pools",
        accent: "from-blue-500 to-cyan-400",
    },
    {
        id: 2,
        name: "Rain Dance",
        image: "/img/rain-dance.jpg",
        icon: <Sparkles className="w-5 h-5" />,
        description: "Dance under the artificial rain with music and lights",
        accent: "from-purple-500 to-pink-400",
    },
    {
        id: 3,
        name: "Evening Bonfire",
        image: "/img/evening-bonfire.jpg",
        icon: <Flame className="w-5 h-5" />,
        description: "Cozy evenings around crackling bonfire under the stars",
        accent: "from-orange-500 to-red-400",
    },
    {
        id: 4,
        name: "Candle Light Dinner",
        image: "/img/candle-light-dinner.jpg",
        icon: <Heart className="w-5 h-5" />,
        description: "Romantic dining experience under warm candlelight",
        accent: "from-rose-500 to-pink-400",
    },
    {
        id: 5,
        name: "Dining",
        image: "/img/dining-hall-wide.webp",
        icon: <UtensilsCrossed className="w-5 h-5" />,
        description: "Savor delicious authentic cuisine in our restaurants",
        accent: "from-amber-500 to-yellow-400",
    },
    {
        id: 6,
        name: "Festive Events",
        image: "/img/event-banquet-stage-lights.webp",
        icon: <PartyPopper className="w-5 h-5" />,
        description: "Celebrate Holi, Diwali, and special occasions with us",
        accent: "from-fuchsia-500 to-purple-400",
    },
    {
        id: 7,
        name: "Destination Wedding",
        image: "/img/event-wedding-hall-stage.webp",
        icon: <Church className="w-5 h-5" />,
        description: "Create unforgettable memories at our scenic venue",
        accent: "from-pink-500 to-rose-400",
    },
    {
        id: 8,
        name: "Cricket Tournament",
        image: "/img/vanrai-open-lawn-sports.webp",
        icon: <Trophy className="w-5 h-5" />,
        description: "Compete in exciting cricket matches on our floodlit open grounds",
        accent: "from-green-500 to-emerald-400",
    },
    {
        id: 9,
        name: "Sports Auction",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&q=80",
        icon: <Gavel className="w-5 h-5" />,
        description: "Experience the thrill of IPL-style player auctions",
        accent: "from-indigo-500 to-blue-400",
    },
];

const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            type: "spring",
            damping: 25,
            stiffness: 120,
        },
    },
};

// Card animation variants for mobile
const cardVariants: Variants = {
    offscreen: {
        y: 50,
        opacity: 0,
        scale: 0.9,
        rotateY: -15,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

export function ExperiencesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
    const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    // Duplicate experiences array for seamless infinite scroll (desktop only)
    const duplicatedExperiences = [...experiences, ...experiences];

    // Detect mobile/touch devices
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Handle scroll snap for mobile
    const handleScroll = () => {
        if (!scrollContainerRef.current || !isMobile) return;
        const container = scrollContainerRef.current;
        const scrollLeft = container.scrollLeft;
        const cardWidth = 300 + 16; // card width + gap
        const newIndex = Math.round(scrollLeft / cardWidth);
        setActiveIndex(Math.min(newIndex, experiences.length - 1));
    };

    // Scroll to specific card
    const scrollToCard = (index: number) => {
        if (!scrollContainerRef.current) return;
        const cardWidth = 300 + 16;
        scrollContainerRef.current.scrollTo({
            left: index * cardWidth,
            behavior: 'smooth'
        });
    };

    // Navigation arrows for mobile
    const scrollPrev = () => {
        if (activeIndex > 0) {
            scrollToCard(activeIndex - 1);
        }
    };

    const scrollNext = () => {
        if (activeIndex < experiences.length - 1) {
            scrollToCard(activeIndex + 1);
        }
    };

    return (
        <motion.section
            ref={sectionRef}
            id="experiences"
            className="scroll-mt-24 sm:scroll-mt-28 relative w-full py-24 sm:py-32 overflow-hidden"
        >
            {/* Premium dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />

            {/* Animated gradient orbs */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "2s" }} />

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-8 sm:mb-10 md:mb-12">
                {/* Header */}
                <motion.div
                    className="text-center mb-6 sm:mb-8 md:mb-10"
                    variants={headerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Animated Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-medium text-white/80 tracking-wide uppercase">Unforgettable Experiences</span>
                    </motion.div>

                    {/* Title with gradient animation */}
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-2 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Moments to Enjoy
                    </motion.h2>
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-medium italic text-emerald-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        at Vanrai
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        className="mt-3 text-sm sm:text-base text-white/50 max-w-2xl mx-auto font-light leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        Discover curated experiences designed to create lasting memories
                    </motion.p>

                    {/* Mobile swipe hint */}
                    {isMobile && (
                        <motion.div
                            className="mt-4 flex items-center justify-center gap-2 text-white/40 text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <motion.div
                                animate={{ x: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </motion.div>
                            <span>Swipe to explore</span>
                            <motion.div
                                animate={{ x: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <ChevronRight className="w-4 h-4" />
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* Cards Container - Different behavior for mobile vs desktop */}
            {isMobile ? (
                /* Mobile: Manual scrollable with snap and futuristic animations */
                <div className="relative">
                    {/* Navigation arrows */}
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20">
                        <motion.button
                            onClick={scrollPrev}
                            className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all ${activeIndex === 0 ? 'opacity-30' : 'hover:bg-white/20'}`}
                            disabled={activeIndex === 0}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </motion.button>
                    </div>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20">
                        <motion.button
                            onClick={scrollNext}
                            className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all ${activeIndex === experiences.length - 1 ? 'opacity-30' : 'hover:bg-white/20'}`}
                            disabled={activeIndex === experiences.length - 1}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </div>

                    {/* Scrollable container */}
                    <div
                        ref={scrollContainerRef}
                        data-lenis-prevent
                        className="flex gap-4 overflow-x-auto scroll-smooth px-4 py-6 scrollbar-hide no-scrollbar"
                        style={{
                            scrollSnapType: 'x mandatory',
                            WebkitOverflowScrolling: 'touch',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                        onScroll={handleScroll}
                        onTouchStart={() => setIsDragging(true)}
                        onTouchEnd={() => setIsDragging(false)}
                    >
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={experience.id}
                                className="group relative rounded-3xl overflow-hidden flex-shrink-0 cursor-pointer"
                                style={{
                                    width: "300px",
                                    scrollSnapAlign: 'center',
                                }}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={cardVariants}
                            >
                                {/* Card container with quiet luxury dark glass */}
                                <div className={`relative h-[420px] bg-neutral-900/90 backdrop-blur-xl border ${activeIndex === index ? 'border-emerald-500/40 shadow-lg shadow-black/40' : 'border-white/10'} rounded-3xl overflow-hidden transition-all duration-300`}>

                                    {/* Image Container */}
                                    <div className="relative h-[220px] overflow-hidden">
                                        <FallbackImage
                                            src={experience.image}
                                            alt={experience.name}
                                            fill
                                            className="object-cover transition-all duration-700"
                                            sizes="(max-width: 768px) 300px, 400px"
                                        />

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />

                                        {/* Subtle top indicator line */}
                                        <motion.div
                                            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: activeIndex === index ? 1 : 0 }}
                                            transition={{ duration: 0.5 }}
                                            style={{ transformOrigin: 'left' }}
                                        />

                                        {/* Floating icon badge */}
                                        <motion.div
                                            className="absolute bottom-4 right-4"
                                            animate={{
                                                scale: activeIndex === index ? 1.05 : 1,
                                            }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <div className="w-11 h-11 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-emerald-400 shadow-xl">
                                                {experience.icon}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 space-y-3">
                                        {/* Clean white title */}
                                        <h3 className="text-xl font-bold text-white transition-colors duration-300">
                                            {experience.name}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-white/60 leading-relaxed text-sm line-clamp-2">
                                            {experience.description}
                                        </p>
                                        {/* Divider */}
                                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                        {/* Explore link */}
                                        <div className="flex items-center justify-between pt-1">
                                            <Link href="/experiences" className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-green-400 transition-colors">
                                                <span>Explore</span>
                                                <motion.div
                                                    animate={{ x: activeIndex === index ? [0, 4, 0] : 0 }}
                                                    transition={{ repeat: activeIndex === index ? Infinity : 0, duration: 1 }}
                                                >
                                                    <ArrowRight className="w-4 h-4" />
                                                </motion.div>
                                            </Link>

                                            {/* Rating indicator */}
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className={`w-1.5 h-1.5 rounded-full ${i < 4 ? 'bg-green-400' : 'bg-white/20'}`}
                                                        animate={{
                                                            scale: activeIndex === index && i < 4 ? [1, 1.3, 1] : 1,
                                                        }}
                                                        transition={{
                                                            delay: i * 0.1,
                                                            repeat: activeIndex === index ? Infinity : 0,
                                                            duration: 1.5,
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Scanning line effect for active card */}
                                    {activeIndex === index && (
                                        <motion.div
                                            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
                                            initial={{ top: 0, opacity: 0 }}
                                            animate={{
                                                top: ["0%", "100%", "0%"],
                                                opacity: [0, 0.6, 0],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                        />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex items-center justify-center gap-2 mt-6">
                        {experiences.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => scrollToCard(index)}
                                className="relative p-1"
                                whileTap={{ scale: 0.9 }}
                            >
                                <motion.div
                                    className={`w-2 h-2 rounded-full transition-colors ${activeIndex === index ? 'bg-green-400' : 'bg-white/30'}`}
                                    animate={{
                                        scale: activeIndex === index ? 1.2 : 1,
                                    }}
                                />
                                {activeIndex === index && (
                                    <motion.div
                                        className="absolute inset-0 m-auto w-4 h-4 rounded-full border border-green-400/50"
                                        initial={{ scale: 0.5, opacity: 1 }}
                                        animate={{ scale: 1.5, opacity: 0 }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Premium fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none z-10" />
                </div>
            ) : (
                /* Desktop: Auto-scrolling infinite carousel */
                <div className="relative overflow-hidden py-4">
                    <motion.div
                        className="flex gap-6"
                        animate={{
                            x: isPaused ? 0 : [0, -1 * (320 * experiences.length + 24 * experiences.length)],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 50,
                                ease: "linear",
                            },
                        }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        style={{ width: "fit-content" }}
                    >
                        {duplicatedExperiences.map((experience, index) => (
                            <motion.div
                                key={`${experience.id}-${index}`}
                                className="group relative rounded-3xl overflow-hidden flex-shrink-0 cursor-pointer"
                                style={{ width: "320px" }}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                                }}
                            >
                                {/* Card container with quiet luxury dark glass */}
                                <div className="relative h-[410px] bg-neutral-900/90 backdrop-blur-xl border border-white/10 group-hover:border-emerald-500/30 rounded-3xl overflow-hidden transition-all duration-300 shadow-xl">

                                    {/* Image Container */}
                                    <div className="relative h-[230px] overflow-hidden">
                                        <FallbackImage
                                            src={experience.image}
                                            alt={experience.name}
                                            fill
                                            className="object-cover transition-all duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 320px, 400px"
                                        />

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />

                                        {/* Subtle accent line at top */}
                                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                        {/* Floating icon badge */}
                                        <div className="absolute bottom-3 right-3">
                                            <div className="w-10 h-10 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-emerald-400 shadow-xl group-hover:border-emerald-500/40 group-hover:scale-105 transition-all duration-300">
                                                {experience.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 space-y-3">
                                        {/* Clean white title */}
                                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                                            {experience.name}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-white/60 leading-relaxed text-xs sm:text-sm line-clamp-2">
                                            {experience.description}
                                        </p>

                                        {/* Divider */}
                                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                        {/* Explore link */}
                                        <div className="flex items-center justify-between pt-2">
                                            <Link href="/experiences" className="group/btn flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-green-400 transition-colors">
                                                <span>Explore Experience</span>
                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                                            </Link>

                                            {/* Rating/Status indicator */}
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`w-1.5 h-1.5 rounded-full ${i < 4 ? 'bg-green-400' : 'bg-white/20'}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Premium fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent pointer-events-none z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-950 via-neutral-950/80 to-transparent pointer-events-none z-10" />
                </div>
            )}

            {/* Bottom decorative element */}
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
            >
                <div className="flex items-center justify-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                        <Sparkles className="w-4 h-4" />
                        <span>{experiences.length} Unique Experiences</span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
            </motion.div>
        </motion.section>
    );
}
