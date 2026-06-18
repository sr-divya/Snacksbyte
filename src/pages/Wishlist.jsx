import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  return (
    <div className="mx-auto max-w-7xl p-8">
      <h1 className="mb-8 text-4xl font-bold">
        Wishlist
      </h1>

      {wishlist.map((item) => (
        <div
          key={item.id}
          className="mb-4 flex items-center justify-between rounded-xl border p-4"
        >
          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                addToCart(item);
                removeFromWishlist(item.id);
              }}
              className="rounded bg-green-600 px-4 py-2 text-white"
            >
              Move To Cart
            </button>

            <button
              onClick={() =>
                removeFromWishlist(item.id)
              }
              className="rounded bg-red-600 px-4 py-2 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;