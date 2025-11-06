import cover from "../assets/hero-cover.jpg";

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white">
      {/* Image de fond */}
      <img
        src={cover}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenu du hero */}
      <div className="relative z-10">
        <h1 className="text-6xl font-serif mb-4">DNA CONCIÈRGERIE</h1>
        <p className="text-lg text-gray-200">Bienvenue sur notre site</p>
      </div>
    </div>
  );
}
