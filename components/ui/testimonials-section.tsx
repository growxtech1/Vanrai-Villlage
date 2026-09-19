"use client";

import * as React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { FallbackImage } from "@/components/ui/fallback-image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    Quote,
    Star,
    Sparkles,
    TreePine,
    Waves,
    Heart,
    Gem,
    Flame,
    Building2,
    Trophy
} from "lucide-react";
import { cn } from "@/lib/utils";

// Define the type for a single testimonial
type Testimonial = {
    id: number;
    name: string;
    location: string;
    category: string;
    categoryIcon: React.ReactNode;
    quote: string;
    imageSrc: string;
    rating: number;
};

// Vanrai Resort Testimonials
const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Priya M.",
        location: "Ahmednagar",
        category: "Family Stay",
        categoryIcon: <TreePine className="w-4 h-4" />,
        quote: "We visited Vanrai Resort with our family and it turned out to be a very relaxing experience. The open lawns were perfect for children, the food was homely and tasty, and the overall atmosphere felt calm and safe. It's a great place to spend quality time together away from the city.",
        imageSrc: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=800&fit=crop&q=80",
        rating: 5,
    },
    {
        id: 2,
        name: "Rohan K.",
        location: "Pune",
        category: "Water Park Experience",
        categoryIcon: <Waves className="w-4 h-4" />,
        quote: "The swimming pool and water activities were the highlight of our stay at Vanrai. Everyone enjoyed the water area, and the overall resort environment was clean and well-maintained. It's a perfect mix of fun and peaceful surroundings, suitable for all age groups.",
        imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&q=80",
        rating: 5,
    },
    {
        id: 3,
        name: "Sneha & Amit",
        location: "Nashik",
        category: "Candle Light Dinner",
        categoryIcon: <Heart className="w-4 h-4" />,
        quote: "We booked a couple stay at Vanrai Resort and opted for the candle light dinner. The arrangement was simple, elegant, and very romantic. The quiet surroundings, warm lighting, and courteous staff made the evening truly special for us. Highly recommended for couples looking for a peaceful escape.",
        imageSrc: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=600&h=800&fit=crop&q=80",
        rating: 5,
    },
    {
        id: 4,
        name: "Neha & Rohit",
        location: "Mumbai",
        category: "Destination Wedding",
        categoryIcon: <Gem className="w-4 h-4" />,
        quote: "We chose Vanrai Resort for our destination wedding, and it was the best decision we made. The lawns, décor, food, and overall coordination were managed beautifully. The natural surroundings added a magical touch, and our guests couldn't stop appreciating the ambience. Vanrai made our special day truly unforgettable.",
        imageSrc: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop&q=80",
        rating: 5,
    },
    {
        id: 5,
        name: "Rahul S.",
        location: "Pune",
        category: "Friends & Bonfire",
        categoryIcon: <Flame className="w-4 h-4" />,
        quote: "Our group stayed at Vanrai for a weekend, and the bonfire night was the best part of our trip. The open space, music, and friendly staff created a great vibe. We enjoyed the pool, games, and late-night conversations. Vanrai is ideal for group trips and friend outings.",
        imageSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=800&fit=crop&q=80",
        rating: 5,
    },
    {
        id: 6,
        name: "Corporate Team",
        location: "Ahmednagar",
        category: "Corporate Events",
        categoryIcon: <Building2 className="w-4 h-4" />,
        quote: "We hosted a corporate offsite at Vanrai Resort, and the experience exceeded expectations. The peaceful environment helped everyone disconnect from routine work stress, while the arrangements for meetings, food, and stay were handled smoothly. It's an excellent venue for team-building and corporate events.",
        imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&q=80",
        rating: 5,
    },
    {
        id: 7,
        name: "Sports Event Organizer",
        location: "Maharashtra",
        category: "Sports Events",
        categoryIcon: <Trophy className="w-4 h-4" />,
        quote: "We organised a sports event at Vanrai Resort, and the open grounds were perfect for outdoor activities. The resort provided ample space, good coordination, and comfortable stay arrangements for participants. A great place for sports groups and activity-based events.",
        imageSrc: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop&q=80",
        rating: 5,
    },
];

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<"left" | "right">("right");
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "100px 0px 0px 0px" });

    const AUTO_SLIDE_INTERVAL = 6000; // 6 seconds

    const activeTestimonial = testimonials[currentIndex];

    const handleNext = useCallback(() => {
        setDirection("right");
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setProgress(0);
    }, []);

    const handlePrev = useCallback(() => {
        setDirection("left");
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setProgress(0);
    }, []);

    const handleDotClick = (index: number) => {
        setDirection(index > currentIndex ? "right" : "left");
        setCurrentIndex(index);
        setProgress(0);
    };

    // Auto-slide effect
    useEffect(() => {
        if (isPaused) return;

        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    handleNext();
                    return 0;
                }
                return prev + (100 / (AUTO_SLIDE_INTERVAL / 50));
            });
        }, 50);

        return () => clearInterval(progressInterval);
    }, [isPaused, handleNext]);

    // Optimized animation variants with type-safe easing
    const imageVariants = {
        enter: (direction: "left" | "right") => ({
            x: direction === "right" ? 50 : -50,
            opacity: 0,
            scale: 0.98,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: "left" | "right") => ({
            x: direction === "right" ? -50 : 50,
            opacity: 0,
            scale: 0.98,
        }),
    };

    const textVariants = {
        enter: (direction: "left" | "right") => ({
            y: direction === "right" ? 15 : -15,
            opacity: 0,
        }),
        center: {
            y: 0,
            opacity: 1,
        },
        exit: (direction: "left" | "right") => ({
            y: direction === "right" ? -15 : 15,
            opacity: 0,
        }),
    };

    // Smooth transition config
    const smoothTransition = {
        duration: 0.35,
        ease: "easeOut" as const,
    };

    const exitTransition = {
        duration: 0.25,
        ease: "easeIn" as const,
    };

    return (
        <motion.section
            ref={sectionRef}
            id="testimonials"
            className="scroll-mt-24 sm:scroll-mt-28 relative w-full py-24 sm:py-32 overflow-hidden bg-neutral-950"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            {/* Background Effects */}
            <div className="absolute inset-0">
                {/* Gradient orbs */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)`,
                        backgroundSize: '48px 48px'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-10 sm:mb-12 md:mb-14"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-4">
                        <Sparkles className="w-3.5 h-3.5 text-green-400" />
                        <span className="text-xs font-semibold text-white/70 tracking-wide">Guest Reviews</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                        What Our Guests
                        <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                            Say About Us
                        </span>
                    </h2>
                    <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto">
                        Real experiences from families, couples, and groups who made unforgettable memories at Vanrai
                    </p>
                </motion.div>

                {/* Main Testimonial Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left: Image */}
                    <motion.div
                        className="lg:col-span-5 relative"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative h-[300px] sm:h-[360px] lg:h-[400px] rounded-3xl overflow-hidden">
                            {/* Glowing border */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-teal-500/20 rounded-3xl blur-sm" />

                            {/* Image container */}
                            <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 touch-pan-y">
                                <AnimatePresence initial={false} custom={direction} mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        custom={direction}
                                        variants={imageVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={smoothTransition}
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={0.2}
                                        onDragEnd={(_, { offset, velocity }) => {
                                            if (offset.x > 40 || velocity.x > 300) {
                                                handlePrev();
                                            } else if (offset.x < -40 || velocity.x < -300) {
                                                handleNext();
                                            }
                                        }}
                                        className="absolute inset-0 w-full h-full will-change-transform cursor-grab active:cursor-grabbing"
                                    >
                                        <FallbackImage
                                            src={activeTestimonial.imageSrc}
                                            alt={activeTestimonial.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 40vw"
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-transparent to-neutral-950/20 pointer-events-none" />

                                {/* Category badge */}
                                <motion.div
                                    className="absolute top-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 pointer-events-none"
                                    key={`badge-${currentIndex}`}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15, duration: 0.3, ease: "easeOut" }}
                                >
                                    <span className="text-green-400">{activeTestimonial.categoryIcon}</span>
                                    <span className="text-xs sm:text-sm font-medium text-white">{activeTestimonial.category}</span>
                                </motion.div>

                                {/* Rating */}
                                <div className="absolute bottom-4 left-4 flex items-center gap-1 pointer-events-none">
                                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Progress bar */}
                        <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                                style={{ width: `${progress}%` }}
                                transition={{ duration: 0.05 }}
                            />
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        className="lg:col-span-7 flex flex-col justify-between min-h-[300px] sm:min-h-[360px] lg:min-h-[400px]"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {/* Quote icon */}
                        <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500/40 mb-2 sm:mb-4 flex-shrink-0" />

                        {/* Quote content - takes remaining space */}
                        <div className="relative flex-1 flex items-center overflow-hidden py-1.5">
                            <AnimatePresence initial={false} custom={direction} mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={textVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={smoothTransition}
                                    className="w-full will-change-transform"
                                >
                                    <blockquote className="text-base sm:text-lg md:text-xl lg:text-[21px] font-light text-neutral-100 leading-relaxed sm:leading-relaxed md:leading-[1.6] mb-4 sm:mb-6">
                                        "{activeTestimonial.quote}"
                                    </blockquote>

                                    <div className="flex items-center gap-4">
                                        <div className="h-px flex-1 max-w-[40px] bg-gradient-to-r from-emerald-500 to-transparent" />
                                        <div>
                                            <p className="text-sm sm:text-base font-semibold text-white">{activeTestimonial.name}</p>
                                            <p className="text-neutral-400 text-xs">{activeTestimonial.location}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation - stays at bottom */}
                        <div className="flex items-center justify-between mt-auto pt-5 sm:pt-6 border-t border-white/10 flex-shrink-0">
                            {/* Dots */}
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleDotClick(index)}
                                        className={cn(
                                            "w-2 h-2 rounded-full transition-all duration-300",
                                            index === currentIndex
                                                ? "w-6 sm:w-8 bg-gradient-to-r from-green-500 to-emerald-400"
                                                : "bg-white/20 hover:bg-white/40"
                                        )}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Pagination text */}
                            <span className="text-white/40 font-mono text-xs sm:text-sm">
                                {String(currentIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                            </span>

                            {/* Arrow buttons */}
                            <div className="flex items-center gap-2.5 sm:gap-3">
                                <button
                                    onClick={handlePrev}
                                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                                    aria-label="Previous testimonial"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-green-500/30"
                                    aria-label="Next testimonial"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
