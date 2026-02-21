"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
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
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544253102-3866f2878bf8?q=80&w=2070&auto=format&fit=crop"
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
            "https://images.unsplash.com/photo-1561021480-1a7356247c1a?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1549463595-b0930d74bc21?q=80&w=2070&auto=format&fit=crop"
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
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2070&auto=format&fit=crop"
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
        image: "https://images.unsplash.com/photo-1514525253361-bee8d40d440c?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1518173946687-a4c8a9833d8e?q=80&w=2070&auto=format&fit=crop"
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
            <section className="relative h-[70vh] w-full overflow-hidden">
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
                    <div className="max-w-7xl mx-auto px-6 pb-20 w-full">
                        <Link href="/events" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 group">
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            <span className="text-sm uppercase tracking-widest font-semibold">Back to Events</span>
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <span className="text-green-500 uppercase tracking-widest text-sm font-bold bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20 inline-block">
                                {data.category}
                            </span>
                            <h1 className="text-5xl md:text-8xl font-light">{data.title}</h1>
                            <div className="flex flex-wrap items-center gap-8 text-neutral-400">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-green-500" />
                                    <span>Vanrai Lawns & Banquets</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-green-500" />
                                    <span>Ideal for 50 to 500+ guests</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= OVERVIEW & GALLERY ================= */}
            <section className="py-24 px-6 md:py-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                        <div className="lg:col-span-12">
                            <motion.div {...fadeInUp} className="max-w-4xl space-y-8 mb-20">
                                <h2 className="text-4xl font-light border-b border-white/10 pb-6 w-fit pr-12">Experience Elegance</h2>
                                <p className="text-neutral-400 text-xl leading-relaxed italic font-serif">
                                    "{data.description}"
                                </p>
                            </motion.div>

                            {/* Photo Gallery Grid */}
                            <motion.div {...fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-32">
                                {data.gallery.map((img, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        className={`relative rounded-3xl overflow-hidden ${i === 0 ? 'md:col-span-2 md:row-span-2 h-[400px] md:h-full' : 'h-[200px] md:h-[300px]'}`}
                                    >
                                        <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity" />
                                    </motion.div>
                                ))}
                                <Link href="/gallery" className="md:col-span-2 h-[200px] md:h-[300px] rounded-3xl bg-neutral-900 border border-white/5 flex flex-col items-center justify-center gap-4 hover:bg-neutral-800 transition-all">
                                    <Camera className="w-10 h-10 text-green-500/50" />
                                    <span className="uppercase tracking-[0.2em] text-sm text-neutral-500">View Full Gallery</span>
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                        {/* Left Side: Timeline & Flow */}
                        <div className="lg:col-span-7 space-y-24">
                            <motion.div {...fadeInUp}>
                                <h3 className="text-3xl font-light mb-12 flex items-center gap-4">
                                    <Clock className="text-green-500" />
                                    Event Flow (Typical)
                                </h3>
                                <div className="space-y-12 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
                                    {data.timeline.map((item, i) => (
                                        <div key={i} className="relative pl-12 group">
                                            <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-[#0a0a0a] border-2 border-green-500 group-hover:bg-green-500 transition-colors z-10" />
                                            <div className="space-y-2">
                                                <span className="text-green-400 font-mono text-sm tracking-tighter">{item.time}</span>
                                                <h4 className="text-xl font-medium">{item.activity}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div {...fadeInUp}>
                                <h3 className="text-3xl font-light mb-12">Included Features</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {data.highlights.map((h, i) => (
                                        <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                            <span className="text-neutral-300 font-medium">{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side: Packages & Sticky Enquiry */}
                        <div className="lg:col-span-5 relative">
                            <div className="sticky top-32 space-y-8">
                                <motion.div
                                    {...fadeInUp}
                                    className="p-10 rounded-[3rem] bg-neutral-900 border border-white/10 relative overflow-hidden shadow-2xl"
                                >
                                    <h3 className="text-2xl font-light mb-8 text-center uppercase tracking-widest text-neutral-400">Package Options</h3>
                                    <div className="space-y-6">
                                        {data.packages.map((pkg, i) => (
                                            <div
                                                key={i}
                                                className={`p-6 rounded-2xl border transition-all ${pkg.highlight ? 'bg-green-600/10 border-green-500' : 'bg-black/40 border-white/5 hover:border-white/20'}`}
                                            >
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h4 className="text-xl font-bold">{pkg.name}</h4>
                                                        <p className="text-green-500 font-mono mt-1">{pkg.price}</p>
                                                    </div>
                                                    {pkg.highlight && <Sparkles className="text-yellow-400" />}
                                                </div>
                                                <ul className="space-y-2">
                                                    {pkg.features.map((f, j) => (
                                                        <li key={j} className="text-xs text-neutral-500 flex items-center gap-2">
                                                            <div className="w-1 h-1 rounded-full bg-neutral-600" />
                                                            {f}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-10 space-y-4">
                                        <button className="w-full py-5 bg-green-600 hover:bg-green-500 text-white rounded-full font-bold transition-all flex items-center justify-center gap-3">
                                            <Send className="w-5 h-5" />
                                            Enquire Now
                                        </button>
                                        <Link
                                            href="https://wa.me/919922221601"
                                            className="w-full py-5 border border-white/10 hover:bg-white/5 text-white rounded-full font-bold transition-all flex items-center justify-center gap-3"
                                        >
                                            <MessageCircle className="w-5 h-5 text-green-500" />
                                            WhatsApp Sales
                                        </Link>
                                    </div>

                                    <p className="text-center text-[10px] text-neutral-500 mt-6 uppercase tracking-[0.2em]">
                                        Response within 2 hours
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= STICKY MOBILE CTA ================= */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-xl border-t border-white/10 z-50 md:hidden flex gap-4">
                <button className="flex-1 py-4 bg-green-600 text-white rounded-full font-bold text-sm shadow-xl shadow-green-600/20">
                    Enquire Now
                </button>
                <Link href="https://wa.me/919922221601" className="w-14 h-14 flex items-center justify-center bg-green-500 text-white rounded-full">
                    <MessageCircle />
                </Link>
            </div>

            {/* ================= OTHER EVENTS SLIDER ================= */}
            <section className="py-24 bg-[#050505] border-t border-white/5 mb-20 md:mb-0">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-16">
                        <h3 className="text-3xl md:text-5xl font-light">Explore Other <br /> <span className="text-neutral-500 italic">Categories</span></h3>
                        <Link href="/events" className="text-green-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2 group">
                            Full View <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: "Festive Events", slug: "festive", img: "https://images.unsplash.com/photo-1549463595-b0930d74bc21?q=80&w=2070&auto=format&fit=crop" },
                            { name: "Live Music", slug: "live", img: "https://images.unsplash.com/photo-1514525253361-bee8d40d440c?q=80&w=2070&auto=format&fit=crop" },
                            { name: "Corporate Offsites", slug: "corporate", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop" }
                        ].map((item, i) => (
                            <Link key={i} href={`/events/${item.slug}`} className="group relative h-[300px] rounded-[2rem] overflow-hidden">
                                <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute inset-0 flex items-end p-8">
                                    <h4 className="text-2xl font-light">{item.name}</h4>
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
