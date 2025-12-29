"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    ime: "",
    email: "",
    telefon: "",
    poruka: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ovde dodati logiku za slanje forme
    console.log("Form data:", formData);
    alert("Hvala što ste nas kontaktirali! Odgovorićemo uskoro.");
    setFormData({ ime: "", email: "", telefon: "", poruka: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
            Kontaktirajte nas
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Imate pitanja? Želite da zakažete razgledanje nekretnine? Tu smo da
            vam pomognemo!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kontakt Informacije */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-lg p-8 shadow-lg h-full">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Naše Informacije
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <Link
                      href="tel:+381638226026"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +381 63 822 6026
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <Link
                      href="mailto:bonafidesnova@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      bonafidesnova@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresa</h3>
                    <p className="text-muted-foreground">Valjevo, Srbija</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Facebook className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Facebook</h3>
                    <Link
                      href="https://www.facebook.com/bonafidesnekretninevaljevo?locale=sr_RS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Pratite nas na Facebook-u
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-primary/20">
                <h3 className="font-semibold mb-2">Radno vreme</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Ponedeljak - Petak: 09:00 - 17:00</p>
                  <p>Subota: 10:00 - 14:00</p>
                  <p>Nedelja: Zatvoreno</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kontakt Forma */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Pošaljite nam poruku
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="ime"
                    className="block text-sm font-medium mb-2"
                  >
                    Ime i prezime <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="ime"
                    name="ime"
                    required
                    value={formData.ime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Vaše ime i prezime"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email adresa <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="vas.email@primer.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefon"
                    className="block text-sm font-medium mb-2"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+381 63 123 4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="poruka"
                    className="block text-sm font-medium mb-2"
                  >
                    Poruka <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="poruka"
                    name="poruka"
                    required
                    value={formData.poruka}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Vaša poruka..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Pošalji poruku
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Mapa (opciono - može se dodati Google Maps embed) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-primary text-center">
              Naša Lokacija
            </h2>
            <div className="w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4040.220749582341!2d19.888601853589403!3d44.271545676902534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759eda13cbeb6cf%3A0x9ab875a9cdf55409!2z0JrQsNGA0LDRktC-0YDRktC10LLQsCAxMjMsINCS0LDRmdC10LLQviAxNDAwMA!5e0!3m2!1ssr!2srs!4v1767032055206!5m2!1ssr!2srs"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
