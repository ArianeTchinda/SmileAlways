import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Calendar,
  Mail,
  MapPin,
  ChevronDown,
  Smile,
  Crown,
  Scissors,
  Zap,
  Shield,
  Heart,
} from "lucide-react";

import logoImg from "@/assets/logo.png";

const servicesDropdown = [
  {
    name: "Soins Préventifs",
    href: "/services/preventifs",
    icon: Smile,
    desc: "Détartrage, examens et prévention",
  },
  {
    name: "Prothèses Dentaires",
    href: "/services/protheses",
    icon: Crown,
    desc: "Couronnes, bridges et implants",
  },
  {
    name: "Chirurgie Dentaire",
    href: "/services/chirurgie",
    icon: Scissors,
    desc: "Extractions et interventions",
  },
  {
    name: "Esthétique Dentaire",
    href: "/services/esthetique",
    icon: Zap,
    desc: "Blanchiment et facettes",
  },
  {
    name: "Orthodontie",
    href: "/services/orthodontie",
    icon: Shield,
    desc: "Appareils et aligneurs",
  },
  {
    name: "Soins d'Urgence",
    href: "/services/urgences-dentaires",
    icon: Heart,
    desc: "Urgences 24h/24, 7j/7",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const location = useLocation();

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const handleDropdownEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsServicesOpen(true);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 250);
  };

  const menuItems = [
    {
      name: "Accueil",
      href: "/",
      hasDropdown: false,
    },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
    },
    {
      name: "Équipe",
      href: "/equipe",
      hasDropdown: false,
    },
    {
      name: "Urgences 24/7",
      href: "/urgences",
      hasDropdown: false,
    },
    {
      name: "Blog",
      href: "/blog",
      hasDropdown: false,
    },
    {
      name: "Contact",
      href: "/contact",
      hasDropdown: false,
    },
  ];

  const isActive = (href: string) => {
    return href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-dental-blue-dark to-dental-blue text-white py-2 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="tel:+237677223311"
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>6 77 22 33 11</span>
              </a>

              <a
                href="mailto:contactsmilealways@gmail.com"
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
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
                <Button
                  variant="accent"
                  size="sm"
                  className="h-8 px-4 text-xs font-semibold"
                >
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
        className={`bg-white backdrop-blur-md border-b border-border transition-all duration-300 ${
          isScrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={logoImg}
                  alt="Smile Always Logo"
                  className="w-full h-full object-cover"
                />
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
            <nav
              className="hidden lg:flex items-center"
              aria-label="Navigation principale"
            >
              <div className="flex items-center">
                {menuItems.map((item) =>
                  item.hasDropdown ? (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <Link
                        to={item.href}
                        className={`nav-link-underline inline-flex items-center gap-1 whitespace-nowrap px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                          isActive(item.href)
                            ? "text-dental-blue active"
                            : "text-foreground hover:text-dental-blue"
                        }`}
                      >
                        <span>{item.name}</span>

                        <ChevronDown
                          className={`w-4 h-4 flex-shrink-0 mt-[1px] transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>

                      {/* Dropdown */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${
                          isServicesOpen
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-3 pointer-events-none"
                        }`}
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-border/50 p-3 w-[400px]">
                          <div className="grid grid-cols-1 gap-0.5">
                            {servicesDropdown.map((s) => (
                              <Link
                                key={s.href}
                                to={s.href}
                                className="flex items-center gap-4 p-3 rounded-xl hover:bg-dental-blue/5 transition-all duration-200 group"
                              >
                                <div className="w-10 h-10 bg-dental-blue/10 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-dental-blue group-hover:to-dental-blue-light transition-all duration-300">
                                  <s.icon className="w-5 h-5 text-dental-blue group-hover:text-white transition-colors" />
                                </div>

                                <div>
                                  <p className="font-semibold text-sm text-foreground group-hover:text-dental-blue transition-colors">
                                    {s.name}
                                  </p>

                                  <p className="text-xs text-muted-foreground">
                                    {s.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>

                          <div className="mt-2 pt-2 border-t border-border">
                            <Link
                              to="/services"
                              className="flex items-center justify-center gap-2 text-sm font-semibold text-dental-orange hover:text-dental-blue transition-colors py-2 rounded-lg hover:bg-dental-cream"
                            >
                              Voir tous nos services →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`nav-link-underline inline-flex items-center whitespace-nowrap px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                        isActive(item.href)
                          ? "text-dental-blue active"
                          : "text-foreground hover:text-dental-blue"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href="tel:+237677223311">
                <Button
                  variant="dental-outline"
                  size="sm"
                  className="border-2 gap-1.5 font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  Appeler
                </Button>
              </a>

              <Link to="/contact">
                <Button
                  variant="dental"
                  size="sm"
                  className="shadow-md gap-1.5 font-semibold"
                >
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
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen
                ? "max-h-[600px] border-t border-border"
                : "max-h-0"
            }`}
          >
            <nav className="py-4">
              <div className="flex flex-col">
                {menuItems.map((item) =>
                  item.hasDropdown ? (
                    <div key={item.name}>
                      <button
                        className={`w-full flex items-center justify-between px-4 py-3 font-semibold text-sm rounded-xl mx-2 transition-all duration-200 ${
                          isActive(item.href)
                            ? "text-dental-blue bg-dental-blue/8 font-bold"
                            : "text-foreground hover:text-dental-blue hover:bg-muted"
                        }`}
                        onClick={() =>
                          setIsMobileServicesOpen(!isMobileServicesOpen)
                        }
                      >
                        {item.name}

                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isMobileServicesOpen
                            ? "max-h-[400px]"
                            : "max-h-0"
                        }`}
                      >
                        <div className="pl-6 py-2 space-y-1">
                          {servicesDropdown.map((s) => (
                            <Link
                              key={s.href}
                              to={s.href}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-dental-blue hover:bg-dental-blue/5 rounded-lg transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <s.icon className="w-4 h-4" />
                              {s.name}
                            </Link>
                          ))}

                          <Link
                            to="/services"
                            className="block px-4 py-2 text-sm font-semibold text-dental-orange hover:text-dental-blue transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Tous les services →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`px-4 py-3 font-semibold text-sm rounded-xl mx-2 transition-all duration-200 ${
                        isActive(item.href)
                          ? "text-dental-blue bg-dental-blue/8 font-bold"
                          : "text-foreground hover:text-dental-blue hover:bg-muted"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>

              <div className="flex flex-col space-y-2 px-4 pt-4 pb-2 border-t border-border mt-4">
                <a href="tel:+237677223311">
                  <Button
                    variant="dental-outline"
                    size="sm"
                    className="justify-center w-full gap-2 font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    Appeler maintenant
                  </Button>
                </a>

                <Link to="/contact">
                  <Button
                    variant="dental"
                    size="sm"
                    className="justify-center w-full gap-2 font-semibold"
                  >
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