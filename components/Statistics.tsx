import { Home, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Home,
    value: "500+",
    label: "Prodatih Nekretnina",
  },
  {
    id: 2,
    icon: Users,
    value: "1200+",
    label: "Zadovoljnih Klijenata",
  },
  {
    id: 3,
    icon: Award,
    value: "25+",
    label: "Godina Iskustva",
  },
  {
    id: 4,
    icon: TrendingUp,
    value: "98%",
    label: "Stopa Uspeha",
  },
];

export default function Statistics() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 opacity-90" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
