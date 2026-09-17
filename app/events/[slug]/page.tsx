"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/contact-config";
import {
    Calendar,
    MapPin,
    Sparkles,
    CheckCircle2,
    ArrowLeft,
    Send,
    Phone,
    MessageCircle,
    Clock,
    Camera,
    Utensils,
    Music,
    Users,
    ChevronRight,
    LucideIcon,
    ArrowRight
} from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

type EventSubData = {
    title: string;
    category: string;
    description: string;
    image: string;
    gallery: string[];
    timeline: { time: string; activity: string }[];
    packages: { name: string; price: string; features: string[]; highlight?: boolean }[];
    highlights: string[];
};

const eventData: Record<string, EventSubData> = {
    "wedding": {
        title: "Destination Weddings",
        category: "Celebration Event",
        description: "Celebrate your love story in the most romantic setting. Vanrai Village Resort offers expansive green lawns, elegant décor, and premium hospitality to make your wedding truly magical. Our team handles everything from the mandap setup to grand receptions under the starry Mumbai-Ahmednagar sky.",
        image: "/img/event-wedding-hall-stage.webp",
        gallery: [
            "/img/event-wedding-hall-stage.webp",
            "/img/event-banquet-stage-lights.webp",
            "/img/vanrai-lawn-sunset.webp",
            "/img/vanrai-open-lawn-sports.webp"
        ],
        timeline: [
            { time: "04:00 PM", activity: "Guest Arrival & Welcome Drinks" },
            { time: "05:30 PM", activity: "Varmala & Sunset Ceremony" },
            { time: "08:00 PM", activity: "Cake Cutting & Grand Feast" },
            { time: "10:00 PM", activity: "Live Music & Celebrations" }
        ],
        packages: [
            { name: "Day Wedding", price: "Starts ₹1.5L", features: ["Lawn Access (6 hrs)", "Standard Decor", "Premium Buffet", "Basic Sound"] },
            { name: "Full Destination", price: "Starts ₹5L", highlight: true, features: ["2 Days Event", "Stay for 50 Guests", "Themed Decor", "Grand Buffet", "Photography Point"] },
            { name: "Custom", price: "On Enquiry", features: ["Tailored Services", "Artist Management", "Drone Coverage", "Specific Menus"] }
        ],
        highlights: ["Expansive Lawns", "Poolside Haldi Setup", "Bridal Suite", "Professional Catering"]
    },
    "festive": {
        title: "Festive Celebrations",
        category: "Celebration Event",
        description: "Experience the true essence of Indian traditions with our luxury festive packages. From the vibrant colors of Holi to the divine lights of Diwali, we create an atmosphere that honors heritage while offering modern luxury.",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "/img/event-banquet-stage-lights.webp",
            "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop",
            "/img/vanrai-walkway-night.webp"
        ],
        timeline: [
            { time: "10:00 AM", activity: "Traditional Rituals & Puja" },
            { time: "12:30 PM", activity: "Themed Festive Lunch" },
            { time: "04:00 PM", activity: "High Tea & Cultural Games" },
            { time: "07:00 PM", activity: "Musical Evening & Gala Dinner" }
        ],
        packages: [
            { name: "Half Day", price: "₹2,500/head", features: ["Festive Buffet", "Traditional Welcome", "Lawn Activities"] },
            { name: "Full Festive Stay", price: "₹6,000/head", highlight: true, features: ["Stay Included", "All Meals", "Event Passes", "Traditional Gifts"] },
            { name: "Custom Group", price: "On Enquiry", features: ["Private Celebration", "Specific Themed Decor", "Group Discounts"] }
        ],
        highlights: ["Eco-Friendly Celebration", "Traditional Music", "Signature Menus", "Themed Photobooths"]
    },
    "corporate": {
        title: "Corporate Offsites",
        category: "Corporate & Social",
        description: "Transform your team's productivity in a serene environment. Our corporate packages offer the perfect blend of professional facilities and natural retreats, ideal for strategy sessions, award ceremonies, and team building.",
        image: "/img/corporate-retreat.jpg",
        gallery: [
            "/img/corporate-retreat.jpg",
            "/img/event-banquet-stage-lights.webp",
            "/img/dining-hall-wide.webp",
            "/img/vanrai-resort-aerial-lawn.webp"
        ],
        timeline: [
            { time: "09:00 AM", activity: "Welcome & Strategy Session" },
            { time: "01:00 PM", activity: "Networking Lunch" },
            { time: "03:00 PM", activity: "Team Building Activities" },
            { time: "07:00 PM", activity: "Dinner & Music" }
        ],
        packages: [
            { name: "Day Suite", price: "₹3,000/head", features: ["Conference Hall", "Projectors/AV", "Buffet Lunch", "High Tea"] },
            { name: "Residential", price: "₹7,500/head", highlight: true, features: ["Stay & Meals", "Full Day Venue", "Outdoor Activities", "Cocktail Evening"] },
            { name: "Custom", price: "On Enquiry", features: ["Themed Team Building", "Guest Speaker Setup", "Branding Options"] }
        ],
        highlights: ["Hi-Speed Wi-Fi", "AV Support", "Spacious Lawns", "AC Banquet Halls"]
    },
    "experiential": {
        title: "Experiential Nights",
        category: "Experiential Event",
        description: "Spend a magical evening under the stars. Whether it's a soulful acoustic performance, a cozy bonfire with friends, or a romantic candlelight dinner, our experiential packages are crafted to create lasting memories.",
        image: "/img/experiential-moments.jpg",
        gallery: [
            "/img/experiential-moments.jpg",
            "/img/evening-bonfire.jpg",
            "/img/candle-light-dinner.jpg",
            "/img/vanrai-walkway-night.webp"
        ],
        timeline: [
            { time: "06:30 PM", activity: "Welcome & Ambiance Lighting" },
            { time: "07:30 PM", activity: "Live Music / Event Start" },
            { time: "08:30 PM", activity: "Gourmet Dinner Service" },
            { time: "10:00 PM", activity: "Bonfire & Dessert" }
        ],
        packages: [
            { name: "Music Night", price: "₹1,500/head", features: ["Event Entry", "Welcome Drink", "Snack Platter"] },
            { name: "The Experience", price: "₹4,000/head", highlight: true, features: ["Gala Dinner", "Premium Seating", "Live Performance", "Dedicated Server"] },
            { name: "Private Setup", price: "On Enquiry", features: ["Candlelight Arrangement", "Personalized Music", "Private Lawn Area"] }
        ],
        highlights: ["Starlit Ambiance", "Live Artists", "Premium Cuisine", "Cozy Firepits"]
    },
};

export default function EventDetailPage() {
    const params = useParams();
    const slug = params.slug as string;

    // Fallback if slug not found
    const data = eventData[slug] || eventData["wedding"];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
            <Header />

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-screen min-h-[650px] w-full overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />

                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-7xl mx-auto px-6 pb-14 sm:pb-16 w-full">
                        <Link href="/events" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-6 sm:mb-8 group">
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            <span className="text-xs uppercase tracking-widest font-semibold">Back to Events</span>
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4 sm:space-y-5"
                        >
                            <span className="text-green-400 uppercase tracking-[0.25em] text-xs sm:text-sm font-medium bg-green-500/10 px-4 py-1.5 rounded-full border border-green-500/20 inline-block">
                                {data.category}
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-white leading-[1.08] tracking-tight">{data.title}</h1>
                            <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-neutral-300 text-sm sm:text-base">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-green-500" />
                                    <span>Vanrai Lawns & Banquets</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-green-500" />
                                    <span>Ideal for 50 to 500+ guests</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= OVERVIEW & GALLERY ================= */}
            <section className="py-24 sm:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
                        <div className="lg:col-span-12">
                            <motion.div {...fadeInUp} className="max-w-4xl space-y-5 sm:space-y-6 mb-12 sm:mb-14">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light border-b border-white/10 pb-4 w-fit pr-8">Experience Elegance</h2>
                                <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed italic font-light">
                                    "{data.description}"
                                </p>
                            </motion.div>

                            {/* Photo Gallery Grid */}
                            <motion.div {...fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5 mb-16 sm:mb-20">
                                {data.gallery.map((img, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        className={`relative rounded-2xl sm:rounded-3xl overflow-hidden ${i === 0 ? 'md:col-span-2 md:row-span-2 h-[280px] sm:h-[360px] md:h-full' : 'h-[160px] sm:h-[220px] md:h-[260px]'}`}
                                    >
                                        <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity" />
                                    </motion.div>
                                ))}
                                <Link href="/gallery" className="md:col-span-2 h-[160px] sm:h-[220px] md:h-[260px] rounded-2xl sm:rounded-3xl bg-neutral-900 border border-white/5 flex flex-col items-center justify-center gap-3 hover:bg-neutral-800 transition-all">
                                    <Camera className="w-8 h-8 text-green-500/50" />
                                    <span className="uppercase tracking-[0.2em] text-xs sm:text-sm text-neutral-400">View Full Gallery</span>
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                        {/* Left Side: Timeline & Flow */}
                        <div className="lg:col-span-7 space-y-12 sm:space-y-16">
                            <motion.div {...fadeInUp}>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-8 flex items-center gap-3">
                                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                                    Event Flow (Typical)
                                </h3>
                                <div className="space-y-8 sm:space-y-10 relative before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
                                    {data.timeline.map((item, i) => (
                                        <div key={i} className="relative pl-9 sm:pl-10 group">
                                            <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-[#0a0a0a] border-2 border-green-500 group-hover:bg-green-500 transition-colors z-10" />
                                            <div className="space-y-1">
                                                <span className="text-green-400 font-mono text-xs tracking-tight">{item.time}</span>
                                                <h4 className="text-base sm:text-lg font-medium">{item.activity}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div {...fadeInUp}>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-6">Included Features</h3>
                                <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                                    {data.highlights.map((h, i) => (
                                        <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 p-3.5 sm:p-5 rounded-[16px] sm:rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors">
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            </div>
                                            <span className="text-neutral-300 font-medium text-xs sm:text-sm leading-snug">{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side: Packages & Sticky Enquiry */}
                        <div className="lg:col-span-5 relative">
                            <div className="sticky top-24 sm:top-28 space-y-6">
                                <motion.div
                                    {...fadeInUp}
                                    className="p-5 sm:p-7 rounded-[22px] sm:rounded-[26px] bg-neutral-900/90 border border-white/10 relative overflow-hidden shadow-2xl backdrop-blur-xl"
                                >
                                    <h3 className="text-lg font-light mb-5 text-center uppercase tracking-widest text-neutral-400">Package Options</h3>
                                    <div className="space-y-3.5">
                                        {data.packages.map((pkg, i) => (
                                            <div
                                                key={i}
                                                className={`p-4 sm:p-4.5 rounded-[16px] border transition-all ${pkg.highlight ? 'bg-green-500/10 border-green-500/30' : 'bg-black/40 border-white/5 hover:border-white/20'}`}
                                            >
                                                <div className="flex justify-between items-start mb-2.5">
                                                    <div>
                                                        <h4 className="text-base font-bold">{pkg.name}</h4>
                                                        <p className="text-green-400 font-mono text-xs sm:text-sm mt-0.5">{pkg.price}</p>
                                                    </div>
                                                    {pkg.highlight && <Sparkles className="w-4 h-4 text-amber-400" />}
                                                </div>
                                                <ul className="space-y-1">
                                                    {pkg.features.map((f, j) => (
                                                        <li key={j} className="text-xs text-neutral-400 flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                                                            {f}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 space-y-2.5">
                                        <Link href="/contact" className="w-full h-11 bg-green-500 hover:bg-green-400 text-black rounded-[14px] font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/20">
                                            <Send className="w-4 h-4" />
                                            Enquire Now
                                        </Link>
                                        <a
                                            href={getWhatsAppUrl(WHATSAPP_MESSAGES.eventCategory(data.title))}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full h-11 border border-white/15 hover:bg-white/5 text-white rounded-[14px] font-medium text-sm transition-all flex items-center justify-center gap-2"
                                        >
                                            <MessageCircle className="w-4 h-4 text-green-400" />
                                            WhatsApp Sales
                                        </a>
                                    </div>

                                    <p className="text-center text-[10px] sm:text-[11px] text-neutral-500 mt-4 uppercase tracking-[0.2em]">
                                        Response within 2 hours
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= STICKY MOBILE CTA ================= */}
            <div className="fixed bottom-0 left-0 right-0 p-3 bg-neutral-950/90 backdrop-blur-xl border-t border-white/10 z-50 md:hidden flex gap-2.5">
                <Link href="/contact" className="flex-1 h-11 bg-green-500 text-black rounded-[14px] font-semibold text-sm shadow-lg shadow-green-500/20 flex items-center justify-center">
                    Enquire Now
                </Link>
                <a 
                    href={getWhatsAppUrl(WHATSAPP_MESSAGES.eventCategory(data.title))} 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Sales"
                    className="w-11 h-11 flex items-center justify-center bg-white/10 border border-white/15 text-white rounded-[14px] hover:bg-white/15 transition-colors"
                >
                    <MessageCircle className="w-4 h-4 text-green-400" />
                </a>
            </div>

            {/* ================= OTHER EVENTS SLIDER ================= */}
            <section className="py-24 sm:py-32 bg-[#050505] border-t border-white/5 mb-16 md:mb-0">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-10 sm:mb-12">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light">Explore Other <br /> <span className="text-neutral-500 italic">Categories</span></h3>
                        <Link href="/events" className="text-green-400 font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center gap-2 group">
                            Full View <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
                        {[
                            { name: "Festive Events", slug: "festive", img: "/img/event-banquet-stage-lights.webp" },
                            { name: "Live Music", slug: "live", img: "/img/experiential-moments.jpg" },
                            { name: "Corporate Offsites", slug: "corporate", img: "/img/corporate-retreat.jpg" }
                        ].map((item, i) => (
                            <Link key={i} href={`/events/${item.slug}`} className="group relative h-[240px] sm:h-[280px] rounded-[18px] sm:rounded-[22px] overflow-hidden border border-white/10">
                                <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute inset-0 flex items-end p-5 sm:p-7">
                                    <h4 className="text-lg sm:text-xl md:text-2xl font-light">{item.name}</h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
