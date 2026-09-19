"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X, ArrowUpRight, BedDouble } from "lucide-react";
import { ROOMS_DATA } from "@/lib/stays-data";
import {
  formatINR,
  WOODEN_COTTAGE_PRICE_PER_NIGHT,
  DELUXE_AC_ROOM_PRICE_PER_NIGHT,
  STANDARD_ROOM_PRICE_PER_NIGHT,
} from "@/constants/pricing";

export function StaysComparison() {
  const [selectedMobileIndex, setSelectedMobileIndex] = useState(0);

  const features = [
    {
      name: "Nightly Starting Tariff",
      cottage: `${formatINR(WOODEN_COTTAGE_PRICE_PER_NIGHT)} / night`,
      deluxe: `${formatINR(DELUXE_AC_ROOM_PRICE_PER_NIGHT)} / night`,
      standard: `${formatINR(STANDARD_ROOM_PRICE_PER_NIGHT)} / night`,
      highlight: true,
    },
    {
      name: "Max Occupancy",
      cottage: "4 Guests (2+2)",
      deluxe: "4 Guests (2+2)",
      standard: "3 Guests (2+1)",
    },
    {
      name: "Bed Setup",
      cottage: "King Solid Teak Bed",
      deluxe: "Queen Bed + Divan",
      standard: "Queen / Twin Beds",
    },
    {
      name: "Climate Control",
      cottage: "Split AC + Cross Breeze",
      deluxe: "Full Split AC",
      standard: "Ceiling Fan + Breeze",
    },
    {
      name: "Complimentary Breakfast",
      cottage: true,
      deluxe: true,
      standard: false,
      highlight: true,
    },
    {
      name: "Resort Swimming Pool Access",
      cottage: true,
      deluxe: true,
      standard: true,
    },
    {
      name: "Private Sit-Out / Balcony",
      cottage: true,
      deluxe: "Courtyard Verandah",
      standard: "Shared Garden Access",
    },
    {
      name: "In-Room HD TV & Wi-Fi",
      cottage: true,
      deluxe: true,
      standard: "Wi-Fi in Zones",
    },
    {
      name: "Atmosphere & Style",
      cottage: "Handcrafted Teak Cabin",
      deluxe: "Modern Resort Elegance",
      standard: "Rustic Village Simplicity",
    },
    {
      name: "Ideal For",
      cottage: "Couples & Honeymoons",
      deluxe: "Families & Couples",
      standard: "Short Trips & Budget",
    },
  ];

  return (
    <section id="compare" className="scroll-mt-28 py-16 sm:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
            <BedDouble className="w-3.5 h-3.5" />
            Side-By-Side Comparison
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Compare All Stay Options
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-neutral-400 font-light leading-relaxed">
            Find the perfect accommodation that matches your party size, comfort preferences, and budget.
          </p>
        </div>

        {/* ================= DESKTOP TABLE VIEW (>= 1024px) ================= */}
        <div className="hidden lg:block overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 backdrop-blur-2xl shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="p-6 text-sm font-semibold text-neutral-400 w-1/4">
                  Feature & Amenity
                </th>
                {ROOMS_DATA.map((r) => (
                  <th key={r.id} className="p-6 text-center w-1/4">
                    <div className="inline-block">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                        {r.badge.label}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-1">{r.name}</h3>
                      <p className="text-2xl font-extrabold text-white font-mono">
                        ₹{r.price.toLocaleString("en-IN")}
                        <span className="text-xs font-light text-neutral-400 font-sans ml-1">/ night</span>
                      </p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-sm">
              {features.map((feat, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-white/[0.02] transition-colors ${
                    feat.highlight ? "bg-emerald-500/[0.04]" : ""
                  }`}
                >
                  <td className="p-4 sm:p-5 font-medium text-neutral-300">
                    {feat.name}
                  </td>

                  {/* Wooden Cottage column */}
                  <td className="p-4 sm:p-5 text-center text-neutral-200">
                    {typeof feat.cottage === "boolean" ? (
                      feat.cottage ? (
                        <span className="inline-flex w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 items-center justify-center">
                          <Check className="w-4 h-4" />
                        </span>
                      ) : (
                        <span className="inline-flex w-6 h-6 rounded-full bg-red-500/20 text-red-400 items-center justify-center">
                          <X className="w-4 h-4" />
                        </span>
                      )
                    ) : (
                      <span className={feat.highlight ? "font-bold text-emerald-400 font-mono" : ""}>
                        {feat.cottage}
                      </span>
                    )}
                  </td>

                  {/* Deluxe AC column */}
                  <td className="p-4 sm:p-5 text-center text-neutral-200">
                    {typeof feat.deluxe === "boolean" ? (
                      feat.deluxe ? (
                        <span className="inline-flex w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 items-center justify-center">
                          <Check className="w-4 h-4" />
                        </span>
                      ) : (
                        <span className="inline-flex w-6 h-6 rounded-full bg-red-500/20 text-red-400 items-center justify-center">
                          <X className="w-4 h-4" />
                        </span>
                      )
                    ) : (
                      <span className={feat.highlight ? "font-bold text-emerald-400 font-mono" : ""}>
                        {feat.deluxe}
                      </span>
                    )}
                  </td>

                  {/* Standard Room column */}
                  <td className="p-4 sm:p-5 text-center text-neutral-200">
                    {typeof feat.standard === "boolean" ? (
                      feat.standard ? (
                        <span className="inline-flex w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 items-center justify-center">
                          <Check className="w-4 h-4" />
                        </span>
                      ) : (
                        <span className="inline-flex w-6 h-6 rounded-full bg-red-500/15 text-neutral-500 items-center justify-center text-xs">
                          <X className="w-4 h-4" />
                        </span>
                      )
                    ) : (
                      <span className={feat.highlight ? "font-bold text-emerald-400 font-mono" : ""}>
                        {feat.standard}
                      </span>
                    )}
                  </td>
                </tr>
              ))}

              {/* Action row */}
              <tr className="bg-white/[0.02]">
                <td className="p-6 text-sm font-semibold text-neutral-400">
                  Reserve This Room
                </td>
                {ROOMS_DATA.map((r) => (
                  <td key={r.id} className="p-6 text-center">
                    <Link
                      href={`/availability?roomType=${encodeURIComponent(r.type)}`}
                      className="inline-flex items-center justify-center gap-1.5 w-full max-w-[200px] h-10 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs shadow-md shadow-emerald-950/40 transition-colors"
                    >
                      <span>Check Dates</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE CARDS VIEW (< 1024px) ================= */}
        <div className="block lg:hidden">
          {/* Mobile Selector Tabs */}
          <div className="flex rounded-2xl bg-white/[0.04] p-1.5 border border-white/10 mb-6 gap-1">
            {ROOMS_DATA.map((r, i) => (
              <button
                key={r.id}
                onClick={() => setSelectedMobileIndex(i)}
                className={`flex-1 py-2.5 px-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedMobileIndex === i
                    ? "bg-emerald-500 text-neutral-950 shadow-md"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {r.shortName}
              </button>
            ))}
          </div>

          {/* Active Mobile Card */}
          {(() => {
            const currentRoom = ROOMS_DATA[selectedMobileIndex];
            const currentKey =
              selectedMobileIndex === 0
                ? "cottage"
                : selectedMobileIndex === 1
                ? "deluxe"
                : "standard";

            return (
              <div className="rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-xl p-5 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 block">
                      {currentRoom.badge.label}
                    </span>
                    <h3 className="text-lg font-bold text-white">{currentRoom.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-white font-mono">
                      ₹{currentRoom.price.toLocaleString("en-IN")}
                    </p>
                    <p className="text-[10px] text-neutral-400">per night + taxes</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6 divide-y divide-white/[0.06]">
                  {features.map((feat, idx) => {
                    const val = feat[currentKey];
                    return (
                      <div key={idx} className="flex items-center justify-between pt-2.5 text-xs">
                        <span className="text-neutral-400 font-light">{feat.name}</span>
                        <div className="text-right font-medium text-neutral-200">
                          {typeof val === "boolean" ? (
                            val ? (
                              <span className="inline-flex items-center gap-1 text-emerald-400">
                                <Check className="w-3.5 h-3.5" /> Included
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-neutral-500">
                                <X className="w-3.5 h-3.5" /> Not Included
                              </span>
                            )
                          ) : (
                            <span className={feat.highlight ? "text-emerald-400 font-bold" : ""}>
                              {val}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Link
                  href={`/availability?roomType=${encodeURIComponent(currentRoom.type)}`}
                  className="w-full flex items-center justify-center gap-2 h-11 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm shadow-md transition-all"
                >
                  <span>Check Availability for {currentRoom.shortName}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
