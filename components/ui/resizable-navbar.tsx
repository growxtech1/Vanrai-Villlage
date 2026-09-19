"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
} from "motion/react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
  visible?: boolean;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  return (
    <nav className={cn("relative w-full", className)}>
      {children}
    </nav>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(16px)",
        boxShadow: "0 10px 32px rgba(0, 0, 0, 0.6)",
        y: visible ? 4 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 32,
      }}
      className={cn(
        "relative z-50 mx-auto hidden lg:flex h-14 w-fit items-center justify-between gap-2 rounded-full px-4",
        "bg-neutral-950/80 border border-white/10 shadow-2xl backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({
  items,
  className,
  onItemClick,
}: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const pathname = usePathname();

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex flex-1 flex-row items-center justify-center space-x-1 lg:space-x-1.5 text-sm font-medium transition duration-200",
        className,
      )}
    >
      {items.map((item, idx) => {
        const isActive = pathname === item.link;
        return (
          <Link
            key={`link-${idx}`}
            href={item.link}
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            className={cn(
              "relative px-3 py-1.5 font-medium tracking-wide transition-colors duration-200 text-[13px] rounded-full",
              isActive ? "text-emerald-400 font-semibold" : "text-neutral-300 hover:text-white"
            )}
          >
            {(hovered === idx || isActive) && (
              <motion.div
                layoutId={isActive ? "activeNav" : "hovered"}
                className={cn(
                  "absolute inset-0 h-full w-full rounded-full border",
                  isActive
                    ? "bg-emerald-500/10 border-emerald-500/30"
                    : "bg-white/10 backdrop-blur-sm border-white/10"
                )}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </Link>
        );
      })}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(16px)",
        boxShadow: "0 10px 32px rgba(0, 0, 0, 0.6)",
        y: visible ? 4 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 32,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-[calc(100%-32px)] max-w-xl h-16 sm:h-[68px] items-center justify-between px-5 rounded-[32px] sm:rounded-[36px] lg:hidden",
        "bg-neutral-950/90 border border-white/10 shadow-2xl backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          data-lenis-prevent
          className={cn(
            "absolute inset-x-0 top-[76px] z-50 flex w-full flex-col items-start justify-start gap-2 rounded-[24px] bg-neutral-950/95 p-6 shadow-2xl border border-white/10 backdrop-blur-2xl overflow-y-auto max-h-[calc(100vh-100px)]",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center text-neutral-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
    >
      {isOpen ? (
        <IconX className="w-6 h-6" />
      ) : (
        <IconMenu2 className="w-6 h-6" />
      )}
    </button>
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-2 flex items-center px-1 py-0.5 shrink-0"
    >
      <img
        src="/svg/Vanrai.svg"
        alt="Vanrai Resort Logo"
        width={48}
        height={48}
        className="w-9 h-9 sm:w-10 sm:h-10 brightness-110 contrast-125 transition-transform duration-300 hover:scale-105"
      />
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  onClick,
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
  onClick?: () => void;
} & (
    | React.ComponentPropsWithoutRef<"a">
    | React.ComponentPropsWithoutRef<"button">
  )) => {
  const baseStyles =
    "px-5 py-2.5 rounded-md bg-white button bg-white text-black text-base font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none text-white font-semibold",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
