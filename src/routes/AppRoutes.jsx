import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import Checkout from "../pages/Checkout";
import OrderSuccess from "../pages/OrderSuccess";
import Contact from "../pages/Contact";
// import Flavors from "../pages/Flavors";
import Flavor from "../pages/Flavors";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
       <Route path="/flavors" element={<Flavor />} />
      <Route path="/order-success" element={<OrderSuccess />} />
    </Routes>
  );
}

export default AppRoutes;