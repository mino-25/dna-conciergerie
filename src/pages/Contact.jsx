import { useState } from "react";

export default function Contact(){
    const [state, setState] = useState({ name: "", email: "", message: "", phone: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(s => ({ ...s, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact message:", state);
        setSent(true);
        setState({ name: "", email: "", message: "", phone: "" });
        setTimeout(() => setSent(false), 4000);
    }

    return(
        <main className="max-w-3xl mx-auto px-6 py-20">
            <h1 className="text-3xl font-title mb-4">Contact</h1>
            <p className="text-gray-600 mb-6">Pour toute question ou demande, écrivez-nous ci‑dessous ou contactez-nous par téléphone.</p>

            <div className="mb-8">
                <p className="font-semibold">Téléphone</p>
                <p className="text-gray-700">+33 6 00 00 00 00</p>
                <p className="font-semibold mt-4">E‑mail</p>
                <p className="text-gray-700">contact@dna-conciergerie.example</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm text-gray-700">Nom</label>
                    <input name="name" value={state.name} onChange={handleChange} className="mt-2 w-full border rounded px-3 py-2" required />
                </div>
                <div>
                    <label className="block text-sm text-gray-700">E‑mail</label>
                    <input name="email" type="email" value={state.email} onChange={handleChange} className="mt-2 w-full border rounded px-3 py-2" required />
                </div>
                <div>
                    <label className="block text-sm text-gray-700">Téléphone (optionnel)</label>
                    <input name="phone" value={state.phone} onChange={handleChange} className="mt-2 w-full border rounded px-3 py-2" />
                </div>
                <div>
                    <label className="block text-sm text-gray-700">Message</label>
                    <textarea name="message" value={state.message} onChange={handleChange} className="mt-2 w-full border rounded px-3 py-2" rows={6} required />
                </div>

                <div className="flex items-center gap-4">
                    <button className="px-6 py-2 bg-black text-white rounded">Envoyer</button>
                    {sent && <span className="text-green-500">✅ Message envoyé, nous vous répondrons bientôt.</span>}
                </div>
            </form>
        </main>
    )
}