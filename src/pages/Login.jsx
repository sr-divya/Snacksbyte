import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f3ed] px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <h2 className="mb-2 text-center text-4xl font-bold text-[#3d1f17]">
          Welcome Back
        </h2>

        <p className="mb-8 text-center text-gray-500">
          Sign in to continue shopping
        </p>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#6f2d1f]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#6f2d1f]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#6f2d1f] py-3 font-semibold text-white hover:bg-[#5b2418]"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-[#6f2d1f]"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;