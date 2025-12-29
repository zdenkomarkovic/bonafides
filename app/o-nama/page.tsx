import WhyChooseUs from "@/components/WhyChooseUs";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCertificate,
} from "react-icons/fa";

export const metadata = {
  title: "O Nama - Bona Fides Nekretnine Nova",
  description:
    "Saznajte više o agenciji Bona Fides Nekretnine Nova. Profesionalno obučeni agenti sa dugogodišnjim iskustvom u prometu nekretnina u Valjevu.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">O Nama</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-purple-100">
            Profesionalnost, iskustvo i posvećenost svakom klijentu
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-md border border-border mb-8">
              <h2 className="text-3xl font-bold mb-6">
                Bona Fides Nekretnine Nova
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Agencija za nekretnine{" "}
                  <strong>Bona Fides Nekretnine Nova</strong> je firma koja već
                  mnogo godina postoji na ovom području. Tačnije rečeno, tim
                  profesionalno obučenih agenata već godinama radi na
                  posredovanju u prometu nekretnina i agencija se može pohvaliti
                  sa velikim brojem zadovoljnih klijenata.
                </p>
                <p className="mb-4">
                  Licencirani agenti su poznati po profesionalnom i ljubaznom
                  odnosu prema klijentima. Pored toga, agencija raspolaže sa
                  sopstvenim pravnicima koji se bave pretežno imovinsko pravnim
                  poslovima, odnosno, pored izrade predkontraktne i kontraktne
                  dokumentacije, pravnici daju i savete pravne prirode u vezi sa
                  nekretninama.
                </p>
                <p className="mb-4">
                  Specijalizovani smo za kupovinu i prodaju:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Stanova</li>
                  <li>Kuća</li>
                  <li>Poslovnih prostora</li>
                  <li>Placeva</li>
                  <li>Vikendica</li>
                  <li>Seoskih imanja</li>
                </ul>
                <p className="mb-4">
                  Pored navedenog, naša agencija posreduje u prometu nekretnina
                  i u Beogradu, i takođe, agencija posreduje u izdavanju
                  nekretnina.
                </p>
                <p className="mb-4">
                  Takođe, agencija vam može pružiti i pomoć pri obezbedivanju
                  sredstava za finansiranje stambenih kredita putem raznih
                  banaka sa kojima ima ugovor o saradnji.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FaCertificate className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Licenca</h3>
                    <p className="text-muted-foreground">
                      Upisani u Registar posrednika pri Ministarstvu trgovine,
                      turizma i telekomunikacija pod brojem <strong>952</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FaMapMarkerAlt className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Lokacija</h3>
                    <p className="text-muted-foreground">
                      Ul. Karađorđeva br. 123
                      <br />
                      (u pasažu)
                      <br />
                      Valjevo, Srbija
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FaPhone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                    <p className="text-muted-foreground">
                      014/293-923
                      <br />
                      014/293-920
                      <br />
                      +381 63 822 6026
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FaEnvelope className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:bonafidesnova@gmail.com"
                        className="hover:text-primary transition-colors"
                      >
                        bonafidesnova@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-md border border-border">
              <h2 className="text-3xl font-bold mb-6">Naša Lokacija</h2>
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
          </div>
        </div>
      </section>
    </main>
  );
}
