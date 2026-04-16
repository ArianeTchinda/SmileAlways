import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TestimonialsSection = () => {
    const ref = useRef<HTMLElement>(null);
    useScrollReveal(ref);

    const testimonials = [
        {
            name: "Marie K.",
            role: "Patiente depuis 3 ans",
            rating: 5,
            text: "Une équipe extraordinaire et très professionnelle. Le Dr. Ndongo a transformé mon sourire grâce à un traitement orthodontique parfait. Je recommande vivement ce cabinet à toute ma famille.",
            initials: "MK",
        },
        {
            name: "Jean-Paul T.",
            role: "Patient depuis 2 ans",
            rating: 5,
            text: "J'avais très peur du dentiste avant de venir ici. L'équipe est tellement bienveillante et le cabinet est ultra-moderne. Mes implants sont parfaits et sans douleur !",
            initials: "JP",
        },
        {
            name: "Christelle A.",
            role: "Patiente depuis 1 an",
            rating: 5,
            text: "Blanchiment réalisé par le Dr. Liliane, résultat bluffant ! L'accueil est toujours chaleureux, les rendez-vous sont ponctuels et les soins, d'une qualité irréprochable.",
            initials: "CA",
        },
        {
            name: "Robert M.",
            role: "Patient depuis 4 ans",
            rating: 5,
            text: "Service d'urgence impeccable — j'ai pu être pris en charge en moins d'une heure un dimanche. Professionnalisme et réactivité exemplaires. Merci à toute l'équipe !",
            initials: "RM",
        },
        {
            name: "Nathalie B.",
            role: "Patiente depuis 6 mois",
            rating: 5,
            text: "Cabinet très bien équipé, personnel souriant et compétent. Sophie l'hygiéniste est fantastique et ses conseils m'ont aidée à améliorer ma santé bucco-dentaire.",
            initials: "NB",
        },
        {
            name: "Albert F.",
            role: "Patient depuis 2 ans",
            rating: 5,
            text: "Des soins dentaires de grande qualité dans un environnement propre et moderne. Le prix est très raisonnable pour un tel niveau de service. Je suis entièrement satisfait.",
            initials: "AF",
        },
    ];

    return (
        <section ref={ref} className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 animate-on-scroll">
                    <span className="inline-block bg-dental-orange/10 text-dental-orange font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                        Témoignages
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-dental-blue mb-6">
                        Ce que disent nos patients
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        La satisfaction de nos patients est notre plus belle récompense. Découvrez
                        leurs expériences au Cabinet Smile Always.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <Card
                            key={index}
                            className={`group border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-white hover:-translate-y-1 animate-on-scroll delay-${(index % 3) * 100 + 100}`}
                        >
                            <CardContent className="p-8">
                                <Quote className="w-8 h-8 text-dental-orange/25 mb-4" />
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-dental-orange text-dental-orange" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground mb-6 leading-relaxed italic text-sm">
                                    "{t.text}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-dental-blue to-dental-blue-light rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                        {t.initials}
                                    </div>
                                    <div>
                                        <p className="font-bold text-dental-blue text-sm">{t.name}</p>
                                        <p className="text-xs text-muted-foreground">{t.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Rating Badge */}
                <div className="mt-12 text-center animate-on-scroll">
                    <div className="inline-flex items-center gap-3 bg-dental-cream px-8 py-4 rounded-2xl">
                        <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-dental-orange text-dental-orange" />
                            ))}
                        </div>
                        <span className="font-bold text-dental-blue text-lg">5.0</span>
                        <span className="text-muted-foreground">— Plus de 200 avis vérifiés</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
