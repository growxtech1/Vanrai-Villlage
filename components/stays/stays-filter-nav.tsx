"use client";

import { motion } from "framer-motion";
import { TreePine, Wind, Bed, Layers, TableProperties, Sparkles } from "lucide-react";
import {
  formatINR,
  WOODEN_COTTAGE_PRICE_PER_NIGHT,
  DELUXE_AC_ROOM_PRICE_PER_NIGHT,
  STANDARD_ROOM_PRICE_PER_NIGHT,
} from "@/constants/pricing";

export type FilterCategory = "all" | "wooden-cottage" | "deluxe-ac" | "standard-room" | "compare";

interface StaysFilterNavProps {
  activeCategory: FilterCategory;
  onSelectCategory: (cat: FilterCategory) => void;
  onScrollToCompare: () => void;
}

const CATEGORIES = [
  {
    id: "all" as FilterCategory,
    label: "All Accommodations",
    badge: "3 Stays",
    icon: Layers,
  },
  {
    id: "wooden-cottage" as FilterCategory,
    label: "Wooden Cottage",
    badge: formatINR(WOODEN_COTTAGE_PRICE_PER_NIGHT),
    icon: TreePine,
  },
  {
    id: "deluxe-ac" as FilterCategory,
    label: "Deluxe AC",
    badge: formatINR(DELUXE_AC_ROOM_PRICE_PER_NIGHT),
    icon: Wind,
  },
  {
    id: "standard-room" as FilterCategory,
    label: "Standard Room",
    badge: formatINR(STANDARD_ROOM_PRICE_PER_NIGHT),
    icon: Bed,
  },
];

export function StaysFilterNav({
  activeCategory,
  onSelectCategory,
  onScrollToCompare,
}: StaysFilterNavProps) {
  return (
    <div className="sticky top-16 md:top-20 z-30 w-full py-3 bg-[#0a0a0a]/85 backdrop-blur-xl border-y border-white/[0.08] shadow-lg shadow-black/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between gap-3">
          {/* Scrollable Category Filter Pills */}
          <div data-lenis-prevent className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide no-scrollbar py-0.5">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`relative flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 select-none ${
                    isActive
                      ? "text-neutral-950 font-semibold"
                      : "text-neutral-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.07]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePillBg"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 to-[#00c97b] shadow-md shadow-emerald-950/50"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? "text-neutral-950" : "text-emerald-400"}`} />
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                        isActive
                          ? "bg-black/15 text-neutral-900 font-bold"
                          : "bg-white/10 text-neutral-400"
                      }`}
                    >
                      {cat.badge}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Action: Jump to Compare Table */}
          <button
            onClick={onScrollToCompare}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/10 text-xs font-medium whitespace-nowrap transition-colors"
          >
            <TableProperties className="w-3.5 h-3.5 text-emerald-400" />
            <span>Compare Features</span>
          </button>
        </div>
      </div>
    </div>
  );
}
