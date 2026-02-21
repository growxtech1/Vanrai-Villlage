import { AlertCircle, Scale } from "lucide-react";
import { motion } from "framer-motion";

export function MembershipTerms() {
    const terms = [
        "Membership is valid for 12 months from the date of activation.",
        "Benefits are personal and non-transferable unless specified.",
        "Advance booking is required for complimentary stays.",
        "Discounts are applicable on base room rates and food.",
        "Management reserves the right to adjust seasonal privileges."
    ];

    return (
        <section className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto p-12 rounded-[2.5rem] border border-white/5 bg-white/[0.01] relative overflow-hidden"
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
                        <div className="md:w-1/3">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                                <Scale className="w-6 h-6 text-white/40" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Terms & <br /><span className="text-white/40 italic font-light">Agreements</span></h3>
                            <p className="text-white/20 text-xs leading-relaxed">
                                Curated rules to ensure a seamless and fair experience for all our privilege members.
                            </p>
                        </div>

                        <div className="md:w-2/3">
                            <ul className="space-y-4">
                                {terms.map((term, index) => (
                                    <li key={index} className="flex gap-4 text-sm text-white/40 font-light leading-relaxed group">
                                        <span className="text-green-500/50 group-hover:text-green-500 transition-colors mt-1">•</span>
                                        {term}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 pt-8 border-t border-white/5 flex items-center gap-3 text-white/20 text-[10px] font-bold tracking-widest uppercase">
                                <AlertCircle className="w-3 h-3" />
                                Full agreement available upon registration
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
