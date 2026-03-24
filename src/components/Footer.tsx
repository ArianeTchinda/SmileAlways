import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "Services", href: "#services" },
    { name: "Équipe", href: "#equipe" },
    { name: "Contact", href: "#contact" },
    { name: "Urgences", href: "#urgences" },
    { name: "Blog", href: "#blog" }
  ];

  const services = [
    "Soins préventifs",
    "Orthodontie",
    "Implantologie",
    "Esthétique dentaire",
    "Chirurgie dentaire",
    "Urgences 24/7"
  ];

  return (
    <footer className="bg-dental-blue text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-dental-orange to-dental-orange-light rounded-full flex items-center justify-center">
                <span className="text-white font-bold">SA</span>
              </div>
              <span className="text-2xl font-bold">Smile Always</span>
            </div>
            <p className="text-white/80 mb-6">
              Votre cabinet dentaire de confiance au Cameroun. Des soins de qualité 
              dans un environnement moderne et chaleureux depuis plus de 15 ans.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-dental-orange transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-dental-orange transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-dental-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Carrefour Vogt </p>
                  <p className="text-white/80">Yaoundé Centre, Cameroun</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-dental-orange flex-shrink-0" />
                <div>
                  <p className="text-white/80">6 77 22 33 11</p>
                  <p className="text-white/60 text-sm">Urgences: 6 77 22 33 12</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-dental-orange flex-shrink-0" />
                <p className="text-white/80">contact@smilealways.fr</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-dental-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Lun-Ven: 8h-19h</p>
                  <p className="text-white/80">Sam: 9h-17h</p>
                  <p className="text-white/60 text-sm">Dim: Urgences uniquement</p>
                </div>
              </div>
            </div>
            
            <Button variant="accent" className="mt-6 w-full">
              Prendre Rendez-vous
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2025 Smile Always. Tous droits réservés.
            </div>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-white transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;