# Bonafides Nekretnine - Sanity CMS Setup

Ovaj dokument objašnjava kako da podesite Sanity CMS za vaš sajt za nekretnine.

## Korak 1: Kreirajte Sanity projekat

1. Posetite [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Registrujte se ili se prijavite
3. Kliknite "Create project"
4. Izaberite ime projekta (npr. "bonafides-nekretnine")
5. Kopirajte **Project ID** koji će vam biti prikazan

## Korak 2: Kreirajte Dataset

1. U vašem projektu, idite na "Datasets"
2. Kreirajte dataset pod nazivom **"production"**
3. Podesite ga kao javni dataset (public)

## Korak 3: Generišite API Token

1. U vašem Sanity projektu, idite na "API" sekciju
2. Idite na "Tokens"
3. Kliknite "Add API token"
4. Dajte mu ime (npr. "Website Token")
5. Izaberite permisije: **Editor** (omogućava čitanje i pisanje)
6. Kopirajte token - čuvaćete ga samo jednom!

## Korak 4: Podesite Environment Variables

1. Kopirajte `.env.local.example` fajl i kreirajte `.env.local`:

```bash
cp .env.local.example .env.local
```

2. Otvorite `.env.local` i popunite sa vašim podacima:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=vaš_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=vaš_api_token
```

## Korak 5: Pokrenite Development Server

```bash
npm run dev
```

Sajt će biti dostupan na: [http://localhost:3000](http://localhost:3000)

## Korak 6: Pristupite Sanity Studio

1. Otvorite browser i idite na: [http://localhost:3000/studio](http://localhost:3000/studio)
2. Prijavite se sa vašim Sanity nalogom
3. Videćete Sanity Studio interfejs gde možete upravljati:
   - **Kategorijama** (Stanovi, Kuće, Poslovni prostori, Placevi, itd.)
   - **Nekretninama** (sve vaše nekretnine)

## Kategorije koje treba kreirati

Kreirajte sledeće kategorije u Sanity Studio:

1. **Stanovi**
   - Slug: `stanovi`
   - Opis: "Jednosobni, dvosobni i višesobni stanovi"

2. **Kuće**
   - Slug: `kuce`
   - Opis: "Porodične kuće i vikendice"

3. **Poslovni Prostori**
   - Slug: `poslovni-prostori`
   - Opis: "Kancelarije, lokali i magacinski prostori"

4. **Placevi**
   - Slug: `placevi`
   - Opis: "Građevinski i ostali placevi"

5. **Seoska Imanja**
   - Slug: `seoska-imanja`
   - Opis: "Seoske kuće sa imanjima"

## Dodavanje Nekretnina

1. U Sanity Studio, kliknite na "Nekretnina"
2. Kliknite "+ Create" za kreiranje nove nekretnine
3. Popunite sva polja:
   - Naslov
   - URL Slug (generiše se automatski)
   - Kategorija (izaberite jednu od gore kreiranih)
   - Cena (u EUR)
   - Lokacija (npr. "Valjevo, Centar")
   - Površina (u m²)
   - Broj soba
   - Broj kupatila
   - Sprat
   - Godina izgradnje
   - Opis (rich text editor)
   - Slike (minimalno 1 slika)
   - Dodatne karakteristike (parking, garaža, lift, balkon, terasa, bašta, namešten)
   - Status (dostupno, rezervisano, prodato)
   - Istaknuto (da/ne) - označite ako želite da se nekretnina prikaže na početnoj strani

4. Kliknite "Publish" da sačuvate

## Deployment na Vercel

Kada budete spremni da postavite sajt online:

1. Push kod na GitHub
2. Povežite repository sa Vercel
3. U Vercel environment variables, dodajte iste vrednosti kao u `.env.local`
4. Deploy!

## Napomene

- Sve promene u Sanity Studio se automatski reflektuju na sajtu
- Slike se automatski optimizuju preko Sanity CDN-a
- Za podršku, kontaktirajte tim koji je razvio sajt

## Korisni Linkovi

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Studio](http://localhost:3000/studio) (kada je development server pokrenut)
