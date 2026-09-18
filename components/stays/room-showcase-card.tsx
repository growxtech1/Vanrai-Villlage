"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Star,
  MessageCircle,
  ArrowUpRight,
  Bed,
  Users,
  Wind,
  Fan,
  TreePine,
  Wifi,
  Coffee,
  Tv,
  Droplets,
  Sparkles,
  ShieldCheck,
  Utensils,
  Clock,
  Car,
  ChevronLeft,
  ChevronRight,
  Waves,
} from "lucide-react";
import { RoomDetail } from "@/lib/stays-data";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/contact-config";

// Icon mapping helper
function getAmenityIcon(iconName: string) {
  const iconProps = { className: "w-4 h-4 text-emerald-400 flex-shrink-0" };
  switch (iconName) {
    case "Wind":
      return <Wind {...iconProps} />;
    case "Fan":
      return <Fan {...iconProps} />;
    case "Wifi":
      return <Wifi {...iconProps} />;
    case "Coffee":
      return <Coffee {...iconProps} />;
    case "Tv":
      return <Tv {...iconProps} />;
    case "Droplets":
      return <Droplets {...iconProps} />;
    case "Sparkles":
      return <Sparkles {...iconProps} />;
    case "ShieldCheck":
      return <ShieldCheck {...iconProps} />;
    case "Utensils":
      return <Utensils {...iconProps} />;
    case "Clock":
      return <Clock {...iconProps} />;
    case "Car":
      return <Car {...iconProps} />;
    case "Waves":
      return <Waves {...iconProps} />;
    default:
      return <Sparkles {...iconProps} />;
  }
}

interface RoomShowcaseCardProps {
  room: RoomDetail;
  index: number;
  isReversed?: boolean;
}

export function RoomShowcaseCard({ room, index, isReversed }: RoomShowcaseCardProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<"overview" | "amenities" | "inclusions">("overview");

  const currentImage = room.images[activeImageIdx] || room.images[0];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === room.images.length - 1 ? 0 : prev + 1));
  };

  const badgeStyles = {
    amber: "bg-amber-500/15 border-amber-500/30 text-amber-300",
    emerald: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
    blue: "bg-blue-500/15 border-blue-500/30 text-blue-300",
    purple: "bg-purple-500/15 border-purple-500/30 text-purple-300",
  }[room.badge.variant];

  return (
    <div
      id={room.id}
      className="scroll-mt-32 rounded-2xl sm:rounded-3xl bg-neutral-900/40 border border-white/[0.08] backdrop-blur-xl p-4 sm:p-6 lg:p-8 shadow-2xl transition-all duration-300 hover:border-white/[0.16] hover:bg-neutral-900/50"
    >
      <div className={`flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-10 items-stretch ${isReversed ? "lg:grid-flow-dense" : ""}`}>
        
        {/* ===================== GALLERY COLUMN ===================== */}
        <div className={`w-full lg:col-span-6 flex flex-col gap-3 ${isReversed ? "lg:col-start-7" : ""}`}>
          {/* Main Photo Viewport */}
          <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 group select-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage.src}
                initial={{ opacity: 0.4, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.3 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

            {/* Top Badges */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between gap-2 pointer-events-none">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border backdrop-blur-md ${badgeStyles}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                {room.badge.label}
              </span>

              {/* Climate badge */}
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md text-neutral-200 border border-white/10">
                {room.climate.includes("AC") ? <Wind className="w-3.5 h-3.5 text-emerald-400" /> : <Fan className="w-3.5 h-3.5 text-emerald-400" />}
                <span className="hidden xs:inline">{room.climate.includes("AC") ? "Air Conditioned" : "Natural Air"}</span>
              </span>
            </div>

            {/* Image Navigation Arrows */}
            {room.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  aria-label="Previous photo"
                  className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/15 backdrop-blur-md opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextImage}
                  aria-label="Next photo"
                  className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/15 backdrop-blur-md opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-200"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Image Caption & Dots */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/80 pointer-events-none">
              <span className="font-medium drop-shadow-sm truncate max-w-[70%]">
                {currentImage.label}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10">
                {activeImageIdx + 1} / {room.images.length}
              </span>
            </div>
          </div>

          {/* Thumbnails Row */}
          {room.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {room.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIdx(i)}
                  className={`relative aspect-[16/10] rounded-lg overflow-hidden border transition-all ${
                    activeImageIdx === i
                      ? "border-emerald-400 ring-2 ring-emerald-500/30 scale-[0.98]"
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img.src} alt={img.alt} fill sizes="100px" className="object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Quick Specifications Ribbon (No Room Size) */}
          <div className="grid grid-cols-3 gap-2 p-2.5 sm:p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <Users className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase text-neutral-400 font-medium">Capacity</p>
                <p className="font-semibold text-neutral-200 truncate">Max {room.maxAdults} Guests</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <Bed className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase text-neutral-400 font-medium">Bed Setup</p>
                <p className="font-semibold text-neutral-200 truncate">{room.bedType.split(" ")[0]} Bed</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                {room.hasBreakfast ? (
                  <Coffee className="w-3.5 h-3.5" />
                ) : (
                  <Waves className="w-3.5 h-3.5" />
                )}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase text-neutral-400 font-medium">Breakfast</p>
                <p className="font-semibold text-neutral-200 truncate">
                  {room.hasBreakfast ? "Included" : "Room Only"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== DETAILS & PRICING COLUMN ===================== */}
        <div className={`w-full lg:col-span-6 flex flex-col justify-between ${isReversed ? "lg:col-start-1" : ""}`}>
          <div>
            {/* Header / Number & Title */}
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-3xl sm:text-4xl font-light text-neutral-500 font-mono">
                0{index + 1}.
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-tight">
                  {room.name}
                </h2>
                <p className="text-xs sm:text-sm text-emerald-400/90 font-medium italic mt-0.5">
                  {room.tagline}
                </p>
              </div>
            </div>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-2 mb-4 text-xs text-neutral-400">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="font-bold text-white">{room.rating}</span>
              </div>
              <span>•</span>
              <span>{room.reviewsCount} guest reviews</span>
              <span>•</span>
              <span className="text-emerald-400/90">{room.view}</span>
            </div>

            {/* Micro Tabs Navigation */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-4">
              <button
                onClick={() => setActiveTab("overview")}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "overview"
                    ? "bg-neutral-800 text-white font-semibold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("amenities")}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "amenities"
                    ? "bg-neutral-800 text-white font-semibold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Amenities ({room.amenities.length})
              </button>
              <button
                onClick={() => setActiveTab("inclusions")}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "inclusions"
                    ? "bg-neutral-800 text-white font-semibold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Package Perks
              </button>
            </div>

            {/* Tab Contents */}
            <div className="min-h-[160px] sm:min-h-[175px] mb-5">
              {activeTab === "overview" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3 text-xs sm:text-sm text-neutral-300"
                >
                  <p className="leading-relaxed font-light text-neutral-300">
                    {room.longDescription}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {room.highlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-emerald-400" />
                        </div>
                        <span className="text-xs text-neutral-300 truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "amenities" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-2 gap-2.5"
                >
                  {room.amenities.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]"
                    >
                      {getAmenityIcon(item.iconName)}
                      <span className="text-xs text-neutral-300 truncate font-light">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "inclusions" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-2"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200 mb-2">
                    <p className="font-semibold text-emerald-300 mb-0.5">Guest Perks with this Stay:</p>
                    <p className="text-[11px] text-emerald-200/80">
                      {room.hasBreakfast
                        ? "Includes complimentary Pure-Veg breakfast & resort swimming pool access."
                        : "Includes complimentary resort swimming pool access (Room only plan)."}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {room.packageInclusions.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-emerald-400" />
                        </div>
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Pricing & Call-to-Action Bar */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
                  ₹{room.price.toLocaleString("en-IN")}
                </span>
                {room.originalPrice && (
                  <span className="text-xs sm:text-sm text-neutral-500 line-through font-mono">
                    ₹{room.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
                <span className="text-xs text-neutral-400 font-light">/ night</span>
              </div>
              <p className="text-[11px] text-neutral-400 font-light mt-0.5">
                {room.hasBreakfast
                  ? "+ Taxes · Includes Breakfast & Swimming Pool Access"
                  : "+ Taxes · Room Only · Includes Swimming Pool Access"}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.room(room.name))}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Inquire about ${room.name} on WhatsApp`}
                className="flex items-center justify-center gap-1.5 h-11 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white border border-white/10 text-xs font-medium transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="hidden xs:inline">WhatsApp</span>
              </a>

              <Link
                href={`/availability?roomType=${encodeURIComponent(room.type)}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00c97b] hover:from-emerald-400 hover:to-[#00d885] text-neutral-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/40 transition-all duration-200"
              >
                <span>Check Dates</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
