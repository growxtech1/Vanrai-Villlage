"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { Header } from "@/components/ui/header";
import { FallbackImage } from "@/components/ui/fallback-image";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { ArrowLeft, Camera, Home, Waves, Trees, UtensilsCrossed, PartyPopper, X } from "lucide-react";
import { Footer } from "@/components/ui/footer";

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
        name: "Events & Wedding Halls",
        icon: <PartyPopper className="w-4 h-4" />,
    },
];

const galleryImages = [
    // Stays
    {
        id: 1,
        src: "/img/Rooms/StandardRoom.jpeg",
        alt: "Standard Room Interior",
        category: "stays",
        caption: "Comfortable standard rooms with modern amenities",
    },
    {
        id: 2,
        src: "/img/Rooms/DeluxeAc.jpeg",
        alt: "Deluxe AC Room",
        category: "stays",
        caption: "Spacious deluxe rooms with premium furnishings",
    },
    {
        id: 3,
        src: "/img/Rooms/StaysCoversHero.webp",
        alt: "Wooden Cottages Exterior at Sunset",
        category: "stays",
        caption: "Charming wooden cottages amidst nature with peaceful open front verandas",
    },
    {
        id: 4,
        src: "/img/Rooms/CottageHouse.jpeg",
        alt: "Wooden Cottage Interior",
        category: "stays",
        caption: "Warm pine-wood cottage interior with king bed and private amenities",
    },
    {
        id: 25,
        src: "/img/vanrai-reception-night.webp",
        alt: "Vanrai Reception & Welcome Lounge",
        category: "stays",
        caption: "Welcoming reception lobby with handcrafted botanical relief wall",
    },
    // Pool
    {
        id: 5,
        src: "/img/pool-sunset-luxury.jpg",
        alt: "Luxury Swimming Pool at Sunset",
        category: "pool",
        caption: "Sunset poolside escape with sun loungers, waterfall wall, and warm ambient lanterns",
    },
    {
        id: 6,
        src: "/img/pool-aerial-sunset.jpg",
        alt: "Waterpark & Swimming Pool Aerial View",
        category: "pool",
        caption: "Expansive sunset view of our multi-slide waterpark and resort swimming pool",
    },
    {
        id: 7,
        src: "/img/pool-kids-mushroom.jpg",
        alt: "Kids Waterpark & Mushroom Waterfall",
        category: "pool",
        caption: "Safe, cheerful splash zone with mushroom shower for children",
    },
    {
        id: 8,
        src: "/img/waterpark-slides.jpg",
        alt: "Waterpark Spiral Slides",
        category: "pool",
        caption: "Thrilling twin water slides plunging into refreshing blue waters",
    },
    {
        id: 9,
        src: "/img/rain-dance.jpg",
        alt: "Rain Dance Setup & Poolside",
        category: "pool",
        caption: "Overhead rain showers with pulsating beats beside the pool",
    },
    // Lawns & Grounds
    {
        id: 10,
        src: "/img/vanrai-resort-aerial-lawn.webp",
        alt: "Vanrai Aerial View & Manicured Lawns",
        category: "lawns",
        caption: "Sweeping aerial perspective of lush lawns, resort cottages, and paved avenues",
    },
    {
        id: 11,
        src: "/img/vanrai-walkway-night.webp",
        alt: "Night Walkway & Ambient Lighting",
        category: "lawns",
        caption: "Illuminated nighttime pathway with glowing lanterns and tropical palm borders",
    },
    {
        id: 12,
        src: "/img/vanrai-open-lawn-sports.webp",
        alt: "Recreational Lawn & Sports Field",
        category: "lawns",
        caption: "Wide open grass arena tailored for box cricket, badminton, and outdoor team games",
    },
    // Dining
    {
        id: 13,
        src: "/img/dining-hall-wide.webp",
        alt: "Grand Dining Hall & Restaurant",
        category: "dining",
        caption: "Spacious air-conditioned multi-cuisine family restaurant with panoramic garden views",
    },
    {
        id: 14,
        src: "/img/dining-banquet-table.webp",
        alt: "Banquet Dining Setup",
        category: "dining",
        caption: "Elegantly arranged banquet table settings for group feasts and celebratory gatherings",
    },
    {
        id: 26,
        src: "/img/candle-light-dinner.jpg",
        alt: "Romantic Candle Light Dinner",
        category: "dining",
        caption: "Private candlelit dining setting on resort lawns beneath twilight skies",
    },
    {
        id: 27,
        src: "/img/dining-hall-interior.webp",
        alt: "Restaurant Interior & Family Tables",
        category: "dining",
        caption: "Comfortable indoor restaurant seating with rustic wall textures and scenic window views",
    },
    {
        id: 15,
        src: "/img/hero-2.png",
        alt: "Vanrai Signature Timber Restaurant",
        category: "dining",
        caption: "Warm timber-ceiling dining space with ambient lighting and authentic local delicacies",
    },
    // Events & Wedding Halls
    {
        id: 16,
        src: "/img/event-wedding-hall-stage.webp",
        alt: "Royal Wedding Hall & Stage (Floral Decor)",
        category: "events",
        caption: "Magnificent wedding stage with royal throne couch, floral arches, and chandelier elegance",
    },
    {
        id: 17,
        src: "/img/event-banquet-stage-lights.webp",
        alt: "Grand Banquet Hall Stage (Ambient Lights)",
        category: "events",
        caption: "Grand event stage with warm festive lighting, ideal for receptions, sangeet, and ceremonies",
    },
    {
        id: 29,
        src: "/img/evening-bonfire.jpg",
        alt: "Evening Bonfire & Campfire at Central Lawn",
        category: "events",
        caption: "Cozy campfire in stone fire pit with rustic wooden chairs and illuminated cottages under the night sky",
    },
    {
        id: 30,
        src: "/img/corporate-retreat.jpg",
        alt: "Corporate Offsite & Executive Retreat",
        category: "events",
        caption: "Glass-walled modern executive conference room surrounded by peaceful tropical nature and manicured gardens",
    },
    {
        id: 31,
        src: "/img/experiential-moments.jpg",
        alt: "Starlit Experiential Night & Live Music",
        category: "events",
        caption: "Acoustic music performance under starry night skies with ambient fairy lights, fire pit, and cozy lawn lounge",
    },
    {
        id: 18,
        src: "/img/vanrai-lawn-sunset.webp",
        alt: "Open Lawn Wedding & Reception Venue",
        category: "events",
        caption: "Expansive sunset lawn setting for open-air destination weddings, cocktail evenings, and parties",
    },
    {
        id: 19,
        src: "/img/vanrai-open-lawn-sports.webp",
        alt: "Floodlit Evening Event Grounds",
        category: "events",
        caption: "Large-scale event grounds with stadium lighting for grand celebrations, gatherings, and tournaments",
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

export function GalleryClient() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const isHeroInView = useInView(heroRef, { once: true });
    const lenis = useLenis();

    // Lock page scroll when lightbox modal is open, restore on close or unmount
    useEffect(() => {
        if (!lenis) return;
        if (selectedImage) {
            lenis.stop();
        } else {
            lenis.start();
        }
        return () => {
            lenis.start();
        };
    }, [selectedImage, lenis]);

    const filteredImages = activeCategory === "all"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <div className="min-h-screen bg-[#0a0b0a] text-white selection:bg-green-500/30">
            <Header />

            {/* Hero Section */}
            <div
                ref={heroRef}
                className="relative pt-24 pb-8 sm:pt-28 sm:pb-10 overflow-hidden"
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
                            href="/"
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/80 hover:text-white hover:border-white/30 transition-all mb-6 text-xs font-medium"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>Back to Home</span>
                        </Link>
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4 sm:mb-5">
                            <span className="w-2 h-2 rounded-full bg-[#00c97b] shadow-[0_0_8px_rgba(0,201,123,0.5)]"></span>
                            <span className="text-white/90 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase flex items-center gap-2">
                                <Camera className="w-4 h-4 text-[#00c97b]" />
                                Photo Gallery
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight leading-[1.08] mb-5 sm:mb-6 text-white">
                            Our Gallery
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light">
                            Explore moments captured across our resort—from peaceful stays and open green spaces
                            to celebrations, dining, and memorable experiences.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="sticky top-20 sm:top-24 z-30 bg-[#0a0b0a]/90 backdrop-blur-xl border-y border-white/10 py-3">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 ${activeCategory === category.id
                                    ? "bg-[#00c97b] text-neutral-950 shadow-md shadow-emerald-950/40 font-bold"
                                    : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10"
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
            <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-8 md:py-14">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {filteredImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                onClick={() => setSelectedImage(image)}
                                className={`relative group overflow-hidden rounded-[16px] sm:rounded-[18px] cursor-pointer bg-neutral-900 border border-white/10 shadow-lg ${
                                    index % 5 === 0 ? 'col-span-2 sm:col-span-2 row-span-2' : 'col-span-1'
                                }`}
                                variants={imageVariants}
                                layout
                            >
                                <div className={`relative ${index % 5 === 0 ? 'aspect-square sm:aspect-[16/10]' : 'aspect-[4/3]'}`}>
                                    <FallbackImage
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Overlay with caption on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                                            <h3 className="text-white font-semibold text-sm sm:text-base mb-1">{image.alt}</h3>
                                            <p className="text-white/70 text-xs line-clamp-2">{image.caption}</p>
                                        </div>
                                    </div>
                                    {/* Category badge */}
                                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-medium text-white/90 capitalize border border-white/10">
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
                        <Camera className="w-12 h-12 text-white/20 mx-auto mb-3" />
                        <p className="text-white/50 text-sm">No images found in this category</p>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        data-lenis-prevent
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl w-full bg-neutral-900 border border-white/10 rounded-[24px] overflow-hidden shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                aria-label="Close modal"
                                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <div className="relative aspect-[16/10] w-full bg-black">
                                <FallbackImage
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="p-5 sm:p-6">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{selectedImage.alt}</h3>
                                        <p className="text-neutral-400 text-xs sm:text-sm">{selectedImage.caption}</p>
                                    </div>
                                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-emerald-400 capitalize shrink-0">
                                        {selectedImage.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Footer CTA */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden bg-gradient-to-r from-emerald-950/40 to-neutral-900 border border-white/10 p-8 md:p-12 text-center">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                            Experience the Beauty of Vanrai
                        </h2>
                        <p className="text-neutral-400 text-sm mb-6 font-light">
                            Book your stay and create your own unforgettable memories at Vanrai Resort.
                        </p>
                        <Link
                            href="/book"
                            className="inline-flex items-center justify-center gap-2 h-11 px-6 bg-[#00c97b] hover:bg-[#00b06c] text-neutral-950 font-bold text-sm rounded-[14px] shadow-lg shadow-emerald-950/40 transition-transform active:scale-[0.98]"
                        >
                            <span>Book Your Stay Now</span>
                            <ArrowLeft className="w-4 h-4 rotate-180" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <Footer />
        </div>
    );
}
