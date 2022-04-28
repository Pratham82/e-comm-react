import { Link, NavLink, useNavigate } from "react-router-dom";
import "css/header.css";
import { useRef, useState, useCallback } from "react";
import useProduct from "hooks/useProducts";
import { FILTER_BY_QUERY } from "types/product";
import useCart from "hooks/useCart";
import useWishlist from "hooks/useWishlist";
import { isEntityEmpty } from "utils";
import useAuth from "hooks/useAuth";
import { LOG_OUT } from "types/auth";
import toast from "react-hot-toast";
import useOnClickOutside from "hooks/useOnClickOutside";
import { EMPTY_CART, EMPTY_WISHLIST } from "types/cart";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const { dispatch } = useProduct();
  const dropdownRef = useRef<any>(null);
  const {
    data: { cartData },
    dispatchCart,
  } = useCart();
  const {
    data: { wishlistData },
    wishlistDispatch,
  } = useWishlist();
  const {
    authState: { isAuthenticated, user },
    dispatchAuth,
  } = useAuth();
  const navigate = useNavigate();
  const cartItems = isEntityEmpty(cartData);
  const wishlistItems = isEntityEmpty(wishlistData);
  const handleLogout = () => {
    dispatchAuth({
      type: LOG_OUT,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatchCart({ type: EMPTY_CART });
    wishlistDispatch({ type: EMPTY_WISHLIST });
    navigate("/");
    toast.success("Logged out successfully");
  };

  const onClickOutside = useCallback(() => setDropdown(false), []);

  useOnClickOutside(dropdownRef, onClickOutside);

  return (
    <nav className="flex justify-around items-center navbar">
      <div className="flex items-center branding">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <h4 className="h4">SNKR Town</h4>
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <h6 className="h6">Shop All</h6>
        </NavLink>
      </div>

      <div className="searchDiv">
        <input
          type="text"
          className="searchInput"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            dispatch({
              type: FILTER_BY_QUERY,
              payload: e.target.value,
            });
          }}
          placeholder="Search for products..."
        />
        <i className="fal fa-search searchIcon" />
      </div>

      <ul className="flex items-center pages">
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active-icon pb-2" : "")}
        >
          {cartItems && <span className="hovering-count">{cartItems}</span>}
          <li>
            <i className="far fa-shopping-bag" />
          </li>
          <li className="pages-title">Cart</li>
        </NavLink>
        <NavLink
          to="wishlist"
          className={({ isActive }) => (isActive ? "active-icon pb-2" : "")}
        >
          {wishlistItems && (
            <span className="hovering-count">{wishlistItems}</span>
          )}
          <li>
            <i className="far fa-heart" />
          </li>
          <li className="pages-title">Wishlist</li>
        </NavLink>
        {!isAuthenticated ? (
          <Link to="/login">Login</Link>
        ) : (
          <li>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => setDropdown(!dropdown)}
            >
              <i className="fas fa-user pl-8" />
              <i className="fas fa-sort-down pl-10" />
            </button>
            {dropdown && (
              <div className="profile-dropdown" ref={dropdownRef}>
                {isAuthenticated ? (
                  <>
                    <p className="pb-8">
                      {user && (
                        <>
                          {user.firstName} {user.lastName}
                        </>
                      )}
                    </p>
                    <button
                      type="button"
                      className="profile-action"
                      onClick={handleLogout}
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <Link to="/login">
                    <button type="button" className="profile-action">
                      <i className="far fa-sign-out pr-10 " />
                      Log In
                    </button>
                  </Link>
                )}
              </div>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
}
