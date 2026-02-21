"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    ChevronRight,
    ArrowRight,
    Bed,
    Maximize,
    Wind,
    TreePine,
    Calendar,
    Check,
    ArrowUpRight
} from "lucide-react";
import { Header } from "@/components/ui/header";
import { AnimatedCTAButton2 } from "@/components/ui/animated-cta-button2";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { AnimatedCTAButton } from "@/components/ui/animated-cta-button";
export default function StaysPage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: "easeOut" as const }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[95vh] min-h-[700px] flex items-center pt-20 overflow-hidden">
                {/* Hero Background with Parallax effect */}
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <Image
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                        alt="Vanrai Village Resort Stays"
                        fill
                        className="object-cover brightness-[0.35]"
                        priority
                    />
                    {/* Soft Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                </motion.div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8">
                    <motion.div
                        className="max-w-4xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <motion.span
                            className="inline-block text-green-400 font-semibold tracking-[0.2em] uppercase mb-4 text-sm"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Accommodation & Comfort
                        </motion.span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                            Comfortable Stays at <br />
                            <span className="text-green-400 italic font-medium">Vanrai Village</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-neutral-300 mb-12 leading-relaxed max-w-2xl font-light">
                            Experience thoughtfully designed accommodations that blend village charm with modern comfort.
                            Whether you’re planning a family getaway, a couple’s retreat, or a group stay near Ahmednagar.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <AnimatedCTAButton text="Check Availability" className="w-full sm:w-auto h-16 px-10 text-lg group shadow-2xl shadow-green-500/10" />
                            <AnimatedCTAButton2 text="Book Your Stay" className="w-full sm:w-auto h-16 px-10 text-lg group shadow-2xl shadow-green-500/10" />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-[1px] h-12 bg-gradient-to-b from-green-500/50 to-transparent" />
                    <span className="text-[10px] text-green-500/50 uppercase tracking-[0.2em]">Scroll</span>
                </motion.div>
            </section>

            {/* Section Intro */}
            <section className="py-24 sm:py-32 bg-[#0a0a0a] relative">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        {...fadeInUp}
                    >
                        <div className="flex items-center justify-center gap-3 mb-10">
                            <div className="h-[1px] w-12 bg-green-500/30" />
                            <span className="text-green-500/80 text-xs font-bold tracking-[0.3em] uppercase">Nature First</span>
                            <div className="h-[1px] w-12 bg-green-500/30" />
                        </div>
                        <p className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-neutral-100 italic">
                            "At Vanrai, every stay is crafted to provide relaxation, simplicity, and a close connection to nature."
                        </p>
                        <p className="mt-8 text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Choose the accommodation that best suits your comfort and occasion. We offer peaceful and welcoming spaces for every guest.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Room Sections - Alternating Layout */}
            <div className="space-y-0">

                {/* 1. Standard Rooms */}
                <section className="py-24 sm:py-32 relative overflow-hidden group/section">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            {/* Image Left */}
                            <motion.div
                                className="w-full lg:w-1/2 relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-neutral-900"
                                {...fadeInUp}
                                transition={{ duration: 0.8 }}
                            >
                                <motion.div
                                    className="absolute inset-0 z-0 h-full w-full"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1.5, ease: "circOut" }}
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop"
                                        alt="Standard Room"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute top-6 left-6">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                                        <span className="w-2 h-2 rounded-full bg-green-500" />
                                        <span className="text-xs font-bold tracking-widest uppercase">Traditional Charm</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Text Right */}
                            <motion.div
                                className="w-full lg:w-1/2"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Professional Animated Badge */}
                                <motion.div
                                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    <span className="text-xs font-light text-white/80 tracking-widest uppercase">Cozy & Authentic</span>
                                </motion.div>

                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6 text-white">
                                    <span className="text-neutral-400 text-6xl align-top mr-2">01.</span> Standard Rooms
                                </h2>
                                <h3 className="text-2xl text-neutral-300 font-medium mb-6 italic">Comfortable & Practical Stays</h3>
                                <p className="text-neutral-400 text-lg mb-8 leading-relaxed font-light">
                                    Our Standard Rooms are designed for guests who value comfort and simplicity.
                                    Featuring well-maintained interiors, cozy bedding, and essential amenities,
                                    these rooms are ideal for short stays, family visits, and peaceful weekend getaways.
                                    Surrounded by greenery, they offer a refreshing retreat after a day of activities.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                    {[
                                        "Ideal for small families",
                                        "Cozy bedding & amenities",
                                        "Close to lawns & areas",
                                        "Natural ventilation"
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 group/item">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-green-500/10 flex items-center justify-center group-hover/item:bg-green-500/20 transition-colors">
                                                <Check className="w-4 h-4 text-green-500" />
                                            </div>
                                            <span className="text-neutral-300 text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <button className="group flex items-center gap-2 px-6 py-3 bg-neutral-900/80 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-neutral-800 hover:border-white/30 transition-all duration-300">
                                       <span className="font-medium">Explore more</span>
                                       <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </button>
                                    <button className="group flex items-center gap-2 px-6 py-3 bg-green-500/80 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-green-500/80 hover:border-white/30 transition-all duration-300">
                                       <span className="font-medium">Check Availability</span>
                                       <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. Deluxe AC Rooms */}
                <section className="py-24 sm:py-32 relative bg-[#090909]">
                    {/* Subtle light effect on the right */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-green-500/5 blur-[120px] rounded-full" />

                    <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
                            {/* Image Right */}
                            <motion.div
                                className="w-full lg:w-1/2 relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-neutral-900"
                                {...fadeInUp}
                                transition={{ duration: 0.8 }}
                            >
                                <motion.div
                                    className="absolute inset-0 z-0 h-full w-full"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1.5, ease: "circOut" }}
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop"
                                        alt="Deluxe AC Room"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute top-6 right-6">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-md rounded-full border border-green-500/30">
                                        <Wind className="w-4 h-4 text-green-400" />
                                        <span className="text-xs font-bold tracking-widest uppercase text-green-400">Air Conditioned</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Text Left */}
                            <motion.div
                                className="w-full lg:w-1/2"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Professional Animated Badge */}
                                <motion.div
                                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">Modern Luxury</span>
                                </motion.div>

                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6 text-white">
                                    <span className="text-neutral-500 text-6xl align-top mr-2">02.</span> Deluxe AC Rooms
                                </h2>
                                <h3 className="text-2xl text-neutral-300 font-medium mb-6 italic">Enhanced Comfort with Modern Amenities</h3>
                                <p className="text-neutral-400 text-lg mb-8 leading-relaxed font-light">
                                    The Deluxe AC Rooms offer added comfort with air-conditioning and spacious interiors.
                                    Perfect for families and couples, these rooms balance village-inspired aesthetics
                                    with modern conveniences, ensuring a relaxing and refreshing stay experience
                                    throughout the year.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                    {[
                                        "Full Air Conditioning",
                                        "Spacious layouts",
                                        "Modern washrooms",
                                        "Premium interiors",
                                        "Suitable for couples",
                                        "High-speed WiFi"
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 group/item">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-green-500/10 flex items-center justify-center group-hover/item:bg-green-500/20 transition-colors">
                                                <Check className="w-4 h-4 text-green-500" />
                                            </div>
                                            <span className="text-neutral-300 text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                   <button className="group flex items-center gap-2 px-6 py-3 bg-neutral-900/80 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-neutral-800 hover:border-white/30 transition-all duration-300">
                                       <span className="font-medium">Explore more</span>
                                       <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </button>
                                    <button className="group flex items-center gap-2 px-6 py-3 bg-green-500/80 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-green-500/80 hover:border-white/30 transition-all duration-300">
                                       <span className="font-medium">Check Availability</span>
                                       <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 3. Wooden Cottages */}
                <section className="py-24 sm:py-32 relative overflow-hidden group/section bg-[#0a0a0a]">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            {/* Image Left */}
                            <motion.div
                                className="w-full lg:w-1/2 relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-neutral-900"
                                {...fadeInUp}
                                transition={{ duration: 0.8 }}
                            >
                                <motion.div
                                    className="absolute inset-0 z-0 h-full w-full"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1.5, ease: "circOut" }}
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070&auto=format&fit=crop"
                                        alt="Wooden Cottages"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute top-6 left-6">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-md rounded-full border border-orange-500/30">
                                        <TreePine className="w-4 h-4 text-orange-400" />
                                        <span className="text-xs font-bold tracking-widest uppercase text-orange-400">Rustic Stay</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Text Right */}
                            <motion.div
                                className="w-full lg:w-1/2"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Professional Animated Badge */}
                                <motion.div
                                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">Elite & Private</span>
                                </motion.div>

                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6 text-white">
                                    <span className="text-neutral-500 text-6xl align-top mr-2">03.</span> Wooden Cottages
                                </h2>
                                <h3 className="text-2xl text-neutral-300 font-medium mb-6 italic">A Rustic Stay Experience Amidst Nature</h3>
                                <p className="text-neutral-400 text-lg mb-8 leading-relaxed font-light">
                                    Our Wooden Cottages provide a warm and rustic ambiance while maintaining cozy interiors
                                    and thoughtful amenities. Designed for privacy and tranquility, they are perfect for
                                    couples and guests seeking a serene village-style stay surrounded by natural beauty.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                    {[
                                        "Maximum Privacy",
                                        "Teak wooden structure",
                                        "Cozy forest views",
                                        "Natural acoustics",
                                        "Honeymoon special",
                                        "Peaceful surroundings"
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 group/item">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-green-500/10 flex items-center justify-center group-hover/item:bg-green-500/20 transition-colors">
                                                <Check className="w-4 h-4 text-green-500" />
                                            </div>
                                            <span className="text-neutral-300 text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <button className="group flex items-center gap-2 px-6 py-3 bg-neutral-900/80 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-neutral-800 hover:border-white/30 transition-all duration-300">
                                       <span className="font-medium">Explore more</span>
                                       <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </button>
                                    <button className="group flex items-center gap-2 px-6 py-3 bg-green-500/80 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-green-500/80 hover:border-white/30 transition-all duration-300">
                                       <span className="font-medium">Check Availability</span>
                                       <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>

            {/* 4. Bottom Section - CTA */}
            <section className="py-32 sm:py-48 relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 blur-[150px] rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.05)_0%,transparent_70%)]" />
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8">
                    <motion.div
                        className="max-w-5xl mx-auto bg-neutral-900/40 backdrop-blur-2xl border border-white/10 rounded-[4rem] p-10 sm:p-20 md:p-24 text-center shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
                            Find the Stay That <br />
                            <span className="text-green-400">Suits You</span>
                        </h2>
                        <p className="text-xl sm:text-2xl text-neutral-400 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
                            Explore all our accommodation options and compare amenities, space,
                            and comfort to choose the perfect stay for your visit.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            <AnimatedCTAButton text="Book Now" />

                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
