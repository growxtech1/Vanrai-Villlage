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
        { name: "Memberships", link: "/membership" },
        { name: "Contact", link: "/#contact" },
    ];

    return (
        <div className={cn("fixed top-0 left-0 right-0 z-50", className)}>
            <div className="container mx-auto px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:pt-4">
                <Navbar>
                    <NavBody>
                        <NavbarLogo />
                        <NavItems items={navItems} onItemClick={() => setIsMobileOpen(false)} />
                        <div className="flex items-center gap-4">
                            <AnimatedCTAButton text="Book Now" />
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
                            <div className="flex flex-col gap-4 p-8">
                                {navItems.map((item, idx) => (
                                    <a
                                        key={`mobile-link-${idx}`}
                                        href={item.link}
                                        onClick={() => setIsMobileOpen(false)}
                                        className="relative text-neutral-800 dark:text-neutral-300 hover:text-green-600 dark:hover:text-green-400 transition-colors py-3 text-xl font-medium border-b border-neutral-100 dark:border-white/5 last:border-0"
                                    >
                                        <span className="block">{item.name}</span>
                                    </a>
                                ))}
                                <div className="flex w-full flex-col gap-4 pt-4">
                                    <AnimatedCTAButton
                                        text="Book Now"
                                        className="w-full h-14"
                                        onClick={() => setIsMobileOpen(false)}
                                    />
                                </div>
                            </div>
                        </MobileNavMenu>
                    </MobileNav>
                </Navbar>
            </div>
        </div>
    );
};
