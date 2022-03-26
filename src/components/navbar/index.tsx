import { NavLink } from "react-router-dom";
import "css/header.css";

export default function Navbar() {
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
          className="searchInput"
          type="text"
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
          // className="flex flex-col items-center"
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
