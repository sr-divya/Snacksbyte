function FlavourCard({ image, title }) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold text-[#3d1f17]">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default FlavourCard;