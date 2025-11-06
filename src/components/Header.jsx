import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header className="fixed top-0 left-0 w-full z-50 p-10">
            <nav className="flex justify-between items-center">
                <Link to="/">
                    <img src="" alt="Logo" />
                </Link>
                <div className="flex gap-4">
                    <Link to="/">Acceuil</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about">A propos</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                
            </nav>
            
        </header>
            
    )
}