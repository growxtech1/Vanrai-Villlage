"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";

export function StaysMobileBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls down beyond hero (~450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
          className="fixed bottom-3 left-3 right-20 z-30 md:hidden"
        >
          <div className="flex items-center justify-between gap-3 p-2.5 px-3.5 rounded-2xl bg-neutral-900/95 border border-white/15 backdrop-blur-2xl shadow-2xl shadow-black/80">
            <div className="min-w-0">
              <span className="text-[10px] text-neutral-400 font-light block truncate">
                Vanrai Stays
              </span>
              <p className="text-xs font-bold text-white truncate font-mono">
                From ₹2,500 <span className="text-[10px] font-sans font-normal text-emerald-400">/ night</span>
              </p>
            </div>

            <Link
              href="/availability"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-[#00c97b] text-neutral-950 font-bold text-xs shadow-md shadow-emerald-950/40 flex-shrink-0"
            >
              <span>Check Dates</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
