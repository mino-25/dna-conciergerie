import { motion } from "framer-motion";
import cover from "../assets/hero-cover.jpg";

export default function Home() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden text-white text-center">
      <img
        src={cover}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl mb-4 font-title">Hello World</h1>
        <p className="text-lg text-gray-200">Bienvenue sur notre site</p>
      </motion.div>
    </section>
  );
}
