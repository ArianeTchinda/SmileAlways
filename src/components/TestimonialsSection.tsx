import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useState, useEffect, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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

const TestimonialsSection = () => {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref);

  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerView = useRef(1);

  useEffect(() => {
    const update = () => {
      itemsPerView.current = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxSlide = Math.max(0, testimonials.length - itemsPerView.current);

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxSlide ? 0 : prev + 1));
  }, [maxSlide]);

  const prev = () => {
    setCurrent((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
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
            La satisfaction de nos patients est notre plus belle récompense.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${current * (100 / itemsPerView.current)}%)`,
              }}
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="px-3"
                  style={{
                    minWidth: `${100 / itemsPerView.current}%`,
                    flex: `0 0 ${100 / itemsPerView.current}%`,
                  }}
                >
                  <Card className="group border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-white hover:-translate-y-1 h-full">
                    <CardContent className="p-8 flex flex-col h-full">
                      <Quote className="w-8 h-8 text-dental-orange/25 mb-4" />
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-dental-orange text-dental-orange" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed italic text-sm flex-1">
                        "{t.text}"
                      </p>
                      <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                        <div className="w-10 h-10 bg-gradient-to-br from-dental-blue to-dental-blue-light rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:from-dental-orange group-hover:to-dental-orange-light transition-all duration-500">
                          {t.initials}
                        </div>
                        <div>
                          <p className="font-bold text-dental-blue text-sm">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-dental-blue hover:text-white transition-all duration-300 z-10 hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-dental-blue hover:text-white transition-all duration-300 z-10 hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxSlide + 1 }).map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>

        {/* Rating Badge */}
        <div className="mt-12 text-center animate-on-scroll">
          <div className="inline-flex items-center gap-3 bg-dental-cream px-8 py-4 rounded-2xl shadow-sm">
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
