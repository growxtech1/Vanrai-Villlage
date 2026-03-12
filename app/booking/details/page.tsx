"use client";

import React, { useState } from "react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { useBooking } from "@/lib/booking-context";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, User, Phone, Mail, MapPin, CreditCard, MessageSquare, ShieldCheck, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import NextImage from "next/image";

export default function GuestDetailsPage() {
  const { state, calculateTotal } = useBooking();
  const router = useRouter();
  const { subtotal, nights, membershipDiscount, promoDiscountAmount, finalTotal, extraGuestTotal } = calculateTotal();

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    address: "",
    idType: "Aadhar Card",
    idNumber: "",
    specialRequests: ""
  });

  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = () => {
    if (formData.mobileNumber.length >= 10) {
      setIsOtpSent(true);
      // Simulate OTP send
      setTimeout(() => alert("OTP Sent to " + formData.mobileNumber + " (Simulated: 1234)"), 500);
    } else {
      alert("Please enter a valid mobile number");
    }
  };

  const handleVerifyOtp = () => {
    setIsVerifying(true);
    setTimeout(() => {
      if (otp === "1234") {
        setIsOtpVerified(true);
        setIsVerifying(false);
      } else {
        alert("Invalid OTP. Use 1234 for simulation.");
        setIsVerifying(false);
      }
    }, 1000);
  };

  const handleContinueToPayment = () => {
    if (isOtpVerified && formData.fullName && formData.email) {
      router.push("/booking/payment");
    } else if (!isOtpVerified) {
      alert("Please verify your mobile number first");
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Improvised Header with Back Button */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <button 
            onClick={() => router.push("/availability")}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all">
              <ChevronLeft className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest">Back To Stays</span>
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Secure Booking</span>
              <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-bold">
                 <ShieldCheck className="w-3.5 h-3.5" />
                 SSL Encrypted
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left: Guest Details Form */}
            <div className="flex-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-neutral-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-10">
                   <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center border border-emerald-500/30 text-emerald-500">
                      <User className="w-6 h-6" />
                   </div>
                   <div>
                      <h2 className="text-2xl md:text-3xl font-bold">Guest <span className="text-emerald-500">Information</span></h2>
                      <p className="text-neutral-500 text-sm font-light">Please Provide Accurate Details For A Smooth Check-In.</p>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-neutral-500 flex items-center gap-2">
                      <User className="w-3 h-3" /> Full Name
                    </label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-neutral-500 flex items-center gap-2">
                      <Mail className="w-3 h-3" /> Email Address
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                  </div>

                  {/* Mobile & OTP */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-neutral-500 flex items-center gap-2">
                      <Phone className="w-3 h-3" /> Mobile Number
                    </label>
                    <div className="flex gap-4">
                      <div className="relative flex-1">
                        <input 
                          type="tel" 
                          name="mobileNumber"
                          disabled={isOtpVerified}
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors disabled:opacity-50"
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm border-r border-white/10 pr-2">+91</span>
                      </div>
                      {!isOtpVerified && !isOtpSent && (
                        <button 
                          onClick={handleSendOtp}
                          className="px-8 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-colors"
                        >
                          Verify Mobile
                        </button>
                      )}
                      {isOtpVerified && (
                        <div className="px-6 bg-emerald-500/20 border border-emerald-500/30 text-emerald-500 rounded-xl flex items-center gap-2 text-sm font-bold">
                          <ShieldCheck className="w-4 h-4" /> Verified
                        </div>
                      )}
                    </div>

                    <AnimatePresence>
                      {isOtpSent && !isOtpVerified && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4"
                        >
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-neutral-400">Enter The 4-Digit Code Sent To Your Phone (Use 1234)</p>
                            <button onClick={() => setIsOtpSent(false)} className="text-[10px] uppercase font-bold text-neutral-500 hover:text-white">Change Number</button>
                          </div>
                          <div className="flex gap-4">
                            <input 
                              type="text" 
                              maxLength={4}
                              value={otp}
                              onChange={(e) => setOtp(e.target.value)}
                              placeholder="0 0 0 0"
                              className="w-32 bg-neutral-950 border border-white/20 rounded-xl px-4 py-3 text-center tracking-[1em] font-bold focus:outline-none focus:border-emerald-500 transition-colors"
                            />
                            <button 
                              onClick={handleVerifyOtp}
                              disabled={isVerifying}
                              className="flex-1 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-colors disabled:opacity-50"
                            >
                              {isVerifying ? "Verifying..." : "Verify OTP"}
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* ID Proof Type */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-neutral-500 flex items-center gap-2">
                      <CreditCard className="w-3 h-3" /> ID Proof Type
                    </label>
                    <select 
                      name="idType"
                      value={formData.idType}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 appearance-none [color-scheme:dark]"
                    >
                      <option value="Aadhar Card">Aadhar Card</option>
                      <option value="Passport">Passport</option>
                      <option value="Driving License">Driving License</option>
                      <option value="Voter ID">Voter ID</option>
                    </select>
                  </div>

                  {/* ID Number */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-neutral-500 flex items-center gap-2">
                      <ShieldCheck className="w-3 h-3" /> ID Number
                    </label>
                    <input 
                      type="text" 
                      name="idNumber"
                      value={formData.idNumber}
                      onChange={handleInputChange}
                      placeholder="Enter ID Number"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                  </div>

                  {/* Address */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-neutral-500 flex items-center gap-2">
                      <MapPin className="w-3 h-3" /> Physical Address
                    </label>
                    <textarea 
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Home, City, State, ZIP"
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-neutral-500 flex items-center gap-2">
                      <MessageSquare className="w-3 h-3" /> Special Requests (Optional)
                    </label>
                    <textarea 
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      placeholder="Let Us Know If You Need Anything Specific (e.g., Extra Bed, Cake, Flowers)"
                      rows={2}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
                   <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-emerald-500" />
                   </div>
                   <p className="text-xs text-neutral-400 font-light">Your Information Is Secure And Encrypted. We Never Share Your Personal Details With Third Parties.</p>
                </div>
              </motion.div>
            </div>

            {/* Right: Summary Sidebar */}
            <aside className="w-full lg:w-96">
               <div className="sticky top-24 space-y-6">
                  <div className="bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                     <div className="p-8 bg-neutral-800/50 border-b border-white/5">
                        <h3 className="font-bold flex items-center gap-2">
                           Booking <span className="text-emerald-500">Summary</span>
                        </h3>
                     </div>
                     
                     <div className="p-8 space-y-6">
                        {state.selectedRooms.map((room) => (
                          <div key={room.id} className="flex gap-4">
                             <div className="w-16 h-16 rounded-xl bg-neutral-800 border border-white/5 flex-shrink-0 overflow-hidden relative">
                                <NextImage src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" alt={room.name} fill className="object-cover" />
                             </div>
                             <div className="flex-1">
                                <h4 className="text-sm font-bold">{room.name}</h4>
                                <div className="flex justify-between items-center mt-1">
                                   <span className="text-xs text-neutral-500">x{room.count} Night{nights > 1 ? 's' : ''}</span>
                                   <span className="text-sm font-bold">₹{room.price * room.count}</span>
                                </div>
                             </div>
                          </div>
                        ))}

                        <div className="pt-6 border-t border-white/10 space-y-3">
                           <div className="flex justify-between text-sm">
                              <span className="text-neutral-500">Subtotal</span>
                              <span className="font-bold text-neutral-300">₹{subtotal}</span>
                           </div>
                           
                           {state.isMembershipVerified && (
                             <div className="flex justify-between text-sm text-emerald-500">
                                <span>Membership Discount</span>
                                <span className="font-bold">-₹{membershipDiscount}</span>
                             </div>
                           )}

                           {state.promoDiscount > 0 && (
                             <div className="flex justify-between text-sm text-emerald-500">
                                <span>Promo Discount</span>
                                <span className="font-bold">-₹{promoDiscountAmount}</span>
                             </div>
                           )}

                           <div className="flex justify-between pt-4 border-t border-white/5">
                              <span className="text-lg font-bold">Grand Total</span>
                              <span className="text-xl font-bold text-emerald-500">₹{finalTotal}</span>
                           </div>
                        </div>

                        <button 
                          onClick={handleContinueToPayment}
                          className="w-full bg-emerald-500 text-black font-bold py-4 rounded-full mt-4 hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group"
                        >
                          Proceed To Payment
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                     </div>
                  </div>

                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5">
                        <Check className="w-5 h-5 text-emerald-500" />
                     </div>
                     <p className="text-xs text-neutral-400">Immediate Confirmation After Payment</p>
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
