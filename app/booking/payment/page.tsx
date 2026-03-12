"use client";

import React, { useState } from "react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { useBooking } from "@/lib/booking-context";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CreditCard, Landmark, Smartphone, ShieldCheck, Lock, CheckCircle2, QrCode } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import NextImage from "next/image";

export default function PaymentPage() {
  const { calculateTotal } = useBooking();
  const router = useRouter();
  const { finalTotal } = calculateTotal();
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "netbanking">("upi");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      router.push("/booking/confirmation");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Improvised Header with Back Button */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <button 
            onClick={() => router.push("/booking/details")}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all">
              <ChevronLeft className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest">Back To Details</span>
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Payment Security</span>
              <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-bold">
                 <Lock className="w-3.5 h-3.5" />
                 256-bit AES Encryption
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">

          <header className="mb-12">
             <h1 className="text-3xl md:text-5xl font-bold mb-4">Secure <span className="text-emerald-500">Payment</span></h1>
             <div className="flex items-center gap-6 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                   <Lock className="w-4 h-4 text-emerald-500" />
                   SSL Encrypted
                </div>
                <div className="flex items-center gap-2">
                   <ShieldCheck className="w-4 h-4 text-emerald-500" />
                   PCI DSS Compliant
                </div>
             </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Left: Payment Options */}
            <div className="lg:col-span-3 space-y-8">
               
               {/* Selection Tabs */}
               <div className="flex gap-2 p-1.5 bg-neutral-900 border border-white/5 rounded-2xl">
                  <button 
                    onClick={() => setPaymentMethod("upi")}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${paymentMethod === 'upi' ? 'bg-emerald-500 text-black' : 'hover:bg-white/5 text-neutral-400'}`}
                  >
                    <Smartphone className="w-4 h-4" /> UPI
                  </button>
                  <button 
                    onClick={() => setPaymentMethod("card")}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${paymentMethod === 'card' ? 'bg-emerald-500 text-black' : 'hover:bg-white/5 text-neutral-400'}`}
                  >
                    <CreditCard className="w-4 h-4" /> Cards
                  </button>
                  <button 
                    onClick={() => setPaymentMethod("netbanking")}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${paymentMethod === 'netbanking' ? 'bg-emerald-500 text-black' : 'hover:bg-white/5 text-neutral-400'}`}
                  >
                    <Landmark className="w-4 h-4" /> Net Banking
                  </button>
               </div>

               {/* Method Content */}
               <motion.div 
                 key={paymentMethod}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="bg-neutral-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
               >
                  {paymentMethod === "upi" && (
                    <div className="space-y-8">
                       <div className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/5 rounded-2xl text-center">
                          <QrCode className="w-32 h-32 text-white mb-4" />
                          <p className="text-sm text-neutral-400 mb-2">Scan QR Code Using Any UPI App</p>
                          <div className="flex gap-4">
                             <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                                <NextImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" alt="UPI" width={30} height={30} />
                             </div>
                             <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                                <NextImage src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" width={30} height={30} />
                             </div>
                          </div>
                       </div>
                       
                       <div className="space-y-4">
                          <p className="text-xs uppercase font-bold tracking-widest text-neutral-500">Or Enter VPA / UPI ID</p>
                          <div className="flex gap-4">
                             <input 
                               type="text" 
                               placeholder="user@upi"
                               className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                             />
                             <button className="px-6 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors">Verify</button>
                          </div>
                       </div>
                    </div>
                  )}

                  {paymentMethod === "card" && (
                    <div className="space-y-6">
                       <div className="space-y-2">
                          <label className="text-xs uppercase font-bold tracking-widest text-neutral-500">Cardholder Name</label>
                          <input type="text" placeholder="Full Name on Card" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs uppercase font-bold tracking-widest text-neutral-500">Card Number</label>
                          <div className="relative">
                             <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" />
                             <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                          </div>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                             <label className="text-xs uppercase font-bold tracking-widest text-neutral-500">Expiry Date</label>
                             <input type="text" placeholder="MM / YY" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-xs uppercase font-bold tracking-widest text-neutral-500">CVV</label>
                             <input type="password" placeholder="***" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" />
                          </div>
                       </div>
                       <div className="flex items-center gap-3 py-4">
                          <input type="checkbox" id="save-card" className="w-4 h-4 rounded border-white/10 bg-white/5 text-emerald-500 focus:ring-emerald-500" />
                          <label htmlFor="save-card" className="text-xs text-neutral-400">Save Card Details For Future Bookings</label>
                       </div>
                    </div>
                  )}

                  {paymentMethod === "netbanking" && (
                    <div className="space-y-6">
                       <p className="text-xs uppercase font-bold tracking-widest text-neutral-500 mb-4">Choose Your Bank</p>
                       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {["HDFC Bank", "ICICI Bank", "SBI", "Axis Bank", "Kotak", "Yes Bank"].map(bank => (
                            <button key={bank} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all text-sm font-medium">
                               {bank}
                            </button>
                          ))}
                       </div>
                    </div>
                  )}
               </motion.div>
            </div>

            {/* Right: Payment Sidebar */}
            <aside className="lg:col-span-2">
               <div className="sticky top-24 space-y-6">
                  <div className="bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                     <div className="p-8 border-b border-white/5">
                        <h3 className="font-bold">Payment <span className="text-emerald-500">Breakdown</span></h3>
                     </div>
                     <div className="p-8 space-y-4">
                        <div className="flex justify-between text-sm">
                           <span className="text-neutral-500">Total Payable Amount</span>
                           <span className="text-2xl font-bold text-emerald-500">₹{finalTotal}</span>
                        </div>
                        <p className="text-[10px] text-neutral-500 font-light leading-relaxed">By Clicking "Pay Now", You Agree To Our Terms Of Service And Cancellation Policy.</p>
                        
                        <button 
                          onClick={handlePayment}
                          disabled={isProcessing}
                          className="w-full bg-emerald-500 text-black font-bold py-4 rounded-full mt-4 hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                        >
                          {isProcessing ? "Processing..." : "Confirm & Pay Now"}
                          {!isProcessing && <CheckCircle2 className="w-5 h-5" />}
                        </button>
                     </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap gap-4 justify-center opacity-40 grayscale group-hover:grayscale-0 transition-all">
                     <div className="w-12 h-8 relative"><NextImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png" alt="Visa" fill className="object-contain" /></div>
                     <div className="w-12 h-8 relative"><NextImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" fill className="object-contain" /></div>
                     <div className="w-12 h-8 relative"><NextImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="Paypal" fill className="object-contain" /></div>
                  </div>
               </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Processing Overlay */}
      <AnimatePresence>
        {isProcessing && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center gap-6"
          >
            <div className="relative w-24 h-24">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <ShieldCheck className="w-10 h-10 text-emerald-500" />
               </div>
            </div>
            <div className="text-center">
               <h3 className="text-xl font-bold mb-2">Processing Your Payment</h3>
               <p className="text-neutral-500 text-sm">Please Do Not Refresh The Page Or Click Back.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
