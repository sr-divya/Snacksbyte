import { Link } from "react-router-dom";
import { Search, ShoppingCart, Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/products" },
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
            className="relative transition hover:text-yellow-300"
          >
            <Heart size={22} />

            {wishlist.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className="relative transition hover:text-yellow-300"
          >
            <ShoppingCart size={22} />

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {totalItems}
              </span>
            )}
          </Link>

          <Link
            to="/products"
            className="rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-yellow-300"
          >
            Shop Now
          </Link>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <Link
            to="/wishlist"
            className="relative"
          >
            <Heart size={22} />

            {wishlist.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className="relative"
          >
            <ShoppingCart size={22} />

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
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


          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;