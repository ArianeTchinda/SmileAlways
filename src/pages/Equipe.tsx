import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Award, Mail, Phone, Calendar } from "lucide-react";

import medecin1 from "../assets/medecin2.jpg";
import medecin2 from "../assets/medecin3.jpg";
import medecin3 from "../assets/medecin4.jpg";

const teamMembers = [
    {
        name: "Dr. Luis Ndongo",
        role: "Chirurgien-Dentiste",
        speciality: "Orthodontie & Esthétique",
        experience: "12 ans d'expérience",
        education: "Université Paris VII — Faculté de Chirurgie Dentaire",
        description:
            "Le Dr. Luis Ndongo est passionné par l'orthodontie et l'esthétique dentaire. Formé à Paris, il revient au Cameroun avec la conviction que chaque patient mérite des soins de classe internationale. Il accompagne ses patients à travers des traitements orthodontiques personnalisés et des sourires transformés par des facettes et du blanchiment professionnel.",
        image: medecin1,
        certifications: ["Orthodontie", "Implantologie", "Esthétique"],
        languages: ["Français", "Anglais"],
        email: "l.ndongo@smilealways.cm",
        phone: "6 77 22 33 11",
    },
    {
        name: "Dr. Jessica Liliane",
        role: "Chirurgien-Dentiste",
        speciality: "Chirurgie & Implantologie",
        experience: "15 ans d'expérience",
        education: "Université de Lyon — Master en Implantologie",
        description:
            "Experte en implantologie et chirurgie orale, le Dr. Jessica Liliane utilise les techniques les plus avancées pour des résultats durables et esthétiques. Elle est reconnue pour son habileté chirurgicale et sa capacité à mettre les patients anxieux à l'aise. Elle maîtrise les greffes osseuses et les implants sur arcade complète (All-on-4).",
        image: medecin2,
        certifications: ["Chirurgie", "Implantologie", "Parodontologie"],
        languages: ["Français", "Anglais", "Bassa"],
        email: "j.liliane@smilealways.cm",
        phone: "6 77 22 33 11",
    },
    {
        name: "Sophie Mbarga",
        role: "Hygiéniste Dentaire",
        speciality: "Prévention & Soins",
        experience: "8 ans d'expérience",
        education: "École Supérieure d'Hygiène Dentaire de Douala",
        description:
            "Sophie est la spécialiste de la prévention au sein de l'équipe Smile Always. Elle réalise les détartrages, polissages et bilans parodontaux avec soin et bienveillance. Elle est particulièrement appréciée pour ses explications claires et ses conseils pratiques qui transforment vraiment la santé bucco-dentaire de ses patients.",
        image: medecin3,
        certifications: ["Hygiène", "Prévention", "Éducation"],
        languages: ["Français", "Ewondo"],
        email: "s.mbarga@smilealways.cm",
        phone: "6 77 22 33 11",
    },
];

const EquipePage = () => {
    return (
        <Layout>
            {/* Hero */}
            <section className="bg-gradient-to-r from-dental-blue to-dental-blue-light text-white py-20 -mt-32 pt-48">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-block bg-white/20 text-white font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                        Notre Équipe
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Des Experts à Votre Service
                    </h1>
                    <p className="text-xl text-white/85 max-w-3xl mx-auto">
                        Rencontrez notre équipe de professionnels passionnés, dédiés à votre
                        santé bucco-dentaire et à votre bien-être.
                    </p>
                </div>
            </section>

            {/* Team Cards */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="space-y-16">
                        {teamMembers.map((member, index) => (
                            <Card key={index} className="border-0 shadow-xl overflow-hidden">
                                <CardContent className="p-0">
                                    <div
                                        className={`flex flex-col lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                                    >
                                        {/* Photo */}
                                        <div className="lg:w-2/5 relative overflow-hidden">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-80 lg:h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-dental-blue/60 to-transparent" />
                                            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                                                {member.certifications.map((cert, i) => (
                                                    <Badge
                                                        key={i}
                                                        className="bg-dental-orange text-white border-0"
                                                    >
                                                        {cert}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="lg:w-3/5 p-10">
                                            <h2 className="text-3xl font-bold text-dental-blue mb-1">
                                                {member.name}
                                            </h2>
                                            <p className="text-dental-orange font-semibold text-lg mb-1">
                                                {member.role}
                                            </p>
                                            <p className="text-muted-foreground mb-6">{member.speciality}</p>

                                            <div className="flex flex-wrap gap-4 mb-6">
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <Award className="w-4 h-4 text-dental-orange" />
                                                    {member.experience}
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <GraduationCap className="w-4 h-4 text-dental-orange" />
                                                    {member.education}
                                                </div>
                                            </div>

                                            <p className="text-muted-foreground leading-relaxed mb-8">
                                                {member.description}
                                            </p>

                                            <div className="mb-6">
                                                <p className="text-sm font-medium text-dental-blue mb-2">
                                                    Langues parlées :
                                                </p>
                                                <div className="flex gap-2">
                                                    {member.languages.map((lang, i) => (
                                                        <span
                                                            key={i}
                                                            className="bg-dental-blue/10 text-dental-blue text-xs px-3 py-1 rounded-full font-medium"
                                                        >
                                                            {lang}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-3">
                                                <a href={`mailto:${member.email}`}>
                                                    <Button variant="dental-outline" size="sm" className="gap-2">
                                                        <Mail className="w-4 h-4" />
                                                        {member.email}
                                                    </Button>
                                                </a>
                                                <Link to="/contact">
                                                    <Button variant="dental" size="sm" className="gap-2">
                                                        <Calendar className="w-4 h-4" />
                                                        Prendre RDV
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

            {/* Stats */}
            <section className="py-16 bg-dental-cream">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "3", label: "Praticiens expérimentés" },
                            { value: "35+", label: "Années d'expertise cumulées" },
                            { value: "100%", label: "Satisfaction patient" },
                            { value: "25+", label: "Formations continues" },
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-4xl font-bold text-dental-blue mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="py-16 bg-dental-blue text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">
                        Vous souhaitez rejoindre notre équipe ?
                    </h2>
                    <p className="text-white/80 mb-8 max-w-xl mx-auto">
                        Nous sommes toujours à la recherche de praticiens talentueux et passionnés
                        pour agrandir notre cabinet.
                    </p>
                    <a href="mailto:contactsmilealways@gmail.com">
                        <Button variant="accent" size="lg" className="gap-2">
                            <Mail className="w-5 h-5" />
                            Envoyer votre candidature
                        </Button>
                    </a>
                </div>
            </section>
        </Layout>
    );
};

export default EquipePage;
