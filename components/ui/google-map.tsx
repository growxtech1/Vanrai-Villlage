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
    "https://maps.google.com/maps?q=Vanrai+Resort+Ahmednagar&t=&z=13&ie=UTF8&iwloc=&output=embed";

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
