import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative text-white py-24 md:py-32 min-h-[80dvh] md:min-h-[700px] flex items-center">
      {/* Background slika */}
      <Image
        src="/hero.jpg"
        alt="Bona Fides Nekretnine Hero"
        fill
        priority
        className="object-cover"
        quality={90}
      />

      {/* Dark overlay za bolju čitljivost teksta */}
      <div className="absolute inset-0 bg-black/25" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Bona Fides Nekretnine Nova
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md">
            Vaš pouzdan partner u kupovini i prodaji nekretnina
          </p>
          <p className="text-lg mb-12 text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Profesionalno obučeni agenti sa dugogodišnjim iskustvom u Valjevu i
            okolini. Nudimo kompletne pravne usluge i pomoć pri finansiranju
            stambenih kredita.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/nekretnine"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              <FaSearch className="mr-2" />
              Pretraži Nekretnine
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-foreground transition-all shadow-lg"
            >
              Kontaktiraj Nas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
