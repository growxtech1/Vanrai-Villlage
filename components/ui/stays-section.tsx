"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowUpRight, Bed, Bath, Maximize } from "lucide-react";

interface Room {
    id: number;
    name: string;
    image: string;
    size: string;
    beds: number;
    baths: number;
    price: string;
    badge: string;
}

const rooms: Room[] = [
    {
        id: 1,
        name: "Standard Room",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
        size: "320 sqft",
        beds: 1,
        baths: 1,
        price: "₹2,500",
        badge: "Budget Friendly",
    },
    {
        id: 2,
        name: "Deluxe AC Room",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop",
        size: "450 sqft",
        beds: 2,
        baths: 1,
        price: "₹4,500",
        badge: "Most Popular",
    },
    {
        id: 3,
        name: "Wooden Cottages",
        image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=600&h=400&fit=crop",
        size: "600 sqft",
        beds: 2,
        baths: 2,
        price: "₹6,500",
        badge: "Premium Stay",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            type: "spring",
            damping: 20,
            stiffness: 100,
        },
    },
};

const headerVariants: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            type: "spring",
            damping: 25,
            stiffness: 120,
        },
    },
};

export function StaysSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

    // Scroll-linked animation to move section upward
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "start start"]
    });

    // Transform scroll progress to Y position (starts at 100px, moves to 0)
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

    return (
        <motion.section
            ref={sectionRef}
            id="stays"
            style={{ y }}
            className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden mt-24 sm:mt-32 md:mt-40 rounded-t-[3rem] sm:rounded-t-[4rem] md:rounded-t-[5rem]"
        >
            {/* Gradient Background - Green to White downwards */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-500 via-green-400/80 to-white rounded-t-[3rem] sm:rounded-t-[4rem] md:rounded-t-[5rem]" />

            {/* Subtle light overlay for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.2)_0%,transparent_60%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-10 sm:mb-12 md:mb-16"
                    variants={headerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Badge */}
                    {/* Badge */}
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
                        <span className="text-sm font-bold text-white tracking-widest uppercase">Most Popular</span>
                    </motion.div>

                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-2">
                        Top stays you
                    </h2>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium italic text-white/90">
                        can&apos;t miss
                    </h2>
                </motion.div>

                {/* Room Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {rooms.map((room) => (
                        <motion.div
                            key={room.id}
                            className="group relative bg-neutral-900/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/30"
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            {/* Image Container */}
                            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                                <Image
                                    src={room.image}
                                    alt={room.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Badge */}
                                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                                    <span className="px-3 py-1.5 text-xs font-medium bg-white/95 text-neutral-800 rounded-full shadow-lg">
                                        {room.badge}
                                    </span>
                                </div>

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-5 md:p-6 space-y-4">
                                {/* Room specs */}
                                <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-400">
                                    <div className="flex items-center gap-1">
                                        <Maximize className="w-3.5 h-3.5" />
                                        <span>{room.size}</span>
                                    </div>
                                    <span className="text-neutral-600">•</span>
                                    <div className="flex items-center gap-1">
                                        <Bed className="w-3.5 h-3.5" />
                                        <span>{room.beds} {room.beds > 1 ? "beds" : "bed"}</span>
                                    </div>
                                    <span className="text-neutral-600">•</span>
                                    <div className="flex items-center gap-1">
                                        <Bath className="w-3.5 h-3.5" />
                                        <span>{room.baths} {room.baths > 1 ? "baths" : "bath"}</span>
                                    </div>
                                </div>

                                {/* Room name */}
                                <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                                    {room.name}
                                </h3>

                                {/* Price */}
                                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                                    <p className="text-xl sm:text-2xl font-bold text-white">
                                        {room.price}
                                        <span className="text-sm font-normal text-neutral-400">/night</span>
                                    </p>

                                    {/* Arrow button */}
                                    <motion.button
                                        className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-500/30 group-hover:bg-green-400 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Explore Button */}
                <motion.div
                    className="flex justify-center mt-10 sm:mt-12 md:mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <button className="group flex items-center gap-2 px-6 py-3 bg-neutral-900/80 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-neutral-800 hover:border-white/30 transition-all duration-300">
                        <span className="font-medium">Explore more</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </motion.section>
    );
}
