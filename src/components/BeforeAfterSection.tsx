import { useState, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Import de tes images locales
import img1 from "@/assets/image1.jpeg";
import img2 from "@/assets/image2.jpeg";
import img3 from "@/assets/image3.webp";
import img4 from "@/assets/image4.jpeg";
import img5 from "@/assets/image5.jpeg";
import img6 from "@/assets/image6.jpeg";

const BeforeAfterSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);

  const [sliderPositions, setSliderPositions] = useState<Record<number, number>>({
    0: 50,
    1: 50,
    2: 50,
  });

  const beforeAfterExamples = [
    {
      title: "Orthodontie",
      description: "Correction d'alignement dentaire complexe",
      before: img3, // Utilisation de l'image .webp pour la variété
      after: img1,
    },
    {
      title: "Blanchiment Dentaire",
      description: "Éclat naturel retrouvé en une séance",
      before: img2,
      after: img5,
    },
    {
      title: "Restauration Complète",
      description: "Réhabilitation esthétique et fonctionnelle",
      before: img4,
      after: img6,
    },
  ];

  const handleSliderMove = (index: number, e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    const x = "touches" in e 
      ? e.touches[0].clientX - rect.left 
      : (e as React.MouseEvent).clientX - rect.left;
    
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPositions((prev) => ({ ...prev, [index]: percentage }));
  };

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block bg-dental-blue/10 text-dental-blue font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Galerie de cas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Transformations <span className="text-dental-blue">Réelles</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Visualisez l'expertise de nos praticiens à travers ces résultats concrets. 
            Faites glisser le curseur pour comparer l'évolution.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {beforeAfterExamples.map((example, index) => (
            <div
              key={index}
              className="animate-on-scroll flex flex-col group"
            >
              {/* Slider Container */}
              <div
                className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl cursor-col-resize select-none bg-slate-100"
                onMouseMove={(e) => handleSliderMove(index, e)}
                onTouchMove={(e) => handleSliderMove(index, e)}
              >
                {/* Image AVANT (Fond) */}
                <img
                  src={example.before}
                  alt="Avant"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Image APRÈS (Partie coupée) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white/50"
                  style={{ width: `${sliderPositions[index]}%` }}
                >
                  <img
                    src={example.after}
                    alt="Après"
                    className="absolute inset-0 h-full object-cover"
                    style={{ width: `${100 * (100 / (sliderPositions[index] || 1))}%`, maxWidth: 'none' }}
                  />
                </div>

                {/* Barre de contrôle / Handle */}
                <div
                  className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] z-20"
                  style={{ left: `${sliderPositions[index]}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                    <div className="flex gap-1">
                      <div className="w-0.5 h-4 bg-dental-blue rounded-full" />
                      <div className="w-0.5 h-4 bg-dental-blue rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Badges permanents */}
                <div className="absolute bottom-6 left-6 z-30 flex gap-2">
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold rounded-lg uppercase tracking-tighter">
                    Avant
                  </span>
                  <span className="px-3 py-1 bg-dental-blue/80 backdrop-blur-md text-white text-[10px] font-bold rounded-lg uppercase tracking-tighter">
                    Après
                  </span>
                </div>
              </div>

              {/* Texte descriptif sous l'image */}
              <div className="mt-6">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-dental-blue transition-colors">
                  {example.title}
                </h3>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                  {example.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note de bas de page */}
        <div className="mt-20 p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center gap-6 animate-on-scroll">
          <div className="w-12 h-12 rounded-full bg-dental-blue/10 flex items-center justify-center flex-shrink-0">
            <span className="text-dental-blue font-bold">!</span>
          </div>
          <p className="text-slate-600 text-sm italic text-center md:text-left">
            Note : Les résultats présentés ci-dessus sont authentiques. Cependant, chaque cas est unique. 
            Une étude clinique approfondie est nécessaire pour déterminer le plan de traitement adapté à votre dentition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;