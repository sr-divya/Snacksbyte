function PromoGrid() {
  const promos = [
    {
      title: "100% Natural",
      text: "Made with clean ingredients.",
    },
    {
      title: "Protein Packed",
      text: "Energy that lasts longer.",
    },
    {
      title: "No Preservatives",
      text: "Fresh and healthy every bite.",
    },
    {
      title: "Fast Delivery",
      text: "Delivered right to your doorstep.",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
        {promos.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl bg-[#f8f3ed] p-8 text-center shadow-sm"
          >
            <h3 className="mb-3 text-2xl font-bold text-[#3d1f17]">
              {item.title}
            </h3>

            <p className="text-gray-600">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PromoGrid;