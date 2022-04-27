import { Routes, Route } from "react-router-dom";
import { Home, Login, Cart, Products, WishList } from "pages";
import ProtectedRoute from "components/protected-route";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
