import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Smile, Shield, Zap, Heart, Scissors, Crown, ArrowRight, ChevronLeft, ChevronRight,
} from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/utils";

const services = [
  {
    icon: Smile,
    title: "Soins Préventifs",
    slug: "preventifs",
    description: "Détartrage, polissage et examens réguliers pour maintenir une hygiène dentaire optimale.",
    features: ["Examen complet", "Nettoyage professionnel", "Conseils personnalisés"],
    color: "from-dental-blue to-dental-blue-light",
  },
  {
    icon: Crown,
    title: "Prothèses Dentaires",
    slug: "protheses",
    description: "Couronnes, bridges et implants de haute qualité pour restaurer votre sourire.",
    features: ["Implants dentaires", "Couronnes céramique, céramo-metallique, zircone ", "Bridges fixes"],
    color: "from-violet-600 to-purple-500",
  },
  {
    icon: Scissors,
    title: "Chirurgie Dentaire",
    slug: "chirurgie",
    description: "Extractions et interventions chirurgicales dans un environnement sécurisé.",
    features: ["Extractions simples", "Dents de sagesse", "Greffes osseuses"],
    color: "from-slate-600 to-slate-500",
  },
  {
    icon: Zap,
    title: "Esthétique Dentaire",
    slug: "esthetique",
    description: "Blanchiment, facettes et soins esthétiques pour un sourire éclatant.",
    features: ["Blanchiment pro", "Facettes dentaires", "Composite esthétique"],
    color: "from-dental-orange to-dental-orange-light",
  },
  {
    icon: Shield,
    title: "Orthodontie",
    slug: "orthodontie",
    description: "Appareils dentaires traditionnels et invisibles pour aligner vos dents.",
    features: ["Bagues classiques", "Aligneurs invisibles", "Orthodontie adulte"],
    color: "from-emerald-600 to-teal-500",
  },
  {
    icon: Heart,
    title: "Soins d'Urgence",
    slug: "urgences-dentaires",
    description: "Prise en charge rapide des urgences dentaires 24h/24 et 7j/7.",
    features: ["Urgences 24/7", "Douleur soulagée", "Réparations rapides"],
    color: "from-dental-blue-dark to-dental-blue",
  },
];

const ServicesSection = () => {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref);

  // Carousel state for mobile
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Auto-advance carousel on mobile
  useEffect(() => {
    if (!isMobile) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isMobile]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % services.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);

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

        {/* Mobile Carousel */}
        <div className="md:hidden relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div
              ref={slideRef}
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="min-w-full px-2">
                  <Card className="border-0 shadow-xl bg-white overflow-hidden">
                    <div className={`bg-gradient-to-br ${service.color} p-8 text-white text-center`}>
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-dental-orange rounded-full mr-3 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link to={`/services/${service.slug}`}>
                        <Button variant="dental" className="w-full gap-2">
                          En savoir plus <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-dental-blue hover:text-white transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {services.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(i)}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-dental-blue hover:text-white transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Link to={`/services/${service.slug}`} key={index}>
              <Card
                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:-translate-y-3 animate-on-scroll delay-${(index % 3) * 100 + 100} h-full`}
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
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
                  <div className="flex items-center justify-between text-dental-blue group-hover:text-dental-orange font-semibold text-sm transition-colors">
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-on-scroll">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <Button variant="dental" size="lg" className="px-10 py-4 font-semibold shadow-lg">
              Prendre Rendez-vous
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;