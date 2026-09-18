"use client";

import { Waves, UtensilsCrossed, Sprout, Gamepad2, ShieldCheck, Sunset } from "lucide-react";
import { RESORT_PRIVILEGES } from "@/lib/stays-data";

function getPrivilegeIcon(iconName: string) {
  const iconProps = { className: "w-6 h-6 text-emerald-400" };
  switch (iconName) {
    case "Waves":
      return <Waves {...iconProps} />;
    case "UtensilsCrossed":
      return <UtensilsCrossed {...iconProps} />;
    case "Sprout":
      return <Sprout {...iconProps} />;
    case "Gamepad2":
      return <Gamepad2 {...iconProps} />;
    case "ShieldCheck":
      return <ShieldCheck {...iconProps} />;
    case "Sunset":
      return <Sunset {...iconProps} />;
    default:
      return <ShieldCheck {...iconProps} />;
  }
}

export function StaysPrivileges() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] via-neutral-950 to-[#0a0a0a] relative overflow-hidden border-t border-white/[0.06]">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Included With Every Stay
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Resort Privileges & Experiences
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-neutral-400 font-light leading-relaxed">
            Your stay at Vanrai Village goes far beyond a hotel room. Immerse yourself in our sprawling 15-acre sanctuary filled with recreation and rural peace.
          </p>
        </div>

        {/* Privileges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {RESORT_PRIVILEGES.map((priv, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getPrivilegeIcon(priv.icon)}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                    {priv.badge}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {priv.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {priv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
