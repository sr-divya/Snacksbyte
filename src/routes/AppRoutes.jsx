import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import Checkout from "../pages/Checkout";
import OrderSuccess from "../pages/OrderSuccess";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<Products />} />
      <Route path="/order-success" element={<OrderSuccess />} />
    </Routes>
  );
}

export default AppRoutes;