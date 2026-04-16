import Layout from "@/components/Layout";

const LegalSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-10">
        <h2 className="text-2xl font-bold text-dental-blue mb-4">{title}</h2>
        <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
);

const MentionsLegalesPage = () => {
    return (
        <Layout>
            {/* Hero */}
            <section className="bg-gradient-to-r from-dental-blue to-dental-blue-light text-white py-16 -mt-32 pt-44">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Mentions Légales</h1>
                    <p className="text-white/80">Dernière mise à jour : Avril 2026</p>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-3xl">
                    <LegalSection title="1. Éditeur du site">
                        <p><strong>Dénomination sociale :</strong> Cabinet Dentaire Smile Always</p>
                        <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
                        <p><strong>Adresse :</strong> Carrefour Vogt, Yaoundé Centre, Cameroun</p>
                        <p><strong>Téléphone :</strong> 6 77 22 33 11</p>
                        <p><strong>Email :</strong> contactsmilealways@gmail.com</p>
                        <p><strong>Responsable de publication :</strong> Dr. Luis Ndongo</p>
                    </LegalSection>

                    <LegalSection title="2. Hébergement">
                        <p>Ce site est hébergé par un prestataire d'hébergement web professionnel. Les serveurs sont situés dans l'Union Européenne.</p>
                    </LegalSection>

                    <LegalSection title="3. Propriété intellectuelle">
                        <p>L'ensemble du contenu de ce site (textes, images, graphiques, logos, icônes, sons, logiciels, etc.) est la propriété exclusive du Cabinet Dentaire Smile Always ou de ses partenaires. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie du contenu sans autorisation écrite préalable est interdite.</p>
                    </LegalSection>

                    <LegalSection title="4. Limitation de responsabilité">
                        <p>Le Cabinet Smile Always s'efforce de fournir des informations exactes et à jour sur ce site. Toutefois, les informations médicales présentes ne constituent en aucun cas un avis médical personnalisé et ne sauraient remplacer une consultation avec un professionnel de santé.</p>
                    </LegalSection>

                    <LegalSection title="5. Données personnelles">
                        <p>Les informations collectées via les formulaires de contact sont destinées exclusivement à la prise de rendez-vous et ne sont pas revendues à des tiers. Pour plus d'informations, consultez notre <a href="/confidentialite" className="text-dental-orange hover:underline">Politique de confidentialité</a>.</p>
                    </LegalSection>

                    <LegalSection title="6. Cookies">
                        <p>Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de suivi ou de publicité tiers n'est utilisé sans votre consentement.</p>
                    </LegalSection>

                    <LegalSection title="7. Droit applicable">
                        <p>Les présentes mentions légales sont soumises au droit camerounais. En cas de litige, les tribunaux de Yaoundé seront compétents.</p>
                    </LegalSection>
                </div>
            </section>
        </Layout>
    );
};

export default MentionsLegalesPage;
