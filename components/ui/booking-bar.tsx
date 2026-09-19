"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Home, Search, ChevronDown, Info, X, Check } from "lucide-react";
import { useBooking, RoomType } from "@/lib/booking-context";
import { useRouter } from "next/navigation";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format, isBefore, startOfToday } from "date-fns";

const CalendarDropdown = ({ 
  selected, 
  onSelect, 
  disabledBefore,
  onClose,
  title = "Select Date"
}: { 
  selected?: Date, 
  onSelect: (date?: Date) => void, 
  disabledBefore?: Date,
  onClose?: () => void,
  title?: string
}) => (
  <motion.div 
    data-lenis-prevent
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className="absolute inset-0 z-50 bg-[#161717]/98 backdrop-blur-3xl rounded-[28px] p-5 flex flex-col justify-between border border-white/15 shadow-2xl"
    onClick={(e) => e.stopPropagation()}
  >
    <div className="flex items-center justify-between pb-3 border-b border-white/10">
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4 text-[#00c97b]" />
        <span className="text-sm font-bold text-white tracking-wide">{title}</span>
      </div>
      {onClose && (
        <button 
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>

    <div className="flex-1 flex items-center justify-center py-1 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .rdp { 
          --rdp-cell-size: 32px; 
          --rdp-accent-color: #00c97b; 
          --rdp-background-color: rgba(0, 201, 123, 0.12); 
          margin: 0 auto; 
          font-family: inherit;
        }
        .rdp-day_selected { 
          background-color: var(--rdp-accent-color) !important; 
          color: #000 !important; 
          font-weight: 700; 
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 201, 123, 0.4);
        }
        .rdp-day_today {
          color: #00c97b !important;
          font-weight: 700;
        }
        .rdp-day:hover:not(.rdp-day_selected) { 
          background-color: var(--rdp-background-color) !important; 
          color: #00c97b !important; 
          border-radius: 10px; 
        }
        .rdp-button:focus-visible { border-color: var(--rdp-accent-color) !important; }
        .rdp-head_cell { 
          font-size: 10px; 
          text-transform: uppercase; 
          font-weight: 700; 
          color: #737373; 
          letter-spacing: 0.1em;
          padding-bottom: 0.5rem;
        }
        .rdp-nav_button { 
          color: #00c97b !important; 
          opacity: 0.85; 
          transition: all 0.2s;
        }
        .rdp-nav_button:hover { 
          opacity: 1; 
          background: rgba(0, 201, 123, 0.15) !important;
          border-radius: 8px;
        }
        .rdp-caption_label { 
          font-weight: 700; 
          color: white; 
          font-size: 14px; 
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
    </div>

    {onClose && (
      <button
        onClick={onClose}
        className="w-full py-2.5 bg-[#00c97b] hover:bg-[#00b56e] text-neutral-950 font-black text-xs uppercase tracking-widest rounded-xl transition-colors"
      >
        Done
      </button>
    )}
  </motion.div>
);

const DesktopCalendarDropdown = ({ selected, onSelect, disabledBefore }: { selected?: Date, onSelect: (date?: Date) => void, disabledBefore?: Date }) => (
  <motion.div 
    data-lenis-prevent
    initial={{ opacity: 0, y: 10, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 10, scale: 0.95 }}
    className="absolute top-[calc(100%+8px)] left-0 md:left-auto md:right-auto bg-neutral-900/98 backdrop-blur-3xl border border-white/10 rounded-3xl p-3 shadow-3xl z-50 min-w-[280px] sm:min-w-[320px]"
    onClick={(e) => e.stopPropagation()}
  >
    <style dangerouslySetInnerHTML={{ __html: `
      .rdp { 
        --rdp-cell-size: 38px; 
        --rdp-accent-color: #00c97b; 
        --rdp-background-color: rgba(0, 201, 123, 0.12); 
        margin: 0; 
        font-family: inherit;
      }
      .rdp-day_selected { 
        background-color: var(--rdp-accent-color) !important; 
        color: #000 !important; 
        font-weight: 700; 
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 201, 123, 0.4);
      }
      .rdp-day_today {
        color: #00c97b !important;
        font-weight: 700;
      }
      .rdp-day:hover:not(.rdp-day_selected) { 
        background-color: var(--rdp-background-color) !important; 
        color: #00c97b !important; 
        border-radius: 12px; 
      }
      .rdp-button:focus-visible { border-color: var(--rdp-accent-color) !important; }
      .rdp-head_cell { 
        font-size: 11px; 
        text-transform: uppercase; 
        font-weight: 700; 
        color: #737373; 
        letter-spacing: 0.1em;
        padding-bottom: 1rem;
      }
      .rdp-nav_button { 
        color: #00c97b !important; 
        opacity: 0.8; 
        transition: all 0.2s;
      }
      .rdp-nav_button:hover { 
        opacity: 1; 
        background: rgba(0, 201, 123, 0.15) !important;
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
  <div className="flex items-center justify-between gap-4 py-3 px-1">
    <span className="text-sm font-semibold text-neutral-200">{label}</span>
    <div className="flex items-center gap-3">
      <button 
        onClick={(e) => { e.stopPropagation(); onDecrement(); }}
        disabled={value <= min}
        className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all disabled:opacity-20 disabled:cursor-not-allowed group text-white"
        aria-label={`Decrease ${label}`}
      >
        <span className="text-xl leading-none group-hover:text-[#00c97b] transition-colors">−</span>
      </button>
      <span className="text-base font-bold w-5 text-center text-white">{value}</span>
      <button 
        onClick={(e) => { e.stopPropagation(); onIncrement(); }}
        className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all group text-white"
        aria-label={`Increase ${label}`}
      >
        <span className="text-xl leading-none group-hover:text-[#00c97b] transition-colors">+</span>
      </button>
    </div>
  </div>
);

export const BookingBar = () => {
  const { state, setCheckIn, setCheckOut, setAdults, setChildren, setRoomType } = useBooking();
  const [activeDropdown, setActiveDropdown] = useState<"checkIn" | "checkOut" | "guests" | "roomType" | null>(null);
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

  // Close dropdowns on outside click for desktop
  React.useEffect(() => {
    const handleClick = () => {
      if (window.innerWidth >= 768) {
        setActiveDropdown(null);
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* ========================================================================= */}
      {/* MOBILE SCREEN PRESENTATION (Matches user reference screenshot)             */}
      {/* ========================================================================= */}
      <div className="block md:hidden w-full max-w-[380px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#181919]/95 backdrop-blur-2xl rounded-[32px] border border-white/10 p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.85)] text-left overflow-hidden"
        >
          {/* Row 1: Check-In */}
          <div 
            onClick={() => setActiveDropdown(activeDropdown === "checkIn" ? null : "checkIn")}
            className="cursor-pointer group select-none transition-colors"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Calendar className="w-4 h-4 text-[#00c97b]" />
              <span className="text-[#00c97b] font-bold text-xs sm:text-[13px] tracking-wider uppercase">Check-In</span>
            </div>
            <div className="text-white font-bold text-lg sm:text-xl font-sans tracking-tight">
              {state.checkIn ? format(new Date(state.checkIn), 'dd MMM yyyy') : "Select Date"}
            </div>
          </div>

          <div className="h-px bg-white/[0.08] my-4 sm:my-5" />

          {/* Row 2: Check-Out */}
          <div 
            onClick={() => setActiveDropdown(activeDropdown === "checkOut" ? null : "checkOut")}
            className="cursor-pointer group select-none transition-colors"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Calendar className="w-4 h-4 text-[#00c97b]" />
              <span className="text-[#00c97b] font-bold text-xs sm:text-[13px] tracking-wider uppercase">Check-Out</span>
            </div>
            <div className="text-white font-bold text-lg sm:text-xl font-sans tracking-tight">
              {state.checkOut ? format(new Date(state.checkOut), 'dd MMM yyyy') : "Select Date"}
            </div>
          </div>

          <div className="h-px bg-white/[0.08] my-4 sm:my-5" />

          {/* Row 3: Guests */}
          <div 
            onClick={() => setActiveDropdown(activeDropdown === "guests" ? null : "guests")}
            className="cursor-pointer group select-none transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Users className="w-4 h-4 text-[#00c97b]" />
                  <span className="text-[#00c97b] font-bold text-xs sm:text-[13px] tracking-wider uppercase">Guests</span>
                </div>
                <div className="text-white font-bold text-lg sm:text-xl font-sans tracking-tight">
                  {state.adults} Adults, {state.children} Children
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-[#00c97b] transition-transform duration-300 ${activeDropdown === "guests" ? "rotate-180" : ""}`} />
            </div>
          </div>

          <div className="h-px bg-white/[0.08] my-4 sm:my-5" />

          {/* Row 4: Stay Type */}
          <div 
            onClick={() => setActiveDropdown(activeDropdown === "roomType" ? null : "roomType")}
            className="cursor-pointer group select-none transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Home className="w-4 h-4 text-[#00c97b]" />
                  <span className="text-[#00c97b] font-bold text-xs sm:text-[13px] tracking-wider uppercase">Stay Type</span>
                </div>
                <div className="text-white font-bold text-lg sm:text-xl font-sans tracking-tight">
                  {state.roomType}
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-[#00c97b] transition-transform duration-300 ${activeDropdown === "roomType" ? "rotate-180" : ""}`} />
            </div>
          </div>

          {/* Row 5: Search Stays Button */}
          <div className="mt-6 sm:mt-7">
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleSearch}
              className="w-full bg-[#00c97b] hover:bg-[#00b56e] active:scale-[0.98] text-neutral-950 font-black text-sm tracking-[0.14em] uppercase h-14 sm:h-[58px] rounded-[22px] sm:rounded-[24px] flex items-center justify-center gap-3 shadow-[0_12px_28px_rgba(0,201,123,0.35)] transition-all"
            >
              <span>SEARCH STAYS</span>
              <Search className="w-5 h-5 text-neutral-950 stroke-[2.5]" />
            </motion.button>
          </div>

          {/* Mobile Overlay Dropdowns */}
          <AnimatePresence>
            {activeDropdown === "checkIn" && (
              <CalendarDropdown 
                selected={state.checkIn ? new Date(state.checkIn) : undefined}
                title="Select Check-In Date"
                onSelect={(date) => {
                  if (date) {
                    setCheckIn(format(date, 'yyyy-MM-dd'));
                    setActiveDropdown("checkOut");
                  }
                }}
                onClose={() => setActiveDropdown(null)}
                disabledBefore={startOfToday()}
              />
            )}

            {activeDropdown === "checkOut" && (
              <CalendarDropdown 
                selected={state.checkOut ? new Date(state.checkOut) : undefined}
                title="Select Check-Out Date"
                onSelect={(date) => {
                  if (date) {
                    setCheckOut(format(date, 'yyyy-MM-dd'));
                    setActiveDropdown(null);
                  }
                }}
                onClose={() => setActiveDropdown(null)}
                disabledBefore={state.checkIn ? new Date(state.checkIn) : startOfToday()}
              />
            )}

            {activeDropdown === "guests" && (
              <motion.div 
                data-lenis-prevent
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 z-50 bg-[#161717]/98 backdrop-blur-3xl rounded-[28px] p-6 flex flex-col justify-between border border-white/15 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#00c97b]" />
                      <span className="text-sm font-bold text-white tracking-wide">Select Guests</span>
                    </div>
                    <button 
                      onClick={() => setActiveDropdown(null)}
                      className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                      aria-label="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="py-4 space-y-1">
                    <Counter 
                      label="Adults" 
                      value={state.adults} 
                      onIncrement={() => setAdults(state.adults + 1)} 
                      onDecrement={() => setAdults(Math.max(1, state.adults - 1))}
                      min={1}
                    />
                    <div className="h-px bg-white/[0.08]" />
                    <Counter 
                      label="Children" 
                      value={state.children} 
                      onIncrement={() => setChildren(state.children + 1)} 
                      onDecrement={() => setChildren(Math.max(0, state.children - 1))}
                    />

                    {state.adults === 3 && (
                      <div className="mt-3 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl flex gap-2 items-start">
                        <Info className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-[11px] text-amber-200/80 leading-tight">Extra guest charge (₹1000/night) applies for the 3rd adult.</p>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setActiveDropdown(null)}
                  className="w-full py-3 bg-[#00c97b] hover:bg-[#00b56e] text-neutral-950 font-black text-xs uppercase tracking-widest rounded-xl transition-colors"
                >
                  Done
                </button>
              </motion.div>
            )}

            {activeDropdown === "roomType" && (
              <motion.div 
                data-lenis-prevent
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 z-50 bg-[#161717]/98 backdrop-blur-3xl rounded-[28px] p-6 flex flex-col justify-between border border-white/15 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4 text-[#00c97b]" />
                      <span className="text-sm font-bold text-white tracking-wide">Select Stay Type</span>
                    </div>
                    <button 
                      onClick={() => setActiveDropdown(null)}
                      className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                      aria-label="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="py-3 space-y-1.5">
                    {(["All", "Wooden Cottage", "Deluxe AC Room", "Standard Room"] as const).map((type) => {
                      const isSelected = state.roomType === type;
                      return (
                        <button
                          key={type}
                          onClick={() => {
                            setRoomType(type);
                            setActiveDropdown(null);
                          }}
                          className={`w-full px-4 py-3 rounded-xl text-left text-sm font-semibold flex items-center justify-between transition-all ${
                            isSelected 
                              ? 'bg-[#00c97b] text-neutral-950 font-bold shadow-md shadow-emerald-950/20' 
                              : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span>{type}</span>
                          {isSelected && <Check className="w-4 h-4 text-neutral-950 stroke-[3]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={() => setActiveDropdown(null)}
                  className="w-full py-3 bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-colors"
                >
                  Cancel
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP BAR PRESENTATION (Horizontal floating bar for md: and above)        */}
      {/* ========================================================================= */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden md:block relative"
      >
        <div className="flex flex-row items-center bg-neutral-900/80 backdrop-blur-2xl rounded-[1.75rem] border border-white/10 p-1.5 gap-1 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          
          {/* Check-in */}
          <div 
            onClick={(e) => { e.stopPropagation(); setActiveDropdown(activeDropdown === "checkIn" ? null : "checkIn"); }}
            className="flex-[1.2] flex flex-col px-5 py-2.5 border-r border-white/5 hover:bg-white/5 transition-all cursor-pointer group rounded-l-[1.3rem] relative"
          >
            <label className="text-[9px] tracking-[0.2em] text-[#00c97b] font-bold mb-1 flex items-center gap-1.5 uppercase">
              <Calendar className="w-3 h-3 text-[#00c97b]" />
              Check-In
            </label>
            <div className="relative h-5 flex items-center">
              <span className="text-xs sm:text-sm font-bold text-white transition-colors">
                {state.checkIn ? format(new Date(state.checkIn), 'dd MMM yyyy') : "Select Date"}
              </span>
            </div>

            <AnimatePresence>
              {activeDropdown === "checkIn" && (
                <DesktopCalendarDropdown 
                  selected={state.checkIn ? new Date(state.checkIn) : undefined}
                  onSelect={(date) => {
                    if (date) {
                      setCheckIn(format(date, 'yyyy-MM-dd'));
                      setActiveDropdown("checkOut");
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
            className="flex-[1.2] flex flex-col px-5 py-2.5 border-r border-white/5 hover:bg-white/5 transition-all cursor-pointer group relative"
          >
            <label className="text-[9px] tracking-[0.2em] text-[#00c97b] font-bold mb-1 flex items-center gap-1.5 uppercase">
              <Calendar className="w-3 h-3 text-[#00c97b]" />
              Check-Out
            </label>
            <div className="relative h-5 flex items-center">
              <span className="text-xs sm:text-sm font-bold text-white transition-colors">
                {state.checkOut ? format(new Date(state.checkOut), 'dd MMM yyyy') : "Select Date"}
              </span>
            </div>

            <AnimatePresence>
              {activeDropdown === "checkOut" && (
                <DesktopCalendarDropdown 
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
            className="flex-[1.4] flex flex-col px-5 py-2.5 border-r border-white/5 hover:bg-white/5 transition-all cursor-pointer group relative"
          >
            <label className="text-[9px] tracking-[0.2em] text-[#00c97b] font-bold mb-1 flex items-center gap-1.5 uppercase">
              <Users className="w-3 h-3 text-[#00c97b]" />
              Guests
            </label>
            <div className="flex items-center justify-between text-white transition-colors">
              <span className="text-xs sm:text-sm font-bold">{state.adults} Adults, {state.children} Children</span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#00c97b] transition-transform ${activeDropdown === "guests" ? "rotate-180" : ""}`} />
            </div>

            <AnimatePresence>
              {activeDropdown === "guests" && (
                <motion.div 
                  data-lenis-prevent
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-[calc(100%+8px)] left-0 w-72 bg-neutral-900/98 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl z-50 overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
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
                      <div className="mt-3 p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl flex gap-2 items-start">
                        <Info className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
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
            className="flex-1 flex flex-col px-5 py-2.5 hover:bg-white/5 transition-all cursor-pointer group relative"
          >
            <label className="text-[9px] tracking-[0.2em] text-[#00c97b] font-bold mb-1 flex items-center gap-1.5 uppercase">
              <Home className="w-3 h-3 text-[#00c97b]" />
              Stay Type
            </label>
            <div className="flex items-center justify-between text-white transition-colors">
              <span className="text-xs sm:text-sm font-bold truncate">{state.roomType}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#00c97b] transition-transform ${activeDropdown === "roomType" ? "rotate-180" : ""}`} />
            </div>
            <AnimatePresence>
              {activeDropdown === "roomType" && (
                <motion.div 
                  data-lenis-prevent
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-[calc(100%+8px)] right-0 w-56 bg-neutral-900/98 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50 p-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex flex-col space-y-0.5">
                    {(["All", "Wooden Cottage", "Deluxe AC Room", "Standard Room"] as const).map((type) => (
                      <button
                        key={type}
                        onClick={() => {
                          setRoomType(type);
                          setActiveDropdown(null);
                        }}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold text-left hover:bg-[#00c97b] hover:text-neutral-950 transition-all ${state.roomType === type ? 'bg-[#00c97b]/15 text-[#00c97b]' : 'text-neutral-300'}`}
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
          <div className="p-0.5">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSearch}
              className="bg-[#00c97b] hover:bg-[#00b56e] text-neutral-950 font-black uppercase tracking-widest text-xs h-12 aspect-square w-12 rounded-[1.1rem] flex items-center justify-center transition-all shadow-[0_10px_25px_rgba(0,201,123,0.3)] group overflow-hidden relative"
              aria-label="Search accommodations"
            >
              <Search className="w-4 h-4 text-neutral-950 stroke-[2.5] group-hover:scale-110 transition-transform" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
