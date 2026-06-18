function CategoryFilter({ category, setCategory }) {
  const categories = [
    "All",
    "Chocolate",
    "Fruit",
    "Nuts",
    "Protein",
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`rounded-full px-5 py-2 transition ${
            category === item
              ? "bg-[#6f2d1f] text-white"
              : "bg-gray-100"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;