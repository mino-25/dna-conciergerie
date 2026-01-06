export default function Services(){
    return(
        <main className="max-w-6xl mx-auto px-6 py-20">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-title mb-3">Nos services pour hôtes</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">Solutions complètes pour propriétaires de locations courte durée : mise en place, gestion opérationnelle, optimisation des revenus et service invité premium.</p>
            </header>

            <section className="grid md:grid-cols-2 gap-8">
                <article className="p-6 rounded-lg shadow bg-white">
                    {/* MEDIA: Icon/image for Property Setup */}
                    <h3 className="text-2xl font-semibold mb-2">Mise en place & optimisation</h3>
                    <p className="text-gray-700 mb-4">Home-staging, ameublement conseillé, rédaction d'annonce, optimisation SEO des titres et descriptions. Nous créons des annonces performantes qui convertissent.</p>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Évaluation et recommandations d'aménagement</li>
                        <li>Rédaction d'annonce & optimisation des photos</li>
                        <li>Publication et paramétrage sur les plateformes</li>
                    </ul>
                </article>

                <article className="p-6 rounded-lg shadow bg-white">
                    {/* MEDIA: Icon/image for Guest Support */}
                    <h3 className="text-2xl font-semibold mb-2">Gestion des réservations & invités</h3>
                    <p className="text-gray-700 mb-4">Communication 24/7, automatisation des messages, check-in/check-out et assistance voyageurs pour garantir des expériences 5 étoiles.</p>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Réponses rapides aux demandes et messages</li>
                        <li>Coordination du check-in / check-out</li>
                        <li>Support en cas d’incident</li>
                    </ul>
                </article>

                <article className="p-6 rounded-lg shadow bg-white">
                    {/* MEDIA: Icon/image for Cleaning */}
                    <h3 className="text-2xl font-semibold mb-2">Ménage & Logistique</h3>
                    <p className="text-gray-700 mb-4">Réseau d’équipes de ménage qualifiées, contrôle qualité après chaque départ, gestion du linge et réassort.</p>
                </article>

                <article className="p-6 rounded-lg shadow bg-white">
                    {/* MEDIA: Icon/image for Revenue Management */}
                    <h3 className="text-2xl font-semibold mb-2">Optimisation tarifaire</h3>
                    <p className="text-gray-700 mb-4">Suivi du marché et ajustements tarifaires pour maximiser le taux d’occupation et le revenu.</p>
                </article>

                <article className="p-6 rounded-lg shadow bg-white">
                    {/* MEDIA: Icon/image for Photography */}
                    <h3 className="text-2xl font-semibold mb-2">Photographie & mise en valeur</h3>
                    <p className="text-gray-700 mb-4">Shooting professionnel et retouche pour des visuels qui attirent plus de clics et de réservations.</p>
                </article>

                <article className="p-6 rounded-lg shadow bg-white">
                    {/* MEDIA: Icon/image for Key Exchange */}
                    <h3 className="text-2xl font-semibold mb-2">Accueil & remise des clés</h3>
                    <p className="text-gray-700 mb-4">Accueil personnalisé, gestion des clés physiques ou installation et gestion de serrures connectées.</p>
                </article>
            </section>

            <div className="text-center mt-12">
                <a href="/devis" className="inline-block px-6 py-3 bg-black text-white rounded-full">Demander un devis</a>
            </div>
        </main>
    )
}