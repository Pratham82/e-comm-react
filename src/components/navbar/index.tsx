import { NavLink } from "react-router-dom";
import "css/header.css";
import { useState } from "react";
import useProduct from "hooks/useProducts";
import { FILTER_BY_QUERY } from "types/product";

export default function Navbar() {
  const { dispatch } = useProduct();
  const [query, setQuery] = useState("");

  return (
    <nav className="flex justify-around items-center navbar">
      <div className="flex items-center branding">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <h4 className="h4">Min-shop</h4>
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
          className={({ isActive }) =>
            isActive ? "active-icon-link flex flex-col items-center" : ""
          }
        >
          <li>
            <i className="far fa-shopping-bag" />
          </li>
          <li className="pages-title">Cart</li>
        </NavLink>
        <NavLink
          to="wishlist"
          className={({ isActive }) =>
            isActive ? "active-icon-link flex flex-col items-center" : ""
          }
        >
          <li>
            <i className="far fa-heart" />
          </li>
          <li className="pages-title">Wishlist</li>
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "active-icon-link flex flex-col items-center" : ""
          }
        >
          <li>
            <i className="far fa-user" />
          </li>
          <li className="pages-title">Profile</li>
        </NavLink>
      </ul>
    </nav>
  );
}
