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
    const [brand, setBrand] = useState("All");
    const [priceRange, setPriceRange] = useState("All");
    const [sortBy, setSortBy] = useState("");


    let filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            product.category === category;

        const matchesBrand =
            brand === "All" ||
            product.brand === brand;

        let matchesPrice = true;

        if (priceRange === "0-250") {
            matchesPrice = product.price <= 250;
        }

        if (priceRange === "251-350") {
            matchesPrice =
                product.price > 250 &&
                product.price <= 350;
        }

        if (priceRange === "351+") {
            matchesPrice = product.price > 350;
        }

        return (
            matchesSearch &&
            matchesCategory &&
            matchesBrand &&
            matchesPrice
        );
    });

    if (sortBy === "lowToHigh") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "highToLow") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

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

                    <div className="grid gap-8 lg:grid-cols-4">

                        <div className="h-fit rounded-2xl bg-white p-6 shadow-md">

                            <h2 className="mb-6 text-xl font-bold">
                                Filters
                            </h2>

                            <div className="mb-5">
                                <label className="mb-2 block font-medium">
                                    Brand
                                </label>

                                <select
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                    className="w-full rounded-lg border p-3"
                                >
                                    <option value="All">All Brands</option>
                                    <option value="Snackify">Snackify</option>
                                    <option value="NatureBites">NatureBites</option>
                                    <option value="HealthyMunch">HealthyMunch</option>
                                </select>
                            </div>

                            <div className="mb-5">
                                <label className="mb-2 block font-medium">
                                    Price Range
                                </label>

                                <select
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(e.target.value)}
                                    className="w-full rounded-lg border p-3"
                                >
                                    <option value="All">All Prices</option>
                                    <option value="0-250">Under ₹250</option>
                                    <option value="251-350">₹251 - ₹350</option>
                                    <option value="351+">Above ₹350</option>
                                </select>
                            </div>

                            <div className="mb-5">
                                <label className="mb-2 block font-medium">
                                    Sort By
                                </label>

                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full rounded-lg border p-3"
                                >
                                    <option value="">Default</option>
                                    <option value="lowToHigh">
                                        Price: Low to High
                                    </option>
                                    <option value="highToLow">
                                        Price: High to Low
                                    </option>
                                </select>
                            </div>

                            <button
                                onClick={() => {
                                    setCategory("All");
                                    setBrand("All");
                                    setPriceRange("All");
                                    setSortBy("");
                                    setSearch("");
                                }}
                                className="w-full rounded-lg bg-red-500 py-3 text-white"
                            >
                                Clear Filters
                            </button>

                        </div>

                        <div className="lg:col-span-3">
                            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                                {filteredProducts.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Products;