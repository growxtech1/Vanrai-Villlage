"use client";

import React from "react";

interface GoogleMapProps {
  className?: string;
  src?: string;
}

export function GoogleMap({ className, src }: GoogleMapProps) {
  // Default to a generic location if no src is provided
  // Using a query for "Vanrai" or similar.
  // For a real app, you'd want a specific embed URL.
  // This is a sample embed link.
  const defaultSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15085.48517228308!2d72.83105025!3d19.04732155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c94107f9c6f3%3A0xc3c9c6c6f6f6f6f6!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin";

  return (
    <div
      className={`relative w-full h-[300px] md:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg border border-white/20 ${className}`}
    >
      <iframe
        src={src || defaultSrc}
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map Location"
      ></iframe>
      {/* Overlay for glass effect if needed, but usually map should be clear */}
    </div>
  );
}
