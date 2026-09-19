export type EventSubData = {
    title: string;
    category: string;
    description: string;
    image: string;
    gallery: string[];
    timeline: { time: string; activity: string }[];
    packages: { name: string; price: string; features: string[]; highlight?: boolean }[];
    highlights: string[];
};

export const EVENT_DATA: Record<string, EventSubData> = {
    "wedding": {
        title: "Destination Weddings",
        category: "Celebration Event",
        description: "Celebrate your love story in the most romantic setting. Vanrai Resort offers expansive green lawns, elegant décor, and premium hospitality to make your wedding truly magical. Our team handles everything from the mandap setup to grand receptions under the starry Ahmednagar sky.",
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
        description: "Experience the true essence of Indian traditions with our luxury festive packages. From the vibrant colors of Holi to the divine lights of Diwali, we create an atmosphere that honors heritage while offering modern luxury at Vanrai Resort.",
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
        description: "Transform your team's productivity in a serene environment. Our corporate packages at Vanrai Resort offer the perfect blend of professional facilities and natural retreats, ideal for strategy sessions, award ceremonies, and team building.",
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
        description: "Spend a magical evening under the stars at Vanrai Resort. Whether it's a soulful acoustic performance, a cozy bonfire with friends, or a romantic candlelight dinner, our experiential packages are crafted to create lasting memories.",
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
