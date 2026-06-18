import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#f8f3ed] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold text-[#3d1f17]">
              Our Snacks
            </h1>

            <p className="mt-4 text-gray-600">
              Discover your favorite healthy treats.
            </p>
          </div>

          <div className="mb-8">
            <SearchBar
              search={search}
              setSearch={setSearch}
            />
          </div>

          <div className="mb-10">
            <CategoryFilter
              category={category}
              setCategory={setCategory}
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Products;