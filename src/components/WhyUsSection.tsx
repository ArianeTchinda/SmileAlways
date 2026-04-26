import { Shield, Clock, Heart, Award, Microscope, Wallet } from "lucide-react";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhyUsSection = () => {
    const ref = useRef<HTMLElement>(null);
    useScrollReveal(ref);

    const reasons = [
        {
            icon: Award,
            title: "Praticiens Certifiés",
            description:
                "Tous nos chirurgiens-dentistes sont diplômés d'universités reconnues et se forment continuellement aux dernières techniques.",
        },
        {
            icon: Microscope,
            title: "Équipements de Pointe",
            description:
                "Radiographie numérique 3D, laser dentaire, scanner intra-oral… notre cabinet utilise les technologies les plus avancées.",
        },
        {
            icon: Heart,
            title: "Soins Sans Douleur",
            description:
                "Notre approche douce et nos protocoles d'anesthésie modernes garantissent un confort maximal pour chaque patient.",
        },
        {
            icon: Clock,
            title: "Urgences 24h/7j",
            description:
                "Une dent cassée, une douleur aiguë ? Notre équipe d'urgence est joignable à toute heure, même les weekends et jours fériés.",
        },
        {
            icon: Shield,
            title: "Hygiène Irréprochable",
            description:
                "Stérilisation poussée, matériel à usage unique, protocoles stricts. Votre sécurité est notre priorité absolue.",
        },
        {
            icon: Wallet,
            title: "Tarifs Transparents",
            description:
                "Devis détaillé avant chaque soin, pas de surprise. Nous proposons aussi des facilités de paiement adaptées à votre budget.",
        },
    ];

    return (
        <section ref={ref} className="relative py-24 bg-gradient-to-br from-dental-blue-dark via-dental-blue to-dental-blue-light text-white overflow-hidden">
            {/* Decorative elements */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -top-20 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-dental-orange/10 rounded-full blur-3xl" />
                <div className="absolute top-1/4 left-[10%] w-3 h-3 bg-white/15 rounded-full animate-gentle-float" />
                <div className="absolute bottom-1/3 right-[15%] w-4 h-4 bg-dental-orange/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
                {/* Subtle grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Header */}
                <div className="text-center mb-16 animate-on-scroll">
                    <span className="inline-block bg-white/15 text-white font-semibold text-sm px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-white/10">
                        Nos Engagements
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Pourquoi choisir Smile Always ?
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Plus qu'un simple cabinet dentaire, nous sommes votre partenaire santé
                        de confiance avec des valeurs claires et un engagement sans faille.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className={`group flex gap-5 p-6 bg-white/8 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/15 hover:border-white/25 hover:-translate-y-1 transition-all duration-500 animate-on-scroll delay-${(index % 3) * 100 + 100}`}
                        >
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 bg-dental-orange rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                                    <reason.icon className="w-7 h-7 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-dental-orange transition-colors duration-300">{reason.title}</h3>
                                <p className="text-white/75 text-sm leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Wave divider at bottom */}
            <div className="wave-divider">
                <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" fill="hsl(0 0% 100%)" />
                </svg>
            </div>
        </section>
    );
};

export default WhyUsSection;
