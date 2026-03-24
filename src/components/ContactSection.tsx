import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Calendar,
  MessageCircle,
  Send
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Carrefour vogt", "Yaoundé , Cameroun"],
      action: "Voir sur la carte"
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: ["6 77 22 33 11", "Urgences: 6 77 22 33 12"],
      action: "Appeler"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contactsmilealways@gmail.com", "urgencesmilealways@gmail.com"],
      action: "Envoyer un email"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun-Ven: 8h-19h", "Sam: 9h-17h", "Dim: Urgences"],
      action: "Voir les détails"
    }
  ];

  const scheduleSlots = [
    "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  return (
    <section id="contact" className="py-20 bg-dental-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dental-blue mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prenez rendez-vous facilement ou contactez-nous pour toute question. 
            Notre équipe est là pour vous accompagner.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-dental-blue to-dental-orange rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-dental-blue">
                  Prendre Rendez-vous
                </h3>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Prénom" className="border-dental-blue/20 focus:border-dental-blue" />
                  <Input placeholder="Nom" className="border-dental-blue/20 focus:border-dental-blue" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input type="email" placeholder="Email" className="border-dental-blue/20 focus:border-dental-blue" />
                  <Input type="tel" placeholder="Téléphone" className="border-dental-blue/20 focus:border-dental-blue" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input type="date" className="border-dental-blue/20 focus:border-dental-blue" />
                  <select className="w-full px-3 py-2 border border-dental-blue/20 rounded-md focus:border-dental-blue focus:outline-none">
                    <option value="">Heure souhaitée</option>
                    {scheduleSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                <select className="w-full px-3 py-2 border border-dental-blue/20 rounded-md focus:border-dental-blue focus:outline-none">
                  <option value="">Type de consultation</option>
                  <option value="consultation">Consultation générale</option>
                  <option value="urgence">Urgence</option>
                  <option value="esthetique">Soins esthétiques</option>
                  <option value="orthodontie">Orthodontie</option>
                  <option value="chirurgie">Chirurgie</option>
                </select>

                <Textarea 
                  placeholder="Décrivez brièvement votre demande ou vos symptômes..."
                  className="border-dental-blue/20 focus:border-dental-blue min-h-[120px]"
                />

                <Button variant="dental" className="w-full py-6 text-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer la demande
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-dental-blue to-dental-orange rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-dental-blue mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground mb-1">
                            {detail}
                          </p>
                        ))}
                        <button className="text-sm text-dental-orange hover:text-dental-orange-light transition-colors mt-2">
                          {info.action}
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-dental-blue/10 to-dental-orange/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-dental-blue mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-dental-blue mb-2">
                    Notre Cabinet
                  </h4>
                  <p className="text-muted-foreground">
                    Carrefour Vogt, Yaoundé
                    </p>
                  <Button variant="dental-outline" className="mt-4">
                    Voir sur Google Maps
                  </Button>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button variant="accent" size="lg" className="h-16 flex-col gap-1">
                <Phone className="w-6 h-6" />
                <span>Appel d'urgence</span>
              </Button>
              <Button variant="dental-outline" size="lg" className="h-16 flex-col gap-1">
                <MessageCircle className="w-6 h-6" />
                <span>Chat en ligne</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;