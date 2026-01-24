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
    <div className={`space-y-4 mb-12 ${alignClass} ${className}`}>
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}
