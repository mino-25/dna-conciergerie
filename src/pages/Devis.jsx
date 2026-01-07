import { useState } from "react";
import { motion } from "framer-motion";

export default function Devis() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    propertyAddress: "",
    rooms: "",
    propertyType: "",
    platform: "",
    services: {
      setup: false,
      guestSupport: false,
      cleaning: false,
      keys: false,
      pricing: false,
      photos: false,
    },
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((s) => ({ ...s, services: { ...s.services, [name]: checked } }));
    } else {
      setForm((s) => ({ ...s, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with actual submit logic (API call or email)
    console.log("Devis request:", form);
    setSent(true);
    setForm({
      name: "",
      email: "",
      phone: "",
      propertyAddress: "",
      rooms: "",
      propertyType: "",
      platform: "",
      services: { setup: false, guestSupport: false, cleaning: false, keys: false, pricing: false, photos: false },
      message: "",
    });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="min-h-screen py-24 mt-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-title mb-2">Demander un devis pour votre bien</h1>
          <p className="text-gray-200">Dites-nous en quelques mots votre situation : adresse du logement, nombre de chambres et services souhaités.</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black/40 border border-white/10 rounded-xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-200">Nom complet</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white placeholder-gray-300"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="text-sm text-gray-200">E‑mail</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white placeholder-gray-300"
                placeholder="contact@exemple.com"
              />
            </div>

            <div>
              <label className="text-sm text-gray-200">Téléphone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="mt-2 w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white placeholder-gray-300"
                placeholder="+33 6 00 00 00 00"
              />
            </div>

            <div>
              <label className="text-sm text-gray-200">Adresse du logement</label>
              <input
                name="propertyAddress"
                value={form.propertyAddress}
                onChange={handleChange}
                className="mt-2 w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white placeholder-gray-300"
                placeholder="Adresse, ville"
              />
            </div>

            <div>
              <label className="text-sm text-gray-200">Nombre de chambres</label>
              <input
                name="rooms"
                value={form.rooms}
                onChange={handleChange}
                className="mt-2 w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white placeholder-gray-300"
                placeholder="Ex. 1, 2, 3+"
              />
            </div>

            <div>
              <label className="text-sm text-gray-200">Type de bien</label>
              <select
                name="propertyType"
                value={form.propertyType}
                onChange={handleChange}
                className="mt-2 w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white"
              >
                <option value="">Sélectionnez</option>
                <option value="studio">Studio</option>
                <option value="appartement">Appartement</option>
                <option value="maison">Maison</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-200">Plateforme</label>
              <select
                name="platform"
                value={form.platform}
                onChange={handleChange}
                className="mt-2 w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white"
              >
                <option value="">Sélectionnez</option>
                <option value="airbnb">Airbnb</option>
                <option value="booking">Booking.com</option>
                <option value="other">Autre / Multiplateforme</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm text-gray-200 mb-2 block">Services désirés (cochez tout ce qui s'applique)</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <label className="flex items-center gap-2 text-gray-200"><input type="checkbox" name="setup" checked={form.services.setup} onChange={handleChange} /> Mise en place</label>
              <label className="flex items-center gap-2 text-gray-200"><input type="checkbox" name="guestSupport" checked={form.services.guestSupport} onChange={handleChange} /> Gestion des invités</label>
              <label className="flex items-center gap-2 text-gray-200"><input type="checkbox" name="cleaning" checked={form.services.cleaning} onChange={handleChange} /> Ménage & linge</label>
              <label className="flex items-center gap-2 text-gray-200"><input type="checkbox" name="keys" checked={form.services.keys} onChange={handleChange} /> Remise des clés</label>
              <label className="flex items-center gap-2 text-gray-200"><input type="checkbox" name="pricing" checked={form.services.pricing} onChange={handleChange} /> Optimisation tarifaire</label>
              <label className="flex items-center gap-2 text-gray-200"><input type="checkbox" name="photos" checked={form.services.photos} onChange={handleChange} /> Photographie</label>
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm text-gray-200">Informations supplémentaires</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="mt-2 w-full min-h-[120px] bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white placeholder-gray-300"
              placeholder="Dites-nous tout : contraintes, disponibilité, dates de début souhaitées..."
            />
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
            >
              Envoyer la demande
            </button>

            {sent && <span className="text-green-400">✅ Merci ! Nous avons bien reçu votre demande. Nous vous contacterons sous 24h.</span>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
