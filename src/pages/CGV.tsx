import Layout from "@/components/Layout";

const LegalSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-10">
        <h2 className="text-2xl font-bold text-dental-blue mb-4">{title}</h2>
        <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
);

const CGVPage = () => {
    return (
        <Layout>
            {/* Hero */}
            <section className="bg-gradient-to-r from-dental-blue to-dental-blue-light text-white py-16 -mt-32 pt-44">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Conditions Générales</h1>
                    <p className="text-white/80">Conditions générales d'utilisation et de soins — Dernière mise à jour : Avril 2026</p>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-3xl">
                    <LegalSection title="1. Objet">
                        <p>Les présentes conditions générales régissent l'utilisation du site web du Cabinet Dentaire Smile Always ainsi que les modalités de prestation de soins dentaires proposés par notre établissement.</p>
                    </LegalSection>

                    <LegalSection title="2. Prise de rendez-vous">
                        <p>La prise de rendez-vous via le formulaire en ligne ou par téléphone constitue une demande de rendez-vous. Elle n'est effective qu'après confirmation écrite ou verbale par notre équipe.</p>
                        <p>Nous nous réservons le droit de refuser ou de déplacer un rendez-vous en cas de nécessité médicale ou organisationnelle, avec information préalable du patient.</p>
                    </LegalSection>

                    <LegalSection title="3. Annulation et report">
                        <p>Tout rendez-vous doit être annulé ou reporté au moins <strong>48 heures à l'avance</strong> via téléphone ou email, sauf urgence médicale avérée. En cas d'absence sans prévenir à plusieurs reprises, nous nous réservons le droit de refuser de nouveaux rendez-vous.</p>
                    </LegalSection>

                    <LegalSection title="4. Tarifs et paiement">
                        <p>Les tarifs de nos soins sont communiqués lors de la consultation initiale et font l'objet d'un devis écrit pour les actes importants.</p>
                        <p>Le règlement s'effectue :</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>En espèces (FCFA)</li>
                            <li>Par Mobile Money (Orange Money, MTN Mobile Money)</li>
                            <li>Par carte bancaire (selon disponibilité)</li>
                        </ul>
                        <p>Des facilités de paiement peuvent être accordées sur demande pour les traitements importants.</p>
                    </LegalSection>

                    <LegalSection title="5. Devis et plan de traitement">
                        <p>Pour tout soin dont le coût dépasse 50 000 FCFA, un devis détaillé est remis au patient. Ce devis est valable 30 jours. L'acceptation du devis vaut accord pour la réalisation des soins.</p>
                    </LegalSection>

                    <LegalSection title="6. Responsabilité médicale">
                        <p>Nos praticiens sont titulaires de leurs diplômes et exercent conformément à la réglementation camerounaise régissant la profession de chirurgien-dentiste. Tout acte médical comporte des risques inhérents qui sont expliqués au patient lors du consentement éclairé.</p>
                    </LegalSection>

                    <LegalSection title="7. Confidentialité médicale">
                        <p>Toutes les informations médicales vous concernant sont soumises au secret médical et ne peuvent être communiquées à des tiers sans votre consentement explicite, sauf obligations légales.</p>
                    </LegalSection>

                    <LegalSection title="8. Réclamations">
                        <p>Toute réclamation concernant nos soins ou services doit être adressée par écrit à :</p>
                        <p><strong>Cabinet Smile Always — Service qualité</strong><br />Carrefour Vogt, Yaoundé, Cameroun<br />Email : contactsmilealways@gmail.com</p>
                        <p>Nous nous engageons à répondre à toute réclamation dans un délai de 15 jours ouvrables.</p>
                    </LegalSection>

                    <LegalSection title="9. Droit applicable">
                        <p>Les présentes conditions générales sont soumises au droit camerounais. Les tribunaux de Yaoundé sont seuls compétents en cas de litige.</p>
                    </LegalSection>
                </div>
            </section>
        </Layout>
    );
};

export default CGVPage;
