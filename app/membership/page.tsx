"use client";

import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { MembershipHero } from "@/components/membership/membership-hero";
import { WhyJoin } from "@/components/membership/why-join";
import { MembershipPlans } from "@/components/membership/membership-plans";
import { ValueBreakdown } from "@/components/membership/value-breakdown";
import { HowItWorks } from "@/components/membership/how-it-works";
import { ExclusivePrivileges } from "@/components/membership/exclusive-privileges";
import { MembershipFAQs } from "@/components/membership/membership-faqs";
import { MembershipTerms } from "@/components/membership/membership-terms";
import { FinalCTA } from "@/components/membership/final-cta";

export default function MembershipPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-green-500/30">
            <Header />

            <MembershipHero />

            <WhyJoin />

            <MembershipPlans />

            <ValueBreakdown />

            <HowItWorks />

            <ExclusivePrivileges />

            <MembershipFAQs />

            <MembershipTerms />

            <FinalCTA />

            <Footer />
        </main>
    );
}
