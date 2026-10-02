# Bona Fides Nekretnine Nova - Website

Profesionalni sajt za agenciju za nekretnine Bona Fides Nekretnine Nova u Valjevu.

## Tehnologije

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Sanity CMS** - Content management
- **Framer Motion** - Animations
- **React Hook Form** - Forms
- **Radix UI** - UI components

## Funkcionalnosti

- 🏠 **Home stranica** - Hero sekcija, istaknute nekretnine, usluge
- 🔍 **Pretraga nekretnina** - Filtriranje po kategoriji, ceni, površini, broju soba
- 📋 **Detalji nekretnina** - Kompletne informacije, galerija slika, kontakt forma
- 📱 **Responsive design** - Prilagođeno za sve uređaje
- 🎨 **Purple theme** - Brendirane boje prema Bonafides identitetu
- 📝 **Sanity CMS** - Jednostavno upravljanje sadržajem
- 🖼️ **Image optimization** - Automatski optimizovane slike

## Struktura Projekta

```
bonafides/
├── app/                      # Next.js app directory
│   ├── nekretnine/          # Properties listing & detail pages
│   ├── o-nama/              # About page
│   ├── kontakt/             # Contact page
│   └── studio/              # Sanity Studio
├── components/              # React components
│   ├── PropertyCard.tsx
│   ├── PropertyGrid.tsx
│   ├── PropertyFilter.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   └── ...
├── sanity/                  # Sanity configuration
│   ├── schemas/             # Content schemas
│   │   ├── property.ts      # Property schema
│   │   └── category.ts      # Category schema
│   └── lib/                 # Sanity utilities
│       ├── client.ts
│       ├── api.ts
│       └── queries.ts
└── types/                   # TypeScript types
    └── property.ts
```

## Quick Start

### 1. Instalacija Dependencies

```bash
npm install
```

### 2. Sanity CMS Setup

**VAŽNO:** Pre nego što pokrenete sajt, morate podesiti Sanity CMS. Pratite detaljna uputstva u fajlu:

📖 **[SANITY_SETUP.md](./SANITY_SETUP.md)**

### 3. Environment Variables

Kreirajte `.env.local` fajl:

```bash
cp .env.local.example .env.local
```

Popunite sa podacima iz Sanity projekta:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token
```

### 4. Pokretanje Development Servera

```bash
npm run dev
```

Sajt će biti dostupan na [http://localhost:3000](http://localhost:3000)

### 5. Pristup Sanity Studio

Otvorite [http://localhost:3000/studio](http://localhost:3000/studio) za upravljanje sadržajem.

## Sanity Schemas

### Kategorije

Sve kategorije nekretnina (Stanovi, Kuće, Poslovni prostori, Placevi, itd.)

### Nekretnine

Kompletni podaci o nekretninama:
- Osnovni podaci (naslov, cena, lokacija, površina)
- Slike
- Dodatne karakteristike (parking, garaža, lift, balkon, terasa, bašta, namešten)
- Status (dostupno, rezervisano, prodato)
- Istaknuto (za prikaz na početnoj strani)

## Deployment

### Vercel (Preporučeno)

1. Push kod na GitHub
2. Povežite repository sa Vercel
3. Dodajte environment variables u Vercel
4. Deploy!

### Druge platformove

Možete koristiti bilo koju platformu koja podržava Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted

## Kontakt Informacije

- **Email:** snezanaa50@gmail.com
- **Telefon:** 014/293-923, 014/293-920
- **Mob/Viber/WhatsApp:** +381 63 822 6026
- **Adresa:** Ul. Čika Ljubina br. 15, Valjevo
- **Registarski broj:** 952

## License

© 2025 Bona Fides Nekretnine Nova. Sva prava zadržana.
