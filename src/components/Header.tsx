import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Calendar, Mail, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Équipe", href: "/equipe" },
    { name: "Urgences 24/7", href: "/urgences" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-dental-blue to-dental-blue-light text-white py-2 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:+237677223311" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Phone className="w-4 h-4" />
                <span>6 77 22 33 11</span>
              </a>
              <a href="mailto:contactsmilealways@gmail.com" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Mail className="w-4 h-4" />
                <span>contactsmilealways@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span>Carrefour Vogt, Yaoundé</span>
              </div>
            </div>
            <div className="ml-auto">
              <Link to="/urgences">
                <Button variant="accent" size="sm" className="h-8 px-4 text-xs font-semibold">
                  <Calendar className="w-3 h-3 mr-1" />
                  Urgence 24/7
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`bg-white/98 backdrop-blur-md border-b border-border transition-all duration-300 ${isScrolled ? "shadow-lg" : "shadow-sm"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-dental-blue via-dental-blue-light to-dental-orange rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <span className="text-white font-bold text-lg">SA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-dental-blue tracking-tight leading-none">
                  Smile Always
                </span>
                <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
                  Cabinet Dentaire
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center" aria-label="Navigation principale">
              <div className="flex items-center">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`nav-link-underline px-4 py-3 text-sm font-semibold transition-colors duration-200 ${isActive(item.href)
                        ? "text-dental-blue active"
                        : "text-foreground hover:text-dental-blue"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href="tel:+237677223311">
                <Button variant="dental-outline" size="sm" className="border-2 gap-1.5 font-semibold">
                  <Phone className="w-4 h-4" />
                  Appeler
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="dental" size="sm" className="shadow-md gap-1.5 font-semibold">
                  <Calendar className="w-4 h-4" />
                  Rendez-vous
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 rounded-xl hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-screen border-t border-border" : "max-h-0"
              }`}
          >
            <nav className="py-4">
              <div className="flex flex-col">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-3 font-semibold text-sm rounded-xl mx-2 transition-all duration-200 ${isActive(item.href)
                        ? "text-dental-blue bg-dental-blue/8 font-bold"
                        : "text-foreground hover:text-dental-blue hover:bg-muted"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-2 px-4 pt-4 pb-2 border-t border-border mt-4">
                <a href="tel:+237677223311">
                  <Button variant="dental-outline" size="sm" className="justify-center w-full gap-2 font-semibold">
                    <Phone className="w-4 h-4" />
                    Appeler maintenant
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="dental" size="sm" className="justify-center w-full gap-2 font-semibold">
                    <Calendar className="w-4 h-4" />
                    Prendre rendez-vous
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;