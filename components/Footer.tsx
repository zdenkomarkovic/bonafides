"use client";
import { motion } from "framer-motion";
import { Facebook, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      className=" py-8 bg-primary text-muted"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-2 md:px-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Kontakt Informacije */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-muted">Kontakt</h3>
            <div className="space-y-3">
              <Link
                href="tel:+381638226026"
                className="flex items-center gap-2 hover:text-muted/70 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+381 63 822 6026</span>
              </Link>
              <Link
                href="mailto:bonafidesnova@gmail.com"
                className="flex items-center gap-2 hover:text-muted/70 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>bonafidesnova@gmail.com</span>
              </Link>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Valjevo, Srbija</span>
              </div>
            </div>
          </div>

          {/* Brzi Linkovi */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-muted">Brzi linkovi</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block hover:text-muted/70 transition-colors"
              >
                Početna
              </Link>
              <Link
                href="/nekretnine"
                className="block hover:text-muted/70 transition-colors"
              >
                Nekretnine
              </Link>
              <Link
                href="/o-nama"
                className="block hover:text-muted/70 transition-colors"
              >
                O Nama
              </Link>
              <Link
                href="/kontakt"
                className="block hover:text-muted/70 transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>

          {/* Društvene Mreže */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-muted">Pratite nas</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/bonafidesnekretninevaljevo?locale=sr_RS"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-muted/70 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center text-center gap-2 md:gap-10 border-t-[1px] border-primary/20 mt-10 pt-5">
          <p>
            &copy; {new Date().getFullYear()} Bona Fides Nekretnine Nova. Sva
            prava zadržana.
          </p>
          <p className="text-sm text-muted-foreground">Registarski broj: 952</p>
          <p className="text-sm">
            Izrada sajta:{" "}
            <Link
              href="https://manikamwebsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted/70 transition-colors underline"
            >
              Manikam Web Solutions
            </Link>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
