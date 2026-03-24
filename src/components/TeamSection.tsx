import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Award, 
  MapPin,
  Mail,
  Phone
} from "lucide-react";

import medecin1 from "../assets/medecin2.jpg"
import medecin2 from "../assets/medecin3.jpg"
import medecin3 from "../assets/medecin4.jpg"

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Luis Ndongo",
      role: "Chirurgien-Dentiste",
      speciality: "Orthodontie & Esthétique",
      experience: "12 ans d'expérience",
      education: "Université Paris VII",
      description: "Spécialisée en orthodontie moderne et esthétique dentaire, Dr. Dubois accompagne ses patients vers leur sourire idéal.",
      image: medecin1,
      certifications: ["Orthodontie", "Implantologie", "Esthétique"]
    },
    {
      name: "Dr. Jessica Liliane",
      role: "Chirurgien-Dentiste",
      speciality: "Chirurgie & Implantologie",
      experience: "15 ans d'expérience",
      education: "Université de Lyon",
      description: "Expert en chirurgie dentaire et implantologie, Dr. Martin utilise les techniques les plus avancées pour des résultats optimaux.",
      image: medecin2,
      certifications: ["Chirurgie", "Implantologie", "Parodontologie"]
    },
    {
      name: "Sophie ",
      role: "Hygiéniste Dentaire",
      speciality: "Prévention & Soins",
      experience: "8 ans d'expérience",
      education: "École d'Hygiène Dentaire",
      description: "Passionnée par la prévention, Sophie accompagne nos patients dans le maintien d'une hygiène bucco-dentaire parfaite.",
      image: medecin3,
      certifications: ["Hygiène", "Prévention", "Éducation"]
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
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
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 overflow-hidden">
              <div className="relative">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dental-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {member.certifications.map((cert, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-dental-orange text-white">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Header Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-dental-blue mb-1">
                    {member.name}
                  </h3>
                  <p className="text-dental-orange font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.speciality}
                  </p>
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
                <p className="text-sm text-muted-foreground mb-4">
                  {member.description}
                </p>

                {/* Contact Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-dental-blue/10 text-dental-blue rounded-lg hover:bg-dental-blue hover:text-white transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Email</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-dental-orange/10 text-dental-orange rounded-lg hover:bg-dental-orange hover:text-white transition-colors duration-300">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">Appeler</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-dental-blue mb-2">3</div>
            <div className="text-muted-foreground">Praticiens expérimentés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-dental-blue mb-2">25+</div>
            <div className="text-muted-foreground">Formations continues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-dental-blue mb-2">100%</div>
            <div className="text-muted-foreground">Satisfaction patient</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-dental-blue mb-2">15+</div>
            <div className="text-muted-foreground">Années d'expertise</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;