import dark_chocolate from "../assets/images/dark-chocolate.jpg";

function FeaturedProduct() {
  return (
    <section className="bg-[#f8f3ed] py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row">
        <div className="flex-1">
          <img
            src={dark_chocolate}
            alt="Featured Product"
            className="mx-auto h-[450px] w-[450px] object-contain"
          />
        </div>

        <div className="flex-1">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Best Seller
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#3d1f17]">
            Dark Chocolate Protein Bites
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Packed with natural ingredients, protein, and rich chocolate
            flavor. Perfect for work, workouts, and everyday snacking.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-3xl font-bold text-[#6f2d1f]">
              ₹299
            </span>

            <span className="text-lg text-gray-400 line-through">
              ₹399
            </span>
          </div>

          <button className="mt-8 rounded-full bg-[#6f2d1f] px-8 py-4 font-semibold text-white hover:bg-[#5b2418]">
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProduct;