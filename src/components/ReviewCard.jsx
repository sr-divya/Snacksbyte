function ReviewCard({ name, role, review, image }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-[#3d1f17]">
            {name}
          </h4>

          <p className="text-sm text-gray-500">
            {role}
          </p>
        </div>
      </div>

      <div className="mb-4 text-yellow-500">
        ★★★★★
      </div>

      <p className="leading-relaxed text-gray-600">
        {review}
      </p>
    </div>
  );
}

export default ReviewCard;