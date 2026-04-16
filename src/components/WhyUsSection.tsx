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
        <section ref={ref} className="py-24 bg-gradient-to-br from-dental-blue to-dental-blue-dark text-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 animate-on-scroll">
                    <span className="inline-block bg-white/15 text-white font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
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
                            className={`group flex gap-5 p-6 bg-white/8 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300 animate-on-scroll delay-${(index % 3) * 100 + 100}`}
                        >
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 bg-dental-orange rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                                    <reason.icon className="w-7 h-7 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                                <p className="text-white/75 text-sm leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
