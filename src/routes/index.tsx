import { Routes, Route } from "react-router-dom";
import { Home, Login, Cart, Products, WishList } from "pages";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/wishlist" element={<WishList />} />
      {/* <Route path="/product_detail" element={<ProductDetail />} /> */}
      {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
