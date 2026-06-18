import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Heart } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";


function ProductCard({ product }) {
    const { addToCart } = useCart();

    const {
        wishlist,
        addToWishlist,
        removeFromWishlist,
    } = useWishlist();

    const isWishlisted = wishlist.some(
        (item) => item.id === product.id
    );

    const handleWishlist = () => {
        if (isWishlisted) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <div className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative">

                <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover"
                />
                <button
                    onClick={handleWishlist}
                    className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md transition hover:scale-110"
                >
                    <Heart
                        size={20}
                        className={
                            isWishlisted
                                ? "fill-red-500 text-red-500"
                                : "text-gray-500"
                        }
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

                    <button
                        onClick={() => addToCart(product)}
                        className="rounded-full bg-[#6f2d1f] px-4 py-2 text-white transition hover:bg-[#5b2418]"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;