import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Smile,
  Shield,
  Zap,
  Heart,
  Scissors,
  Crown,
  ArrowRight,
} from "lucide-react";

const ServicesSection = () => {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref);

  const services = [
    {
      icon: Smile,
      title: "Soins Préventifs",
      description: "Détartrage, polissage et examens réguliers pour maintenir une hygiène dentaire optimale.",
      features: ["Examen complet", "Nettoyage professionnel", "Conseils personnalisés"],
    },
    {
      icon: Crown,
      title: "Prothèses Dentaires",
      description: "Couronnes, bridges et implants de haute qualité pour restaurer votre sourire.",
      features: ["Implants dentaires", "Couronnes céramique", "Bridges fixes"],
    },
    {
      icon: Scissors,
      title: "Chirurgie Dentaire",
      description: "Extractions et interventions chirurgicales dans un environnement sécurisé.",
      features: ["Extractions simples", "Chirurgie des dents de sagesse", "Greffes osseuses"],
    },
    {
      icon: Zap,
      title: "Esthétique Dentaire",
      description: "Blanchiment, facettes et soins esthétiques pour un sourire éclatant.",
      features: ["Blanchiment professionnel", "Facettes dentaires", "Composite esthétique"],
    },
    {
      icon: Shield,
      title: "Orthodontie",
      description: "Appareils dentaires traditionnels et invisibles pour aligner vos dents.",
      features: ["Bagues traditionnelles", "Aligneurs invisibles", "Orthodontie adulte"],
    },
    {
      icon: Heart,
      title: "Soins d'Urgence",
      description: "Prise en charge rapide des urgences dentaires 24h/24 et 7j/7.",
      features: ["Consultations d'urgence", "Soulagement de la douleur", "Réparations rapides"],
    },
  ];

  return (
    <section id="services" ref={ref} className="py-24 bg-dental-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block bg-dental-blue/10 text-dental-blue font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Nos soins
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dental-blue mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre gamme complète de soins dentaires, alliant expertise technique
            et approche humaine pour votre bien-être bucco-dentaire.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 border-0 bg-white hover:-translate-y-2 animate-on-scroll delay-${(index % 3) * 100 + 100}`}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-dental-blue to-dental-blue-light rounded-2xl flex items-center justify-center group-hover:from-dental-orange group-hover:to-dental-orange-light transition-all duration-500 shadow-sm">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-dental-blue mb-3 group-hover:text-dental-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-dental-orange rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to="/services">
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-dental-blue group-hover:text-dental-orange font-semibold"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-on-scroll">
          <Link to="/contact">
            <Button variant="dental" size="lg" className="px-10 py-4 font-semibold shadow-lg">
              Prendre Rendez-vous
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;