import { useState } from "react";
import { Heart } from "lucide-react";


function ProductCard({ product }) {
    const [isWishlisted, setIsWishlisted] = useState(false);
    return (
        <div className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative">

                <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover"
                />

                <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md transition hover:scale-110"
                >
                    <Heart
                        size={20}
                        className={`${isWishlisted
                                ? "fill-red-500 text-red-500"
                                : "text-gray-500"
                            }`}
                    />
                </button>
            </div>

            <div className="p-5">
                <h3 className="text-xl font-semibold text-[#3d1f17]">
                    {product.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                    {product.category}
                </p>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-[#6f2d1f]">
                        ₹{product.price}
                    </span>

                    <button className="rounded-full bg-[#6f2d1f] px-4 py-2 text-white">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;