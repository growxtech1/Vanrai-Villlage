"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface SmoothScrollProps {
  children: React.ReactNode;
}

function SmoothScrollHandler() {
  const pathname = usePathname();
  const lenis = useLenis();
  const prevPathname = useRef(pathname);

  // Scroll to top on route change or to hash element if provided
  useEffect(() => {
    if (!lenis) return;

    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        lenis.scrollTo(element, { offset: -80, duration: 1.2 });
        return;
      }
    }

    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  // Intercept anchor link clicks on current page for smooth glide
  useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, { offset: -80, duration: 1.2 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [lenis]);

  return null;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        infinite: false,
      }}
    >
      <SmoothScrollHandler />
      {children}
    </ReactLenis>
  );
}

export { useLenis };
export default SmoothScroll;
