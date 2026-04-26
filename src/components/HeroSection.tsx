import { Button } from "@/components/ui/button";
import { Calendar, Phone, Award, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-dental.jpg";
import { useEffect, useState } from "react";

const words = ["Votre sourire", "Votre confiance", "Votre santé"];

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("opacity-100 translate-y-0");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("opacity-0 translate-y-4");
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setFadeClass("opacity-100 translate-y-0");
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cabinet dentaire moderne"
          className="w-full h-full object-cover scale-105 animate-[slow-zoom_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dental-blue-dark/90 via-dental-blue/80 to-dental-blue-light/70" />
      </div>

      {/* Floating decorative elements */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-white/20 rounded-full animate-gentle-float" />
        <div className="absolute top-[40%] right-[15%] w-4 h-4 bg-dental-orange/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[30%] left-[20%] w-2 h-2 bg-white/15 rounded-full animate-gentle-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[60%] right-[25%] w-5 h-5 bg-white/10 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
        {/* Large blurred shapes */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-dental-orange/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Animated rotating word */}
          <div className="mb-4 animate-fade-in">
            <span className="inline-block bg-white/15 text-white font-semibold text-sm px-5 py-2 rounded-full backdrop-blur-sm border border-white/10">
              ✨ Cabinet Dentaire Moderne à Yaoundé
            </span>
          </div>

          {/* Main Heading with rotating words */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className={`inline-block transition-all duration-400 ${fadeClass}`}>
              {words[wordIndex]}
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-dental-cream to-dental-orange bg-clip-text text-transparent">
              notre priorité
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Des soins dentaires de qualité dans un environnement moderne et chaleureux.
            Smile Always, pour un sourire qui dure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/contact">
              <Button variant="accent" size="lg" className="text-lg px-8 py-6 shadow-2xl">
                <Calendar className="w-5 h-5 mr-2" />
                Prendre Rendez-vous
              </Button>
            </Link>
            <a href="tel:+237677223311">
              <Button variant="dental-outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-dental-blue">
                <Phone className="w-5 h-5 mr-2" />
                6 77 22 33 11
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {[
              { icon: Award, value: "5+", label: "Années d'expérience", delay: "0" },
              { icon: Users, value: "100+", label: "Patients satisfaits", delay: "0.1s" },
              { icon: Clock, value: "24/7", label: "Urgences disponibles", delay: "0.2s" },
            ].map((stat, i) => (
              <div
                key={i}
                className="group text-center bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center group-hover:bg-dental-orange/80 transition-colors duration-300">
                    <stat.icon className="w-7 h-7 text-dental-orange group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                <p className="text-white/75 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" fill="hsl(45 30% 96%)" />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;