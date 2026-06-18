import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
    const { cart, removeFromCart } = useCart();

    const total = cart.reduce(
        (acc, item) =>
            acc + item.price * item.quantity,
        0
    );

    return (
        <section className="min-h-screen bg-[#f8f3ed] py-16">
            <div className="mx-auto max-w-6xl px-6">
                <h1 className="mb-10 text-4xl font-bold text-[#3d1f17]">
                    Shopping Cart
                </h1>

                {cart.length === 0 ? (
                    <div className="rounded-2xl bg-white p-12 text-center shadow">
                        <h2 className="text-2xl font-semibold">
                            Your cart is empty
                        </h2>
                    </div>
                ) : (
                    <>
                        <div className="space-y-5">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-24 w-24 rounded-xl object-cover"
                                    />

                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold">
                                            {item.name}
                                        </h3>

                                        <p className="text-gray-500">
                                            {item.category}
                                        </p>

                                        <p className="mt-2">
                                            Quantity: {item.quantity}
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <p className="mb-3 text-lg font-bold text-[#6f2d1f]">
                                            ₹
                                            {item.price *
                                                item.quantity}
                                        </p>

                                        <button
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                            className="rounded-lg bg-red-500 px-4 py-2 text-white"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 rounded-2xl bg-white p-6 shadow">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold">
                                    Total
                                </h2>

                                <span className="text-3xl font-bold text-[#6f2d1f]">
                                    ₹{total}
                                </span>
                            </div>

                            <Link
                                to="/checkout"
                                className="mt-6 block w-full rounded-xl bg-[#6f2d1f] py-3 text-center text-white"
                            >
                                Proceed to Checkout
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default Cart;