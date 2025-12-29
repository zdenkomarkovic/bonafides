import { FaAward, FaUsers, FaGavel, FaHandshake } from 'react-icons/fa'

const features = [
  {
    icon: FaAward,
    title: 'Licencirani Agenti',
    description: 'Profesionalno obučeni i licencirani stručnjaci sa dugogodišnjim iskustvom',
  },
  {
    icon: FaUsers,
    title: 'Tim Pravnika',
    description: 'Sopstveni pravnici specijalizovani za imovinsko pravne poslove',
  },
  {
    icon: FaGavel,
    title: 'Pravna Sigurnost',
    description: 'Potpuna pravna podrška i izrada svih potrebnih dokumenata',
  },
  {
    icon: FaHandshake,
    title: 'Poverenje',
    description: 'Upisani u Registar posrednika pri Ministarstvu trgovine pod brojem 952',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Zašto Bona Fides?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Profesionalnost, iskustvo i posvećenost svakom klijentu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-block bg-primary/10 p-6 rounded-full mb-4">
                <feature.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
