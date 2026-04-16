import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const articles = [
    {
        id: "brossage-dents",
        category: "Prévention",
        categoryColor: "bg-green-100 text-green-700",
        title: "Les 5 règles d'or pour un brossage parfait",
        excerpt:
            "Pensez-vous vous brosser les dents correctement ? La technique, la durée et le type de brosse sont des facteurs clés souvent négligés. Voici tout ce qu'il faut savoir.",
        date: "12 Avril 2026",
        readTime: "4 min",
        author: "Sophie Mbarga",
    },
    {
        id: "implants-dentaires",
        category: "Implantologie",
        categoryColor: "bg-purple-100 text-purple-700",
        title: "Implants dentaires : tout ce que vous devez savoir",
        excerpt:
            "L'implant dentaire est aujourd'hui la solution de référence pour remplacer une dent manquante. Durée, coût, contre-indications, suites opératoires — on vous dit tout.",
        date: "8 Avril 2026",
        readTime: "6 min",
        author: "Dr. Jessica Liliane",
    },
    {
        id: "enfants-dentiste",
        category: "Pédiatrie",
        categoryColor: "bg-blue-100 text-blue-700",
        title: "Comment préparer votre enfant à sa première visite chez le dentiste",
        excerpt:
            "La phobie du dentiste commence souvent dès l'enfance. Nos conseils pour transformer cette première visite en expérience positive et rassurante.",
        date: "2 Avril 2026",
        readTime: "5 min",
        author: "Dr. Luis Ndongo",
    },
    {
        id: "blanchiment",
        category: "Esthétique",
        categoryColor: "bg-yellow-100 text-yellow-700",
        title: "Blanchiment dentaire : professionnel vs kit maison, que choisir ?",
        excerpt:
            "Les kits de blanchiment vendus en pharmacie sont-ils aussi efficaces qu'un traitement en cabinet ? Nous comparons les deux approches en toute objectivité.",
        date: "25 Mars 2026",
        readTime: "5 min",
        author: "Dr. Jessica Liliane",
    },
    {
        id: "alimentation-dents",
        category: "Nutrition",
        categoryColor: "bg-orange-100 text-orange-700",
        title: "Les aliments qui abîment vos dents (et ceux qui les protègent)",
        excerpt:
            "Ce que vous mangez a un impact direct sur votre santé bucco-dentaire. Sucres, acides, calcium — découvrez comment adapter votre alimentation.",
        date: "18 Mars 2026",
        readTime: "4 min",
        author: "Sophie Mbarga",
    },
    {
        id: "orthodontie-adulte",
        category: "Orthodontie",
        categoryColor: "bg-indigo-100 text-indigo-700",
        title: "Orthodontie adulte : n'est-il pas trop tard pour redresser vos dents ?",
        excerpt:
            "L'orthodontie n'est plus réservée aux enfants. Les aligneurs invisibles révolutionnent les traitements pour adultes. Âge limite, durée et résultats.",
        date: "10 Mars 2026",
        readTime: "6 min",
        author: "Dr. Luis Ndongo",
    },
];

const BlogPage = () => {
    const featured = articles[0];
    const rest = articles.slice(1);

    return (
        <Layout>
            {/* Hero */}
            <section className="bg-gradient-to-r from-dental-blue to-dental-blue-light text-white py-20 -mt-32 pt-48">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-block bg-white/20 text-white font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                        Blog & Actualités
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Conseils & Santé Dentaire
                    </h1>
                    <p className="text-xl text-white/85 max-w-3xl mx-auto">
                        Retrouvez les conseils de nos praticiens, les dernières actualités dentaires
                        et des informations pratiques pour prendre soin de votre sourire.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-dental-cream">
                <div className="container mx-auto px-4">
                    {/* Featured Article */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-dental-blue mb-6">À la une</h2>
                        <Link to={`/blog/${featured.id}`}>
                            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-1/2 bg-gradient-to-br from-dental-blue/10 to-dental-blue-light/20 min-h-[250px] flex items-center justify-center">
                                            <div className="text-center p-8">
                                                <span className="text-8xl">🦷</span>
                                                <p className="text-dental-blue font-semibold mt-4">{featured.category}</p>
                                            </div>
                                        </div>
                                        <div className="md:w-1/2 p-10 flex flex-col justify-center">
                                            <Badge className={`${featured.categoryColor} mb-4 w-fit border-0`}>
                                                {featured.category}
                                            </Badge>
                                            <h3 className="text-2xl font-bold text-dental-blue mb-4">{featured.title}</h3>
                                            <p className="text-muted-foreground mb-6">{featured.excerpt}</p>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{featured.date}</span>
                                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featured.readTime} de lecture</span>
                                                <span>Par {featured.author}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-dental-orange font-medium">
                                                Lire l'article <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>

                    {/* Article Grid */}
                    <h2 className="text-2xl font-bold text-dental-blue mb-6">Tous les articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {rest.map((article) => (
                            <Link to={`/blog/${article.id}`} key={article.id}>
                                <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                                    <CardContent className="p-0 h-full flex flex-col">
                                        {/* Thumbnail */}
                                        <div className="bg-gradient-to-br from-dental-blue/10 to-dental-orange/10 h-48 flex items-center justify-center rounded-t-lg">
                                            <span className="text-6xl">🦷</span>
                                        </div>
                                        <div className="p-6 flex flex-col flex-1">
                                            <Badge className={`${article.categoryColor} mb-3 w-fit border-0 text-xs`}>
                                                {article.category}
                                            </Badge>
                                            <h3 className="font-bold text-dental-blue mb-3 text-lg leading-snug">
                                                {article.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-4 flex-1">
                                                {article.excerpt}
                                            </p>
                                            <div className="flex items-center gap-3 text-xs text-muted-foreground pt-4 border-t border-border">
                                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{article.date}</span>
                                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-dental-blue text-white text-center">
                <div className="container mx-auto px-4 max-w-2xl">
                    <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
                    <p className="text-white/80 mb-8">
                        Inscrivez-vous à notre newsletter pour recevoir nos conseils dentaires et
                        nos actualités directement dans votre boîte mail.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Votre adresse email"
                            className="flex-1 px-4 py-3 rounded-lg text-dental-blue focus:outline-none"
                        />
                        <Button variant="accent" className="px-6">S'inscrire</Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default BlogPage;
