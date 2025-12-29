import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import WhyChooseUs from "@/components/WhyChooseUs";
import CategoriesSection from "@/components/CategoriesSection";
import Testimonials from "@/components/Testimonials";
import Statistics from "@/components/Statistics";
import { getCategories } from "@/sanity/lib/api";

export const revalidate = 0 // Disable caching for fresh data

export default async function Home() {
  const categories = await getCategories();

  return (
    <main>
      <Hero />
      <CategoriesSection categories={categories} />
      <FeaturedProperties />
      <Statistics />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
