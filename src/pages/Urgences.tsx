import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Phone,
    AlertTriangle,
    Clock,
    CheckCircle,
    ChevronDown,
    ChevronUp,
    Zap,
    HeartPulse,
    ShieldAlert,
} from "lucide-react";
import { useState, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-dental.jpg";

const faqs = [
    {
        question: "Qu'est-ce qui constitue une urgence dentaire ?",
        answer:
            "Une urgence dentaire inclut les douleurs dentaires intenses, les dents cassées ou déchaussées, les abcès avec gonflement, les saignements abondants, et tout traumatisme facial ou dentaire suite à un accident.",
    },
    {
        question: "Comment me préparer avant d'arriver au cabinet ?",
        answer:
            "Appelez-nous immédiatement au 6 77 22 33 12. Si vous avez une dent tombée, conservez-la dans du lait ou de la salive. Évitez de prendre de l'aspirine (anticoagulant). Signalez toute allergie médicamenteuse.",
    },
    {
        question: "Combien coûte une consultation d'urgence ?",
        answer:
            "La consultation d'urgence commence à partir de 20 000 FCFA. Les soins supplémentaires (extraction, médicaments, radiographies) seront devisés avant toute intervention.",
    },
    {
        question: "Puis-je être reçu sans rendez-vous ?",
        answer:
            "Oui, pour les urgences. Appelez le 6 77 22 33 12 avant de venir afin que nous puissions vous préparer un créneau prioritaire et avoir le matériel approprié prêt.",
    },
    {
        question: "Que faire si ma dent est tombée ?",
        answer:
            "Ne touchez jamais la racine. Rincez délicatement sous l'eau froide sans frotter. Replacez la dent dans son alvéole si possible, ou conservez-la dans du lait entier. Venez IMMÉDIATEMENT — les chances de replantation chutent après 30 minutes.",
    },
];

const UrgencesPage = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const pageRef = useRef<HTMLDivElement>(null);
    useScrollReveal(pageRef);

    return (
        <Layout>
            <div ref={pageRef}>
                {/* Hero — with background image like homepage */}
                <section className="relative bg-gradient-to-br from-dental-blue-dark via-dental-blue to-dental-blue-light text-white -mt-32 pt-48 pb-20 overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src={heroImage}
                            alt="Urgences dentaires"
                            className="w-full h-full object-cover scale-105 animate-[slow-zoom_20s_ease-in-out_infinite_alternate]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-dental-blue-dark/90 via-dental-blue/85 to-dental-blue-light/75" />
                    </div>

                    {/* Decorative elements */}
                    <div aria-hidden className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-dental-orange/10 rounded-full blur-3xl" />
                        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-white/20 rounded-full animate-gentle-float" />
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                    </div>

                    {/* Content — container wrapper */}
                    <div className="container mx-auto px-4 text-center relative">
                        <div className="flex justify-center mb-6 animate-on-scroll">
                            <div className="w-24 h-24 bg-white/15 rounded-2xl flex items-center justify-center animate-pulse-soft backdrop-blur-sm border border-white/20">
                                <ShieldAlert className="w-12 h-12 text-dental-orange" />
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-on-scroll delay-100">
                            Urgences Dentaires
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-on-scroll delay-200">
                            Notre équipe est disponible <strong>24h/24, 7j/7</strong> pour prendre en charge
                            vos urgences dentaires. Ne souffrez plus — appelez-nous maintenant.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll delay-300">
                            <a href="tel:+237676615413">
                                <Button
                                    size="lg"
                                    variant="accent"
                                    className="font-bold text-lg px-8 gap-2 shadow-xl"
                                >
                                    <Phone className="w-6 h-6" />
                                    6 77 22 33 12 — Urgences
                                </Button>
                            </a>
                            <a href="https://wa.me/237223312" target="_blank" rel="noreferrer">
                                <Button
                                    variant="dental-outline"
                                    size="lg"
                                    className="border-white text-white hover:bg-white/20 text-lg px-8 gap-2"
                                >
                                    WhatsApp Urgences
                                </Button>
                            </a>
                        </div>

                        {/* Quick stats */}
                        <div className="mt-14 grid grid-cols-3 max-w-md mx-auto gap-6 animate-on-scroll delay-400">
                            {[
                                { val: "24/7", label: "Disponibilité" },
                                { val: "< 1h", label: "Délai de prise en charge" },
                                { val: "100%", label: "Urgences traitées" },
                            ].map((s, i) => (
                                <div key={i} className="bg-white/10 rounded-2xl py-3 px-2 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
                                    <p className="text-2xl font-bold text-dental-orange">{s.val}</p>
                                    <p className="text-xs text-white/75 leading-tight">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wave divider */}
                    <div className="wave-divider">
                        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" fill="hsl(45 30% 96%)" />
                        </svg>
                    </div>
                </section>

                {/* Situations */}
                <section className="py-20 bg-dental-cream">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-14 animate-on-scroll">
                            <span className="inline-block bg-dental-orange/10 text-dental-orange font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                                Prises en charge
                            </span>
                            <h2 className="text-4xl font-bold text-dental-blue mb-4">
                                Situations que nous traitons
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Que ce soit le jour ou la nuit, voici les urgences que nous prenons en charge
                                immédiatement.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: AlertTriangle,
                                    title: "Douleur Aiguë",
                                    desc: "Rage de dent, pulpite, névralgie — soulagement en quelques minutes.",
                                    accent: "dental-orange",
                                },
                                {
                                    icon: Zap,
                                    title: "Abcès Dentaire",
                                    desc: "Gonflement, fièvre, pus visible — traitement antibiotique et drainage immédiat.",
                                    accent: "dental-blue",
                                },
                                {
                                    icon: HeartPulse,
                                    title: "Dent Cassée ou Luxée",
                                    desc: "Fracture suite à un choc ou à la mastication, dent qui bouge anormalement.",
                                    accent: "dental-blue-light",
                                },
                                {
                                    icon: AlertTriangle,
                                    title: "Dent Avulsée",
                                    desc: "Dent complètement délogée — intervenir en moins de 30 min augmente les chances.",
                                    accent: "dental-orange",
                                },
                                {
                                    icon: HeartPulse,
                                    title: "Saignement Gingival",
                                    desc: "Saignement abondant et persistant après extraction ou traumatisme.",
                                    accent: "dental-blue",
                                },
                                {
                                    icon: Zap,
                                    title: "Prothèse Cassée",
                                    desc: "Couronne tombée, bridge descellé, appareil cassé avant un événement important.",
                                    accent: "dental-orange-light",
                                },
                            ].map((item, i) => (
                                <Card
                                    key={i}
                                    className={`group border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll delay-${(i % 3) * 100 + 100}`}
                                >
                                    <CardContent className="p-6">
                                        <div className={`w-12 h-12 bg-${item.accent}/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <item.icon className={`w-6 h-6 text-${item.accent}`} />
                                        </div>
                                        <h3 className="font-bold text-dental-blue mb-2">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-14 animate-on-scroll">
                            <h2 className="text-4xl font-bold text-dental-blue mb-4">Comment ça marche ?</h2>
                            <p className="text-muted-foreground text-lg">En cas d'urgence, suivez ces 4 étapes simples.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { step: "01", icon: Phone, title: "Appelez-nous", desc: "Composez le 6 77 22 33 12, disponible 24h/24." },
                                { step: "02", icon: Clock, title: "Prise en charge rapide", desc: "Nous vous orientons et préparons votre dossier en temps réel." },
                                { step: "03", icon: CheckCircle, title: "Arrivée au cabinet", desc: "Vous êtes accueillis en priorité, sans attente." },
                                { step: "04", icon: HeartPulse, title: "Traitement immédiat", desc: "Soulagement et résolution du problème dès votre arrivée." },
                            ].map((item, i) => (
                                <div key={i} className={`text-center animate-on-scroll delay-${i * 100 + 100}`}>
                                    <div className="relative inline-block mb-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-dental-blue to-dental-blue-light rounded-2xl flex items-center justify-center text-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110">
                                            <item.icon className="w-8 h-8" />
                                        </div>
                                        <span className="absolute -top-2 -right-2 w-7 h-7 bg-dental-orange text-white text-xs font-bold rounded-full flex items-center justify-center shadow">
                                            {item.step}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-dental-blue mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-dental-cream">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="text-center mb-12 animate-on-scroll">
                            <span className="inline-block bg-dental-blue/10 text-dental-blue font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                                FAQ
                            </span>
                            <h2 className="text-4xl font-bold text-dental-blue">Questions fréquentes</h2>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <Card key={i} className={`border-0 shadow-sm hover:shadow-md transition-shadow animate-on-scroll delay-${i * 100}`}>
                                    <CardContent className="p-0">
                                        <button
                                            className="w-full flex items-center justify-between p-6 text-left"
                                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        >
                                            <span className="font-semibold text-dental-blue pr-4">{faq.question}</span>
                                            {openFaq === i ? (
                                                <ChevronUp className="w-5 h-5 text-dental-orange flex-shrink-0" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-dental-orange flex-shrink-0" />
                                            )}
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 bg-gradient-to-br from-dental-blue to-dental-blue-dark text-white text-center">
                    <div className="container mx-auto px-4 animate-on-scroll">
                        <div className="w-16 h-16 bg-dental-orange rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float">
                            <Phone className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold mb-4">Une urgence en ce moment ?</h2>
                        <p className="text-white/85 mb-8 text-xl">N'attendez pas. Chaque minute compte.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:+237676615413">
                                <Button variant="accent" size="lg" className="font-bold text-xl px-10 gap-2 py-6 shadow-xl">
                                    <Phone className="w-6 h-6" />
                                    6 77 22 33 12
                                </Button>
                            </a>
                            <Link to="/contact">
                                <Button
                                    variant="dental-outline"
                                    size="lg"
                                    className="border-white text-white hover:bg-white/20 text-lg px-8 py-6"
                                >
                                    Prendre rendez-vous
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default UrgencesPage;
