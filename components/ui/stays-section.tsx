"use client";

import { useRef } from "react";
import Link from "next/link";
import { FallbackImage } from "@/components/ui/fallback-image";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowUpRight, Bed, Bath, UtensilsCrossed } from "lucide-react";

interface Room {
    id: number;
    name: string;
    image: string;
    beds: number;
    baths: number;
    price: string;
    badge: string;
    breakfast?: boolean;
}

const rooms: Room[] = [
    {
        id: 1,
        name: "Standard Room",
        image: "/img/Rooms/StandardRoom.jpeg",
        beds: 1,
        baths: 1,
        price: "₹2,500",
        badge: "Budget Friendly",
    },
    {
        id: 2,
        name: "Deluxe AC Room",
        image: "/img/Rooms/DeluxeAc.jpeg",
        beds: 2,
        baths: 1,
        price: "₹3,500",
        badge: "Most Popular",
        breakfast: true,
    },
    {
        id: 3,
        name: "Wooden Cottages",
        image: "/img/Rooms/StaysCoversHero.webp",
        beds: 2,
        baths: 2,
        price: "₹4,500",
        badge: "Premium Stay",
        breakfast: true,
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
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export function StaysSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section
            ref={sectionRef}
            id="stays"
            className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#0a0a0a]"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-green-500/[0.07] rounded-full blur-[140px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-emerald-500/[0.05] rounded-full blur-[120px]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <motion.div
                    className="text-center mb-10 sm:mb-12 md:mb-14 max-w-3xl mx-auto"
                    variants={headerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 shadow-xl backdrop-blur-md"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <div className="relative flex items-center justify-center w-2 h-2">
                            <span className="absolute w-full h-full bg-green-500 rounded-full animate-ping opacity-75"></span>
                            <span className="relative w-2 h-2 bg-green-500 rounded-full"></span>
                        </div>
                        <span className="text-xs font-semibold text-white/80 tracking-[0.2em] uppercase">Accommodation</span>
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
                        Top Stays You{" "}
                        <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-500">
                            Can&apos;t Miss
                        </span>
                    </h2>
                    <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
                        Discover private sanctuaries blending village authenticity with curated modern comfort.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {rooms.map((room) => (
                        <motion.div
                            key={room.id}
                            className="group relative bg-neutral-900/60 backdrop-blur-md rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-green-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50 flex flex-col justify-between"
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <FallbackImage
                                    src={room.image}
                                    alt={room.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                                    <span className="px-3 py-1 text-xs font-semibold bg-neutral-950/80 backdrop-blur-md text-white/90 rounded-full border border-white/10 shadow-lg">
                                        {room.badge}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-80" />
                            </div>

                            <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                                <div className="space-y-3">
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-neutral-400">
                                        <div className="flex items-center gap-1.5">
                                            <Bed className="w-3.5 h-3.5 text-green-400" />
                                            <span>{room.beds} {room.beds > 1 ? "beds" : "bed"}</span>
                                        </div>
                                        <span className="text-neutral-600">•</span>
                                        <div className="flex items-center gap-1.5">
                                            <Bath className="w-3.5 h-3.5 text-green-400" />
                                            <span>{room.baths} {room.baths > 1 ? "baths" : "bath"}</span>
                                        </div>
                                        {room.breakfast && (
                                            <>
                                                <span className="text-neutral-600">•</span>
                                                <div className="flex items-center gap-1.5">
                                                    <UtensilsCrossed className="w-3.5 h-3.5 text-green-400" />
                                                    <span>Breakfast incl.</span>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                                        {room.name}
                                    </h3>
                                </div>

                                <div className="flex items-center justify-between pt-3.5 border-t border-white/10">
                                    <div>
                                        <p className="text-xl sm:text-2xl font-bold text-white">
                                            {room.price}
                                            <span className="text-xs sm:text-sm font-normal text-neutral-400 ml-1">/night</span>
                                        </p>
                                    </div>
                                    <Link
                                        href="/stays"
                                        className="w-10 h-10 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center text-green-400 shadow-md group-hover:bg-green-500 group-hover:text-black transition-all duration-300"
                                        aria-label={`View ${room.name} details`}
                                    >
                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex justify-center mt-10 sm:mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <Link
                        href="/stays"
                        className="group inline-flex items-center gap-2 px-7 py-3 bg-neutral-900/80 backdrop-blur-sm text-white rounded-full border border-white/15 hover:bg-white/10 hover:border-green-500/40 transition-all duration-300 shadow-lg text-sm font-semibold tracking-wide"
                    >
                        <span>Explore All Accommodations</span>
                        <ArrowUpRight className="w-4 h-4 text-green-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
