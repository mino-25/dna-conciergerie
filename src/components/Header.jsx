import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled;
  const headerBg = solid ? "backdrop-blur-md bg-white/90 shadow-xl border-b border-gray-200" : "bg-transparent shadow-none";
  const linkColor = solid ? "text-gray-900" : "text-white";
  const linkHover = solid ? "hover:text-gray-700" : "hover:text-gray-200";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${headerBg} transition-colors duration-300`}>
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-6">
        {/* Logo */}
        <Link to="/" className={`text-3xl font-bold font-title tracking-tight ${linkColor}`}>
          DNA
        </Link>

        {/* Menu */}
        <div className={`flex gap-6 text-lg font-medium ${linkColor}`}>
          <Link to="/" className={`${linkHover} transition-colors`}>Accueil</Link>
          <Link to="/services" className={`${linkHover} transition-colors`}>Services</Link>
          <Link to="/about" className={`${linkHover} transition-colors`}>À propos</Link>
          <Link to="/devis" className={`${linkHover} transition-colors`}>Devis</Link>
          <Link to="/contact" className={`${linkHover} transition-colors`}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}
