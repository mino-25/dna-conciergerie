import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from './components/Header'
import Footer from "./components/Footer"
import Home from './pages/Home'
import Services from "./pages/Services"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Devis from "./pages/Devis"


export default function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/devis" element={<Devis />}/>
        </Routes>
        </main>
      </div>
      

      <Footer/>
    </Router>
  )
}
