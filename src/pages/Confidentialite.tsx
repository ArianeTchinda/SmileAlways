import Layout from "@/components/Layout";

const LegalSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-10">
        <h2 className="text-2xl font-bold text-dental-blue mb-4">{title}</h2>
        <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
);

const ConfidentialitePage = () => {
    return (
        <Layout>
            {/* Hero */}
            <section className="bg-gradient-to-r from-dental-blue to-dental-blue-light text-white py-16 -mt-32 pt-44">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Politique de Confidentialité</h1>
                    <p className="text-white/80">Dernière mise à jour : Avril 2026</p>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-3xl">
                    <LegalSection title="1. Responsable du traitement">
                        <p>Le Cabinet Dentaire Smile Always, représenté par Dr. Luis Ndongo, est responsable du traitement de vos données personnelles collectées via ce site.</p>
                        <p><strong>Contact DPO :</strong> contactsmilealways@gmail.com</p>
                    </LegalSection>

                    <LegalSection title="2. Données collectées">
                        <p>Nous collectons uniquement les données que vous nous fournissez volontairement :</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Nom et prénom</li>
                            <li>Adresse email</li>
                            <li>Numéro de téléphone</li>
                            <li>Informations relatives à votre demande de soins</li>
                            <li>Date et heure souhaitées pour un rendez-vous</li>
                        </ul>
                    </LegalSection>

                    <LegalSection title="3. Finalités du traitement">
                        <p>Vos données sont collectées pour les finalités suivantes :</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Gestion des prises de rendez-vous</li>
                            <li>Réponse à vos demandes d'information</li>
                            <li>Envoi de rappels de rendez-vous</li>
                            <li>Newsletter (avec votre consentement explicite)</li>
                        </ul>
                    </LegalSection>

                    <LegalSection title="4. Durée de conservation">
                        <p>Les données relatives aux rendez-vous sont conservées 5 ans conformément aux obligations légales applicables aux établissements de santé. Les données de newsletter sont conservées jusqu'à désinscription.</p>
                    </LegalSection>

                    <LegalSection title="5. Partage des données">
                        <p>Vos données personnelles ne sont jamais vendues à des tiers. Elles peuvent être partagées uniquement avec nos prestataires techniques (hébergeur, logiciel de gestion des rendez-vous) dans le cadre strict de nos services.</p>
                    </LegalSection>

                    <LegalSection title="6. Vos droits">
                        <p>Conformément à la réglementation applicable, vous disposez des droits suivants :</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Droit d'accès :</strong> consulter vos données personnelles</li>
                            <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                            <li><strong>Droit à l'effacement :</strong> supprimer vos données</li>
                            <li><strong>Droit d'opposition :</strong> s'opposer à certains traitements</li>
                            <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
                        </ul>
                        <p className="mt-3">Pour exercer ces droits, contactez-nous à : <a href="mailto:contactsmilealways@gmail.com" className="text-dental-orange hover:underline">contactsmilealways@gmail.com</a></p>
                    </LegalSection>

                    <LegalSection title="7. Sécurité">
                        <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, toute divulgation, altération ou destruction.</p>
                    </LegalSection>

                    <LegalSection title="8. Cookies">
                        <p>Notre site utilise uniquement des cookies techniques nécessaires au bon fonctionnement du site. Vous pouvez les désactiver dans les paramètres de votre navigateur, bien que cela puisse affecter certaines fonctionnalités.</p>
                    </LegalSection>
                </div>
            </section>
        </Layout>
    );
};

export default ConfidentialitePage;
