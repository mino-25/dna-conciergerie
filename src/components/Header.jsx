import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { m } from "framer-motion";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${headerBg} transition-colors duration-300`}>
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-6">
        {/* Logo */}
        <Link to="/" className={`text-3xl font-bold font-title tracking-tight ${linkColor}`}>
          DNA
        </Link>

        {/* Menu */}
        <div className={`absolute top-full left-0 w-full shadow-xl md:shadow-none md:relative md:top-auto md:w-auto flex flex-col md:flex-row gap-6 text-lg font-medium ${headerBg} transition-colors duration-300 md:flex ${menuOpen ? "flex" : "hidden"} md:!flex p-6 md:p-0`}>
          <Link to="/" onClick={() => setMenuOpen(false)} className={`${linkColor} transition-colors`}>Accueil</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className={`${linkColor} transition-colors`}>Services</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className={`${linkColor} transition-colors`}>À propos</Link>
          <Link to="/devis" onClick={() => setMenuOpen(false)} className={`${linkColor} transition-colors`}>Devis</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className={`${linkColor} transition-colors`}>Contact</Link>
        </div>

        {/* Toggle Button */}
        <button onClick={toggleMenu} className="absolute right-6 md:hidden">
          <svg className={`w-6 h-6 ${menuOpen ? "hidden" : "block"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" className={linkColor} />
          </svg>
        </button>
        {/* Close Toggle Button */}
        <button onClick={toggleMenu} className="absolute right-6 md:hidden">
          <svg className={`w-6 h-6 ${menuOpen ? "block" : "hidden"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" className={linkColor} />
          </svg>
        </button>
      </nav>
    </header>
  );
}
