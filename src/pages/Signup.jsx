import { Link } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Signup() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const response = registerUser({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    alert(response.message);

    if (response.success) {
      navigate("/login");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f3ed] px-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-lg">
        <h2 className="mb-2 text-center text-4xl font-bold text-[#3d1f17]">
          Create Account
        </h2>

        <p className="mb-8 text-center text-gray-500">
          Join Snackify and discover delicious snacks
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#6f2d1f]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#6f2d1f]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#6f2d1f]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#6f2d1f] py-3 font-semibold text-white hover:bg-[#5b2418]"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-[#6f2d1f]"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;