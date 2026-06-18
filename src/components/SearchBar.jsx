function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search snacks..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#6f2d1f]"
    />
  );
}

export default SearchBar;