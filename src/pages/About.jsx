export default function About(){
    return(
        <main className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
            <h1 className="text-4xl font-title mb-4">À propos de DNA Conciergerie</h1>
            <p className="mb-6">Nous sommes une conciergerie spécialisée dans la gestion de locations courte durée (Airbnb, Booking, etc.). Notre mission : permettre aux propriétaires de profiter des revenus locatifs sans les contraintes opérationnelles.</p>

            <section className="mb-8">
                <h2 className="text-2xl mb-2">Notre approche</h2>
                <p className="text-gray-700">Nous combinons expertise locale, équipe terrain et outils numériques pour assurer une gestion fiable et rentable. Chaque solution est personnalisée selon votre bien et vos objectifs.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl mb-2">Notre équipe</h2>
                <p className="text-gray-700">Une équipe opérationnelle dédiée : gestionnaires de propriétés, équipes de ménage partenaires, photographes et spécialistes en revenue management.</p>
            </section>

            <section>
                <h2 className="text-2xl mb-2">Nos valeurs</h2>
                <ul className="list-disc pl-5 text-gray-700">
                    <li>Transparence</li>
                    <li>Réactivité</li>
                    <li>Qualité</li>
                </ul>
            </section>

            <div className="mt-8">
                <a href="/contact" className="inline-block px-6 py-3 bg-black text-white rounded-full">Contactez-nous</a>
            </div>
        </main>
    )
}