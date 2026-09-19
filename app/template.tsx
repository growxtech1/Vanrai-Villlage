"use client";

import React, { useState, useEffect } from "react";

// Module-level flag: persists across client navigations in the SPA session.
// Set to true on initial hard refresh/load, toggles to false after the first mount.
let isInitialLoad = true;

export default function Template({ children }: { children: React.ReactNode }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInitialLoad) {
      // Initial page load: skip animation entirely to protect LCP & first paint
      isInitialLoad = false;
    } else {
      // Subsequent client-side navigations: trigger lightweight enter animation
      setShouldAnimate(true);
    }
  }, []);

  return (
    <div
      className={shouldAnimate ? "animate-page-enter" : undefined}
      onAnimationEnd={() => setShouldAnimate(false)}
    >
      {children}
    </div>
  );
}
