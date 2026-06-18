import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";

function OrderSuccess() {
    <Confetti />
    return (

        <div className="flex min-h-screen items-center justify-center bg-[#f8f3ed] px-4">
            <div className="w-full max-w-2xl rounded-3xl bg-white p-10 text-center shadow-xl">
                <div className="mb-6 flex justify-center">
                    <CheckCircle
                        size={90}
                        className="text-green-500"
                    />
                </div>

                <h1 className="mb-4 text-5xl font-bold text-[#3d1f17]">
                    Thank You!
                </h1>

                <p className="mb-3 text-xl text-gray-700">
                    Your order has been placed successfully.
                </p>

                <p className="mb-8 text-gray-500">
                    We're preparing your delicious snacks and
                    they'll be on their way soon.
                </p>

                <div className="mb-8 rounded-2xl bg-[#f8f3ed] p-6">
                    <p className="text-lg font-medium text-[#6f2d1f]">
                        Estimated Delivery
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                        2 - 4 Business Days
                    </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Link
                        to="/products"
                        className="rounded-xl bg-[#6f2d1f] px-6 py-3 text-white transition hover:bg-[#5b2418]"
                    >
                        Continue Shopping
                    </Link>

                    <Link
                        to="/"
                        className="rounded-xl border border-[#6f2d1f] px-6 py-3 text-[#6f2d1f]"
                    >
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OrderSuccess;