import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
    Smile, Shield, Heart, Scissors, Crown, Zap, ScanLine, Pill,
    ArrowRight, CheckCircle, Calendar, Clock, Award,
} from "lucide-react";
import { formatCfaPrice, WHATSAPP_LINK } from "@/lib/utils";

// Importation des images (assurez-vous que les fichiers existent dans votre dossier assets)
import imgPreventif from "@/assets/image1.jpeg";
import imgProthese from "@/assets/image2.jpeg";
import imgChirurgie from "@/assets/image4.jpeg";
import imgEsthetique from "@/assets/image5.jpeg";
import imgOrthodontie from "@/assets/image3.webp";
import imgUrgence from "@/assets/image6.jpeg";

const servicesData = [
    {
        id: "preventifs",
        slug: "preventifs",
        icon: Smile,
        image: imgPreventif,
        title: "Soins Préventifs",
        description: "La prévention est le meilleur investissement pour votre santé dentaire. Nos soins préventifs permettent de détecter et traiter les problèmes à un stade précoce.",
        features: [
            "Examen bucco-dentaire complet",
            "Détartrage et polissage professionnel",
            "Radiographies numériques",
            "Scellement des sillons",
            "Conseils d'hygiène personnalisés",
            "Bilan de santé parodontal",
        ],
        price: formatCfaPrice(15000),
        duration: "45 – 60 min",
        color: "from-dental-blue/90 to-dental-blue-light/90",
    },
    {
        id: "radio-dentaire",
        slug: "radio-dentaire",
        icon: ScanLine,
        image: imgPreventif,
        title: "Radiographie rétro-alvéolaire",
        description: "Un examen radiographique précis pour diagnostiquer les pathologies cachées et planifier les traitements les plus adaptés.",
        features: [
            "Radiographie rétro-alvéolaire standard",
            "Analyse des dents et des racines",
            "Détection des infections cachées",
            "Planification de traitements précis",
            "Résultats rapides et interprétation claire",
            "Examen sans douleur",
        ],
        price: formatCfaPrice(10000),
        duration: "10 – 15 min",
        color: "from-cyan-700/90 to-sky-500/90",
    },
    {
        id: "mini-pharmacie",
        slug: "mini-pharmacie",
        icon: Pill,
        image: imgUrgence,
        title: "Mini Pharmacie",
        description: "Des produits de soins bucco-dentaires et des médicaments de base, immédiatement disponibles pour votre confort et votre suivi.",
        features: [
            "Produits d'hygiène bucco-dentaire",
            "Médicaments de base et antalgiques",
            "Conseils de prise en charge",
            "Accessibilité rapide en cabinet",
            "Produits adaptés à votre suivi",
            "Accompagnement pratique après consultation",
        ],
        price: formatCfaPrice(2000),
        duration: "Consultation rapide",
        color: "from-amber-600/90 to-orange-500/90",
    },
    {
        id: "protheses",
        slug: "protheses",
        icon: Crown,
        image: imgProthese,
        title: "Prothèses Dentaires",
        description: "Couronnes, bridges et implants de haute qualité pour restaurer fonctionnelle et esthétique votre bouche, avec des matériaux durables et naturels.",
        features: [
            "Implants dentaires en titane",
            "Couronnes céramo-métalliques ou tout céramique",
            "Bridges fixes",
            "Prothèses amovibles",
            "Prothèses sur implants",
            "Couronne provisoire immédiate",
        ],
        price: formatCfaPrice(15000),
        duration: "Plusieurs séances",
        color: "from-violet-600/90 to-purple-500/90",
    },
    {
        id: "chirurgie",
        slug: "chirurgie",
        icon: Scissors,
        image: imgChirurgie,
        title: "Chirurgie Dentaire",
        description: "Interventions chirurgicales réalisées dans un environnement sécurisé et stérilisé, avec les anesthésies locales les plus efficaces pour un confort optimal.",
        features: [
            "Extractions simples et complexes",
            "Chirurgie des dents de sagesse",
            "Greffes osseuses",
            "Greffes gingivales",
            "Chirurgie parodontale",
            "Résection apicale",
        ],
        price: formatCfaPrice(15000),
        duration: "30 – 90 min",
        color: "from-slate-700/90 to-slate-800/90",
    },
    {
        id: "esthetique",
        slug: "esthetique",
        icon: Zap,
        image: imgEsthetique,
        title: "Esthétique Dentaire",
        description: "Retrouvez un sourire éclatant et naturel grâce à nos traitements esthétiques personnalisés, réalisés par des praticiens spécialisés.",
        features: [
            "Blanchiment professionnel en cabinet",
            "Blanchiment à domicile (gouttières)",
            "Facettes dentaires en porcelaine",
            "Composite esthétique",
            "Reconstruction coronaire",
            "Smile Design numérique",
        ],
        price: formatCfaPrice(100000),
        duration: "1 – 2 séances",
        color: "from-dental-orange/90 to-dental-orange-light/90",
    },
    {
        id: "orthodontie",
        slug: "orthodontie",
        icon: Shield,
        image: imgOrthodontie,
        title: "Orthodontie",
        description: "Appareils traditionnels ou aligneurs invisibles pour corriger les malpositions dentaires et obtenir un sourire parfaitement aligné.",
        features: [
            "Bagues traditionnelles métalliques",
            "Bagues esthétiques (céramique)",
            "Aligneurs invisibles (Invisalign)",
            "Orthodontie adulte",
            "Contension post-traitement",
            "Orthopédie dento-faciale (enfants)",
        ],
        price: formatCfaPrice(400000),
        duration: "un à deux ans",
        color: "from-emerald-600/90 to-teal-500/90",
    },
    {
        id: "urgences",
        slug: "urgences-dentaires",
        icon: Heart,
        image: imgUrgence,
        title: "Soins d'Urgence",
        description: "Prise en charge rapide des douleurs aiguës, fractures, abcès et traumatismes dentaires, 7 jours sur 7, 24 heures sur 24.",
        features: [
            "Consultation d'urgence prioritaire",
            "Soulagement immédiat de la douleur",
            "Traitement des abcès dentaires",
            "Réparation de dents fracturées",
            "Replantation dentaire",
            "Prise en charge des traumatismes",
        ],
        price: formatCfaPrice(50000),
        duration: "Prise en charge immédiate",
        color: "from-red-700/90 to-red-600/90",
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
                <section className="py-20 bg-dental-cream">
                    <div className="container mx-auto px-4">
                        <div className="space-y-16">
                            {servicesData.map((service, index) => (
                                <Card
                                    key={service.id}
                                    id={service.id}
                                    className={`border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-on-scroll group`}
                                >
                                    <CardContent className="p-0">
                                        <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                                            
                                            {/* Image & Banner Section */}
                                            <div className="relative md:w-2/5 min-h-[300px] overflow-hidden">
                                                {/* Background Image */}
                                                <img 
                                                    src={service.image} 
                                                    alt={service.title}
                                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                {/* Color Overlay */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} mix-blend-multiply opacity-90 group-hover:opacity-75 transition-opacity duration-500`} />
                                                
                                                {/* Overlay Content */}
                                                <div className="relative h-full p-10 flex flex-col items-center justify-center text-white text-center z-10">
                                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30 shadow-xl">
                                                        <service.icon className="w-8 h-8 text-white" />
                                                    </div>
                                                    <h2 className="text-3xl font-bold mb-4 tracking-tight">{service.title}</h2>
                                                    
                                                    <div className="space-y-3">
                                                        <div className="flex items-center justify-center gap-2 text-white/90 text-sm bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
                                                            <Clock className="w-4 h-4" /> {service.duration}
                                                        </div>
                                                        <div className="flex items-center justify-center gap-2 text-white font-bold bg-dental-orange px-4 py-1.5 rounded-full shadow-lg">
                                                            <Award className="w-4 h-4" /> {service.price}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content Section */}
                                            <div className="p-8 md:p-12 md:w-3/5 bg-white flex flex-col justify-center">
                                                <p className="text-slate-600 mb-8 text-lg leading-relaxed italic">
                                                    "{service.description}"
                                                </p>
                                                
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                                                    {service.features.map((f, i) => (
                                                        <div key={i} className="flex items-start gap-3 group/item">
                                                            <div className="mt-1 p-1 bg-dental-blue/10 rounded-full group-hover/item:bg-dental-orange/20 transition-colors">
                                                                <CheckCircle className="w-4 h-4 text-dental-blue group-hover/item:text-dental-orange" />
                                                            </div>
                                                            <span className="text-slate-700 text-sm font-medium">{f}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100">
                                                    <Link to={`/services/${service.slug}`} className="flex-1 sm:flex-none">
                                                        <Button variant="dental" className="w-full gap-2 shadow-lg hover:shadow-dental-blue/30 transition-all">
                                                            Détails du service
                                                            <ArrowRight className="w-4 h-4" />
                                                        </Button>
                                                    </Link>
                                                    <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex-1 sm:flex-none">
                                                        <Button variant="outline" className="w-full gap-2 border-slate-200 hover:bg-slate-50">
                                                            <Calendar className="w-4 h-4 text-dental-blue" />
                                                            Rendez-vous
                                                        </Button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

               {/* <BeforeAfterSection /> */} 

                {/* CTA Final */}
                <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-dental-blue/10 skew-x-12 translate-x-20" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Prêt à retrouver votre plus beau sourire ?
                        </h2>
                        <p className="text-slate-400 mb-10 text-xl max-w-2xl mx-auto">
                            Notre équipe vous accueille dans un cadre moderne pour des soins personnalisés et sans douleur.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                                <Button variant="accent" size="lg" className="h-14 px-8 text-lg gap-3 shadow-2xl">
                                    <Calendar className="w-6 h-6" />
                                    Réserver ma consultation
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default ServicesPage;