import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Import des images
import image1 from "@/assets/image1.jpeg";
import image2 from "@/assets/image2.jpeg";
import image3 from "@/assets/image3.webp";
import image4 from "@/assets/image4.jpeg";
import image5 from "@/assets/image5.jpeg";
import image6 from "@/assets/image6.jpeg";

const galleryImages = [
  { url: image1, alt: "Cabinet dentaire moderne", title: "Salle de consultation", category: "Équipement" },
  { url: image2, alt: "Équipements dentaires", title: "Technologie de pointe", category: "Innovation" },
  { url: image3, alt: "Cabinet accueillant", title: "Espace patient", category: "Confort" },
  { url: image4, alt: "Soins dentaires", title: "Soins professionnels", category: "Expertise" },
  { url: image5, alt: "Traitement dentaire", title: "Excellence clinique", category: "Précision" },
  { url: image6, alt: "Sourires heureux", title: "Patients satisfaits", category: "Résultat" },
];

const GallerySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);
  
  const [currentImage, setCurrentImage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const changeImage = (index: number) => {
    if (index === currentImage) return;
    setIsExiting(true);
    setTimeout(() => {
      setCurrentImage(index);
      setIsExiting(false);
    }, 300); // Correspond à la durée de la transition Tailwind
  };

  const nextImage = () => changeImage((currentImage + 1) % galleryImages.length);
  const prevImage = () => changeImage((currentImage - 1 + galleryImages.length) % galleryImages.length);

  return (
    <section ref={ref} className="py-4 bg-slate-50/50 overflow-hidden">
      <div className="container mx-auto px-4">
        
        
        <div className="flex flex-col items-center text-center mb-16">
          <span className="px-4 py-1.5 rounded-full bg-dental-blue/10 text-dental-blue text-sm font-bold tracking-wide uppercase mb-4">
            Immersion
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Notre Univers <span className="text-dental-blue">Clinique</span>
          </h2>
        </div>

        
        <div className="relative max-w-6xl mx-auto mb-12">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
            <img
              src={galleryImages[currentImage].url}
              alt={galleryImages[currentImage].alt}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                isExiting ? "opacity-0 scale-105 blur-sm" : "opacity-100 scale-100 blur-0"
              }`}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white flex justify-between items-end">
              <div className={`transition-all duration-500 ${isExiting ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"}`}>
                <span className="text-dental-blue font-medium mb-2 block">{galleryImages[currentImage].category}</span>
                <h3 className="text-2xl md:text-4xl font-bold">{galleryImages[currentImage].title}</h3>
              </div>
              
              <div className="hidden md:flex gap-3">
                <button onClick={prevImage} className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
                  <ChevronLeft className="w-6 h-6 text-white"/>
                </button>
                <button onClick={nextImage} className="p-4 rounded-full bg-dental-blue text-white shadow-lg hover:bg-dental-blue/90 transition-all">
                  <ChevronRight className="w-6 h-6"/>
                </button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="flex gap-4 overflow-x-auto pb-6 justify-start lg:justify-center no-scrollbar px-2">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => changeImage(index)}
              className={`relative flex-shrink-0 w-24 h-24 md:w-32 md:h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentImage ? "ring-2 ring-dental-blue scale-110 shadow-lg" : "opacity-50 hover:opacity-100"
              }`}
            >
              <img src={image.url} className="w-full h-full object-cover" alt="thumb" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;