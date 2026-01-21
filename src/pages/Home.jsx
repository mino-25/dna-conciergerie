import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cover from "../assets/hero-cover.jpg";
import shakeHands from "../assets/men-shake-hands.jpg";

export default function Home() {
  return (
    <>
      {/*
        HERO
        MEDIA: Hero background image (JPEG/WEBP) - large, high quality (recommended 1920x1080). Consider a welcoming property photo or cityscape.
      */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden text-white text-center">
        <img
          src={cover}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl mb-4 font-title">DNA Conciergerie</h1>
          <p className="text-lg text-gray-200 max-w-xl">Conciergerie spécialisée dans la gestion de locations courte durée (Airbnb, Booking, etc.). Nous maximisons vos revenus et simplifions la vie des hôtes.</p>
          <div className="flex mt-6 justify-center">
            <Link to="/services"><button className="mt-4 px-6 py-3 bg-black/40 border-white text-white rounded-full hover:bg-black/60 transition-colors">Nos services</button></Link>
            <Link to="/devis"><button className="mt-4 ml-4 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">Demander un devis</button></Link>
          </div>
        </motion.div>
      </section>

      {/*
        SERVICES SECTION
        MEDIA: For each service card, add a small illustrative image or icon (PNG/SVG) - e.g. 'setup.png', 'cleaning.png', 'guest-support.png'
      */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-title text-center mb-6">Services pour hôtes</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">De la préparation du logement à l'optimisation des annonces, nos services couvrent tout le cycle de la location courte durée.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="p-6 rounded-lg shadow-md bg-gray-50">
              {/* MEDIA: Icon/image for Property Setup (SVG/PNG) */}
              <div className="h-16 w-16 bg-black/5 rounded-full mb-4 flex items-center justify-center">🏡</div>
              <h3 className="text-xl font-semibold mb-2">Mise en place du logement</h3>
              <p className="text-gray-600">Home-staging, ameublement recommandé, et rédaction & optimisation de l'annonce pour augmenter vos réservations.</p>
            </article>

            <article className="p-6 rounded-lg shadow-md bg-gray-50">
              {/* MEDIA: Icon/image for Guest Support (SVG/PNG) */}
              <div className="h-16 w-16 bg-black/5 rounded-full mb-4 flex items-center justify-center">💬</div>
              <h3 className="text-xl font-semibold mb-2">Gestion des réservations & des invités</h3>
              <p className="text-gray-600">Réponse aux demandes, check-in/check-out, conciergerie 24/7 et gestion des situations imprévues.</p>
            </article>

            <article className="p-6 rounded-lg shadow-md bg-gray-50">
              {/* MEDIA: Icon/image for Cleaning (SVG/PNG) */}
              <div className="h-16 w-16 bg-black/5 rounded-full mb-4 flex items-center justify-center">🧼</div>
              <h3 className="text-xl font-semibold mb-2">Ménage & préparation</h3>
              <p className="text-gray-600">Coordination des équipes de nettoyage, contrôle qualité et réapprovisionnement des fournitures.</p>
            </article>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <article className="p-6 rounded-lg shadow-md bg-gray-50">
              {/* MEDIA: Icon/image for Key Exchange (SVG/PNG) */}
              <div className="h-16 w-16 bg-black/5 rounded-full mb-4 flex items-center justify-center">🔑</div>
              <h3 className="text-xl font-semibold mb-2">Remise de clés & check-in</h3>
              <p className="text-gray-600">Checks d'entrée personnalisés, gestion des clés ou serrures connectées, et accueil des voyageurs.</p>
            </article>

            <article className="p-6 rounded-lg shadow-md bg-gray-50">
              {/* MEDIA: Icon/image for Revenue Management (SVG/PNG) */}
              <div className="h-16 w-16 bg-black/5 rounded-full mb-4 flex items-center justify-center">📈</div>
              <h3 className="text-xl font-semibold mb-2">Optimisation tarifaire</h3>
              <p className="text-gray-600">Stratégies de prix dynamiques et calendrier optimisé pour maximiser votre revenu locatif.</p>
            </article>

            <article className="p-6 rounded-lg shadow-md bg-gray-50">
              {/* MEDIA: Icon/image for Photography (SVG/PNG) */}
              <div className="h-16 w-16 bg-black/5 rounded-full mb-4 flex items-center justify-center">📷</div>
              <h3 className="text-xl font-semibold mb-2">Photographie & présentation</h3>
              <p className="text-gray-600">Photos professionnelles et description attractive pour mettre en valeur votre annonce.</p>
            </article>
          </div>

          <div className="text-center mt-8">
            <Link to="/devis"><button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">Demander un devis</button></Link>
          </div>
        </div>
      </section>

      {/*
        WHY CHOOSE US
        MEDIA: Add team photo or behind-the-scenes image (JPEG) and small icons for benefits
      */}
      <section className="py-20 bg-gray-100 text-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-title mb-4">Pourquoi choisir notre conciergerie</h2>
              <ul className="space-y-3 text-gray-700">
                <li>✅ Spécialistes des locations courte durée</li>
                <li>✅ Service 24/7 pour vos invités</li>
                <li>✅ Augmentation mesurable du taux d'occupation</li>
              </ul>
            </div>

            <div>
              {/* MEDIA: Team photo (JPEG) or field service image - recommend 1200x800 */}
              <div className="aspect-video bg-black/10 rounded-lg flex items-center justify-center"><img src={shakeHands} alt="Équipe sur le terrain" className="rounded" /></div>
            </div>
          </div>
        </div>
      </section>

      {/*
        PORTFOLIO / MEDIA GALLERY
        MEDIA: Add project images (JPEG/WEBP 1200x800) or short demo videos (MP4, 1080p). Consider adding before/after property photos and case studies.
      */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-title text-center mb-6">Exemples de logements</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">Avant/après, aménagements et mises en valeur réalisées pour des hôtes comme vous.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* MEDIA: Replace placeholders below with property thumbnails or short videos */}
            <div className="h-40 bg-black/5 rounded-md flex items-center justify-center">Appartement - Paris (image)</div>
            <div className="h-40 bg-black/5 rounded-md flex items-center justify-center">Studio - Bordeaux (image)</div>
            <div className="h-40 bg-black/5 rounded-md flex items-center justify-center">Maison - Côte (image)</div>
            <div className="h-40 bg-black/5 rounded-md flex items-center justify-center">T2 - Lyon (image)</div>
          </div>
        </div>
      </section>

      {/*
        TESTIMONIALS
        MEDIA: Add client headshots (small jpg) or company logos (SVG) next to each quote
      */}
      <section className="py-20 bg-gray-50 text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-title mb-6">Ce que disent nos hôtes</h2>
          <blockquote className="italic text-gray-700">"Grâce à DNA, mon appartement est plein toute l'année et la gestion quotidienne ne me prend plus de temps."</blockquote>
          <p className="mt-4 text-sm text-gray-500">— Amine, partenaire en région Parisienne</p>

          <div className="mt-8 flex justify-center gap-6">
            {/* MEDIA: Client Logo 1 (SVG) */}
            <div className="h-12 w-24 bg-black/5 rounded flex items-center justify-center">Logo 1</div>
            {/* MEDIA: Client Logo 2 (SVG) */}
            <div className="h-12 w-24 bg-black/5 rounded flex items-center justify-center">Logo 2</div>
            {/* MEDIA: Client Logo 3 (SVG) */}
            <div className="h-12 w-24 bg-black/5 rounded flex items-center justify-center">Logo 3</div>
          </div>
        </div>
      </section>

      {/*
        CONTACT CTA
        MEDIA: Optional background image or subtle texture
      */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-title mb-2">Prêt à confier votre bien ?</h3>
          <p className="text-gray-300 mb-6">Parlez-nous de votre logement et recevez une proposition personnalisée pour optimiser vos revenus.</p>
          <Link to="/devis"><button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">Demander un devis</button></Link>
        </div>
      </section>
    </>
  );
}

