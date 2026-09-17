"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/contact-config";
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
                        src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070&auto=format&fit=crop"
                        alt="Events at Vanrai"
                        fill
                        className="object-cover brightness-[0.35]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-black/30" />
                </motion.div>

                <div className="relative z-10 max-w-6xl px-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase mb-6 text-white/90">
                        Private & Grand Celebrations
                    </span>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[1.08] mb-6 sm:mb-8 text-white tracking-tight">
                        Celebrate Life at <br />
                        <span className="italic font-normal text-green-400">Vanrai</span>
                    </h1>

                    <p className="text-neutral-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 font-light">
                        From destination weddings to corporate retreats and vibrant festivals,
                        Vanrai Village Resort transforms every event into an unforgettable experience.
                    </p>

                    <div className="flex justify-center gap-3.5 sm:gap-5 flex-wrap">
                        <a href="/contact" className="h-11 px-6 bg-green-500 hover:bg-green-400 text-black font-medium rounded-[14px] transition-all flex items-center justify-center text-sm shadow-lg shadow-green-500/25">
                            Plan Your Event
                        </a>
                        <a href="#event-categories" className="h-11 px-6 border border-white/20 hover:bg-white/10 text-white rounded-[14px] font-medium transition-all flex items-center justify-center text-sm backdrop-blur-md">
                            Explore Venues
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
                >
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-neutral-500">Scroll</span>
                    <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-neutral-500 to-transparent" />
                </motion.div>
            </section>

            {/* ================= CATEGORIES ANCHOR ================= */}
            <div id="event-categories" />

            {/* ================= CELEBRATION EVENTS ================= */}
            <section className="py-24 sm:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div {...fadeInUp} className="text-center mb-10 sm:mb-12">
                        <span className="text-green-400 uppercase tracking-widest text-xs font-semibold mb-2 block">Unforgettable Memories</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">Celebration Events</h2>
                    </motion.div>

                    {/* Wedding Section - Image Right */}
                    <div className="grid md:grid-cols-2 items-center gap-10 lg:gap-14 mb-16 sm:mb-20">
                        <motion.div {...fadeInUp} className="space-y-6 order-2 md:order-1">
                            <div className="flex items-center gap-2.5 text-green-400">
                                <Heart className="w-4 h-4" />
                                <span className="tracking-widest uppercase text-xs sm:text-sm font-medium">Destination Wedding</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
                                Your Dream Wedding <br />
                                <span className="italic text-neutral-400">Under the Stars</span>
                            </h3>
                            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                                Celebrate your special day amidst open green lawns and serene natural surroundings.
                                Vanrai offers elegant arrangements, curated décor, and seamless hospitality
                                to make your wedding truly unforgettable. From intimate ceremonies to grand receptions.
                            </p>
                            <div className="grid grid-cols-2 gap-4 sm:gap-6 py-2">
                                <div className="space-y-1">
                                    <h4 className="font-medium text-white text-sm sm:text-base">Grand Lawn</h4>
                                    <p className="text-xs sm:text-sm text-neutral-500">Capacities up to 500+ guests</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-medium text-white text-sm sm:text-base">Guest Stay</h4>
                                    <p className="text-xs sm:text-sm text-neutral-500">Luxury rooms for your loved ones</p>
                                </div>
                            </div>
                            <Link href="/events/wedding" className="inline-flex items-center gap-2.5 text-green-400 font-semibold text-sm group pt-2">
                                <span>Discover More</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                            </Link>
                        </motion.div>
                        <motion.div {...imageReveal} className="relative h-[300px] sm:h-[400px] md:h-[480px] rounded-[22px] sm:rounded-[26px] overflow-hidden order-1 md:order-2 border border-white/10">
                            <Image
                                src="/img/event-wedding-hall-stage.webp"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                alt="Vanrai Village Resort Destination Wedding Hall & Stage"
                            />
                        </motion.div>
                    </div>

                    {/* Festive Events - Image Left */}
                    <div className="grid md:grid-cols-2 items-center gap-10 lg:gap-14">
                        <motion.div {...imageReveal} className="relative h-[300px] sm:h-[400px] md:h-[480px] rounded-[22px] sm:rounded-[26px] overflow-hidden border border-white/10">
                            <Image
                                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                alt="Festive Events"
                            />
                        </motion.div>
                        <motion.div {...fadeInUp} className="space-y-6">
                            <div className="flex items-center gap-2.5 text-green-400">
                                <Sparkles className="w-4 h-4" />
                                <span className="tracking-widest uppercase text-xs sm:text-sm font-medium">Seasonal Traditions</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
                                Vibrant Festivals, <br />
                                <span className="italic text-neutral-400">Authentic Vibe</span>
                            </h3>
                            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                                Experience Holi, Diwali, and Navratri with a touch of luxury.
                                We bring traditions to life with vibrant décor, traditional rituals,
                                and special festive menus that honor our roots while offering modern comfort.
                            </p>
                            <ul className="space-y-2.5 text-neutral-300 text-sm sm:text-base">
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
                            <Link href="/events/festive" className="inline-flex items-center gap-2.5 text-green-400 font-semibold text-sm group pt-2">
                                <span>Discover More</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= CAPACITY SECTION ================= */}
            <section className="py-24 sm:py-32 bg-[#050505] border-y border-white/5 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <motion.div {...fadeInUp} className="text-center mb-10 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-3">
                            Designed for Events of Every Scale
                        </h2>
                        <p className="text-neutral-500 max-w-2xl mx-auto text-sm sm:text-base">
                            Multiple venues, professional coordination and premium amenities
                            tailored to your specific requirements.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                        {[
                            { value: "500+", label: "Guest Capacity", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2.5 sm:mb-3 text-green-500" /> },
                            { value: "Open", label: "Spacious Lawns", icon: <Trees className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2.5 sm:mb-3 text-green-500" /> },
                            { value: "Poolside", label: "Event Setup", icon: <Waves className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2.5 sm:mb-3 text-green-500" /> },
                            { value: "Custom", label: "Decor Options", icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2.5 sm:mb-3 text-green-500" /> }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                            >
                                {stat.icon}
                                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-1.5">{stat.value}</p>
                                <span className="text-neutral-400 uppercase tracking-widest text-[10px] sm:text-xs font-bold">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CORPORATE & SOCIAL ================= */}
            <section className="py-24 sm:py-32 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 items-center gap-10 lg:gap-14 mb-16 sm:mb-20">
                        <motion.div {...fadeInUp} className="space-y-6">
                            <div className="flex items-center gap-2.5 text-green-400">
                                <Building2 className="w-4 h-4" />
                                <span className="tracking-widest uppercase text-xs sm:text-sm font-medium">Corporate & Social</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
                                Professional Meetings, <br />
                                <span className="italic text-neutral-400">Natural Settings</span>
                            </h3>
                            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                                Escape the boardroom and host your next corporate retreat or team-building event at Vanrai.
                                Our peaceful environment helps teams disconnect from stress and reconnect with each other.
                            </p>
                            <div className="space-y-3">
                                <div className="p-4 sm:p-5 rounded-[18px] bg-white/[0.03] border border-white/10 flex items-center gap-4 sm:gap-5">
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                                        <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white text-sm sm:text-base">Team Building</h4>
                                        <p className="text-xs sm:text-sm text-neutral-400">Curated activities for team bonding</p>
                                    </div>
                                </div>
                                <div className="p-4 sm:p-5 rounded-[18px] bg-white/[0.03] border border-white/10 flex items-center gap-4 sm:gap-5">
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white text-sm sm:text-base">Indoor Conferences</h4>
                                        <p className="text-xs sm:text-sm text-neutral-400">AC halls with modern AV facilities</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="/events/corporate" className="inline-flex items-center gap-2.5 text-green-400 font-semibold text-sm group pt-2">
                                <span>Host Your Offsite</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                            </Link>
                        </motion.div>
                        <motion.div {...imageReveal} className="relative h-[300px] sm:h-[400px] md:h-[480px] rounded-[22px] sm:rounded-[26px] overflow-hidden border border-white/10">
                            <Image
                                src="/img/corporate-retreat.jpg"
                                fill
                                className="object-cover"
                                alt="Vanrai Corporate & Social Retreat Meeting"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= EXPERIENTIAL EVENTS ================= */}
            <section className="py-24 sm:py-32 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 items-center gap-10 lg:gap-14">
                        <motion.div {...imageReveal} className="relative h-[300px] sm:h-[400px] md:h-[480px] rounded-[22px] sm:rounded-[26px] overflow-hidden order-2 md:order-1 border border-white/10">
                            <Image
                                src="/img/experiential-moments.jpg"
                                fill
                                className="object-cover"
                                alt="Vanrai Experiential Moments Under The Stars"
                            />
                        </motion.div>
                        <motion.div {...fadeInUp} className="space-y-6 order-1 md:order-2">
                            <div className="flex items-center gap-2.5 text-green-400">
                                <Music className="w-4 h-4" />
                                <span className="tracking-widest uppercase text-xs sm:text-sm font-medium">Experiential Moments</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
                                Stars, Music, <br />
                                <span className="italic text-neutral-400">& Soulful Evenings</span>
                            </h3>
                            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                                Curated experiences designed to awaken your senses.
                                From intimate candlelight dinners to lively bonfire nights and acoustic music sessions,
                                Vanrai is the perfect stage for life's most beautiful moments.
                            </p>
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                {[
                                    { label: "Live Music", icon: <Music className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> },
                                    { label: "Bonfire Nights", icon: <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> },
                                    { label: "Candlelight", icon: <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> },
                                    { label: "Group Picnics", icon: <Trees className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-300">
                                        <div className="text-green-500">{item.icon}</div>
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                            <Link href="/events/experiential" className="inline-flex items-center gap-2.5 text-green-400 font-semibold text-sm group pt-2">
                                <span>Explore Packages</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= TESTIMONIALS ================= */}
            <section className="py-24 sm:py-32 bg-[#0a0a0a]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-green-500/20 mx-auto mb-4" />
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-8 sm:mb-10">Stories from our Guests</h2>

                        <div className="grid md:grid-cols-2 gap-5 sm:gap-7">
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
                                    className="p-5 sm:p-7 rounded-[20px] bg-white/[0.03] border border-white/10 text-left relative hover:border-white/20 transition-colors"
                                >
                                    <p className="text-sm sm:text-base text-neutral-300 italic mb-5 leading-relaxed">"{t.quote}"</p>
                                    <div>
                                        <p className="font-semibold text-white text-sm sm:text-base">{t.name}</p>
                                        <p className="text-xs text-green-400">{t.event}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="py-28 sm:py-36 md:py-40 text-center bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto px-6 space-y-6 sm:space-y-8"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
                        Start Planning Your <br />
                        <span className="italic text-white">Unforgettable Moment</span>
                    </h2>
                    <p className="text-neutral-400 text-sm sm:text-base max-w-lg mx-auto">
                        Our dedicated event team is ready to help you curate the perfect celebration.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3.5 sm:gap-5">
                        <Link href="/contact" className="h-11 px-6 bg-green-500 text-black rounded-[14px] font-semibold hover:bg-green-400 transition-all text-sm flex items-center justify-center shadow-lg shadow-green-500/20">
                            Contact Sales
                        </Link>
                        <a
                            href={getWhatsAppUrl(WHATSAPP_MESSAGES.events)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-11 px-6 border border-white/20 rounded-[14px] font-semibold hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-2"
                        >
                            WhatsApp Enquiry
                        </a>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
