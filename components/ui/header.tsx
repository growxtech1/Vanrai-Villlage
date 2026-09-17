"use client";

import { useState } from "react";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { AnimatedCTAButton } from "@/components/ui/animated-cta-button";
import { AnimatedCTAButton2 } from "@/components/ui/animated-cta-button2";
import { cn } from "@/lib/utils";

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const navItems = [
        { name: "Home", link: "/" },
        { name: "Stays", link: "/stays" },
        { name: "Experiences", link: "/experiences" },
        { name: "About", link: "/about" },
        { name: "Gallery", link: "/gallery" },
        { name: "Events", link: "/events" },
        { name: "Membership", link: "/membership" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <div className={cn("fixed top-0 left-0 right-0 z-50", className)}>
            <div className="container mx-auto px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:pt-3">
                <Navbar>
                    <NavBody>
                        <NavbarLogo />
                        <NavItems items={navItems} onItemClick={() => setIsMobileOpen(false)} />
                        <div className="flex items-center gap-4">
                            <a href="/book">
                                <AnimatedCTAButton text="Book Now" />
                            </a>
                        </div>
                    </NavBody>

                    <MobileNav>
                        <MobileNavHeader>
                            <NavbarLogo />
                            <MobileNavToggle
                                isOpen={isMobileOpen}
                                onClick={() => setIsMobileOpen((open) => !open)}
                            />
                        </MobileNavHeader>
                        <MobileNavMenu
                            isOpen={isMobileOpen}
                            onClose={() => setIsMobileOpen(false)}
                        >
                            <div className="flex flex-col w-full py-2">
                                {navItems.map((item, idx) => (
                                    <a
                                        key={`mobile-link-${idx}`}
                                        href={item.link}
                                        onClick={() => setIsMobileOpen(false)}
                                        className="text-neutral-300 hover:text-[#00c97b] transition-colors py-2.5 text-base font-medium border-b border-white/5 last:border-0 flex items-center justify-between"
                                    >
                                        <span>{item.name}</span>
                                        <span className="text-xs text-neutral-500 font-mono">0{idx + 1}</span>
                                    </a>
                                ))}
                                <div className="pt-5 flex justify-center w-full">
                                    <a
                                        href="/book"
                                        onClick={() => setIsMobileOpen(false)}
                                        className="w-full max-w-[360px] h-12 bg-[#00c97b] hover:bg-[#00b06c] text-neutral-950 font-bold text-sm rounded-[16px] flex items-center justify-center shadow-lg shadow-emerald-950/40 transition-transform active:scale-[0.98]"
                                    >
                                        Book Your Stay
                                    </a>
                                </div>
                            </div>
                        </MobileNavMenu>
                    </MobileNav>
                </Navbar>
            </div>
        </div>
    );
};
