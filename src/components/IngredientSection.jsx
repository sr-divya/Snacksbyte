function IngredientSection() {
  return (
    <section className="bg-[#6f2d1f] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Crafted With Premium Ingredients
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-200">
            Every snack is made using carefully selected ingredients
            to deliver both nutrition and flavor.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white/10 p-8">
            <h3 className="mb-4 text-2xl font-semibold">
              Dark Chocolate
            </h3>

            <p>
              Rich cocoa flavor with natural antioxidants.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-8">
            <h3 className="mb-4 text-2xl font-semibold">
              Almonds
            </h3>

            <p>
              Loaded with protein, healthy fats, and fiber.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-8">
            <h3 className="mb-4 text-2xl font-semibold">
              Dried Berries
            </h3>

            <p>
              Naturally sweet and packed with nutrients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IngredientSection;