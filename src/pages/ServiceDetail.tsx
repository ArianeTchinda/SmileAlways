import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams, Navigate } from "react-router-dom";
import {
    Smile, Crown, Scissors, Zap, Shield, Heart,
    CheckCircle, Calendar, ArrowRight, Clock, Award, Phone,
} from "lucide-react";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const allServices = {
    preventifs: {
        icon: Smile,
        title: "Soins Préventifs",
        heroSubtitle: "La prévention est le meilleur investissement pour votre santé dentaire.",
        description:
            "Nos soins préventifs permettent de détecter et traiter les problèmes à un stade précoce. Des examens réguliers, combinés à un nettoyage professionnel, protègent vos dents et vos gencives durablement.",
        longDescription:
            "Le cabinet Smile Always accorde une importance capitale à la prévention. Nous savons qu'un suivi régulier et un dépistage précoce évitent des traitements lourds et coûteux. Notre équipe d'hygiénistes et de dentistes utilise les technologies de pointe — radiographies numériques, scanner intra-oral — pour une analyse précise de votre santé bucco-dentaire.",
        features: [
            "Examen bucco-dentaire complet",
            "Détartrage et polissage professionnel",
            "Radiographies numériques",
            "Scellement des sillons",
            "Conseils d'hygiène personnalisés",
            "Bilan de santé parodontal",
        ],
        benefits: [
            "Détection précoce des caries et maladies parodontales",
            "Prévention des complications coûteuses",
            "Maintien d'une haleine fraîche",
            "Sourire lumineux et dents saines",
        ],
        price: "À partir de 15 000 FCFA",
        duration: "45 – 60 min",
        frequency: "Tous les 6 mois recommandé",
    },
    protheses: {
        icon: Crown,
        title: "Prothèses Dentaires",
        heroSubtitle: "Restaurez votre sourire avec des prothèses de haute qualité.",
        description:
            "Couronnes, bridges et implants de haute qualité pour restaurer fonctionnellement et esthétiquement votre bouche, avec des matériaux durables et naturels.",
        longDescription:
            "Perdre une ou plusieurs dents affecte non seulement l'esthétique, mais aussi la mastication et la confiance en soi. Au cabinet Smile Always, nous proposons une gamme complète de solutions prothétiques adaptées à chaque situation. Nos matériaux sont sélectionnés pour leur durabilité et leur rendu naturel.",
        features: [
            "Implants dentaires en titane",
            "Couronnes céramo-métalliques ou tout céramique",
            "Bridges fixes",
            "Prothèses amovibles",
            "Prothèses sur implants",
            "Couronne provisoire immédiate",
        ],
        benefits: [
            "Restauration complète de la fonction masticatoire",
            "Aspect naturel et esthétique",
            "Matériaux biocompatibles et durables",
            "Amélioration de la confiance en soi",
        ],
        price: "À partir de 150 000 FCFA",
        duration: "Plusieurs séances",
        frequency: "Suivi annuel recommandé",
    },
    chirurgie: {
        icon: Scissors,
        title: "Chirurgie Dentaire",
        heroSubtitle: "Interventions chirurgicales dans un environnement sécurisé et stérilisé.",
        description:
            "Interventions chirurgicales réalisées avec les anesthésies locales les plus efficaces pour un confort optimal et une guérison rapide.",
        longDescription:
            "Notre bloc opératoire respecte les normes les plus strictes en matière d'hygiène et de stérilisation. Le Dr. Jessica Liliane, spécialiste en chirurgie orale, réalise l'ensemble des actes chirurgicaux avec précision et délicatesse, minimisant le temps de récupération et l'inconfort post-opératoire.",
        features: [
            "Extractions simples et complexes",
            "Chirurgie des dents de sagesse",
            "Greffes osseuses",
            "Greffes gingivales",
            "Chirurgie parodontale",
            "Résection apicale",
        ],
        benefits: [
            "Protocoles d'anesthésie moderne sans douleur",
            "Environnement stérile certifié",
            "Suivi post-opératoire personnalisé",
            "Récupération rapide",
        ],
        price: "À partir de 25 000 FCFA",
        duration: "30 – 90 min",
        frequency: "Selon nécessité clinique",
    },
    esthetique: {
        icon: Zap,
        title: "Esthétique Dentaire",
        heroSubtitle: "Retrouvez un sourire éclatant et naturel.",
        description:
            "Traitements esthétiques personnalisés — blanchiment, facettes, composites — réalisés par des praticiens spécialisés pour un résultat impeccable.",
        longDescription:
            "L'esthétique dentaire va bien au-delà du simple blanchiment. C'est un véritable art qui combine technologie et créativité pour transformer votre sourire. Au cabinet Smile Always, nous utilisons le Smile Design numérique pour vous montrer le résultat avant même le début du traitement.",
        features: [
            "Blanchiment professionnel en cabinet",
            "Blanchiment à domicile (gouttières)",
            "Facettes dentaires en porcelaine",
            "Composite esthétique",
            "Reconstruction coronaire",
            "Smile Design numérique",
        ],
        benefits: [
            "Résultats visibles immédiatement",
            "Techniques non invasives disponibles",
            "Personnalisation du traitement",
            "Rendu naturel garanti",
        ],
        price: "À partir de 50 000 FCFA",
        duration: "1 – 2 séances",
        frequency: "Blanchiment : tous les 12-18 mois",
    },
    orthodontie: {
        icon: Shield,
        title: "Orthodontie",
        heroSubtitle: "Alignez vos dents pour un sourire parfait.",
        description:
            "Appareils traditionnels ou aligneurs invisibles pour corriger les malpositions dentaires et obtenir un sourire parfaitement aligné, à tout âge.",
        longDescription:
            "L'orthodontie moderne offre des solutions discrètes et efficaces pour adultes et enfants. Le Dr. Luis Ndongo, spécialiste en orthodontie, élabore un plan de traitement sur mesure en s'appuyant sur des modèles 3D et des simulations numériques pour vous montrer l'évolution de votre sourire.",
        features: [
            "Bagues traditionnelles métalliques",
            "Bagues esthétiques (céramique)",
            "Aligneurs invisibles (Invisalign)",
            "Orthodontie adulte",
            "Contention post-traitement",
            "Orthopédie dento-faciale (enfants)",
        ],
        benefits: [
            "Solutions discrètes et invisibles",
            "Suivi numérique 3D de la progression",
            "Adapté à tous les âges",
            "Résultats durables avec contention",
        ],
        price: "À partir de 300 000 FCFA",
        duration: "12 – 24 mois",
        frequency: "Visite de contrôle mensuelle",
    },
    "urgences-dentaires": {
        icon: Heart,
        title: "Soins d'Urgence",
        heroSubtitle: "Prise en charge immédiate, 24h/24 et 7j/7.",
        description:
            "Prise en charge rapide des douleurs aiguës, fractures, abcès et traumatismes dentaires, 7 jours sur 7, 24 heures sur 24.",
        longDescription:
            "Chez Smile Always, nous comprenons qu'une urgence dentaire ne peut pas attendre. C'est pourquoi notre équipe de garde est joignable à toute heure. En moins d'une heure, un praticien qualifié prend en charge votre situation pour soulager la douleur et traiter le problème.",
        features: [
            "Consultation d'urgence prioritaire",
            "Soulagement immédiat de la douleur",
            "Traitement des abcès dentaires",
            "Réparation de dents fracturées",
            "Replantation dentaire",
            "Prise en charge des traumatismes",
        ],
        benefits: [
            "Disponibilité 24h/24, 7j/7",
            "Délai de prise en charge < 1 heure",
            "Équipe de garde expérimentée",
            "Suivi post-urgence inclus",
        ],
        price: "À partir de 20 000 FCFA",
        duration: "Prise en charge immédiate",
        frequency: "Suivi selon le cas",
    },
};

type ServiceSlug = keyof typeof allServices;

const otherServicesOrder: ServiceSlug[] = [
    "preventifs", "protheses", "chirurgie", "esthetique", "orthodontie", "urgences-dentaires",
];

const ServiceDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const pageRef = useRef<HTMLDivElement>(null);
    useScrollReveal(pageRef);

    if (!slug || !(slug in allServices)) {
        return <Navigate to="/services" replace />;
    }

    const service = allServices[slug as ServiceSlug];
    const Icon = service.icon;
    const others = otherServicesOrder.filter((s) => s !== slug);

    return (
        <Layout>
            <div ref={pageRef}>
                {/* Hero */}
                <section className="relative bg-gradient-to-br from-dental-blue-dark via-dental-blue to-dental-blue-light text-white -mt-32 pt-48 pb-24 overflow-hidden">
                    <div aria-hidden className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-dental-orange/10 rounded-full blur-3xl" />
                        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-white/20 rounded-full animate-gentle-float" />
                        <div
                            className="absolute inset-0 opacity-[0.03]"
                            style={{
                                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                                backgroundSize: "40px 40px",
                            }}
                        />
                    </div>

                    <div className="container mx-auto px-4 relative">
                        <div className="flex justify-center mb-6 animate-on-scroll">
                            <div className="w-20 h-20 bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                                <Icon className="w-10 h-10 text-dental-orange" />
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-center mb-5 tracking-tight animate-fade-in">
                            {service.title}
                        </h1>
                        <p className="text-xl text-white/85 max-w-3xl mx-auto text-center animate-fade-in" style={{ animationDelay: "0.15s" }}>
                            {service.heroSubtitle}
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center mt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                            <div className="flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 backdrop-blur-sm text-sm">
                                <Clock className="w-4 h-4 text-dental-orange" /> {service.duration}
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 backdrop-blur-sm text-sm">
                                <Award className="w-4 h-4 text-dental-orange" /> {service.price}
                            </div>
                        </div>
                    </div>

                    <div className="wave-divider">
                        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" fill="hsl(45 30% 96%)" />
                        </svg>
                    </div>
                </section>

                {/* Detail Content */}
                <section className="py-20 bg-dental-cream">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main content */}
                            <div className="lg:col-span-2 space-y-10">
                                <div className="animate-on-scroll">
                                    <h2 className="text-3xl font-bold text-dental-blue mb-4">À propos de ce service</h2>
                                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">{service.description}</p>
                                    <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
                                </div>

                                {/* Features */}
                                <div className="animate-on-scroll">
                                    <h3 className="text-2xl font-bold text-dental-blue mb-6">Ce que nous proposons</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {service.features.map((f, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                            >
                                                <CheckCircle className="w-5 h-5 text-dental-orange mt-0.5 flex-shrink-0" />
                                                <span className="text-sm font-medium">{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Benefits */}
                                <div className="animate-on-scroll">
                                    <h3 className="text-2xl font-bold text-dental-blue mb-6">Les avantages</h3>
                                    <div className="space-y-3">
                                        {service.benefits.map((b, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-dental-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <ArrowRight className="w-4 h-4 text-dental-blue" />
                                                </div>
                                                <span className="text-muted-foreground">{b}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-6">
                                {/* CTA Card */}
                                <Card className="border-0 shadow-xl sticky top-40 animate-on-scroll">
                                    <CardContent className="p-8">
                                        <h3 className="text-xl font-bold text-dental-blue mb-4">Prendre rendez-vous</h3>
                                        <div className="space-y-3 mb-6 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-3">
                                                <Clock className="w-4 h-4 text-dental-orange" />
                                                <span>Durée : {service.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Award className="w-4 h-4 text-dental-orange" />
                                                <span>{service.price}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Calendar className="w-4 h-4 text-dental-orange" />
                                                <span>{service.frequency}</span>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <Link to="/contact">
                                                <Button variant="dental" className="w-full gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    Prendre rendez-vous
                                                </Button>
                                            </Link>
                                            <a href="tel:+237677223311">
                                                <Button variant="dental-outline" className="w-full gap-2 mt-2">
                                                    <Phone className="w-4 h-4" />
                                                    6 77 22 33 11
                                                </Button>
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Other Services */}
                                <Card className="border-0 shadow-md animate-on-scroll sticky top-96">
                                    <CardContent className="p-6">
                                        <h4 className="font-bold text-dental-blue mb-4">Nos autres services</h4>
                                        <div className="space-y-2">
                                            {others.map((key) => {
                                                const s = allServices[key];
                                                const SIcon = s.icon;
                                                return (
                                                    <Link
                                                        key={key}
                                                        to={`/services/${key}`}
                                                        className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-dental-blue/5 transition-colors group"
                                                    >
                                                        <div className="w-8 h-8 bg-dental-blue/10 rounded-lg flex items-center justify-center group-hover:bg-dental-blue transition-colors">
                                                            <SIcon className="w-4 h-4 text-dental-blue group-hover:text-white transition-colors" />
                                                        </div>
                                                        <span className="text-sm font-medium text-foreground group-hover:text-dental-blue transition-colors">
                                                            {s.title}
                                                        </span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
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
                            <Link to="/services">
                                <Button variant="dental-outline" size="lg" className="border-white text-white hover:bg-white/20 gap-2">
                                    Voir tous les services
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

export default ServiceDetailPage;
