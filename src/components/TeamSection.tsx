import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Award,
  Mail,
  Phone,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import DoctorImage from "@/components/DoctorImage";

/* ── Animated counter ─────────────────────────────── */
const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const elRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - t0) / 1800, 1);
            setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <div ref={elRef} className="text-4xl font-bold text-dental-blue mb-2">{count}{suffix}</div>;
};

const TeamSection = () => {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref);

  const teamMembers = [
    {
      name: "Dr. Flora D",
      role: "Medecin bucco-dentaire",
      speciality: "Orthodontie & Esthétique",
      experience: "12 ans d'expérience",
      education: "FMSP",
      description:
        "Spécialisée en orthodontie moderne et esthétique dentaire, Dr. Flora accompagne ses patients vers leur sourire idéal.",
      image: null,
      certifications: ["Orthodontie", "Esthétique"],
    },
    {
      name: "Dr. Alphonse",
      role: "Medecin bucco-dentaire",
      speciality: "Medecine bucco-dentaire",
      experience: "03 ans d'expérience",
      education: "FMSP",
      description:
        "Dr. Alphonse utilise les techniques les plus avancées pour des résultats optimaux.",
      image: null,
      certifications: ["Chirurgie"],
    },
  
  ];

  return (
    <section id="equipe" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block bg-dental-blue/10 text-dental-blue font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Notre Équipe
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dental-blue mb-6">
            Notre Équipe
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rencontrez notre équipe de professionnels passionnés, dédiés à votre santé
            bucco-dentaire et à votre bien-être.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 border-0 overflow-hidden hover:-translate-y-2 animate-on-scroll delay-${(index % 3) * 100 + 100}`}
            >
              <div className="relative">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <div className="w-full h-full group-hover:scale-110 transition-transform duration-700">
                    <DoctorImage
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dental-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {member.certifications.map((cert, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-dental-orange text-white border-0">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Header Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-dental-blue mb-1">{member.name}</h3>
                  <p className="text-dental-orange font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.speciality}</p>
                </div>

                {/* Experience & Education */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Award className="w-4 h-4 mr-2 text-dental-orange" />
                    {member.experience}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <GraduationCap className="w-4 h-4 mr-2 text-dental-orange" />
                    {member.education}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">{member.description}</p>

                {/* Contact Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-dental-blue/10 text-dental-blue rounded-lg hover:bg-dental-blue hover:text-white transition-all duration-300">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Email</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-dental-orange/10 text-dental-orange rounded-lg hover:bg-dental-orange hover:text-white transition-all duration-300">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">Appeler</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats — animated counters with gradient background */}
        <div className="mt-16 bg-gradient-to-r from-dental-blue to-dental-blue-light rounded-3xl p-10 shadow-xl animate-on-scroll">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { target: 3, suffix: "", label: "Praticiens expérimentés" },
              { target: 25, suffix: "+", label: "Formations continues" },
              { target: 100, suffix: "%", label: "Satisfaction patient" },
              { target: 15, suffix: "+", label: "Années d'expertise" },
            ].map((stat, i) => (
              <div key={i} className="group">
                <Counter target={stat.target} suffix={stat.suffix} />
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;