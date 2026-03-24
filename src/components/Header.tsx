import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar, Mail, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Accueil", href: "#accueil" },
    { name: "Services", href: "#services" },
    { name: "Équipe", href: "#equipe" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Contact & Info */}
      <div className="bg-gradient-to-r from-dental-blue to-dental-blue-light text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>6 77 22 33 11</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contactsmilealways@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Carrefour Vogt, Yaoundé</span>
              </div>
            </div>
            <div className="ml-auto">
              <Button variant="accent" size="sm" className="h-8 px-4 text-xs font-medium">
                <Calendar className="w-3 h-3 mr-1" />
                Urgence 24/7
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-dental-blue via-dental-blue-light to-dental-orange rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">SA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-dental-blue tracking-tight">Smile Always</span>
                <span className="text-xs text-muted-foreground font-medium">Cabinet Dentaire</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-6 py-3 text-foreground hover:text-dental-blue transition-all duration-300 font-medium relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-dental-blue to-dental-orange transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </a>
                ))}
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button variant="dental-outline" size="sm" className="border-2">
                <Phone className="w-4 h-4" />
                Appeler
              </Button>
              <Button variant="dental" size="sm" className="shadow-lg">
                <Calendar className="w-4 h-4" />
                Rendez-vous
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-border bg-white">
              <nav className="py-6">
                <div className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-4 py-3 text-foreground hover:text-dental-blue hover:bg-muted transition-all duration-300 font-medium rounded-lg mx-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col space-y-3 px-4 pt-6 border-t border-border mt-6">
                  <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>6 77 22 33 11</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>contact@smilealways.fr</span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 pt-4">
                    <Button variant="dental-outline" size="sm" className="justify-center">
                      <Phone className="w-4 h-4" />
                      Appeler maintenant
                    </Button>
                    <Button variant="dental" size="sm" className="justify-center">
                      <Calendar className="w-4 h-4" />
                      Prendre rendez-vous
                    </Button>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;