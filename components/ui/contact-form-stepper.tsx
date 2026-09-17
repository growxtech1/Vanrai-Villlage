"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    User, Phone, Mail, ArrowRight, ArrowLeft, Check,
    Calendar, Briefcase, Gift, PartyPopper, Trophy,
    Table, Bed, Users, Utensils, Loader2, Clock, ChevronLeft, ChevronRight, MapPin,
    CheckCircle2, Sparkles
} from "lucide-react";
import { RESORT_CONTACT, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/contact-config";

// Types
type EventType = "wedding" | "corporate" | "birthday" | "festive" | "sports" | "picnic";
type CateringType = "veg" | "non-veg" | "both" | null;

interface FormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    eventType: EventType | "";
    rooms: number;
    pax: number;
    catering: boolean;
    cateringType: CateringType;
    numDays: number;
    date: Date | null;
}

// Calendar Helpers
const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    return { days, firstDay };
};

const addDays = (date: Date, days: number) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

const isSameDay = (d1: Date, d2: Date) => {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
};

const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
};

const steps = [
    { id: 1, title: "Personal Details", subtitle: "Name & Contact", icon: User },
    { id: 2, title: "Event Details", subtitle: "Occasion & Dates", icon: Calendar },
    { id: 3, title: "Requirements", subtitle: "Guests & Rooms", icon: Bed },
    { id: 4, title: "Review & Submit", subtitle: "Verify & Send", icon: CheckCircle2 },
];

const eventTypes = [
    { id: "wedding", title: "Wedding / Anniversary", icon: <Gift className="w-6 h-6" /> },
    { id: "corporate", title: "Corporate Event", icon: <Briefcase className="w-6 h-6" /> },
    { id: "birthday", title: "Birthday Party", icon: <PartyPopper className="w-6 h-6" /> },
    { id: "festive", title: "Festive Event", icon: <Calendar className="w-6 h-6" /> },
    { id: "sports", title: "Sports Event", icon: <Trophy className="w-6 h-6" /> },
    { id: "picnic", title: "Group Picnic", icon: <Table className="w-6 h-6" /> },
];

export function ContactFormStepper() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [issubmitted, setIssubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        eventType: "",
        rooms: 0,
        pax: 50,
        catering: false,
        cateringType: null,
        numDays: 1,
        date: null,
    });

    // Calendar State
    const [viewDate, setViewDate] = useState(new Date(2024, 0, 1)); // Fixed date for SSR

    useEffect(() => {
        // Update to current date on mount
        setViewDate(new Date());
    }, []);

    const handlePrevMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
    };

    const handleDateSelect = (day: number) => {
        const selectedDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
        // Prevent selecting past dates
        if (selectedDate < new Date(new Date().setHours(0, 0, 0, 0))) return;
        updateFormData("date", selectedDate);
    };

    const isDateDisabled = (day: number) => {
        const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
        // During SSR and first hydration, we should use a consistent "today"
        // But since we set viewDate in useEffect, the calendar only shows correctly after mount anyway.
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };

    const { days: daysInMonth, firstDay: startDay } = getDaysInMonth(viewDate);
    const weeks = [];
    let days = [];

    // Empty cells for start of month
    for (let i = 0; i < startDay; i++) {
        days.push(null);
    }

    // Days of month
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }

    // Chunk into weeks
    while (days.length > 0) {
        weeks.push(days.splice(0, 7));
    }

    const updateFormData = (field: keyof FormData, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleNext = () => {
        if (currentStep < 4) setCurrentStep((prev) => prev + 1);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep((prev) => prev - 1);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setSubmitError(null);
        try {
            const payload = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                phone: formData.phone,
                email: formData.email,
                eventType: formData.eventType,
                date: formData.date ? formData.date.toISOString() : null,
                numDays: formData.numDays,
                rooms: formData.rooms,
                pax: formData.pax,
                catering: formData.catering,
                cateringType: formData.cateringType,
            };

            const res = await fetch("/api/enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                const msg =
                    data?.errors?.[0] ||
                    data?.message ||
                    "Something went wrong. Please try again or contact us directly.";
                setSubmitError(msg);
                setIsSubmitting(false);
                return;
            }

            setIssubmitted(true);
        } catch (err) {
            console.error("[Submit Error]", err);
            setSubmitError(
                "A network error occurred. Please check your connection and try again, or reach us on WhatsApp."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <AnimatePresence mode="wait">
                    {issubmitted ? (
                        <motion.div
                            key="success"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: -20 }}
                            transition={{ type: "spring", duration: 0.8 }}
                            className="w-full max-w-4xl mx-auto p-4 sm:p-10 text-center bg-neutral-900/80 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden my-6 sm:my-8"
                        >
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
                            <div className="flex flex-col items-center gap-6 py-6 relative z-10">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center text-green-500 mb-2 shadow-xl shadow-green-500/10 ring-1 ring-green-500/30">
                                    <Check className="w-10 h-10" />
                                </div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">Inquiry Sent Successfully!</h2>
                                    <p className="text-neutral-400 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                                        Thank you for choosing Vanrai Village. We have received your details and our event specialists will get back to you shortly.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3.5 mt-6">
                                    <button
                                        onClick={() => {
                                            setIssubmitted(false);
                                            setCurrentStep(1);
                                            setSubmitError(null);
                                            setFormData({
                                                firstName: "", lastName: "", phone: "", email: "",
                                                eventType: "", rooms: 0, pax: 50, catering: false, cateringType: null,
                                                numDays: 1, date: null
                                            });
                                        }}
                                        className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-all hover:scale-105 font-medium text-sm"
                                    >
                                        Start New Inquiry
                                    </button>

                                    <a
                                        href={getWhatsAppUrl(WHATSAPP_MESSAGES.events)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full transition-all hover:scale-105 shadow-lg shadow-emerald-950/30 font-semibold text-sm flex items-center justify-center gap-2"
                                    >
                                        Chat with Sales on WhatsApp
                                    </a>

                                    <a href="/" className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-full transition-all hover:scale-105 shadow-lg shadow-green-500/25 font-semibold text-sm flex items-center justify-center gap-2">
                                        Back to Home <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {/* Combined Form and Map Layout */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                {/* Left Side: Form Elements (Form header + Stepper) */}
                                <div className="lg:col-span-12 xl:col-span-12 mb-8">
                                    {/* Header */}
                                    <div className="text-center mb-10 sm:mb-12">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            className="inline-block px-3.5 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-semibold tracking-wider uppercase mb-4"
                                        >
                                            Contact Us
                                        </motion.div>
                                        <motion.h2
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 }}
                                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight"
                                        >
                                            Plan Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Event</span>
                                        </motion.h2>
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 }}
                                            className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
                                        >
                                            From intimate gatherings to grand celebrations, tell us your vision and we'll bring it to life at Vanrai Village.
                                        </motion.p>
                                    </div>

                                    {/* Sub-grid for Stepper vs Map */}
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                                        {/* Stepper Card */}
                                        <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
                                            {/* Elevated Luxury Stepper Capsule */}
                                            <div className="bg-neutral-900/90 backdrop-blur-2xl rounded-2xl sm:rounded-[24px] border border-white/10 p-4 sm:p-5 shadow-2xl relative overflow-hidden mb-6 sm:mb-8">
                                                {/* Ambient Glow Orb tracking current step */}
                                                <div
                                                    className="absolute -top-12 h-32 w-32 bg-[#00c97b]/20 rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-out -z-0"
                                                    style={{ left: `calc(${12.5 + ((currentStep - 1) / (steps.length - 1)) * 75}% - 4rem)` }}
                                                />

                                                {/* Top Meta Status Bar */}
                                                <div className="flex items-center justify-between pb-3 sm:pb-3.5 mb-3 sm:mb-4 border-b border-white/[0.08] relative z-10">
                                                    <div className="flex items-center gap-2 sm:gap-3">
                                                        <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#00c97b]"></span>
                                                        </span>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase text-[#00c97b]">
                                                                Step 0{currentStep} / 04
                                                            </span>
                                                            <span className="text-neutral-600 text-xs hidden sm:inline">•</span>
                                                            <span className="text-xs sm:text-sm font-semibold text-neutral-200 hidden sm:inline">
                                                                {steps[currentStep - 1]?.title}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00c97b] text-[11px] sm:text-xs font-semibold">
                                                        <Sparkles className="w-3 h-3 text-emerald-400" />
                                                        <span>{Math.round((currentStep / steps.length) * 100)}% Complete</span>
                                                    </div>
                                                </div>

                                                {/* Interactive Progress Rail & Nodes */}
                                                <div className="relative pt-1 sm:pt-2 pb-1">
                                                    {/* Background Connecting Rail */}
                                                    <div className="absolute top-[20px] sm:top-[24px] left-[12.5%] right-[12.5%] h-[3px] -translate-y-1/2 bg-white/[0.08] rounded-full overflow-hidden z-0">
                                                        {/* Active Progress Track with smooth gradient & glow */}
                                                        <motion.div
                                                            className="h-full bg-gradient-to-r from-emerald-500 via-[#00c97b] to-teal-400 rounded-full shadow-[0_0_14px_rgba(0,201,123,0.8)]"
                                                            initial={false}
                                                            animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                                                            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                                                        />
                                                    </div>

                                                    {/* 4-Step Nodes Grid */}
                                                    <div className="grid grid-cols-4 relative z-10">
                                                        {steps.map((step) => {
                                                            const isCompleted = currentStep > step.id;
                                                            const isActive = currentStep === step.id;
                                                            const isUpcoming = currentStep < step.id;
                                                            const StepIcon = step.icon;

                                                            return (
                                                                <div key={step.id} className="flex flex-col items-center group">
                                                                    {/* Step Button Node */}
                                                                    <button
                                                                        type="button"
                                                                        disabled={isUpcoming}
                                                                        onClick={() => {
                                                                            if (step.id < currentStep) setCurrentStep(step.id);
                                                                        }}
                                                                        title={
                                                                            isCompleted
                                                                                ? `Click to edit Step ${step.id}: ${step.title}`
                                                                                : isActive
                                                                                ? `Current: Step ${step.id} - ${step.title}`
                                                                                : `Step ${step.id}: ${step.title}`
                                                                        }
                                                                        className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 ${
                                                                            isActive
                                                                                ? "bg-gradient-to-br from-[#00c97b] via-emerald-400 to-green-500 text-neutral-950 font-black shadow-[0_0_24px_rgba(0,201,123,0.65)] ring-4 ring-[#00c97b]/25 scale-105 sm:scale-110 cursor-default"
                                                                                : isCompleted
                                                                                ? "bg-[#082216] text-emerald-400 border border-emerald-500/50 hover:border-emerald-400 hover:bg-[#0c3120] shadow-[0_0_15px_rgba(0,201,123,0.25)] cursor-pointer hover:scale-105 active:scale-95"
                                                                                : "bg-[#141414] text-neutral-500 border border-white/10 cursor-not-allowed"
                                                                        }`}
                                                                    >
                                                                        {/* Step Number Mini-Badge */}
                                                                        <span
                                                                            className={`absolute -top-1.5 -right-1.5 px-1.5 py-0.5 text-[8px] sm:text-[9px] font-mono font-bold rounded-full border leading-none transition-all ${
                                                                                isActive
                                                                                    ? "bg-neutral-950 text-[#00c97b] border-[#00c97b]/80 shadow-md"
                                                                                    : isCompleted
                                                                                    ? "bg-emerald-900 text-emerald-300 border-emerald-500/40"
                                                                                    : "bg-neutral-800 text-neutral-400 border-white/10"
                                                                            }`}
                                                                        >
                                                                            0{step.id}
                                                                        </span>

                                                                        {/* Node Icon */}
                                                                        {isCompleted ? (
                                                                            <Check className="w-5 h-5 stroke-[3] text-[#00c97b] group-hover:scale-110 transition-transform" />
                                                                        ) : (
                                                                            <StepIcon
                                                                                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${
                                                                                    isActive
                                                                                        ? "text-neutral-950 stroke-[2.5]"
                                                                                        : "text-neutral-400 group-hover:text-neutral-300 stroke-[1.8]"
                                                                                }`}
                                                                            />
                                                                        )}
                                                                    </button>

                                                                    {/* Labels */}
                                                                    <div className="flex flex-col items-center mt-2 sm:mt-2.5 text-center px-0.5 sm:px-1 max-w-full">
                                                                        <span
                                                                            className={`text-[11px] sm:text-xs font-semibold tracking-tight transition-colors leading-tight ${
                                                                                isActive
                                                                                    ? "text-white font-bold drop-shadow-[0_2px_8px_rgba(0,201,123,0.35)]"
                                                                                    : isCompleted
                                                                                    ? "text-neutral-300 group-hover:text-white"
                                                                                    : "text-neutral-500"
                                                                            }`}
                                                                        >
                                                                            {step.title}
                                                                        </span>
                                                                        <span
                                                                            className={`text-[10px] hidden sm:block font-medium mt-0.5 transition-colors leading-tight ${
                                                                                isActive
                                                                                    ? "text-[#00c97b]"
                                                                                    : isCompleted
                                                                                    ? "text-neutral-400"
                                                                                    : "text-neutral-600"
                                                                            }`}
                                                                        >
                                                                            {step.subtitle}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Form Container */}
                                            <div className="bg-neutral-900/80 backdrop-blur-2xl rounded-[24px] border border-white/10 p-5 sm:p-6 md:p-7 shadow-2xl relative overflow-hidden flex-1 flex flex-col">
                                                <AnimatePresence mode="wait">
                                                    <motion.div
                                                        key={currentStep}
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -20 }}
                                                        className="flex-1 flex flex-col"
                                                    >
                                                        {/* STEP 1: Personal Details */}
                                                        {currentStep === 1 && (
                                                            <div className="space-y-8">
                                                                <div className="border-l-4 border-green-500 pl-4">
                                                                    <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                                                                    <p className="text-gray-400 mt-1">Let us know who to reach out to.</p>
                                                                </div>
                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                                                                    <div className="space-y-1.5 group">
                                                                        <label className="text-xs font-medium text-neutral-400 group-focus-within:text-[#00c97b] transition-colors">First Name</label>
                                                                        <div className="relative">
                                                                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 group-focus-within:text-[#00c97b] transition-colors" />
                                                                            <input
                                                                                type="text"
                                                                                value={formData.firstName}
                                                                                onChange={(e) => updateFormData("firstName", e.target.value)}
                                                                                placeholder="John"
                                                                                suppressHydrationWarning
                                                                                className="w-full h-12 bg-black/30 border border-white/10 rounded-[14px] px-4 pl-11 text-white text-sm sm:text-base placeholder:text-neutral-600 focus:outline-none focus:border-[#00c97b] focus:ring-1 focus:ring-[#00c97b] transition-all font-medium"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="space-y-1.5 group">
                                                                        <label className="text-xs font-medium text-neutral-400 group-focus-within:text-[#00c97b] transition-colors">Last Name</label>
                                                                        <div className="relative">
                                                                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 group-focus-within:text-[#00c97b] transition-colors" />
                                                                            <input
                                                                                type="text"
                                                                                value={formData.lastName}
                                                                                onChange={(e) => updateFormData("lastName", e.target.value)}
                                                                                placeholder="Doe"
                                                                                suppressHydrationWarning
                                                                                className="w-full h-12 bg-black/30 border border-white/10 rounded-[14px] px-4 pl-11 text-white text-sm sm:text-base placeholder:text-neutral-600 focus:outline-none focus:border-[#00c97b] focus:ring-1 focus:ring-[#00c97b] transition-all font-medium"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="space-y-1.5 group">
                                                                        <label className="text-xs font-medium text-neutral-400 group-focus-within:text-[#00c97b] transition-colors">Phone Number</label>
                                                                        <div className="relative">
                                                                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 group-focus-within:text-[#00c97b] transition-colors" />
                                                                            <input
                                                                                type="tel"
                                                                                value={formData.phone}
                                                                                onChange={(e) => updateFormData("phone", e.target.value)}
                                                                                placeholder="+91 9876 543 210"
                                                                                suppressHydrationWarning
                                                                                className="w-full h-12 bg-black/30 border border-white/10 rounded-[14px] px-4 pl-11 text-white text-sm sm:text-base placeholder:text-neutral-600 focus:outline-none focus:border-[#00c97b] focus:ring-1 focus:ring-[#00c97b] transition-all font-medium"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="space-y-1.5 group">
                                                                        <label className="text-xs font-medium text-neutral-400 group-focus-within:text-[#00c97b] transition-colors">Email Address</label>
                                                                        <div className="relative">
                                                                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 group-focus-within:text-[#00c97b] transition-colors" />
                                                                            <input
                                                                                type="email"
                                                                                value={formData.email}
                                                                                onChange={(e) => updateFormData("email", e.target.value)}
                                                                                placeholder="john@example.com"
                                                                                suppressHydrationWarning
                                                                                className="w-full h-12 bg-black/30 border border-white/10 rounded-[14px] px-4 pl-11 text-white text-sm sm:text-base placeholder:text-neutral-600 focus:outline-none focus:border-[#00c97b] focus:ring-1 focus:ring-[#00c97b] transition-all font-medium"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* STEP 2: Event Details */}
                                                        {currentStep === 2 && (
                                                            <div className="space-y-8">
                                                                <div className="border-l-4 border-green-500 pl-4">
                                                                    <h3 className="text-2xl font-medium text-white">Event Type</h3>
                                                                    <p className="text-gray-400 mt-1">What kind of celebration are you planning?</p>
                                                                </div>
                                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                    {eventTypes.map((type) => (
                                                                        <button
                                                                            key={type.id}
                                                                            onClick={() => updateFormData("eventType", type.id)}
                                                                            className={`group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 text-left relative overflow-hidden ${formData.eventType === type.id
                                                                                ? "bg-green-500/10 border-green-500 shadow-lg shadow-green-900/20"
                                                                                : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20"
                                                                                }`}
                                                                        >
                                                                            <div className={`p-3.5 rounded-xl transition-colors duration-300 ${formData.eventType === type.id ? "bg-green-500 text-white" : "bg-white/10 text-gray-400 group-hover:text-white group-hover:bg-white/20"
                                                                                }`}>
                                                                                {type.icon}
                                                                            </div>
                                                                            <div className="flex-1">
                                                                                <span className={`font-semibold block text-lg ${formData.eventType === type.id ? "text-white" : "text-gray-300"
                                                                                    }`}>
                                                                                    {type.title}
                                                                                </span>
                                                                            </div>
                                                                            {formData.eventType === type.id && (
                                                                                <motion.div
                                                                                    layoutId="activeEvent"
                                                                                    className="absolute inset-0 border-2 border-green-500 rounded-2xl pointer-events-none"
                                                                                />
                                                                            )}
                                                                        </button>
                                                                    ))}
                                                                </div>

                                                                {/* Date & Duration Divider */}
                                                                <div className="border-t border-white/10 pt-8 mt-8">
                                                                    <div className="border-l-4 border-green-500 pl-4 mb-8">
                                                                        <h3 className="text-2xl font-bold text-white">Dates & Duration</h3>
                                                                        <p className="text-gray-400 mt-1">When and how long is your event?</p>
                                                                    </div>

                                                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                                                        {/* Left Column: Duration & Selected Date Info */}
                                                                        <div className="lg:col-span-5 space-y-6">
                                                                            {/* Duration Input */}
                                                                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                                                                <label className="text-sm font-medium text-gray-300 mb-4 block">Number of Days</label>
                                                                                <div className="flex items-center justify-between">
                                                                                    <div className="flex items-center gap-4 bg-black/30 rounded-xl p-1.5 border border-white/10">
                                                                                        <button
                                                                                            onClick={() => updateFormData("numDays", Math.max(1, formData.numDays - 1))}
                                                                                            className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/10 text-white transition-colors disabled:opacity-50"
                                                                                            disabled={formData.numDays <= 1}
                                                                                        >
                                                                                            -
                                                                                        </button>
                                                                                        <span className="w-8 text-center font-bold text-xl text-white">{formData.numDays}</span>
                                                                                        <button
                                                                                            onClick={() => updateFormData("numDays", formData.numDays + 1)}
                                                                                            className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors"
                                                                                        >
                                                                                            +
                                                                                        </button>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-end">
                                                                                        <span className="text-xs text-gray-400">Duration</span>
                                                                                        <span className="text-green-400 font-medium">
                                                                                            {formData.numDays} {formData.numDays === 1 ? 'Day' : 'Days'}
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            {/* Selected Range Display */}
                                                                            <div className="bg-green-500/10 p-6 rounded-2xl border border-green-500/20">
                                                                                <label className="text-sm font-medium text-green-400 mb-2 block flex items-center gap-2">
                                                                                    <Calendar className="w-4 h-4" /> Selected Dates
                                                                                </label>
                                                                                <div className="text-white font-medium text-lg">
                                                                                    {formData.date ? (
                                                                                        <>
                                                                                            {formatDate(formData.date)}
                                                                                            {formData.numDays > 1 && (
                                                                                                <>
                                                                                                    <span className="text-gray-500 mx-2">→</span>
                                                                                                    {formatDate(addDays(formData.date, formData.numDays - 1))}
                                                                                                </>
                                                                                            )}
                                                                                        </>
                                                                                    ) : (
                                                                                        <span className="text-gray-500 italic">Select a date from calendar</span>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        {/* Right Column: Custom Calendar */}
                                                                        <div className="lg:col-span-7">
                                                                            <div className="bg-black/20 p-6 rounded-2xl border border-white/10 select-none">
                                                                                {/* Calendar Header */}
                                                                                <div className="flex items-center justify-between mb-6">
                                                                                    <h4 className="text-lg font-bold text-white">
                                                                                        {viewDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                                                                                    </h4>
                                                                                    <div className="flex gap-2">
                                                                                        <button onClick={handlePrevMonth} className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors">
                                                                                            <ChevronLeft className="w-5 h-5" />
                                                                                        </button>
                                                                                        <button onClick={handleNextMonth} className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors">
                                                                                            <ChevronRight className="w-5 h-5" />
                                                                                        </button>
                                                                                    </div>
                                                                                </div>

                                                                                {/* Calendar Grid */}
                                                                                <div className="grid grid-cols-7 mb-2">
                                                                                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                                                                                        <div key={day} className="h-8 flex items-center justify-center text-xs font-bold text-gray-500">
                                                                                            {day}
                                                                                        </div>
                                                                                    ))}
                                                                                </div>
                                                                                <div className="grid grid-cols-7 gap-y-2">
                                                                                    {weeks.map((week, wIndex) => (
                                                                                        <React.Fragment key={wIndex}>
                                                                                            {week.map((day, dIndex) => {
                                                                                                if (!day) return <div key={`empty-${wIndex}-${dIndex}`} />;

                                                                                                const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
                                                                                                const isDisabled = isDateDisabled(day);

                                                                                                // Range Logic
                                                                                                let isSelected = false;
                                                                                                let isInRange = false;
                                                                                                let isStart = false;
                                                                                                let isEnd = false;

                                                                                                if (formData.date) {
                                                                                                    const start = formData.date;
                                                                                                    const end = addDays(start, formData.numDays - 1);

                                                                                                    if (isSameDay(date, start)) {
                                                                                                        isStart = true;
                                                                                                        isSelected = true;
                                                                                                    }
                                                                                                    if (isSameDay(date, end)) {
                                                                                                        isEnd = true;
                                                                                                        isSelected = true;
                                                                                                    }
                                                                                                    if (date > start && date < end) isInRange = true;
                                                                                                }

                                                                                                return (
                                                                                                    <div key={day} className="relative aspect-square p-0.5">
                                                                                                        <button
                                                                                                            onClick={() => handleDateSelect(day)}
                                                                                                            disabled={isDisabled}
                                                                                                            suppressHydrationWarning
                                                                                                            className={`
                                                                                        w-full h-full flex items-center justify-center rounded-full text-sm font-medium transition-all relative z-10
                                                                                        ${isDisabled ? 'text-gray-700 cursor-not-allowed' : 'text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer'}
                                                                                        ${isSelected ? '!bg-green-500 !text-white shadow-lg shadow-green-500/30' : ''}
                                                                                        ${isInRange ? '!text-green-300' : ''}
                                                                                    `}
                                                                                                        >
                                                                                                            {day}
                                                                                                        </button>
                                                                                                        {/* Range Highlight Background */}
                                                                                                        {(isInRange || (formData.numDays > 1 && (isStart || isEnd))) && (
                                                                                                            <div className={`
                                                                                        absolute top-1/2 -translate-y-1/2 h-8 bg-green-500/20 z-0
                                                                                        ${isInRange ? 'left-0 right-0' : ''}
                                                                                        ${isStart ? 'left-1/2 right-0 rounded-l-full' : ''}
                                                                                        ${isEnd ? 'left-0 right-1/2 rounded-r-full' : ''}
                                                                                    `} />
                                                                                                        )}
                                                                                                    </div>
                                                                                                );
                                                                                            })}
                                                                                        </React.Fragment>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* STEP 3: Requirements */}
                                                        {currentStep === 3 && (
                                                            <div className="space-y-8">
                                                                <div className="border-l-4 border-green-500 pl-4">
                                                                    <h3 className="text-2xl font-bold text-white">Requirements</h3>
                                                                    <p className="text-gray-400 mt-1">Help us understand the scale of your event.</p>
                                                                </div>

                                                                {/* Rooms Counter */}
                                                                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                                                                    <div className="flex justify-between items-center">
                                                                        <div className="flex items-center gap-4">
                                                                            <div className="p-3 bg-white/10 rounded-xl text-green-400">
                                                                                <Bed className="w-6 h-6" />
                                                                            </div>
                                                                            <div>
                                                                                <label className="text-lg font-semibold text-white block">Rooms Needed</label>
                                                                                <span className="text-gray-500 text-sm">For guest accommodation</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex items-center gap-4 bg-black/30 rounded-xl p-1.5 border border-white/10">
                                                                            <button
                                                                                onClick={() => updateFormData("rooms", Math.max(0, formData.rooms - 1))}
                                                                                className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/10 text-white transition-colors"
                                                                            >
                                                                                -
                                                                            </button>
                                                                            <span className="text-2xl font-bold text-white w-12 text-center">{formData.rooms}</span>
                                                                            <button
                                                                                onClick={() => updateFormData("rooms", Math.min(18, formData.rooms + 1))}
                                                                                className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors"
                                                                            >
                                                                                +
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Pax Slider */}
                                                                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                                                                    <div className="flex justify-between items-center mb-6">
                                                                        <div className="flex items-center gap-4">
                                                                            <div className="p-3 bg-white/10 rounded-xl text-green-400">
                                                                                <Users className="w-6 h-6" />
                                                                            </div>
                                                                            <div>
                                                                                <label className="text-lg font-semibold text-white block">Expected Guests</label>
                                                                                <span className="text-gray-500 text-sm">Estimate crowd size</span>
                                                                            </div>
                                                                        </div>
                                                                        <span className="text-2xl font-bold text-green-500 bg-green-500/10 px-4 py-1 rounded-lg border border-green-500/20">{formData.pax}+</span>
                                                                    </div>
                                                                    <div className="px-2">
                                                                        <input
                                                                            type="range"
                                                                            min="0"
                                                                            max="1000"
                                                                            step="10"
                                                                            value={formData.pax}
                                                                            onChange={(e) => updateFormData("pax", parseInt(e.target.value))}
                                                                            className="w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer accent-green-500"
                                                                        />
                                                                        <div className="flex justify-between text-xs font-medium text-gray-500 mt-3 uppercase tracking-wider">
                                                                            <span>Small (0)</span>
                                                                            <span>Medium (500)</span>
                                                                            <span>Large (1000+)</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Catering Toggle */}
                                                                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                                                                    <div className="flex justify-between items-center mb-2">
                                                                        <div className="flex items-center gap-4">
                                                                            <div className="p-3 bg-white/10 rounded-xl text-green-400">
                                                                                <Utensils className="w-6 h-6" />
                                                                            </div>
                                                                            <div>
                                                                                <label className="text-lg font-semibold text-white block">Catering Service</label>
                                                                                <span className="text-gray-500 text-sm">Do you need food arrangements?</span>
                                                                            </div>
                                                                        </div>
                                                                        <button
                                                                            onClick={() => updateFormData("catering", !formData.catering)}
                                                                            className={`w-16 h-9 rounded-full p-1 transition-colors duration-300 ${formData.catering ? "bg-green-500" : "bg-white/10"
                                                                                }`}
                                                                        >
                                                                            <div className={`w-7 h-7 rounded-full bg-white shadow-md transform transition-transform duration-300 ${formData.catering ? "translate-x-7" : "translate-x-0"
                                                                                }`} />
                                                                        </button>
                                                                    </div>

                                                                    {/* Catering Options */}
                                                                    <AnimatePresence>
                                                                        {formData.catering && (
                                                                            <motion.div
                                                                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                                                animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                                                                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                                                className="overflow-hidden"
                                                                            >
                                                                                <div className="grid grid-cols-3 gap-3">
                                                                                    {["veg", "non-veg", "both"].map((option) => (
                                                                                        <button
                                                                                            key={option}
                                                                                            onClick={() => updateFormData("cateringType", option as CateringType)}
                                                                                            className={`px-4 py-3 rounded-xl border text-sm font-medium capitalize transition-all ${formData.cateringType === option
                                                                                                ? "bg-green-500 text-white border-green-500 shadow-lg shadow-green-500/20"
                                                                                                : "bg-black/20 border-white/10 text-gray-400 hover:bg-white/5 hover:text-white"
                                                                                                }`}
                                                                                        >
                                                                                            {option}
                                                                                        </button>
                                                                                    ))}
                                                                                </div>
                                                                            </motion.div>
                                                                        )}
                                                                    </AnimatePresence>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* STEP 4: Review & Submit */}
                                                        {currentStep === 4 && (
                                                            <div className="space-y-8">
                                                                <div className="border-l-4 border-green-500 pl-4">
                                                                    <h3 className="text-2xl font-bold text-white">Overview</h3>
                                                                    <p className="text-gray-400 mt-1">Please review your details before submitting.</p>
                                                                </div>

                                                                <div className="bg-white/5 rounded-2xl p-8 space-y-8 border border-white/10 relative overflow-hidden">
                                                                    {/* Ribbon */}
                                                                    <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl shadow-lg">
                                                                        SUMMARY
                                                                    </div>

                                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                                        <div>
                                                                            <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold block mb-2">My Information</span>
                                                                            <p className="text-xl text-white font-medium">{formData.firstName} {formData.lastName}</p>
                                                                            <p className="text-gray-400 mt-1">{formData.email}</p>
                                                                            <p className="text-gray-400">{formData.phone}</p>
                                                                        </div>
                                                                        <div>
                                                                            <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold block mb-2">Event Type</span>
                                                                            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-lg border border-green-500/20">
                                                                                <span className="capitalize font-medium">{formData.eventType || "Not Selected"}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="h-px bg-white/10" />

                                                                    <div>
                                                                        <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold block mb-4">Event Requirements</span>
                                                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                                                            <div className="bg-black/20 p-4 rounded-xl border border-white/5 text-center">
                                                                                <span className="block text-xl font-bold text-white mb-1">{formData.pax}+</span>
                                                                                <span className="text-xs text-gray-500 uppercase">Guests</span>
                                                                            </div>
                                                                            <div className="bg-black/20 p-4 rounded-xl border border-white/5 text-center">
                                                                                <span className="block text-xl font-bold text-white mb-1">{formData.rooms}</span>
                                                                                <span className="text-xs text-gray-500 uppercase">Rooms</span>
                                                                            </div>
                                                                            <div className="bg-black/20 p-4 rounded-xl border border-white/5 text-center">
                                                                                <span className="block text-xl font-bold text-white mb-1 capitalize truncate">{formData.cateringType || "None"}</span>
                                                                                <span className="text-xs text-gray-500 uppercase">Catering</span>
                                                                            </div>
                                                                            <div className="bg-black/20 p-4 rounded-xl border border-white/5 text-center">
                                                                                <span className="block text-xl font-bold text-white mb-1">{formData.numDays} Days</span>
                                                                                <span className="text-xs text-gray-500 uppercase">Duration</span>
                                                                            </div>
                                                                            <div className="bg-black/20 p-4 rounded-xl border border-white/5 text-center">
                                                                                <span className="block text-xl font-bold text-white mb-1 truncate">{formData.date ? formatDate(formData.date) : "N/A"}</span>
                                                                                <span className="text-xs text-gray-500 uppercase">Date</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </motion.div>
                                                </AnimatePresence>

                                                {/* Error Alert */}
                                                {submitError && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -8 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-red-950/50 border border-red-500/30 rounded-2xl px-4 py-3.5 text-sm"
                                                    >
                                                        <div className="flex-1 text-red-300 leading-snug">{submitError}</div>
                                                        <a
                                                            href={getWhatsAppUrl(WHATSAPP_MESSAGES.events)}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="shrink-0 text-[#25D366] hover:text-green-300 font-semibold underline underline-offset-2 transition-colors"
                                                        >
                                                            WhatsApp Us →
                                                        </a>
                                                    </motion.div>
                                                )}

                                                {/* Navigation Buttons */}
                                                <div className="flex justify-between items-center pt-6 mt-6 border-t border-white/10">
                                                    <button
                                                        onClick={handleBack}
                                                        disabled={currentStep === 1}
                                                        className={`flex items-center gap-2 h-11 px-5 rounded-[16px] text-sm font-semibold transition-all group ${currentStep === 1 ? "opacity-0 pointer-events-none" : "text-neutral-400 hover:text-white hover:bg-white/5"}`}
                                                    >
                                                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
                                                    </button>
                                                    {currentStep < 4 ? (
                                                        <button
                                                            onClick={handleNext}
                                                            className="flex items-center gap-2.5 h-12 px-7 bg-[#00c97b] hover:bg-[#00b06c] text-neutral-950 font-bold text-sm rounded-[16px] shadow-lg shadow-emerald-950/40 transition-transform active:scale-[0.98]"
                                                        >
                                                            Next <ArrowRight className="w-4 h-4" />
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={handleSubmit}
                                                            disabled={isSubmitting}
                                                            className="flex items-center gap-2.5 h-12 px-8 bg-[#00c97b] hover:bg-[#00b06c] text-neutral-950 font-bold text-sm rounded-[16px] shadow-lg shadow-emerald-950/40 transition-transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                                                        >
                                                            {isSubmitting ? (
                                                                <>
                                                                    <Loader2 className="w-5 h-5 animate-spin text-neutral-950" />
                                                                    <span>Submitting…</span>
                                                                </>
                                                            ) : (
                                                                <>Submit Inquiry <Check className="w-4 h-4 stroke-[3]" /></>
                                                            )}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Side: Information & Map Side-by-Side */}
                                        <div className="lg:col-span-5 xl:col-span-4 space-y-6 flex flex-col">
                                            {/* Info Card */}
                                            <div className="bg-neutral-900/80 backdrop-blur-2xl rounded-[24px] border border-white/10 p-6 shadow-2xl relative overflow-hidden group">
                                                <div className="absolute -top-12 -right-12 w-32 h-32 bg-green-500/10 rounded-full blur-[60px]" />
                                                <div className="relative z-10 space-y-5">
                                                    <div className="border-l-4 border-[#00c97b] pl-3.5">
                                                        <h4 className="text-lg font-bold text-white uppercase tracking-tight">Quick Connect</h4>
                                                    </div>
                                                    <div className="space-y-3.5">
                                                        <div className="flex gap-3.5 items-start">
                                                            <div className="w-9 h-9 rounded-xl bg-green-500/10 flex items-center justify-center text-[#00c97b] shrink-0 border border-green-500/20">
                                                                <MapPin className="w-4 h-4" />
                                                            </div>
                                                            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">G.No 648, Wadgaon Gupta, Ahmednagar City Bypass, Maharashtra 414111</p>
                                                        </div>
                                                        <div className="flex gap-3.5 items-start">
                                                            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/20">
                                                                <Phone className="w-4 h-4" />
                                                            </div>
                                                            <div className="text-neutral-400 text-xs sm:text-sm">
                                                                <a href={RESORT_CONTACT.phoneTel} className="text-neutral-200 hover:text-[#00c97b] transition-colors block font-medium">
                                                                    {RESORT_CONTACT.phoneDisplay}
                                                                </a>
                                                                <a
                                                                    href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-xs text-emerald-400 hover:underline inline-flex items-center gap-1 mt-0.5"
                                                                >
                                                                    Chat on WhatsApp
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-3.5 items-start">
                                                            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20">
                                                                <Mail className="w-4 h-4" />
                                                            </div>
                                                            <a href={RESORT_CONTACT.emailMailto} className="text-neutral-400 hover:text-[#00c97b] transition-colors text-xs sm:text-sm break-all">
                                                                {RESORT_CONTACT.emailAddress}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Map Card */}
                                            <div className="bg-neutral-900/80 backdrop-blur-2xl rounded-[24px] border border-white/10 p-2 shadow-2xl relative overflow-hidden group flex-1 min-h-[340px]">
                                                <iframe
                                                    src="https://www.google.com/maps?q=Vanrai+Village+Resort+Ahmednagar&output=embed"
                                                    width="100%"
                                                    height="100%"
                                                    style={{
                                                        border: 0,
                                                        borderRadius: '1.25rem',
                                                        filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)',
                                                        opacity: 0.8
                                                    }}
                                                    allowFullScreen={true}
                                                    loading="lazy"
                                                    className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
