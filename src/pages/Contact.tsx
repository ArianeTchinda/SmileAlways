import { useState, type FormEvent } from "react";
import Layout from "@/components/Layout";
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
    Send,
    MessageCircle,
} from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const scheduleSlots = [
    "08:00", "09:00", "10:00", "11:00",
    "14:00", "15:00", "16:00", "17:00", "18:00",
];

const apiBase = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        hour: "",
        appointmentType: "",
        message: "",
    });
    const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus(null);

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.appointmentType) {
            setStatus({ type: "error", message: "Merci de remplir tous les champs obligatoires." });
            return;
        }

        setIsSending(true);

        try {
            const response = await fetch(`${apiBase}/api/contacts`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
                    email: formData.email,
                    phone: formData.phone,
                    subject: `Rendez-vous ${formData.date || "sans date"} ${formData.hour || ""} - ${formData.appointmentType}`,
                    message: formData.message,
                }),
            });

            if (!response.ok) {
                const body = await response.json();
                throw new Error(body.error ?? "Impossible d'envoyer la demande.");
            }

            setStatus({ type: "success", message: "Votre demande a bien été envoyée. Nous vous contacterons bientôt." });
            setFormData({ firstName: "", lastName: "", email: "", phone: "", date: "", hour: "", appointmentType: "", message: "" });
        } catch (error) {
            setStatus({ type: "error", message: error instanceof Error ? error.message : "Une erreur est survenue." });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <Layout>
            {/* Hero */}
            <section className="group relative bg-gradient-to-br from-dental-blue-dark via-dental-blue to-dental-blue-light text-white -mt-32 pt-48 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <img src={heroImage} alt="" aria-hidden className="w-full h-full object-cover scale-105 animate-[slow-zoom_20s_ease-in-out_infinite_alternate] transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-br from-dental-blue-dark/90 via-dental-blue/80 to-dental-blue-light/70 transition-all duration-500 group-hover:from-dental-blue-dark/85 group-hover:via-dental-blue/75 group-hover:to-dental-blue-light/65" />
                </div>
                <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 -left-20 w-72 h-72 bg-dental-orange/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-white/20 rounded-full animate-gentle-float" />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                </div>
                <div className="container mx-auto px-4 text-center relative">
                    <span className="inline-block bg-white/15 text-white font-semibold text-sm px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-white/10">
                        Nous Contacter
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Contact & Rendez-vous</h1>
                    <p className="text-xl text-white/85 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.15s" }}>
                        Prenez rendez-vous facilement ou contactez-nous pour toute question.
                        Notre équipe répond dans les plus brefs délais.
                    </p>
                </div>
                <div className="wave-divider">
                    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" fill="hsl(45 30% 96%)" />
                    </svg>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-dental-cream">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Appointment Form */}
                        <Card className="border-0 shadow-xl">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-r from-dental-blue to-dental-orange rounded-full flex items-center justify-center">
                                        <Calendar className="w-5 h-5 text-white" />
                                    </div>
                                    <h2 className="text-2xl font-semibold text-dental-blue">
                                        Prendre Rendez-vous
                                    </h2>
                                </div>

                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    {status ? (
                                        <div className={`rounded-3xl p-4 mb-4 text-sm ${status.type === "success" ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-rose-50 text-rose-800 border border-rose-200"}`}>
                                            {status.message}
                                        </div>
                                    ) : null}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Input
                                            placeholder="Prénom *"
                                            className="border-dental-blue/20"
                                            value={formData.firstName}
                                            onChange={(event) => setFormData({ ...formData, firstName: event.target.value })}
                                        />
                                        <Input
                                            placeholder="Nom *"
                                            className="border-dental-blue/20"
                                            value={formData.lastName}
                                            onChange={(event) => setFormData({ ...formData, lastName: event.target.value })}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Input
                                            type="email"
                                            placeholder="Email *"
                                            className="border-dental-blue/20"
                                            value={formData.email}
                                            onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                                        />
                                        <Input
                                            type="tel"
                                            placeholder="Téléphone *"
                                            className="border-dental-blue/20"
                                            value={formData.phone}
                                            onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Input
                                            type="date"
                                            className="border-dental-blue/20"
                                            value={formData.date}
                                            onChange={(event) => setFormData({ ...formData, date: event.target.value })}
                                        />
                                        <select
                                            value={formData.hour}
                                            onChange={(event) => setFormData({ ...formData, hour: event.target.value })}
                                            className="w-full px-3 py-2 border border-dental-blue/20 rounded-md focus:border-dental-blue focus:outline-none text-sm bg-white"
                                        >
                                            <option value="">Heure souhaitée</option>
                                            {scheduleSlots.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <select
                                        value={formData.appointmentType}
                                        onChange={(event) => setFormData({ ...formData, appointmentType: event.target.value })}
                                        className="w-full px-3 py-2 border border-dental-blue/20 rounded-md focus:border-dental-blue focus:outline-none text-sm bg-white"
                                    >
                                        <option value="">Type de consultation *</option>
                                        <option value="consultation">Consultation générale</option>
                                        <option value="urgence">Urgence</option>
                                        <option value="preventif">Soins préventifs</option>
                                        <option value="esthetique">Esthétique dentaire</option>
                                        <option value="orthodontie">Orthodontie</option>
                                        <option value="chirurgie">Chirurgie</option>
                                        <option value="implant">Implantologie</option>
                                    </select>
                                    <Textarea
                                        placeholder="Description de votre demande ou symptômes (facultatif)"
                                        className="border-dental-blue/20 min-h-[120px]"
                                        value={formData.message}
                                        onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                                    />
                                    <Button variant="dental" className="w-full py-6 text-base gap-2" type="submit" disabled={isSending}>
                                        <Send className="w-5 h-5" />
                                        {isSending ? "Envoi en cours..." : "Envoyer la demande"}
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">
                                        * Champs obligatoires. Nous confirmerons votre rendez-vous par SMS ou email.
                                    </p>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Info Column */}
                        <div className="space-y-6">
                            {/* Contact Cards */}
                            {[
                                {
                                    icon: MapPin,
                                    title: "Adresse",
                                    lines: ["Carrefour Vogt", "Yaoundé Centre, Cameroun"],
                                    action: "Voir sur Google Maps",
                                    href: "https://maps.google.com",
                                },
                                {
                                    icon: Phone,
                                    title: "Téléphone",
                                    lines: ["676 61 54 13 (standard)", "6 77 22 33 12 (urgences 24/7)"],
                                    action: "Appeler maintenant",
                                    href: "+237676615413",
                                },
                                {
                                    icon: Mail,
                                    title: "Email",
                                    lines: ["contactsmilealways@gmail.com", "urgencesmilealways@gmail.com"],
                                    action: "Envoyer un email",
                                    href: "mailto:contactsmilealways@gmail.com",
                                },
                                {
                                    icon: Clock,
                                    title: "Horaires d'ouverture",
                                    lines: ["Lundi – Vendredi : 8h00 – 19h00", "Samedi : 9h00 – 17h00", "Dimanche : Urgences uniquement"],
                                    action: null,
                                    href: null,
                                },
                            ].map((info, i) => (
                                <Card key={i} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-dental-blue to-dental-orange rounded-xl flex items-center justify-center flex-shrink-0">
                                                <info.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-dental-blue mb-2">{info.title}</h3>
                                                {info.lines.map((l, j) => (
                                                    <p key={j} className="text-sm text-muted-foreground">{l}</p>
                                                ))}
                                                {info.action && info.href && (
                                                    <a
                                                        href={info.href}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-sm text-dental-orange hover:text-dental-orange/80 mt-2 inline-block transition-colors"
                                                    >
                                                        {info.action} →
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}

                            {/* Quick Buttons */}
                            <div className="grid grid-cols-2 gap-4">
                                <a href="tel:+237676615413">
                                    <Button variant="accent" size="lg" className="w-full h-16 flex-col gap-1">
                                        <Phone className="w-5 h-5" />
                                        <span className="text-xs">Urgences</span>
                                    </Button>
                                </a>
                                <a href="https://wa.me/237676615413" target="_blank" rel="noreferrer">
                                    <Button variant="dental-outline" size="lg" className="w-full h-16 flex-col gap-1">
                                        <MessageCircle className="w-5 h-5" />
                                        <span className="text-xs">WhatsApp</span>
                                    </Button>
                                </a>
                            </div>

                            {/* Map Embed Placeholder */}
                            <Card className="border-0 shadow-md overflow-hidden">
                                <div className="h-48 bg-gradient-to-br from-dental-blue/10 to-dental-orange/10 flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="w-10 h-10 text-dental-blue mx-auto mb-3" />
                                        <p className="font-semibold text-dental-blue">Carrefour Vogt, Yaoundé</p>
                                        <a
                                            href="https://maps.google.com"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm text-dental-orange mt-2 inline-block"
                                        >
                                            Ouvrir dans Google Maps →
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ContactPage;
