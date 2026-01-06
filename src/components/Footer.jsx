import { Link } from "react-router-dom";

export default function Footer(){
    const year = new Date().getFullYear();

    return(
        <footer className="bg-gray-900 text-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-2xl font-title font-bold">DNA</h3>
                    <p className="mt-3 text-gray-400">Conciergerie spécialisée dans les locations courte durée — gestion, optimisation et service invité premium.</p>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Liens</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><Link to="/" className="hover:text-white">Accueil</Link></li>
                        <li><Link to="/services" className="hover:text-white">Services</Link></li>
                        <li><Link to="/about" className="hover:text-white">À propos</Link></li>
                        <li><Link to="/devis" className="hover:text-white">Devis</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Contact</h4>
                    <p className="text-gray-400">contact@dna-conciergerie.example</p>
                    <p className="text-gray-400 mt-2">+33 1 23 45 67 89</p>
                </div>
            </div>

            <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
                © {year} DNA Conciergerie. Tous droits réservés.
            </div>
        </footer>
    )
}