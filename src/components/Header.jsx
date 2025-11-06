import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 shadow-2xl">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-6">
        {/* Logo */}
        <Link to="/" className="text-white text-3xl font-bold tracking-tight">
          DNA
        </Link>

        {/* Menu */}
        <div className="flex gap-6 text-white text-lg font-medium">
          <Link to="/" className="hover:text-gray-200 transition-colors">Accueil</Link>
          <Link to="/services" className="hover:text-gray-200 transition-colors">Services</Link>
          <Link to="/about" className="hover:text-gray-200 transition-colors">À propos</Link>
          <Link to="/contact" className="hover:text-gray-200 transition-colors">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
