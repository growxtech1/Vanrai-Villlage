import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeader({ title, subtitle, className, align = "center" }: SectionHeaderProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }[align];

  return (
    <div className={`space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12 ${alignClass} ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}
