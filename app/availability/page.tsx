"use client";

import React from "react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { useBooking } from "@/lib/booking-context";
import { motion, AnimatePresence } from "framer-motion";
import { Bed, Users, Wind, TreePine, Check, ArrowRight, Star, Info, ChevronRight } from "lucide-react";
import NextImage from "next/image";
import { BookingBar } from "@/components/ui/booking-bar";
import { useRouter } from "next/navigation";

const ROOM_INVENTORY_DATA = [
  {
    id: "wooden-cottage",
    name: "Wooden Cottages",
    type: "Wooden Cottage",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070&auto=format&fit=crop",
    description: "Experience the rustic charm of teak wood architecture. These private cottages offer a warm, intimate atmosphere perfect for couples and nature lovers.",
    maxCapacity: 4,
    price: 4500,
    totalRooms: 3,
    bookedRooms: 1,
    amenities: ["AC", "Wi-Fi", "Private Deck", "Forest View", "King Bed"],
    icon: <TreePine className="w-4 h-4" />,
  },
  {
    id: "deluxe-ac",
    name: "Deluxe AC Rooms",
    type: "Deluxe AC Room",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop",
    description: "Modern luxury meets rural tranquility. Our spacious Deluxe rooms feature contemporary interiors, full air conditioning, and premium amenities.",
    maxCapacity: 4,
    price: 3500,
    totalRooms: 10,
    bookedRooms: 8,
    amenities: ["AC", "Wi-Fi", "LED TV", "Tea/Coffee Maker", "Queen Bed"],
    icon: <Wind className="w-4 h-4" />,
  },
  {
    id: "standard-room",
    name: "Standard Rooms",
    type: "Standard Room",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
    description: "Comfortable and authentic stays. Designed for simplicity and rest, our standard rooms provide all essential comforts within a lush green setting.",
    maxCapacity: 4,
    price: 2500,
    totalRooms: 5,
    bookedRooms: 5,
    amenities: ["Fan", "Wi-Fi", "Garden Access", "Twin/King Bed"],
    icon: <Bed className="w-4 h-4" />,
  },
];

const Counter = ({ value, onIncrement, onDecrement, label, min = 0, max = 10 }: { value: number, onIncrement: () => void, onDecrement: () => void, label?: string, min?: number, max?: number }) => (
  <div className="flex items-center gap-3">
    <button 
      onClick={(e) => { e.stopPropagation(); onDecrement(); }}
      disabled={value <= min}
      className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all disabled:opacity-20 disabled:cursor-not-allowed group text-xl"
    >
      <span className="group-hover:text-emerald-500 transition-colors">−</span>
    </button>
    <div className="flex flex-col items-center min-w-[2rem]">
      <span className="text-lg font-bold">{value}</span>
      {label && <span className="text-[10px] uppercase tracking-tighter text-neutral-500 font-bold">{label}</span>}
    </div>
    <button 
      onClick={(e) => { e.stopPropagation(); onIncrement(); }}
      disabled={value >= max}
      className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all disabled:opacity-20 group text-xl"
    >
      <span className="group-hover:text-emerald-500 transition-colors">+</span>
    </button>
  </div>
);

export default function AvailabilityPage() {
  const { state, addRoom, removeRoom, toggleAddOn, setAdults, setChildren, setMembershipId, verifyMembership, applyPromoCode, calculateTotal } = useBooking();
  const [promoInput, setPromoInput] = React.useState("");
  const router = useRouter();

  const { subtotal, nights, membershipDiscount, promoDiscountAmount, finalTotal, extraGuestTotal, addOnsTotal } = calculateTotal();

  const filteredRooms = state.roomType === "All" 
    ? ROOM_INVENTORY_DATA 
    : ROOM_INVENTORY_DATA.filter(room => room.type === state.roomType);

  const handleContinue = () => {
    if (state.selectedRooms.length > 0) {
      router.push("/booking/details");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Improvised Header with Back Button */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <button 
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all">
              <ChevronRight className="w-5 h-5 rotate-180" />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest">Back To Resort</span>
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Need Help?</span>
              <span className="text-sm font-bold text-emerald-500">+91 98765 43210</span>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Top Section / Filter Bar Overlay */}
      <div className="pt-32 pb-12 bg-neutral-900/20">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-6xl mx-auto">
            <BookingBar />
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-7xl mx-auto">
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 italic">Stays & <span className="text-emerald-500">Experiences</span></h1>
            <p className="text-neutral-500 font-light max-w-2xl text-lg">
              Discover Our Curated Selection Of Luxury Stays And Unique Village Experiences At Vanrai Resort.
            </p>
          </header>

          <div className="flex flex-col lg:flex-row gap-12 relative">
            
            <div className="flex-1 space-y-12">
              {/* Experiences Section */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="pb-12 border-b border-white/5"
              >
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 text-emerald-500">
                         <Star className="w-5 h-5" />
                      </div>
                      <h2 className="text-2xl font-bold italic">Curated <span className="text-emerald-500">Experiences</span></h2>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { id: "bonfire", name: "Private Bonfire", price: 800, desc: "A Cozy Evening Setup With Firewood And Seating Under The Stars.", icon: <TreePine className="w-5 h-5" /> },
                      { id: "dinner", name: "Candlelight Dinner", price: 2500, desc: "A Romantic Poolside Or Garden Dinner With A 4-Course Menu.", icon: <Users className="w-5 h-5" /> },
                      { id: "decoration", name: "Room Decoration", price: 1500, desc: "Birthday Or Anniversary Floral Decor For Your Arrival.", icon: <Star className="w-5 h-5" /> },
                      { id: "trek", name: "Guided Village Trek", price: 500, desc: "Explore Local Trails With An Experienced Guide (Per Person).", icon: <Bed className="w-5 h-5" /> },
                    ].map((addon) => {
                      const isAdded = state.addOns.some(a => a.id === addon.id);
                      return (
                        <motion.div 
                          key={addon.id} 
                          whileHover={{ scale: 1.03 }}
                          onClick={() => toggleAddOn(addon)}
                          className={`p-6 rounded-2xl border transition-all cursor-pointer group flex items-start gap-4 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] ${
                            isAdded ? 'bg-emerald-500/10 border-emerald-500/50' : 'bg-neutral-900/40 border-white/5 hover:border-white/10'
                          }`}
                        >
                           <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                             isAdded ? 'bg-emerald-500 text-black' : 'bg-white/5 text-neutral-400 group-hover:bg-white/10'
                           }`}>
                             {addon.icon}
                           </div>
                           <div className="flex-1">
                              <div className="flex justify-between items-center mb-1">
                                 <h4 className="font-bold text-sm">{addon.name}</h4>
                                 <span className="text-emerald-500 font-bold text-sm">₹{addon.price}</span>
                              </div>
                              <p className="text-[10px] text-neutral-500 font-light leading-relaxed">{addon.desc}</p>
                           </div>
                           <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                             isAdded ? 'bg-emerald-500 border-emerald-500 text-black' : 'border-neutral-700'
                           }`}>
                              {isAdded && <Check className="w-3 h-3" />}
                           </div>
                        </motion.div>
                      )
                    })}
                 </div>
              </motion.section>

              {/* Room Categories */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 text-emerald-500">
                     <Bed className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold italic">Available <span className="text-emerald-500">Stays</span></h2>
                </div>

                {filteredRooms.map((room) => {
                  const booking = state.selectedRooms.find(r => r.id === room.id);
                  const roomCount = booking?.count || 0;
                  const availableCount = room.totalRooms - room.bookedRooms;
                  const isSoldOut = availableCount === 0;

                  return (
                    <motion.div
                      key={room.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-neutral-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden flex flex-col md:flex-row group transition-all hover:border-emerald-500/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    >
                      {/* Left: Image */}
                      <div className="w-full md:w-80 lg:w-96 relative h-64 md:h-auto min-h-[300px]">
                        <NextImage 
                          src={room.image} 
                          alt={room.name} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
                        
                        {/* Capacity Badge */}
                        <div className="absolute bottom-6 left-6">
                          <div className="px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white flex items-center gap-2">
                            <Users className="w-3 h-3 text-emerald-500" />
                            Max {room.maxCapacity} Guests
                          </div>
                        </div>
                      </div>

                      {/* Right: Content Section */}
                      <div className="flex-1 p-8 md:p-10 flex flex-col">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold italic mb-2">{room.name}</h3>
                            <div className="flex items-center gap-4 text-xs font-medium text-neutral-400">
                              <span className="flex items-center gap-1.5"><Bed className="w-3.5 h-3.5 text-emerald-500" /> {room.type}</span>
                              <div className="w-1 h-1 rounded-full bg-white/10" />
                              <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-emerald-500" /> Luxury Stay</span>
                            </div>
                          </div>

                          <div className="text-left md:text-right">
                            <div className="flex items-baseline gap-1 md:justify-end">
                              <span className="text-3xl font-black text-white">₹{room.price}</span>
                            </div>
                            <span className="text-neutral-500 text-[9px] uppercase font-black tracking-[0.2em] block">Price Per Night</span>
                          </div>
                        </div>

                        <p className="text-neutral-400 font-light leading-relaxed mb-6 text-sm line-clamp-2">
                          {room.description}
                        </p>

                        {/* Amenities Icons */}
                        <div className="flex flex-wrap gap-4 mb-8">
                          {room.amenities.map(amenity => (
                            <div key={amenity} className="text-neutral-500 hover:text-emerald-400 transition-colors" title={amenity}>
                               {amenity === "AC" && <Wind className="w-5 h-5" />}
                               {amenity === "Wi-Fi" && <ArrowRight className="w-5 h-5" />}
                               {amenity === "Private Deck" && <TreePine className="w-5 h-5" />}
                               {amenity === "Forest View" && <TreePine className="w-5 h-5" />}
                               {amenity === "King Bed" && <Bed className="w-5 h-5" />}
                               {amenity === "LED TV" && <Star className="w-5 h-5" />}
                               {amenity === "Tea/Coffee Maker" && <Info className="w-5 h-5" />}
                               {amenity === "Queen Bed" && <Bed className="w-5 h-5" />}
                               {amenity === "Fan" && <Wind className="w-5 h-5" />}
                               {amenity === "Garden Access" && <TreePine className="w-5 h-5" />}
                               {amenity === "Twin/King Bed" && <Bed className="w-5 h-5" />}
                            </div>
                          ))}
                        </div>

                        <div className="mt-auto flex flex-col sm:flex-row items-end sm:items-center justify-between gap-8 pt-8 border-t border-white/5">
                          {/* Availability Dots */}
                          <div className="flex flex-col gap-3">
                             <div className="flex flex-wrap gap-1.5">
                                {Array.from({ length: room.totalRooms }).map((_, i) => (
                                   <div 
                                     key={i} 
                                     className={`w-2.5 h-2.5 rounded-full transition-colors duration-500 ${i < availableCount ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-neutral-800'}`}
                                   />
                                ))}
                             </div>
                             <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500">
                                {availableCount} Rooms Available
                             </span>
                          </div>
                          
                          <div className="flex items-center gap-6">
                            {roomCount > 0 && (
                              <Counter 
                                value={roomCount} 
                                min={0}
                                max={availableCount}
                                onIncrement={() => addRoom({ id: room.id, name: room.name, price: room.price, count: 1 })}
                                onDecrement={() => removeRoom(room.id)}
                                label="Rooms"
                              />
                            )}
                            {roomCount === 0 && (
                              <button 
                                onClick={() => addRoom({ id: room.id, name: room.name, price: room.price, count: 1 })}
                                disabled={isSoldOut}
                                className="bg-emerald-500 text-black font-black uppercase tracking-widest text-[10px] px-8 py-4 rounded-2xl flex items-center gap-3 transition-all shadow-[0_10px_30px_rgba(16,185,129,0.2)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.4)]"
                              >
                                Select Room <ArrowRight className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right: Sticky Booking Summary */}
            <aside className="w-full lg:w-96">
              <div className="sticky top-24 space-y-6">
                <div className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full -mr-16 -mt-16" />
                  
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    Booking <span className="text-emerald-500">Summary</span>
                  </h2>

                  <div className="space-y-4 mb-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-neutral-500">Dates</span>
                      <span className="font-medium text-[10px] sm:text-sm">{state.checkIn || "..."} - {state.checkOut || "..."}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-neutral-500">Guests</span>
                      <span className="font-medium">{state.adults} Adults, {state.children} Children</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-neutral-500">Stay Duration</span>
                      <span className="font-medium">{nights} Night{nights > 1 ? 's' : ''}</span>
                    </div>
                  </div>

                  {/* Selected Rooms List */}
                  {state.selectedRooms.length > 0 && (
                    <div className="mb-4 p-4 bg-white/5 rounded-2xl border border-white/5 space-y-3">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 mb-2 block">Selected Rooms</span>
                      {state.selectedRooms.map(room => (
                        <div key={room.id} className="flex justify-between items-center text-sm group">
                          <span className="text-neutral-300">{room.name} (x{room.count})</span>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">₹{room.price * room.count}</span>
                            <button onClick={() => removeRoom(room.id)} className="text-neutral-600 hover:text-red-400 transition-colors">
                              <Info className="w-3.5 h-3.5 rotate-45" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Selected Add-ons List */}
                  {state.addOns.length > 0 && (
                    <div className="mb-4 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 space-y-3">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-500 mb-2 block">Optional Experiences</span>
                      {state.addOns.map(addon => (
                        <div key={addon.id} className="flex justify-between items-center text-sm group">
                          <span className="text-neutral-300">{addon.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">₹{addon.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-6 border-t border-white/10 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-400 text-sm">Subtotal</span>
                      <span className="font-bold text-lg">₹{subtotal}</span>
                    </div>
                    
                    {state.extraGuestCharge > 0 && (
                      <div className="flex justify-between items-center text-amber-500">
                        <div className="flex items-center gap-1.5 text-sm font-medium">
                          <Info className="w-3.5 h-3.5" />
                          Extra Guest Charge
                        </div>
                        <span className="font-bold">₹{extraGuestTotal}</span>
                      </div>
                    )}

                    {state.isMembershipVerified && (
                      <div className="flex justify-between items-center text-emerald-500 text-sm">
                        <span>Membership Gold (10%)</span>
                        <span className="font-bold">-₹{membershipDiscount}</span>
                      </div>
                    )}

                    {state.promoDiscount > 0 && (
                      <div className="flex justify-between items-center text-emerald-500 text-sm">
                        <span>Promo Applied ({state.promoCode})</span>
                        <span className="font-bold">-₹{promoDiscountAmount}</span>
                      </div>
                    )}

                    <div className="pt-4 flex justify-between items-center">
                      <span className="text-xl font-bold">Total</span>
                      <span className="text-2xl font-bold text-emerald-500">₹{finalTotal}</span>
                    </div>
                  </div>

                  {/* Membership Input */}
                  <div className="mt-8 space-y-3">
                     <label className="text-[10px] uppercase font-bold tracking-widest text-neutral-500">Membership ID</label>
                     <div className="flex gap-2">
                        <input 
                          type="text" 
                          placeholder="Enter ID"
                          value={state.membershipId}
                          onChange={(e) => setMembershipId(e.target.value)}
                          className="bg-neutral-800 border border-white/10 rounded-xl px-4 py-2 text-sm flex-1 focus:outline-none focus:border-emerald-500/50 transition-colors"
                        />
                        <button 
                          onClick={verifyMembership}
                          className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold transition-colors uppercase tracking-widest"
                        >
                          Verify
                        </button>
                     </div>
                     {state.isMembershipVerified && <p className="text-[10px] text-emerald-500 font-bold tracking-wide flex items-center gap-1"><Check className="w-3 h-3" /> Membership verified — 10% discount applied</p>}
                  </div>

                  {/* Promo Code Input */}
                  <div className="mt-6 space-y-3">
                     <label className="text-[10px] uppercase font-bold tracking-widest text-neutral-500">Promo Code</label>
                     <div className="flex gap-2">
                        <input 
                          type="text" 
                          placeholder="CODE"
                          value={promoInput}
                          onChange={(e) => setPromoInput(e.target.value)}
                          className="bg-neutral-800 border border-white/10 rounded-xl px-4 py-2 text-sm flex-1 focus:outline-none focus:border-emerald-500/50 transition-colors"
                        />
                        <button 
                          onClick={() => applyPromoCode(promoInput)}
                          className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold transition-colors uppercase tracking-widest"
                        >
                          Apply
                        </button>
                     </div>
                  </div>

                  <button 
                    onClick={handleContinue}
                    disabled={state.selectedRooms.length === 0}
                    className="w-full bg-emerald-500 text-black font-bold py-4 rounded-full mt-8 hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue Booking
                     <div className="h-6 w-6 bg-black/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <ChevronRight className="w-4 h-4" />
                     </div>
                  </button>
                </div>

                {/* Assistance Corner */}
                <div className="bg-emerald-500/5 border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
                  <div className="relative z-10">
                    <h4 className="font-bold text-neutral-300 mb-1">Need Assistance?</h4>
                    <p className="text-xs text-neutral-500 mb-4 font-light">Call our concierge service at +91 98765 43210</p>
                  </div>
                  <Star className="absolute -bottom-4 -right-4 w-24 h-24 text-emerald-500/5" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
