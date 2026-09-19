"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import hero3 from "@/public/img/hero-3.png";
import hero1 from "@/public/img/hero-1.png";
import hero2 from "@/public/img/hero-2.png";
import { AnimatedCTAButton } from "./animated-cta-button";
import { AnimatedCTAButton2 } from "./animated-cta-button2";
import { BookingBar } from "./booking-bar";

const heroSlides = [
    {
        src: hero3,
        alt: "Vanrai Resort - Swimming Pool & Water Park",
    },
    {
        src: hero1,
        alt: "Vanrai Resort - Reception & Entrance",
    },
    {
        src: hero2,
        alt: "Vanrai Resort - Dining & Restaurant",
    },
];

export function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen sm:h-screen w-full flex flex-col justify-center overflow-hidden">
            {/* Image Slider Background */}
            <div className="absolute inset-0 overflow-hidden">
                {heroSlides.map((slide, index) => {
                    if (index > 0 && !isMounted) return null;
                    return (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out will-change-[opacity] ${index === currentSlide ? "opacity-100 z-1" : "opacity-0 z-0 pointer-events-none"
                                }`}
                        >
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                fill
                                preload={index === 0}
                                loading={index === 0 ? "eager" : "lazy"}
                                fetchPriority={index === 0 ? "high" : "low"}
                                sizes="100vw"
                                quality={80}
                                className="object-cover"
                            />
                            {/* Dark overlay for better text readability */}
                            <div className="absolute inset-0 bg-black/40" />
                        </div>
                    );
                })}
            </div>

            {/* Overlapping Text Content */}
            <div className="relative z-10 flex min-h-[100dvh] sm:min-h-0 sm:h-full flex-col items-center justify-center pt-24 pb-14 sm:pt-28 sm:pb-14 md:py-0 px-4 sm:px-6 md:px-8">
                <div className="flex w-full max-w-[840px] flex-col items-center text-center text-white">
                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[1.08] tracking-tight">
                        Escape to <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent italic font-normal">Nature</span>
                    </h1>

                    {/* Subheading */}
                    <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal tracking-wide text-white/90 italic">
                        Stay in Comfort.
                    </h2>

                    {/* Description */}
                    <p className="mt-3.5 sm:mt-4 md:mt-5 max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-neutral-300">
                        A peaceful village-style resort near Ahmednagar, surrounded by
                        greenery and open lawns.
                    </p>

                    {/* Booking Bar */}
                    <div className="w-full mt-5 sm:mt-7 md:mt-8 lg:mt-9 relative z-20">
                        <BookingBar />
                    </div>
                </div>
            </div>
            {/* Slide Indicators */}
            <div className="absolute bottom-5 sm:bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:gap-3">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${index === currentSlide
                            ? "w-8 sm:w-12 bg-white"
                            : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/75"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-6 md:right-8 z-20 hidden animate-bounce md:block">
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-white">
                    <span className="text-xs sm:text-sm font-light tracking-wider">SCROLL</span>
                    <svg
                        className="h-5 w-5 sm:h-6 sm:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}
