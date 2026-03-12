"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatedCTAButton } from "./animated-cta-button";
import { AnimatedCTAButton2 } from "./animated-cta-button2";
import { BookingBar } from "./booking-bar";

const heroImages = [
    "/img/hero-1.png",
    "/img/hero-2.png",
    "/img/hero-3.png",
];

export function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[110vh] sm:h-screen w-full overflow-hidden">
            {/* Image Slider Background */}
            <div className="absolute inset-0">
                {heroImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`Hero slide ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            sizes="100vw"
                        />
                        {/* Dark overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                ))}
            </div>

            {/* Overlapping Text Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 md:px-8">
                <div className="max-w-6xl text-center text-white mb-20 md:mb-24">
                    {/* Main Heading */}
                    <h1 className="mb-6 sm:mb-8 md:mb-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold leading-tight tracking-tight">
                        Escape to <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">Nature</span>
                        <br />
                        <span className="font-light italic">Stay in Comfort.</span>
                    </h1>

                    {/* Subheading */}
                    <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-light leading-relaxed text-white/80 tracking-wide">
                        A peaceful village-style resort near Ahmednagar, surrounded by
                        greenery and open lawns.
                    </p>
                </div>

                {/* Booking Bar - Positioned at bottom of content */}
                <div className="w-full relative z-20">
                    <BookingBar />
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 sm:bottom-12 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:gap-3">
                {heroImages.map((_, index) => (
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
