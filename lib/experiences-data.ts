export interface ExperienceItem {
    id: string;
    name: string;
    tagline: string;
    summary: string;
    description: string;
    image: string;
    gallery: string[];
    accent: string;
    highlights: string[];
    idealFor: string[];
}

export const EXPERIENCES_DATA: Record<string, ExperienceItem> = {
    "bonfire": {
        id: "bonfire",
        name: "Bonfire & Night Activities",
        tagline: "Warm memories under the velvet sky.",
        summary: "Cozy evenings under the stars with crackling wood and warm stories.",
        description: "Experience the magic of a countryside night at Vanrai Resort. Our bonfire sessions are designed to bring people together. Enjoy the warmth of the natural wood fire as you roast marshmallows, share stories, and listen to the gentle whispers of the surrounding nature. It's the perfect way to unwind after an active day.",
        image: "/img/evening-bonfire.jpg",
        gallery: [
            "/img/evening-bonfire.jpg",
            "/img/vanrai-walkway-night.webp",
            "/img/vanrai-lawn-sunset.webp"
        ],
        accent: "from-orange-500 to-red-500",
        highlights: ["Natural Wood Fire", "Stargazing Opportunity", "Acoustic Music Nights", "Signature Roastings"],
        idealFor: ["Families", "Couples", "Groups of Friends"]
    },
    "candle-light": {
        id: "candle-light",
        name: "Candle Light Dinner",
        tagline: "Romantic symphonies in every bite.",
        summary: "Intimate dining experience with curated menus and romantic settings.",
        description: "Celebrate your love with a dining experience that touches the soul at Vanrai Resort. Set in a private, beautifully styled corner of our resort grounds, your candlelit table awaits. Savor a multi-course meal prepared by our finest chefs, served with the soundtrack of nature and the soft glow of flickering candles.",
        image: "/img/candle-light-dinner.jpg",
        gallery: [
            "/img/candle-light-dinner.jpg",
            "/img/dining-hall-wide.webp",
            "/img/dining-banquet-table.webp"
        ],
        accent: "from-rose-500 to-pink-500",
        highlights: ["Private Table Styling", "Curated Multi-Course Menu", "Soft Ambient Music", "Sunset Lawn Views"],
        idealFor: ["Couples", "Anniversary Celebrations", "Romantic Proposals"]
    },
    "rain-dance": {
        id: "rain-dance",
        name: "Rain Dance & Poolside Fun",
        tagline: "Feel the rain, dance to the rhythm.",
        summary: "Refreshing artificial rain dance setup with music, water mist, and poolside joy.",
        description: "Immerse yourself in our signature Rain Dance experience at Vanrai Resort. Step under our custom overhead water sprinklers as high-energy music sets the mood. Perfect for friends, families, and corporate outings looking to beat the heat and celebrate together right beside our swimming pool and water slides.",
        image: "/img/rain-dance.jpg",
        gallery: [
            "/img/rain-dance.jpg",
            "/img/waterpark-slides.jpg",
            "/img/pool-sunset-luxury.jpg"
        ],
        accent: "from-cyan-500 to-blue-500",
        highlights: ["Dedicated Rain Shower Ring", "High-Energy Sound System", "Poolside Location", "All-Age Friendly Fun"],
        idealFor: ["Groups of Friends", "Families", "Corporate Outings", "Celebrations"]
    },
    "waterpark": {
        id: "waterpark",
        name: "Waterpark & Swimming Pool",
        tagline: "Dive into a world of pure liquid joy.",
        summary: "Refresh yourself with thrilling slides and crystal clear waters.",
        description: "Our swimming pool and waterpark at Vanrai Resort is the ultimate destination for family fun. From high-speed slides for thrill-seekers to gentle ripples for relaxing poolside lounging, there's something for everyone. Our pool is treated and maintained to the highest hygiene standards, ensuring a safe and refreshing escape.",
        image: "/img/waterpark-slides.jpg",
        gallery: [
            "/img/waterpark-slides.jpg",
            "/img/rain-dance.jpg",
            "/img/pool-sunset-luxury.jpg",
            "/img/pool-aerial-sunset.jpg"
        ],
        accent: "from-blue-500 to-cyan-500",
        highlights: ["Safety Monitored Pool", "Themed Water Slides", "Kid-Safe Splash Zones", "Poolside Loungers & Towels"],
        idealFor: ["Families", "Kids", "Weekend Getaways", "Group Outings"]
    },
    "dining": {
        id: "dining",
        name: "Dining & Restaurant",
        tagline: "Authentic culinary journeys with farm-fresh flavors.",
        summary: "Exquisite dining hall and banquet setups serving traditional Maharashtrian and multi-cuisine feasts.",
        description: "Experience the joy of hearty dining at Vanrai Resort. Our spacious air-conditioned restaurant welcomes you with comfortable family seating, panoramic garden windows, and dedicated banquet tables for large gatherings. Savor genuine local delicacies prepared by master chefs using organic, farm-fresh ingredients.",
        image: "/img/dining-hall-wide.webp",
        gallery: [
            "/img/dining-hall-wide.webp",
            "/img/dining-banquet-table.webp",
            "/img/dining-hall-interior.webp",
            "/img/hero-2.png"
        ],
        accent: "from-amber-500 to-yellow-500",
        highlights: ["Air-Conditioned Dining Hall", "Authentic Local & Multi-Cuisine", "Family & Large Banquet Seating", "Organic Farm-Fresh Produce"],
        idealFor: ["Families", "Large Groups", "Food Enthusiasts", "Celebrations"]
    },
    "weddings": {
        id: "weddings",
        name: "Destination Wedding & Halls",
        tagline: "Royal stages and timeless vows amidst nature.",
        summary: "Magnificent wedding halls, illuminated stages with royal thrones, and expansive event lawns.",
        description: "Celebrate your dream wedding at Vanrai Resort. We offer breathtaking floral stages with royal throne seating, vibrant event lighting, chandelier elegance, and sprawling lawns accommodating over 500 guests. Our dedicated hospitality team manages decor, catering, sound, and luxury stays to ensure a seamless royal celebration.",
        image: "/img/event-wedding-hall-stage.webp",
        gallery: [
            "/img/event-wedding-hall-stage.webp",
            "/img/event-banquet-stage-lights.webp",
            "/img/vanrai-lawn-sunset.webp",
            "/img/vanrai-open-lawn-sports.webp"
        ],
        accent: "from-pink-500 to-rose-500",
        highlights: ["Royal Floral Stage & Golden Throne", "AC Banquet & Wedding Hall", "Lush Open Lawns for 500+ Guests", "Full Coordination & Gourmet Feasts"],
        idealFor: ["Weddings", "Grand Receptions", "Engagements & Sangeet"]
    },
    "picnics": {
        id: "picnics",
        name: "Group Picnics & Day Outings",
        tagline: "Unwind on sprawling lawns with family and friends.",
        summary: "Perfect bonding time for families and teams in our lush green lawns.",
        description: "Gather your closest friends, family, or colleagues for an idyllic day outing at Vanrai Resort. Our 2.5-acre property offers sprawling green lawns, shaded gazebos, garden games, swimming pool access, and fresh country meals cooked right on the farm.",
        image: "/img/vanrai-lawn-sunset.webp",
        gallery: [
            "/img/vanrai-lawn-sunset.webp",
            "/img/vanrai-open-lawn-sports.webp",
            "/img/vanrai-resort-aerial-lawn.webp"
        ],
        accent: "from-green-500 to-emerald-500",
        highlights: ["Spacious Lawn Space", "Buffet Breakfast & Lunch", "Pool & Rain Dance Access", "Outdoor Lawn Games"],
        idealFor: ["Families", "College Groups", "Society Picnics", "Corporate Teams"]
    },
    "birthdays": {
        id: "birthdays",
        name: "Birthday Celebrations",
        tagline: "Celebrate milestones with color, joy, and laughter.",
        summary: "Celebrate your special day with vibrant decor and joyful celebrations.",
        description: "Make birthdays truly unforgettable at Vanrai Resort. Whether it's a playful pool party for kids or an elegant evening bash under fairy lights, our dedicated event staff provides customized theme decor, music setups, and scrumptious party catering.",
        image: "https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=2070&auto=format&fit=crop",
            "/img/vanrai-walkway-night.webp",
            "/img/event-banquet-stage-lights.webp"
        ],
        accent: "from-purple-500 to-fuchsia-500",
        highlights: ["Custom Theme Decorations", "DJ & Sound System Setup", "Live Food Counters & Cake Cutting", "Poolside or Lawn Venue"],
        idealFor: ["Kids", "Teens", "Milestone Birthdays", "Family Gatherings"]
    },
    "anniversary": {
        id: "anniversary",
        name: "Engagement & Anniversary",
        tagline: "Cherish togetherness in romantic countryside elegance.",
        summary: "Mark your milestones with elegance and timeless memories.",
        description: "Commemorate your anniversary or celebrate your engagement in picturesque outdoor settings at Vanrai Resort. With tailored floral arches, candlelit pathways, and exceptional hospitality, we ensure every anniversary feels as magical as day one.",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop",
            "/img/candle-light-dinner.jpg",
            "/img/event-wedding-hall-stage.webp"
        ],
        accent: "from-red-400 to-rose-400",
        highlights: ["Romantic Ambience & Lighting", "Private Lawn or Gazebo Setup", "Custom Celebration Cakes", "Photographer-Friendly Backdrops"],
        idealFor: ["Couples", "Family Anniversaries", "Ring Ceremonies"]
    },
    "yoga": {
        id: "yoga",
        name: "Sunrise Yoga & Wellness",
        tagline: "Rejuvenate mind, body, and spirit amidst morning mist.",
        summary: "Find your inner peace with sunrise yoga sessions in the open air.",
        description: "Breathe in the crisp country air and greet the morning sun at Vanrai Resort. Our lush lawns and serene garden corners offer the ideal peaceful environment for yoga, guided meditation, and holistic retreats away from urban noise.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop",
            "/img/vanrai-lawn-sunset.webp",
            "/img/vanrai-walkway-night.webp"
        ],
        accent: "from-teal-500 to-emerald-500",
        highlights: ["Fresh Morning Country Air", "Expansive Lawn Space", "Organic Herbal Teas", "Quiet Meditation Zones"],
        idealFor: ["Wellness Groups", "Solo Travelers", "Health Enthusiasts"]
    },
    "sports": {
        id: "sports",
        name: "Sports & Box Cricket",
        tagline: "Fuel your competitive spirit on open green fields.",
        summary: "Box cricket, badminton, and outdoor sports under the blue sky.",
        description: "Enjoy friendly tournaments with friends, family, or colleagues on our manicured sports turf and lawns at Vanrai Resort. From box cricket and volleyball to badminton, we have equipment and dedicated grounds ready for action.",
        image: "/img/vanrai-open-lawn-sports.webp",
        gallery: [
            "/img/vanrai-open-lawn-sports.webp",
            "/img/vanrai-resort-aerial-lawn.webp",
            "/img/vanrai-lawn-sunset.webp"
        ],
        accent: "from-lime-500 to-green-500",
        highlights: ["Box Cricket Ground", "Volleyball & Badminton", "Sports Equipment Provided", "Floodlights for Evening Play"],
        idealFor: ["Sports Enthusiasts", "Corporate Tournaments", "Friendly Matches"]
    },
    "indoor": {
        id: "indoor",
        name: "Indoor Games & Recreation",
        tagline: "Endless entertainment whatever the weather.",
        summary: "Engaging indoor games and activities for groups of all sizes.",
        description: "Take a break from the sun in our indoor activity zones at Vanrai Resort. Challenge your friends to carrom, chess, table tennis, foosball, and board games in a relaxed, comfortable air-conditioned space.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop",
            "/img/corporate-retreat.jpg",
            "/img/dining-hall-interior.webp"
        ],
        accent: "from-violet-500 to-purple-500",
        highlights: ["Table Tennis & Carrom", "Board Games Library", "Air-Conditioned Lounge", "All-Weather Fun"],
        idealFor: ["Families", "Kids", "Teams", "Rainy Afternoons"]
    },
    "kids-zone": {
        id: "kids-zone",
        name: "Kids Play & Gaming Zone",
        tagline: "Smiles and boundless energy for little adventurers.",
        summary: "A world of fun and games designed specifically for our young guests.",
        description: "Kids will love the outdoor play area and gaming facilities at Vanrai Resort. With swings, slides, soft turf play areas, and safe supervision, children can play freely while parents relax peacefully.",
        image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=2070&auto=format&fit=crop",
            "/img/waterpark-slides.jpg",
            "/img/rain-dance.jpg"
        ],
        accent: "from-orange-400 to-amber-500",
        highlights: ["Outdoor Swings & Slides", "Soft Lawn Play Area", "Child-Safe Environment", "Close to Dining & Seating"],
        idealFor: ["Children of All Ages", "Families with Toddlers"]
    }
};
