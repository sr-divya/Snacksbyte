import { Link } from "react-router-dom";
import { Search, ShoppingCart, Heart, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#6f2d1f] text-white shadow-md">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 text-xs tracking-wide">
          Free shipping on orders above ₹499
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight"
        >
          CrunchyBYTE
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="transition duration-200 hover:text-yellow-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <button className="transition hover:text-yellow-300">
            <Search size={20} />
          </button>

          <Link
            to="/wishlist"
            className="transition hover:text-yellow-300"
          >
            <Heart size={20} />
          </Link>

          <Link
            to="/cart"
            className="transition hover:text-yellow-300"
          >
            <ShoppingCart size={20} />
          </Link>

          <Link
            to="/login"
            className="rounded-full border border-white px-5 py-2 text-sm font-medium transition hover:bg-white hover:text-[#6f2d1f]"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-yellow-300"
          >
            Sign Up
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#6f2d1f] lg:hidden">
          <ul className="space-y-4 px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <div className="flex gap-3 pt-4">
              <Link
                to="/login"
                className="flex-1 rounded-lg border border-white px-4 py-2 text-center"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="flex-1 rounded-lg bg-yellow-400 px-4 py-2 text-center font-medium text-black"
              >
                Sign Up
              </Link>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;