import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Compass, Home, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist. Explore our stays, wooden cottages, and nature experiences at Vanrai Resort.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-between selection:bg-emerald-500/30">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-32 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-lg mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 text-emerald-400 mb-2">
            <Compass className="w-10 h-10 animate-spin-slow" />
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] font-semibold text-emerald-400">
              Error 404
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Path Not Found
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              The sanctuary you are looking for might have moved or is temporarily unavailable amidst our gardens.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-lg shadow-emerald-600/20"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Link>
            <Link
              href="/stays"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white border border-white/10 font-medium text-sm transition-all"
            >
              Explore Stays
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
