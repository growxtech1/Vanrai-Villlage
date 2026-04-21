"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Home, Search, ChevronUp, ChevronDown, Info } from "lucide-react";
import { useBooking, RoomType } from "@/lib/booking-context";
import { useRouter } from "next/navigation";
import { DayPicker } from "react-day-picker";
import { format, isBefore, isAfter, startOfToday } from "date-fns";

const CalendarDropdown = ({ selected, onSelect, disabledBefore }: { selected?: Date, onSelect: (date?: Date) => void, disabledBefore?: Date }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 10, scale: 0.95 }}
    className="absolute top-[calc(100%+8px)] left-0 md:left-auto md:right-auto bg-neutral-900/98 backdrop-blur-3xl border border-white/10 rounded-3xl p-3 shadow-3xl z-50 min-w-[280px] sm:min-w-[320px]"
    onClick={(e) => e.stopPropagation()}
  >
    <style dangerouslySetInnerHTML={{ __html: `
      .rdp { 
        --rdp-cell-size: 38px; 
        --rdp-accent-color: #10b981ff; 
        --rdp-background-color: rgba(16, 185, 129, 0.1); 
        margin: 0; 
        font-family: 'General Sans', sans-serif;
      }
      .rdp-day_selected { 
        background-color: var(--rdp-accent-color) !important; 
        color: #000 !important; 
        font-weight: 700; 
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
      }
      .rdp-day_today {
        color: #10b981 !important;
        font-weight: 700;
      }
      .rdp-day:hover:not(.rdp-day_selected) { 
        background-color: var(--rdp-background-color) !important; 
        color: #10b981 !important; 
        border-radius: 12px; 
      }
      .rdp-button:focus-visible { border-color: var(--rdp-accent-color) !important; }
      .rdp-head_cell { 
        font-size: 11px; 
        text-transform: uppercase; 
        font-weight: 700; 
        color: #4b5563; 
        letter-spacing: 0.1em;
        padding-bottom: 1rem;
      }
      .rdp-nav_button { 
        color: #10b981 !important; 
        opacity: 0.8; 
        transition: all 0.2s;
      }
      .rdp-nav_button:hover { 
        opacity: 1; 
        background: rgba(16, 185, 129, 0.1) !important;
        border-radius: 8px;
      }
      .rdp-caption_label { 
        font-weight: 700; 
        color: white; 
        font-size: 15px; 
        text-transform: uppercase; 
        letter-spacing: 0.05em; 
      }
    `}} />
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={onSelect}
      disabled={(date) => (disabledBefore ? isBefore(date, disabledBefore) : false)}
      className="text-white"
    />
  </motion.div>
);

const Counter = ({ value, onIncrement, onDecrement, label, min = 0 }: { value: number, onIncrement: () => void, onDecrement: () => void, label: string, min?: number }) => (
  <div className="flex items-center justify-between gap-4 py-2 px-1">
    <span className="text-sm font-medium text-neutral-300">{label}</span>
    <div className="flex items-center gap-3">
      <button 
        onClick={(e) => { e.stopPropagation(); onDecrement(); }}
        disabled={value <= min}
        className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all disabled:opacity-20 disabled:cursor-not-allowed group"
      >
        <span className="text-xl leading-none group-hover:text-emerald-500 transition-colors">−</span>
      </button>
      <span className="text-sm font-bold w-4 text-center">{value}</span>
      <button 
        onClick={(e) => { e.stopPropagation(); onIncrement(); }}
        className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all group"
      >
        <span className="text-xl leading-none group-hover:text-emerald-500 transition-colors">+</span>
      </button>
    </div>
  </div>
);

export const BookingBar = () => {
  const { state, setCheckIn, setCheckOut, setAdults, setChildren, setRoomType } = useBooking();
  const [activeDropdown, setActiveDropdown] = React.useState<"checkIn" | "checkOut" | "guests" | "roomType" | null>(null);
  const router = useRouter();

  const handleSearch = () => {
    setActiveDropdown(null);
    const params = new URLSearchParams();
    if (state.checkIn) params.set("checkIn", state.checkIn);
    if (state.checkOut) params.set("checkOut", state.checkOut);
    params.set("adults", state.adults.toString());
    params.set("children", state.children.toString());
    params.set("roomType", state.roomType);
    
    router.push(`/availability?${params.toString()}`);
  };

  // Close dropdowns on click outside
  React.useEffect(() => {
    const handleClick = () => setActiveDropdown(null);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <div className="flex flex-col md:flex-row items-stretch md:items-center bg-neutral-900/60 backdrop-blur-2xl rounded-[2rem] border border-white/10 p-2 gap-1 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* Check-in */}
          <div 
            onClick={(e) => { e.stopPropagation(); setActiveDropdown(activeDropdown === "checkIn" ? null : "checkIn"); }}
            className="flex-[1.2] flex flex-col px-6 py-3 border-b md:border-b-0 md:border-r border-white/5 hover:bg-white/5 transition-all cursor-pointer group rounded-t-[1.5rem] md:rounded-none md:rounded-l-[1.5rem] relative"
          >
            <label className="text-[9px] tracking-[0.2em] text-emerald-500/70 font-black mb-1.5 flex items-center gap-2">
              <Calendar className="w-3 h-3" />
              Check-In
            </label>
            <div className="relative h-6 flex items-center">
              <span className="text-sm font-bold text-neutral-200 group-hover:text-white transition-colors">
                {state.checkIn ? format(new Date(state.checkIn), 'dd MMM yyyy') : "Select Date"}
              </span>
            </div>

            <AnimatePresence>
              {activeDropdown === "checkIn" && (
                <CalendarDropdown 
                  selected={state.checkIn ? new Date(state.checkIn) : undefined}
                  onSelect={(date) => {
                    if (date) {
                      setCheckIn(format(date, 'yyyy-MM-dd'));
                      setActiveDropdown("checkOut"); // Auto move to checkout
                    }
                  }}
                  disabledBefore={startOfToday()}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Check-out */}
          <div 
            onClick={(e) => { e.stopPropagation(); setActiveDropdown(activeDropdown === "checkOut" ? null : "checkOut"); }}
            className="flex-[1.2] flex flex-col px-6 py-3 border-b md:border-b-0 md:border-r border-white/5 hover:bg-white/5 transition-all cursor-pointer group relative"
          >
            <label className="text-[9px] tracking-[0.2em] text-emerald-500/70 font-black mb-1.5 flex items-center gap-2">
              <Calendar className="w-3 h-3" />
              Check-Out
            </label>
            <div className="relative h-6 flex items-center">
              <span className="text-sm font-bold text-neutral-200 group-hover:text-white transition-colors">
                {state.checkOut ? format(new Date(state.checkOut), 'dd MMM yyyy') : "Select Date"}
              </span>
            </div>

            <AnimatePresence>
              {activeDropdown === "checkOut" && (
                <CalendarDropdown 
                  selected={state.checkOut ? new Date(state.checkOut) : undefined}
                  onSelect={(date) => {
                    if (date) {
                      setCheckOut(format(date, 'yyyy-MM-dd'));
                      setActiveDropdown(null);
                    }
                  }}
                  disabledBefore={state.checkIn ? new Date(state.checkIn) : startOfToday()}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Guests Selection */}
          <div 
            onClick={(e) => { e.stopPropagation(); setActiveDropdown(activeDropdown === "guests" ? null : "guests"); }}
            className="flex-[1.5] flex flex-col px-6 py-3 border-b md:border-b-0 md:border-r border-white/5 hover:bg-white/5 transition-all cursor-pointer group relative"
          >
            <label className="text-[9px] tracking-[0.2em] text-emerald-500/70 font-black mb-1.5 flex items-center gap-2">
              <Users className="w-3 h-3" />
              Guests
            </label>
            <div className="flex items-center justify-between text-neutral-200 group-hover:text-white transition-colors">
              <span className="text-sm font-bold">{state.adults} Adults, {state.children} Children</span>
              <ChevronDown className={`w-4 h-4 text-emerald-500/50 transition-transform ${activeDropdown === "guests" ? "rotate-180" : ""}`} />
            </div>

            <AnimatePresence>
              {activeDropdown === "guests" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-72 bg-neutral-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl z-50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none" />
                  <div className="relative space-y-2">
                    <Counter 
                      label="Adults" 
                      value={state.adults} 
                      onIncrement={() => setAdults(state.adults + 1)} 
                      onDecrement={() => setAdults(Math.max(1, state.adults - 1))}
                      min={1}
                    />
                    <div className="h-px bg-white/5 my-1" />
                    <Counter 
                      label="Children" 
                      value={state.children} 
                      onIncrement={() => setChildren(state.children + 1)} 
                      onDecrement={() => setChildren(Math.max(0, state.children - 1))}
                    />
                    
                    {state.adults === 3 && (
                      <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl flex gap-2 items-start">
                        <Info className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-[10px] text-amber-200/80 leading-tight">Extra guest charge (₹1000/night) applies for the 3rd adult.</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Room Type */}
          <div
            onClick={(e) => { e.stopPropagation(); setActiveDropdown(activeDropdown === "roomType" ? null : "roomType"); }}
            className="flex-1 flex flex-col px-6 py-3 hover:bg-white/5 transition-all cursor-pointer group relative"
          >
            <label className="text-[9px] tracking-[0.2em] text-emerald-500/70 font-black mb-1.5 flex items-center gap-2">
              <Home className="w-3 h-3" />
              Stay Type
            </label>
            <div className="flex items-center justify-between text-neutral-200 group-hover:text-white transition-colors">
              <span className="text-sm font-bold truncate">{state.roomType}</span>
              <ChevronDown className={`w-4 h-4 text-emerald-500/50 transition-transform ${activeDropdown === "roomType" ? "rotate-180" : ""}`} />
            </div>
            <AnimatePresence>
              {activeDropdown === "roomType" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-[calc(100%+8px)] right-0 md:left-0 w-56 bg-neutral-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50"
                >
                  <div className="flex flex-col">
                    {(["All Experiences", "Wooden Cottage", "Deluxe AC Room", "Standard Room"] as const).map((type) => (
                      <button
                        key={type}
                        onClick={() => setRoomType(type === "All Experiences" ? "All" : type)}
                        className={`px-4 py-3 text-sm text-left hover:bg-emerald-500 hover:text-black transition-all font-medium ${state.roomType === (type === "All Experiences" ? "All" : type) ? 'bg-emerald-500/10 text-emerald-400' : 'text-neutral-400'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Search Button */}
          <div className="p-1">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSearch}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase tracking-widest text-xs h-14 md:aspect-square md:w-14 rounded-2xl md:rounded-[1.3rem] flex items-center justify-center gap-3 md:gap-0 transition-all shadow-[0_10px_30px_rgba(16,185,129,0.3)] group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="md:hidden relative z-10">Search Stays</span>
              <Search className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
