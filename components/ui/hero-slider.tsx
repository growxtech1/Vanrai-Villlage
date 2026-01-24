"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
        <section className="relative h-screen w-full overflow-hidden">
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
                            quality={100}
                        />
                        {/* Dark overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                ))}
            </div>

            {/* Overlapping Text Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-4">
                <div className="max-w-6xl text-center text-white">
                    {/* Main Heading */}
                    <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                        Escape to Nature.
                        <br />
                        <span className="font-light">Stay in Comfort.</span>
                    </h1>

                    {/* Subheading */}
                    <p className="mx-auto mb-12 max-w-3xl text-lg font-light leading-relaxed sm:text-xl md:text-2xl lg:text-3xl">
                        A peaceful village-style resort near Ahmednagar, surrounded by
                        greenery and open lawns.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <button className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <span className="relative z-10">Book Your Stay</span>
                            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                        </button>
                        <button className="rounded-full border-2 border-white px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10">
                            Explore More
                        </button>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                ? "w-12 bg-white"
                                : "w-2 bg-white/50 hover:bg-white/75"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-8 z-20 hidden animate-bounce md:block">
                <div className="flex flex-col items-center gap-2 text-white">
                    <span className="text-sm font-light tracking-wider">SCROLL</span>
                    <svg
                        className="h-6 w-6"
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
