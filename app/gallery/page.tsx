"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { ArrowLeft, Camera, Home, Waves, Trees, UtensilsCrossed, PartyPopper } from "lucide-react";

// Gallery categories with images
const categories = [
    {
        id: "all",
        name: "All",
        icon: <Camera className="w-4 h-4" />,
    },
    {
        id: "stays",
        name: "Stays",
        icon: <Home className="w-4 h-4" />,
    },
    {
        id: "pool",
        name: "Pool",
        icon: <Waves className="w-4 h-4" />,
    },
    {
        id: "lawns",
        name: "Lawns",
        icon: <Trees className="w-4 h-4" />,
    },
    {
        id: "dining",
        name: "Dining",
        icon: <UtensilsCrossed className="w-4 h-4" />,
    },
    {
        id: "events",
        name: "Events",
        icon: <PartyPopper className="w-4 h-4" />,
    },
];

const galleryImages = [
    // Stays
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
        alt: "Standard Room Interior",
        category: "stays",
        caption: "Comfortable standard rooms with modern amenities",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
        alt: "Deluxe AC Room",
        category: "stays",
        caption: "Spacious deluxe rooms with premium furnishings",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&h=600&fit=crop",
        alt: "Wooden Cottages",
        category: "stays",
        caption: "Rustic wooden cottages amidst nature",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
        alt: "Luxury Suite",
        category: "stays",
        caption: "Premium luxury suites for an elevated experience",
    },
    // Pool
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        alt: "Resort Pool",
        category: "pool",
        caption: "Crystal clear swimming pool overlooking the gardens",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&h=600&fit=crop",
        alt: "Pool Area",
        category: "pool",
        caption: "Relaxing poolside lounge area",
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop",
        alt: "Evening Pool",
        category: "pool",
        caption: "Beautifully lit pool area at sunset",
    },
    // Lawns
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        alt: "Green Lawns",
        category: "lawns",
        caption: "Expansive green lawns perfect for gatherings",
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        alt: "Garden Area",
        category: "lawns",
        caption: "Beautifully landscaped gardens",
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop",
        alt: "Open Spaces",
        category: "lawns",
        caption: "Wide open spaces surrounded by nature",
    },
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&h=600&fit=crop",
        alt: "Tree Shade",
        category: "lawns",
        caption: "Peaceful seating under the shade of trees",
    },
    // Dining
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
        alt: "Fine Dining",
        category: "dining",
        caption: "Exquisite culinary experiences",
    },
    {
        id: 13,
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de62?w=800&h=600&fit=crop",
        alt: "Restaurant Interior",
        category: "dining",
        caption: "Elegant restaurant with warm ambiance",
    },
    {
        id: 14,
        src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop",
        alt: "Outdoor Dining",
        category: "dining",
        caption: "Al fresco dining under the stars",
    },
    {
        id: 15,
        src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
        alt: "Breakfast Spread",
        category: "dining",
        caption: "Delicious breakfast to start your day",
    },
    // Events
    {
        id: 16,
        src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
        alt: "Wedding Venue",
        category: "events",
        caption: "Dream destination for weddings",
    },
    {
        id: 17,
        src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
        alt: "Corporate Event",
        category: "events",
        caption: "Professional spaces for corporate gatherings",
    },
    {
        id: 18,
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
        alt: "Celebration",
        category: "events",
        caption: "Celebrate life's special moments",
    },
    {
        id: 19,
        src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop",
        alt: "Festival",
        category: "events",
        caption: "Festive celebrations at Vanrai",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        transition: {
            duration: 0.3,
        },
    },
};

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const heroRef = useRef<HTMLDivElement>(null);
    const isHeroInView = useInView(heroRef, { once: true });

    const filteredImages = activeCategory === "all"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <div className="min-h-screen bg-[#0a0b0a] text-white">
            {/* Hero Section */}
            <div
                ref={heroRef}
                className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden"
            >
                {/* Background Effects */}
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-green-900/20 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-900/15 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/#gallery"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/80 hover:text-white hover:border-white/40 transition-all mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="text-sm font-medium">Back to Home</span>
                        </Link>
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
                            <span className="text-white/90 text-[11px] sm:text-xs font-medium tracking-[0.15em] uppercase flex items-center gap-2">
                                <Camera className="w-4 h-4 text-green-500" />
                                Photo Gallery
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                                Our Gallery
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Explore moments captured across our resort—from peaceful stays and open green spaces
                            to celebrations, dining, and memorable experiences.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="sticky top-0 z-40 bg-[#0a0b0a]/90 backdrop-blur-xl border-b border-white/10 py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${activeCategory === category.id
                                        ? "bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg shadow-green-500/20"
                                        : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                                    }`}
                            >
                                {category.icon}
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {filteredImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                className={`relative group overflow-hidden rounded-2xl cursor-pointer ${index % 5 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                                    }`}
                                variants={imageVariants}
                                layout
                            >
                                <div className={`relative ${index % 5 === 0 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay with caption on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                            <h3 className="text-white font-semibold text-lg mb-1">{image.alt}</h3>
                                            <p className="text-white/70 text-sm">{image.caption}</p>
                                        </div>
                                    </div>
                                    {/* Category badge */}
                                    <div className="absolute top-3 left-3 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white/90 capitalize">
                                        {image.category}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Empty State */}
                {filteredImages.length === 0 && (
                    <div className="text-center py-20">
                        <Camera className="w-16 h-16 text-white/20 mx-auto mb-4" />
                        <p className="text-white/50 text-lg">No images found in this category</p>
                    </div>
                )}
            </div>

            {/* Footer CTA */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-green-900/30 to-emerald-900/20 border border-white/10 p-8 md:p-12 text-center">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&h=600&fit=crop')] opacity-10 bg-cover bg-center" />
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Experience the Beauty of Vanrai
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Book your stay and create your own unforgettable memories at Vanrai Village Resort.
                        </p>
                        <Link
                            href="/#stays"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-medium rounded-full shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:scale-[1.02] transition-all duration-300"
                        >
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                            Book Your Stay Now
                            <ArrowLeft className="w-5 h-5 rotate-180" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
