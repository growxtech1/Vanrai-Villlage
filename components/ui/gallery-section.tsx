"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Camera, Sparkles } from "lucide-react";

// Gallery preview images for homepage
const galleryImages = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
        alt: "Resort Pool",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de62?w=600&h=400&fit=crop",
        alt: "Dining Experience",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop",
        alt: "Resort View",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
        alt: "Luxury Stay",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
        alt: "Green Lawns",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop",
        alt: "Event Space",
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
        alt: "Fine Dining",
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop",
        alt: "Resort Amenities",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.3,
        },
    },
};

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.7,
            type: "spring",
            damping: 20,
            stiffness: 100,
        },
    },
};

const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
    },
};

export function GallerySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    // Parallax effect
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section
            ref={sectionRef}
            id="gallery"
            className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-[#0a0b0a] via-[#0e100e] to-[#0a0b0a] text-white"
        >
            {/* Animated Background Elements */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 pointer-events-none"
            >
                {/* Large gradient orbs */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-green-600/20 to-emerald-600/10 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/15 to-teal-500/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-900/10 to-emerald-900/10 rounded-full blur-[200px]" />
            </motion.div>

            {/* Decorative grid pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }} />

            {/* Floating decorative elements */}
            <motion.div
                animate={floatingAnimation}
                className="absolute top-20 right-20 w-20 h-20 rounded-full border border-green-500/20 hidden lg:block"
            />
            <motion.div
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.5 } }}
                className="absolute bottom-32 left-16 w-32 h-32 rounded-full border border-emerald-500/10 hidden lg:block"
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16 md:mb-20 lg:mb-24 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge - Consistent with app style */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black border border-white/10 mb-6 shadow-xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <div className="relative flex items-center justify-center w-2 h-2">
                            <span className="absolute w-full h-full bg-green-500 rounded-full animate-ping opacity-75"></span>
                            <span className="relative w-2 h-2 bg-green-500 rounded-full"></span>
                        </div>
                        <span className="text-sm font-bold text-white tracking-widest uppercase">Photo Gallery</span>
                    </motion.div>

                    {/* Title with gradient */}
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        <span className="text-white">Gallery</span>
                    </motion.h2>

                    {/* Subtitle with sparkle */}
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-6"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-500/50" />
                        <Sparkles className="w-5 h-5 text-green-400" />
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-light italic text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400">
                            A Glimpse of Life at Vanrai
                        </h3>
                        <Sparkles className="w-5 h-5 text-green-400" />
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-500/50" />
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        Explore moments captured across our resort—from peaceful stays and open green spaces
                        to celebrations, dining, and memorable experiences.
                    </motion.p>
                </motion.div>

                {/* Image Grid - Premium masonry layout */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className={`relative overflow-hidden rounded-2xl sm:rounded-3xl group cursor-pointer
                                ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-[4/3]'}
                            `}
                            variants={imageVariants}
                            whileHover={{ scale: 1.02, zIndex: 10 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Image */}
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            />

                            {/* Premium glass overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                            {/* Shimmering border effect */}
                            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-white/0 group-hover:ring-white/20 transition-all duration-300" />

                            {/* Corner accent */}
                            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <ArrowRight className="w-4 h-4 text-white -rotate-45" />
                            </div>

                            {/* Gradient line accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    className="flex justify-center mt-14 md:mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 1, duration: 0.6 }}
                >
                    <Link
                        href="/gallery"
                        className="group relative px-10 py-5 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white font-semibold text-lg rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-500 flex items-center gap-4 overflow-hidden"
                    >
                        {/* Animated background shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                        {/* Pulsing dot */}
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                        </span>

                        <span className="relative z-10">View Full Gallery</span>

                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

                        {/* Hover gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </Link>
                </motion.div>

                {/* Bottom decorative line */}
                <motion.div
                    className="flex justify-center mt-16 md:mt-20"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
