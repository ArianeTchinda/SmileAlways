import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
    Smile, Shield, Heart, Scissors, Crown, Zap,
    ArrowRight, CheckCircle, Calendar, Clock, Award,
} from "lucide-react";

const servicesData = [
    {
        id: "preventifs",
        slug: "preventifs",
        icon: Smile,
        title: "Soins Préventifs",
        description:
            "La prévention est le meilleur investissement pour votre santé dentaire. Nos soins préventifs permettent de détecter et traiter les problèmes à un stade précoce.",
        features: [
            "Examen bucco-dentaire complet",
            "Détartrage et polissage professionnel",
            "Radiographies numériques",
            "Scellement des sillons",
            "Conseils d'hygiène personnalisés",
            "Bilan de santé parodontal",
        ],
        price: "À partir de 15 000 FCFA",
        duration: "45 – 60 min",
        color: "from-dental-blue to-dental-blue-light",
    },
    {
        id: "protheses",
        slug: "protheses",
        icon: Crown,
        title: "Prothèses Dentaires",
        description:
            "Couronnes, bridges et implants de haute qualité pour restaurer fonctionnelle et esthétique votre bouche, avec des matériaux durables et naturels.",
        features: [
            "Implants dentaires en titane",
            "Couronnes céramo-métalliques ou tout céramique",
            "Bridges fixes",
            "Prothèses amovibles",
            "Prothèses sur implants",
            "Couronne provisoire immédiate",
        ],
        price: "À partir de 150 000 FCFA",
        duration: "Plusieurs séances",
        color: "from-violet-600 to-purple-500",
    },
    {
        id: "chirurgie",
        slug: "chirurgie",
        icon: Scissors,
        title: "Chirurgie Dentaire",
        description:
            "Interventions chirurgicales réalisées dans un environnement sécurisé et stérilisé, avec les anesthésies locales les plus efficaces pour un confort optimal.",
        features: [
            "Extractions simples et complexes",
            "Chirurgie des dents de sagesse",
            "Greffes osseuses",
            "Greffes gingivales",
            "Chirurgie parodontale",
            "Résection apicale",
        ],
        price: "À partir de 25 000 FCFA",
        duration: "30 – 90 min",
        color: "from-slate-600 to-slate-700",
    },
    {
        id: "esthetique",
        slug: "esthetique",
        icon: Zap,
        title: "Esthétique Dentaire",
        description:
            "Retrouvez un sourire éclatant et naturel grâce à nos traitements esthétiques personnalisés, réalisés par des praticiens spécialisés.",
        features: [
            "Blanchiment professionnel en cabinet",
            "Blanchiment à domicile (gouttières)",
            "Facettes dentaires en porcelaine",
            "Composite esthétique",
            "Reconstruction coronaire",
            "Smile Design numérique",
        ],
        price: "À partir de 50 000 FCFA",
        duration: "1 – 2 séances",
        color: "from-dental-orange to-dental-orange-light",
    },
    {
        id: "orthodontie",
        slug: "orthodontie",
        icon: Shield,
        title: "Orthodontie",
        description:
            "Appareils traditionnels ou aligneurs invisibles pour corriger les malpositions dentaires et obtenir un sourire parfaitement aligné.",
        features: [
            "Bagues traditionnelles métalliques",
            "Bagues esthétiques (céramique)",
            "Aligneurs invisibles (Invisalign)",
            "Orthodontie adulte",
            "Contension post-traitement",
            "Orthopédie dento-faciale (enfants)",
        ],
        price: "À partir de 300 000 FCFA",
        duration: "12 – 24 mois",
        color: "from-emerald-600 to-teal-500",
    },
    {
        id: "urgences",
        slug: "urgences-dentaires",
        icon: Heart,
        title: "Soins d'Urgence",
        description:
            "Prise en charge rapide des douleurs aiguës, fractures, abcès et traumatismes dentaires, 7 jours sur 7, 24 heures sur 24.",
        features: [
            "Consultation d'urgence prioritaire",
            "Soulagement immédiat de la douleur",
            "Traitement des abcès dentaires",
            "Réparation de dents fracturées",
            "Replantation dentaire",
            "Prise en charge des traumatismes",
        ],
        price: "À partir de 20 000 FCFA",
        duration: "Prise en charge immédiate",
        color: "from-dental-blue-dark to-dental-blue",
    },
];

const ServicesPage = () => {
    const pageRef = useRef<HTMLDivElement>(null);
    useScrollReveal(pageRef);

    return (
        <Layout>
            <PageHero
                label="Nos Soins"
                title="Nos Services"
                subtitle="Du soin préventif à la chirurgie spécialisée, découvrez l'ensemble de nos prestations dentaires pour toute la famille."
            />

            <div ref={pageRef}>
                {/* Services List */}
                <section className="py-20 bg-dental-cream">
                    <div className="container mx-auto px-4">
                        <div className="space-y-12">
                            {servicesData.map((service, index) => (
                                <Card
                                    key={service.id}
                                    id={service.id}
                                    className={`border-0 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 animate-on-scroll delay-${(index % 3) * 100}`}
                                >
                                    <CardContent className="p-0">
                                        <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                                            {/* Color Banner */}
                                            <div className={`bg-gradient-to-br ${service.color} p-10 md:w-1/3 flex flex-col items-center justify-center text-white text-center`}>
                                                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                    <service.icon className="w-10 h-10 text-white" />
                                                </div>
                                                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                                                <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
                                                    <Clock className="w-4 h-4" /> {service.duration}
                                                </div>
                                                <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2">
                                                    <Award className="w-4 h-4" /> {service.price}
                                                </span>
                                            </div>

                                            {/* Content */}
                                            <div className="p-10 md:w-2/3">
                                                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                                                    {service.description}
                                                </p>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                                    {service.features.map((f, i) => (
                                                        <li key={i} className="flex items-center gap-2 text-sm">
                                                            <CheckCircle className="w-4 h-4 text-dental-orange flex-shrink-0" />
                                                            <span>{f}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="flex flex-wrap gap-3">
                                                    <Link to={`/services/${service.slug}`}>
                                                        <Button variant="dental" className="gap-2">
                                                            En savoir plus
                                                            <ArrowRight className="w-4 h-4" />
                                                        </Button>
                                                    </Link>
                                                    <Link to="/contact">
                                                        <Button variant="dental-outline" className="gap-2">
                                                            <Calendar className="w-4 h-4" />
                                                            Prendre rendez-vous
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="py-16 bg-gradient-to-r from-dental-blue to-dental-blue-light text-white text-center">
                    <div className="container mx-auto px-4 animate-on-scroll">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Besoin d'un conseil ou d'un devis ?
                        </h2>
                        <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
                            Notre équipe répond à toutes vos questions et vous propose un devis
                            personnalisé sans engagement.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button variant="accent" size="lg" className="gap-2 shadow-xl">
                                    <Calendar className="w-5 h-5" />
                                    Prendre rendez-vous
                                </Button>
                            </Link>
                            <Link to="/urgences">
                                <Button variant="dental-outline" size="lg" className="border-white text-white hover:bg-white/20 gap-2">
                                    Urgences 24/7
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default ServicesPage;
