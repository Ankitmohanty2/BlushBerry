import Hero from "@/components/layout/Hero";
import CategorySection from "@/components/home/CategorySection";
import ProductGrid from "@/components/product/ProductGrid";

export const metadata = {
  title: "Home | BlushBerry",
  description: "Discover our premium collection of effortless beauty and timeless elegance products.",
};

export default function Home() {
  return (
    <main>
      <Hero />
       <CategorySection />
      <ProductGrid/> 
    </main>
  );
}