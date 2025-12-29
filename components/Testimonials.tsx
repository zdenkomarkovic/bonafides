import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Marko Petrović",
    role: "Kupac stana",
    image: "https://i.pravatar.cc/150?img=12",
    content: "Profesionalan pristup i brza prodaja. Preporučujem svima koji traže pouzdanu agenciju za nekretnine.",
    rating: 5
  },
  {
    id: 2,
    name: "Ana Jovanović",
    role: "Vlasnik kuće",
    content: "Zahvaljujući Bonafides timu, prodala sam kuću po odličnoj ceni. Sve pohvale za transparentnost i posvećenost.",
    rating: 5
  },
  {
    id: 3,
    name: "Stefan Nikolić",
    role: "Investitor",
    content: "Odlično iskustvo! Pomogli su mi da pronađem savršenu nekretninu za investiciju. Stručni savet i podrška tokom celog procesa.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Šta Klijenti Kažu</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Zadovoljstvo naših klijenata je naš najveći uspeh
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
