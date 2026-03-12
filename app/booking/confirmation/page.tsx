"use client";

import React, { useEffect, useState } from "react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { useBooking } from "@/lib/booking-context";
import { motion } from "framer-motion";
import { CheckCircle2, Download, Home, ArrowRight, Calendar, Users, MapPin, Receipt, Star } from "lucide-react";
import Link from "next/link";
import confetti from "canvas-confetti";

export default function ConfirmationPage() {
  const { state, calculateTotal } = useBooking();
  const { finalTotal, nights } = calculateTotal();
  const [bookingId, setBookingId] = useState("");
  
  useEffect(() => {
    // Generate a random booking ID
    const id = "VV-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setBookingId(id);

    // Celebration!
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
             <motion.div 
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ type: "spring", damping: 12 }}
               className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/20"
             >
                <CheckCircle2 className="w-12 h-12 text-black" />
             </motion.div>
             <motion.h1 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-4xl md:text-6xl font-bold mb-4"
             >
               Booking <span className="text-emerald-500">Confirmed!</span>
             </motion.h1>
             <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="text-neutral-400 text-lg font-light"
             >
               Thank You For Choosing Vanrai Village Resort. We're Excited To Host You!
             </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             
             {/* Left: Booking Details Card */}
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
               className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-8 shadow-2xl"
             >
                <div className="flex justify-between items-start">
                   <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 mb-1 block">Booking ID</span>
                      <h3 className="text-2xl font-mono font-bold text-emerald-500">{bookingId}</h3>
                   </div>
                   <button className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors group">
                      <Download className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400" />
                   </button>
                </div>

                <div className="space-y-6">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/5">
                         <Calendar className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div>
                         <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 block">Dates</span>
                         <span className="text-sm font-medium">{state.checkIn} — {state.checkOut} ({nights} Nights)</span>
                      </div>
                   </div>

                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/5">
                         <Users className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div>
                         <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 block">Guests</span>
                         <span className="text-sm font-medium">{state.adults} Adults, {state.children} Children</span>
                      </div>
                   </div>

                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/5">
                         <MapPin className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div>
                         <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 block">Location</span>
                         <span className="text-sm font-medium">Vanrai Village Resort, Near Ahmednagar</span>
                      </div>
                   </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <Receipt className="w-4 h-4" /> Final Amount Paid
                   </div>
                   <span className="text-2xl font-bold text-emerald-500">₹{finalTotal}</span>
                </div>
             </motion.div>

             {/* Right: Stay Details & Next Steps */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.4 }}
               className="space-y-6"
             >
                <div className="bg-emerald-500 border border-emerald-400/50 rounded-3xl p-8 text-black relative overflow-hidden group">
                   <Star className="absolute -bottom-4 -right-4 w-32 h-32 text-black/10" />
                   <h3 className="text-xl font-bold mb-4">You're All Set!</h3>
                   <p className="text-sm font-medium leading-relaxed mb-6">A Confirmation Email With The Invoice And Check-In Instructions Has Been Sent To Your Email Address.</p>
                   <Link href="/" className="inline-flex items-center gap-2 font-bold border-b-2 border-black pb-1 hover:gap-4 transition-all">
                      View My Booking <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>

                <div className="bg-neutral-900/40 border border-white/10 rounded-3xl p-8">
                   <h4 className="font-bold mb-4">Important Information</h4>
                    <ul className="space-y-3 text-xs text-neutral-400 font-light">
                       <li className="flex gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 flex-shrink-0" />
                          Check-In: 12:00 PM | Check-Out: 11:00 AM
                       </li>
                       <li className="flex gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 flex-shrink-0" />
                          Valid ID Proof Is Mandatory For All Guests During Check-In.
                       </li>
                       <li className="flex gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 flex-shrink-0" />
                          Carry A Copy Of The Booking Confirmation.
                       </li>
                    </ul>
                </div>

                <div className="flex gap-4">
                   <Link href="/" className="flex-1 bg-white text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors">
                      <Home className="w-4 h-4" /> Return Home
                   </Link>
                   <button className="flex-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-bold py-4 rounded-2xl hover:bg-emerald-500/20 transition-colors">
                      Help Desk
                   </button>
                </div>
             </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
