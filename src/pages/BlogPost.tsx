import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from "lucide-react";

const articlesContent: Record<string, {
    category: string;
    categoryColor: string;
    title: string;
    date: string;
    readTime: string;
    author: string;
    authorRole: string;
    content: string[];
    related: string[];
}> = {
    "brossage-dents": {
        category: "Prévention",
        categoryColor: "bg-green-100 text-green-700",
        title: "Les 5 règles d'or pour un brossage parfait",
        date: "12 Avril 2026",
        readTime: "4 min",
        author: "Dr Flora D",
        authorRole: "Médecin bucco-dentaire",
        content: [
            "Un brossage efficace est la pierre angulaire d'une bonne santé bucco-dentaire. Pourtant, 70 % des adultes ne se brossent pas correctement. Voici les 5 règles que nous enseignons à nos patients.",
            "**1. La technique : la méthode de Bass**\nInclinez votre brosse à 45 degrés par rapport aux gencives. Effectuez de petits mouvements circulaires sans frotter horizontalement. Cette technique nettoie efficacement la jonction dent-gencive où les bactéries aiment se loger.",
            "**2. La durée : 2 minutes minimum**\nLa plupart des gens se brossent pendant 30 à 45 secondes seulement. Utilisez un minuteur ou une brosse électrique avec minuterie. 2 minutes sont nécessaires pour couvrir toutes les surfaces correctement.",
            "**3. La fréquence : 2 fois par jour, pas plus**\nSe brosser 3 fois ou plus peut abraser l'émail dentaire. Après les repas, rincez à l'eau claire et attendez 30 minutes avant de vous brosser si vous avez consommé des aliments acides.",
            "**4. La brosse : souple et renouvelée régulièrement**\nUne brosse à poils durs agresse les gencives. Optez toujours pour des poils souples ou ultra-souples. Renouvelez votre brosse toutes les 3 mois ou dès que les poils s'abîment.",
            "**5. Le fil dentaire ou les brossettes : indispensables**\nLe brossage ne nettoie que 60 % des surfaces dentaires. Le fil dentaire ou les brossettes interdentaires atteignent les 40 % restants entre les dents. Utilisez-les au moins une fois par jour, idéalement le soir.",
            "Si vous avez des doutes sur votre technique de brossage, demandez une démonstration lors de votre prochaine visite. Notre équipe est là pour vous accompagner !",
        ],
        related: ["alimentation-dents", "enfants-dentiste"],
    },
    "implants-dentaires": {
        category: "Implantologie",
        categoryColor: "bg-purple-100 text-purple-700",
        title: "Implants dentaires : tout ce que vous devez savoir",
        date: "8 Avril 2026",
        readTime: "6 min",
        author: "Dr Flora D",
        authorRole: "Médecin bucco-dentaire",
        content: [
            "L'implant dentaire est considéré comme la solution gold standard pour remplacer une dent manquante. Mais qu'est-ce qu'un implant exactement, et est-ce fait pour vous ?",
            "**Qu'est-ce qu'un implant dentaire ?**\nUn implant est une vis en titane biocompatible placée chirurgicalement dans l'os de la mâchoire. Elle sert de racine artificielle sur laquelle viendra se fixer une couronne (la partie visible de la dent). Le titane s'intègre progressivement à l'os dans un processus appelé ostéointégration.",
            "**Qui peut en bénéficier ?**\nLa grande majorité des adultes en bonne santé générale sont éligibles. Les contre-indications sont rares : diabète non contrôlé, traitements anticoagulants non gérés, radiothérapie de la tête et du cou. Un bilan préalable (radiographie 3D, panoramique) permet d'évaluer la densité osseuse.",
            "**Déroulement du traitement**\nLe traitement se déroule en plusieurs étapes sur 3 à 6 mois. Pose de l'implant (sous anesthésie locale), période de cicatrisation osseuse (3-4 mois), puis pose de la couronne définitive. Certains cas permettent une pose immédiate (même jour).",
            "**Durée de vie et entretien**\nAvec un entretien correct, un implant peut durer plus de 20 ans, voire toute la vie. L'entretien est simple : brossage régulier, fil dentaire et visites semestrielles pour contrôle.",
            "**Le coût**\nUn implant complet (implant + couronne) coûte à partir de 400 000 FCFA chez Smile Always. C'est un investissement à long terme bien supérieur aux bridges ou prothèses amovibles qui nécessitent un remplacement régulier.",
            "Vous souhaitez savoir si vous êtes éligible ? Prenez un rendez-vous de consultation avec notre spécialiste.",
        ],
        related: ["brossage-dents", "orthodontie-adulte"],
    },
    "enfants-dentiste": {
        category: "Pédiatrie",
        categoryColor: "bg-blue-100 text-blue-700",
        title: "Comment préparer votre enfant à sa première visite chez le dentiste",
        date: "2 Avril 2026",
        readTime: "5 min",
        author: "Dr Flora D",
        authorRole: "Médecin bucco-dentaire",
        content: [
            "La première visite chez le dentiste peut être source d'anxiété pour l'enfant comme pour le parent. Quelques stratégies simples suffisent à en faire une expérience positive.",
            "**Quand commencer ?**\nLa première visite devrait idéalement avoir lieu dès l'apparition des premières dents de lait, vers 12-18 mois. Il ne s'agit pas encore de soins mais d'une visite de découverte et de prévention.",
            "**Préparez l'enfant à la maison**\nParlez de la visite chez le dentiste de manière positive et neutre, sans utiliser des mots comme 'ça ne fera pas mal' (qui au contraire peut alerter). Jouez au dentiste à la maison, montrez-lui comment on ouvre grand la bouche.",
            "**Évitez les pièges courants**\nNe dites jamais 'le dentiste te fera une piqûre si tu n'es pas sage'. Cette phrase crée une association négative. Ne partagez pas vos propres peurs du dentiste devant l'enfant.",
            "**Pendant la visite**\nRestez calme et détendu. Laissez le praticien communiquer directement avec l'enfant. Notre équipe est formée à la communication avec les enfants et crée un environnement ludique et sécurisant.",
            "**Après la visite**\nFélicitez l'enfant pour son courage, quel que soit le déroulement. Proposez une petite récompense (non sucrée de préférence !). Établissez un rendez-vous régulier tous les 6 mois.",
            "À Smile Always, nous réservons un accueil spécial aux enfants avec une salle d'attente adaptée et des praticiens spécialement formés à la pédodontie.",
        ],
        related: ["brossage-dents", "alimentation-dents"],
    },
    "blanchiment": {
        category: "Esthétique",
        categoryColor: "bg-yellow-100 text-yellow-700",
        title: "Blanchiment dentaire : professionnel vs kit maison, que choisir ?",
        date: "25 Mars 2026",
        readTime: "5 min",
        author: "Dr Flora D",
        authorRole: "Médecin bucco-dentaire",
        content: [
            "Le marché des kits de blanchiment à domicile explose. Bandelettes, stylos, gouttières… Ces produits sont-ils vraiment efficaces et sans danger ? Comparons avec les traitements professionnels.",
            "**Kits de blanchiment en pharmacie**\nLes concentrations en peroxyde d'hydrogène sont légalement limitées à 0,1 % en vente libre. Résultat : un effet visible mais modeste (1-2 nuances). Leur efficacité dépend aussi de la qualité de la gouttière qui doit s'adapter parfaitement à votre dentition.",
            "**Blanchiment en cabinet**\nLes praticiens utilisent des concentrations bien supérieures (jusqu'à 25-35 %). En une séance de 1h, on peut gagner 6 à 10 nuances. La gencive est protégée par un gel spécial. Certaines technologies laser amplifient l'effet.",
            "**Gouttières personnalisées (compromis idéal)**\nNous pouvons vous fabriquer des gouttières sur-mesure à porter chez vous avec un gel concentré fourni par le cabinet. C'est l'option la plus utilisée : moins chère que la séance en cabinet, plus efficace que les kits pharmacie.",
            "**Risques et contre-indications**\nLe blanchiment n'est pas anodin. Il peut provoquer des sensibilités transitoires et ne fonctionne pas sur les couronnes, bridges ou composites. Il est contre-indiqué pendant la grossesse.",
            "**Notre recommandation**\nSi vous souhaitez un résultat rapide et maximum : séance en cabinet. Pour un entretien régulier ou un budget limité : gouttières personnalisées. Les kits pharmacie peuvent aider à rafraîchir l'éclat entre deux traitements professionnels.",
        ],
        related: ["brossage-dents", "alimentation-dents"],
    },
    "alimentation-dents": {
        category: "Nutrition",
        categoryColor: "bg-orange-100 text-orange-700",
        title: "Les aliments qui abîment vos dents (et ceux qui les protègent)",
        date: "18 Mars 2026",
        readTime: "4 min",
        author: "Dr Flora D",
        authorRole: "Médecin bucco-dentaire",
        content: [
            "Votre alimentation est l'un des facteurs les plus importants pour votre santé dentaire. Certains aliments protègent votre émail, d'autres l'attaquent. Faisons le point.",
            "**Les ennemis de vos dents**\nLes sucres sont la principale cause de caries : les bactéries les transforment en acides qui attaquent l'émail. Les sodas, jus de fruits, bonbons, biscuits sont particulièrement nocifs. Les aliments acides (citrons, vinaigre, sodas) érodent directement l'émail même sans sucre.",
            "**Attention aux aliments 'santé' trompeurs**\nLes smoothies aux fruits, yaourts aux fruits, céréales du matin et barres énergétiques peuvent être tout aussi nocifs que les bonbons car ils contiennent beaucoup de sucres et sont souvent collants.",
            "**Les aliments protecteurs**\nLe fromage stimule la production de salive et neutralise les acides. Les légumes crus (carottes, céleri) nettoient mécaniquement les dents. L'eau (surtout fluorée) rince et reminéralise. Les amandes, noix et graines apportent du calcium et des phosphates.",
            "**Le thé vert**\nRiche en polyphénols, le thé vert (sans sucre) possède des propriétés antibactériennes reconnues qui réduisent la plaque dentaire. C'est la boisson santé bucco-dentaire par excellence.",
            "**Les bons réflexes**\nAprès un repas acide ou sucré, rincez à l'eau claire. Attendez 30 minutes avant de vous brosser (l'émail temporairement ramolli serait abrasé). Mâchez un chewing-gum sans sucre pour stimuler la salive.",
        ],
        related: ["brossage-dents", "enfants-dentiste"],
    },
    "orthodontie-adulte": {
        category: "Orthodontie",
        categoryColor: "bg-indigo-100 text-indigo-700",
        title: "Orthodontie adulte : n'est-il pas trop tard pour redresser vos dents ?",
        date: "10 Mars 2026",
        readTime: "6 min",
        author: "Dr Flora D",
        authorRole: "Médecin bucco-dentaire",
        content: [
            "L'orthodontie, longtemps associée aux enfants et adolescents, concerne aujourd'hui plus de 30 % d'adultes. Et pour de bonnes raisons : il n'est jamais trop tard pour obtenir un beau sourire aligné.",
            "**Y a-t-il un âge limite ?**\nNon ! Tant que les dents et l'os alvéolaire sont en bonne santé, un traitement orthodontique est possible, que vous ayez 25 ou 55 ans. La seule différence avec les enfants est que chez l'adulte, l'os est plus dense, donc les déplacements sont légèrement plus lents.",
            "**Les bagues traditionnelles chez l'adulte**\nSi les bagues métalliques restent la solution la plus efficace pour les cas complexes, beaucoup d'adultes préfèrent les bagues céramiques (couleur naturelle) qui se fondent dans le sourire.",
            "**Les aligneurs invisibles : la révolution adulte**\nInvisalign et les marques équivalentes proposent des gouttières transparentes remplacées toutes les 2 semaines. Quasi-invisibles, amovibles pour les repas et le brossage, confortables. Ils s'adaptent parfaitement au mode de vie actif des adultes.",
            "**Durée du traitement**\nElle varie selon la complexité du cas : de 6 mois pour de légers écartements à 24 mois pour des malpositions importantes. Une consultation avec radiographies permet d'établir un plan de traitement précis.",
            "**Et après ? La contention**\nLa contention est indispensable après tout traitement orthodontique. Elle maintient les dents en position. Elle peut être fixe (fil collé derrière les dents) ou amovible (gouttière de nuit). Elle est souvent définitive.",
            "Vous souhaitez savoir si un traitement est adapté à votre cas ? Prenez rendez-vous pour une consultation orthodontique gratuite avec le Dr. Ndongo.",
        ],
        related: ["blanchiment", "implants-dentaires"],
    },
};

const allArticles = [
    { id: "brossage-dents", title: "Les 5 règles d'or pour un brossage parfait" },
    { id: "implants-dentaires", title: "Implants dentaires : tout ce que vous devez savoir" },
    { id: "enfants-dentiste", title: "Comment préparer votre enfant à sa première visite" },
    { id: "blanchiment", title: "Blanchiment : professionnel vs kit maison" },
    { id: "alimentation-dents", title: "Les aliments qui abîment vos dents" },
    { id: "orthodontie-adulte", title: "Orthodontie adulte : n'est-il pas trop tard ?" },
];

const BlogPostPage = () => {
    const { id } = useParams<{ id: string }>();
    const article = id ? articlesContent[id] : null;

    if (!article) {
        return (
            <Layout>
                <div className="py-32 text-center">
                    <h2 className="text-2xl font-bold text-dental-blue mb-4">Article introuvable</h2>
                    <Link to="/blog">
                        <Button variant="dental">Retour au blog</Button>
                    </Link>
                </div>
            </Layout>
        );
    }

    const relatedArticles = allArticles.filter((a) => article.related.includes(a.id));

    return (
        <Layout>
            {/* Hero */}
            <section className="bg-gradient-to-r from-dental-blue to-dental-blue-light text-white py-16 -mt-32 pt-44">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 mr-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Retour au blog
                    </Link>
                   
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
                    
                    <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" /> {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" /> {article.readTime} de lecture
                        </span>
                        <span>Par <strong>{article.author}</strong>, {article.authorRole}</span>

                    </div>
                     <Badge className={`${article.categoryColor} mt-4 border-0`}>{article.category}</Badge>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <article className="lg:col-span-2 prose max-w-none">
                            {article.content.map((paragraph, i) => {
                                if (paragraph.startsWith("**") && paragraph.includes("\n")) {
                                    const [title, ...rest] = paragraph.split("\n");
                                    return (
                                        <div key={i} className="mb-6">
                                            <h2 className="text-xl font-bold text-dental-blue mb-2">
                                                {title.replace(/\*\*/g, "")}
                                            </h2>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {rest.join("\n")}
                                            </p>
                                        </div>
                                    );
                                }
                                return (
                                    <p key={i} className="text-muted-foreground leading-relaxed mb-6">
                                        {paragraph}
                                    </p>
                                );
                            })}

                            {/* Share */}
                            <div className="flex items-center gap-3 pt-8 border-t border-border">
                                <Share2 className="w-5 h-5 text-dental-blue" />
                                <span className="font-medium text-dental-blue">Partager cet article</span>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="space-y-8">
                            {/* Author */}
                            <div className="bg-dental-cream rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-dental-blue to-dental-blue-light rounded-full flex items-center justify-center text-white font-bold">
                                        {article.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-dental-blue">{article.author}</p>
                                        <p className="text-xs text-muted-foreground">{article.authorRole}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Praticien chez Smile Always, engagé pour votre santé bucco-dentaire.
                                </p>
                            </div>

                            {/* Related Articles */}
                            <div>
                                <h3 className="font-bold text-dental-blue mb-4">Articles similaires</h3>
                                <div className="space-y-3">
                                    {relatedArticles.map((rel) => (
                                        <Link
                                            key={rel.id}
                                            to={`/blog/${rel.id}`}
                                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-dental-orange transition-colors group"
                                        >
                                            <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                                            {rel.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-dental-blue text-white rounded-2xl p-6 text-center">
                                <h3 className="font-bold mb-2">Besoin d'un conseil personnalisé ?</h3>
                                <p className="text-sm text-white/80 mb-4">Prenez rendez-vous avec l'un de nos praticiens.</p>
                                <Link to="/contact">
                                    <Button variant="accent" className="w-full">Prendre RDV</Button>
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default BlogPostPage;
