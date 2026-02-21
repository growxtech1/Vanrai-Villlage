"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
    Users,
    Trees,
    Waves,
    Sparkles,
    ArrowRight,
    Calendar,
    Music,
    Heart,
    Building2,
    Flame,
    Quote
} from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
};

const imageReveal = {
    initial: { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", opacity: 0 },
    whileInView: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
};

export default function EventsPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);

    return (
        <div ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans">
            <Header />

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    style={{ scale: heroScale, opacity: heroOpacity }}
                >
                    <Image
                        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
                        alt="Events at Vanrai"
                        fill
                        className="object-cover brightness-[0.35]"
                        priority
                    />
                </motion.div>

                <div className="relative z-10 max-w-5xl px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs tracking-[0.2em] uppercase mb-8"
                    >
                        Private & Grand Celebrations
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-6xl md:text-9xl font-light leading-tight mb-8"
                    >
                        Celebrate Life at <br />
                        <span className="italic font-serif text-neutral-400">Vanrai</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12"
                    >
                        From destination weddings to corporate retreats and vibrant festivals,
                        Vanrai Village Resort transforms every event into an unforgettable experience.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex justify-center gap-6 flex-wrap"
                    >
                        <Link href="/#contact" className="px-10 py-5 bg-green-600 rounded-full font-semibold hover:bg-green-500 transition-all shadow-xl shadow-green-600/20">
                            Plan Your Event
                        </Link>
                        <Link href="#event-categories" className="px-10 py-5 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
                            Explore Events
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-neutral-500 to-transparent" />
                </motion.div>
            </section>

            {/* ================= CATEGORIES ANCHOR ================= */}
            <div id="event-categories" />

            {/* ================= CELEBRATION EVENTS ================= */}
            <section className="py-24 md:py-48 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div {...fadeInUp} className="text-center mb-24">
                        <span className="text-green-500 uppercase tracking-widest text-sm font-semibold mb-4 block">Unforgettable Memories</span>
                        <h2 className="text-4xl md:text-6xl font-light">Celebration Events</h2>
                    </motion.div>

                    {/* Wedding Section - Image Right */}
                    <div className="grid md:grid-cols-2 items-center gap-16 lg:gap-24 mb-32 md:mb-56">
                        <motion.div {...fadeInUp} className="space-y-8 order-2 md:order-1">
                            <div className="flex items-center gap-3 text-green-400">
                                <Heart className="w-5 h-5" />
                                <span className="tracking-widest uppercase text-sm font-medium">Destination Wedding</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-light leading-tight">
                                Your Dream Wedding <br />
                                <span className="italic text-neutral-400">Under the Stars</span>
                            </h3>
                            <p className="text-neutral-400 text-lg leading-relaxed">
                                Celebrate your special day amidst open green lawns and serene natural surroundings.
                                Vanrai offers elegant arrangements, curated décor, and seamless hospitality
                                to make your wedding truly unforgettable. From intimate ceremonies to grand receptions.
                            </p>
                            <div className="grid grid-cols-2 gap-6 py-4">
                                <div className="space-y-2">
                                    <h4 className="font-medium text-white">Grand Lawn</h4>
                                    <p className="text-sm text-neutral-500">Capacities up to 500+ guests</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-medium text-white">Guest Stay</h4>
                                    <p className="text-sm text-neutral-500">Luxury rooms for your loved ones</p>
                                </div>
                            </div>
                            <Link href="/events/wedding" className="inline-flex items-center gap-3 text-green-400 font-semibold group pt-4">
                                <span>Discover More</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                            </Link>
                        </motion.div>
                        <motion.div {...imageReveal} className="relative h-[400px] md:h-[650px] rounded-[3rem] overflow-hidden order-1 md:order-2">
                            <Image
                                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                alt="Destination Wedding"
                            />
                        </motion.div>
                    </div>

                    {/* Festive Events - Image Left */}
                    <div className="grid md:grid-cols-2 items-center gap-16 lg:gap-24">
                        <motion.div {...imageReveal} className="relative h-[400px] md:h-[650px] rounded-[3rem] overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                alt="Festive Events"
                            />
                        </motion.div>
                        <motion.div {...fadeInUp} className="space-y-8">
                            <div className="flex items-center gap-3 text-green-400">
                                <Sparkles className="w-5 h-5" />
                                <span className="tracking-widest uppercase text-sm font-medium">Seasonal Traditions</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-light leading-tight">
                                Vibrant Festivals, <br />
                                <span className="italic text-neutral-400">Authentic Vibe</span>
                            </h3>
                            <p className="text-neutral-400 text-lg leading-relaxed">
                                Experience Holi, Diwali, and Navratri with a touch of luxury.
                                We bring traditions to life with vibrant décor, traditional rituals,
                                and special festive menus that honor our roots while offering modern comfort.
                            </p>
                            <ul className="space-y-3 text-neutral-300">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    <span>Eco-friendly Holi celebrations</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    <span>Royal Diwali lighting and puja</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    <span>Navratri Dandiya nights</span>
                                </li>
                            </ul>
                            <Link href="/events/festive" className="inline-flex items-center gap-3 text-green-400 font-semibold group pt-4">
                                <span>Discover More</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= CAPACITY SECTION ================= */}
            <section className="py-32 bg-[#050505] border-y border-white/5 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <motion.div {...fadeInUp} className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-light mb-4">
                            Designed for Events of Every Scale
                        </h2>
                        <p className="text-neutral-500 max-w-2xl mx-auto">
                            Multiple venues, professional coordination and premium amenities
                            tailored to your specific requirements.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { value: "500+", label: "Guest Capacity", icon: <Users className="w-6 h-6 mx-auto mb-4 text-green-500" /> },
                            { value: "Open", label: "Spacious Lawns", icon: <Trees className="w-6 h-6 mx-auto mb-4 text-green-500" /> },
                            { value: "Poolside", label: "Event Setup", icon: <Waves className="w-6 h-6 mx-auto mb-4 text-green-500" /> },
                            { value: "Custom", label: "Decor Options", icon: <Sparkles className="w-6 h-6 mx-auto mb-4 text-green-500" /> }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                            >
                                {stat.icon}
                                <p className="text-4xl md:text-5xl font-semibold mb-2">{stat.value}</p>
                                <span className="text-neutral-400 uppercase tracking-widest text-[10px] font-bold">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CORPORATE & SOCIAL ================= */}
            <section className="py-24 md:py-48 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 items-center gap-16 lg:gap-24 mb-32 md:mb-56">
                        <motion.div {...fadeInUp} className="space-y-8">
                            <div className="flex items-center gap-3 text-green-400">
                                <Building2 className="w-5 h-5" />
                                <span className="tracking-widest uppercase text-sm font-medium">Corporate & Social</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-light leading-tight">
                                Professional Meetings, <br />
                                <span className="italic text-neutral-400">Natural Settings</span>
                            </h3>
                            <p className="text-neutral-400 text-lg leading-relaxed">
                                Escape the boardroom and host your next corporate retreat or team-building event at Vanrai.
                                Our peaceful environment helps teams disconnect from stress and reconnect with each other.
                            </p>
                            <div className="space-y-4">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Team Building</h4>
                                        <p className="text-sm text-neutral-500">Curated activities for team bonding</p>
                                    </div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">indoor Conferences</h4>
                                        <p className="text-sm text-neutral-500">AC halls with modern AV facilities</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="/events/corporate" className="inline-flex items-center gap-3 text-green-400 font-semibold group pt-4">
                                <span>Host Your Offsite</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                            </Link>
                        </motion.div>
                        <motion.div {...imageReveal} className="relative h-[400px] md:h-[650px] rounded-[3rem] overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop"
                                fill
                                className="object-cover"
                                alt="Corporate Events"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= EXPERIENTIAL EVENTS ================= */}
            <section className="py-24 md:py-48 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 items-center gap-16 lg:gap-24">
                        <motion.div {...imageReveal} className="relative h-[400px] md:h-[650px] rounded-[3rem] overflow-hidden order-2 md:order-1">
                            <Image
                                src="https://images.unsplash.com/photo-1514525253361-bee8d40d440c?q=80&w=2070&auto=format&fit=crop"
                                fill
                                className="object-cover"
                                alt="Experiential Events"
                            />
                        </motion.div>
                        <motion.div {...fadeInUp} className="space-y-8 order-1 md:order-2">
                            <div className="flex items-center gap-3 text-green-400">
                                <Music className="w-5 h-5" />
                                <span className="tracking-widest uppercase text-sm font-medium">Experiential Moments</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-light leading-tight">
                                Stars, Music, <br />
                                <span className="italic text-neutral-400">& Soulful Evenings</span>
                            </h3>
                            <p className="text-neutral-400 text-lg leading-relaxed">
                                Curated experiences designed to awaken your senses.
                                From intimate candlelight dinners to lively bonfire nights and acoustic music sessions,
                                Vanrai is the perfect stage for life's most beautiful moments.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Live Music", icon: <Music className="w-4 h-4" /> },
                                    { label: "Bonfire Nights", icon: <Flame className="w-4 h-4" /> },
                                    { label: "Candlelight", icon: <Heart className="w-4 h-4" /> },
                                    { label: "Group Picnics", icon: <Trees className="w-4 h-4" /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-400">
                                        <div className="text-green-500">{item.icon}</div>
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                            <Link href="/events/experiential" className="inline-flex items-center gap-3 text-green-400 font-semibold group pt-4">
                                <span>Explore Packages</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= TESTIMONIALS ================= */}
            <section className="py-32 bg-[#0a0a0a]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div {...fadeInUp} className="text-center mb-20">
                        <Quote className="w-12 h-12 text-green-500/20 mx-auto mb-8" />
                        <h2 className="text-4xl md:text-6xl font-light mb-16">Stories from our Guests</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    name: "Neha & Rohit",
                                    event: "Destination Wedding",
                                    quote: "We chose Vanrai Village Resort for our destination wedding, and it was the best decision we made. The natural surroundings added a magical touch."
                                },
                                {
                                    name: "Corporate Team",
                                    event: "Corporate Offsite",
                                    quote: "The peaceful environment helped everyone disconnect from routine work stress. Excellent venue for team-building."
                                }
                            ].map((t, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeInUp}
                                    transition={{ delay: i * 0.2, duration: 0.8 }}
                                    className="p-10 rounded-3xl bg-white/5 border border-white/10 text-left relative"
                                >
                                    <p className="text-lg text-neutral-300 italic mb-8">"{t.quote}"</p>
                                    <div>
                                        <p className="font-semibold text-white">{t.name}</p>
                                        <p className="text-sm text-green-500">{t.event}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="py-40 text-center bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto px-6 space-y-12"
                >
                    <h2 className="text-4xl md:text-7xl font-light leading-tight">
                        Start Planning Your <br />
                        <span className="italic text-white">Unforgettable Moment</span>
                    </h2>
                    <p className="text-neutral-400 text-lg md:text-xl">
                        Our dedicated event team is ready to help you curate the perfect celebration.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/#contact" className="px-12 py-5 bg-green-600 rounded-full font-bold shadow-xl shadow-green-600/20 hover:bg-green-500 hover:scale-105 transition-all uppercase tracking-widest text-sm">
                            Contact Sales
                        </Link>
                        <Link href="https://wa.me/919922221601" className="px-12 py-5 border border-white/20 rounded-full font-bold hover:bg-white/10 transition-all uppercase tracking-widest text-sm flex items-center gap-3">
                            WhatsApp Enquiry
                        </Link>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
