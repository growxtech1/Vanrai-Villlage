"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

interface SmoothScrollProps {
  children: React.ReactNode;
}

function SmoothScrollHandler() {
  const pathname = usePathname();
  const lenis = useLenis();
  const prevPathname = useRef(pathname);
  const isPopstate = useRef(false);

  // Track browser back/forward navigation to preserve scroll restoration
  useEffect(() => {
    const handlePopstate = () => {
      isPopstate.current = true;
    };
    window.addEventListener("popstate", handlePopstate);
    return () => window.removeEventListener("popstate", handlePopstate);
  }, []);

  // Handle route change scroll resets and cross-page hash targets
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;

      // Skip manual scroll reset on browser back/forward (popstate)
      // so native scroll restoration operates without interference
      if (isPopstate.current) {
        isPopstate.current = false;
        return;
      }

      // If destination URL has a hash target (e.g. /#contact or /stays#compare)
      const hash = window.location.hash;
      if (hash && hash.length > 1) {
        const id = hash.replace("#", "");
        requestAnimationFrame(() => {
          const element = document.getElementById(id);
          if (element) {
            if (lenis) {
              lenis.scrollTo(element, { offset: -88 });
            } else {
              element.scrollIntoView({ behavior: "smooth" });
            }
          } else if (lenis) {
            lenis.scrollTo(0, { immediate: true });
          } else {
            window.scrollTo(0, 0);
          }
        });
      } else {
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
      }
    }
  }, [pathname, lenis]);

  // Handle same-page "/#hash" links when already on the root "/" route
  useEffect(() => {
    const handleHashClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      if (pathname === "/" && href.startsWith("/#") && href.length > 2) {
        const id = href.replace("/#", "");
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          if (lenis) {
            lenis.scrollTo(element, { offset: -88 });
          } else {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    document.addEventListener("click", handleHashClick);
    return () => document.removeEventListener("click", handleHashClick);
  }, [pathname, lenis]);

  return null;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  // Detect prefers-reduced-motion dynamically with a live change listener
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: !reducedMotion,
        syncTouch: false,
        autoRaf: true,
        anchors: { offset: -88 },
      }}
    >
      <SmoothScrollHandler />
      {children}
    </ReactLenis>
  );
}

/**
 * Fallback-safe scroll helper for components using useLenis()
 */
export function scrollToTarget(
  lenis: ReturnType<typeof useLenis> | null | undefined,
  target: HTMLElement | string | null,
  offset = -88
) {
  if (!target) return;
  const element = typeof target === "string" ? document.getElementById(target.replace("#", "")) : target;
  if (!element) return;

  if (lenis) {
    lenis.scrollTo(element, { offset });
  } else {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export { useLenis };
export default SmoothScroll;
