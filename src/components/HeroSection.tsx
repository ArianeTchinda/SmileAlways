import { Button } from "@/components/ui/button"; 
import { Calendar, Phone, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Cabinet dentaire moderne" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dental-blue/80 via-dental-blue/70 to-dental-orange/80"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-white to-dental-cream bg-clip-text text-transparent">
              Smile Always
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
            Votre sourire, notre passion. Des soins dentaires de qualité dans un environnement moderne et chaleureux.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button variant="accent" size="lg" className="text-lg px-8 py-4">
              <Calendar className="w-5 h-5 mr-2" />
              Prendre Rendez-vous
            </Button>
            <Button variant="dental-outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-dental-blue">
              <Phone className="w-5 h-5 mr-2" />
              6 77 22 33 11
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Award className="w-8 h-8 text-dental-orange" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">5+</h3>
              <p className="text-white/80">Années d'expérience</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Users className="w-8 h-8 text-dental-orange" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">100+</h3>
              <p className="text-white/80">Patients satisfaits</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Calendar className="w-8 h-8 text-dental-orange" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-white/80">Urgences disponibles</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;