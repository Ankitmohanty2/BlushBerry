import ProductList from "@/components/shop/ProductList";
import ClientOnly from "@/components/shared/ClientOnly";

export const metadata = {
  title: "Shop | BlushBerry",
  description: "Browse and filter our entire collection of beauty products.",
};

export default async function ShopPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  return (
    <main>
      <ClientOnly>
        <ProductList initialSearch={resolvedSearchParams.search || ""} initialCategory={
    resolvedSearchParams.category || "All"
  }/>
      </ClientOnly>
    </main>
  );
}
