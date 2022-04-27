import { useAuth } from "contexts/auth/authState";
import useCart from "hooks/useCart";
import useWishlist from "hooks/useWishlist";
import { useNavigate } from "react-router-dom";
import { addToCart } from "services/cart";
import { addToWishlist, removeFromWishlist } from "services/wishlist/indext";
import { checkDuplicate, isProductInWishlist } from "utils";

export default function Product({ productData }: any) {
  const { id, name, image, price, inStock, ratings, fastDelivery } =
    productData;
  const {
    data: { cartData },
    dispatchCart,
  } = useCart();
  const {
    data: { wishlistData },
    wishlistDispatch,
  } = useWishlist();
  const {
    authState: { isAuthenticated },
  } = useAuth();
  const navigate = useNavigate();

  const handleWishlist = (prodId: any) =>
    !isProductInWishlist(prodId, wishlistData)
      ? addToWishlist(isAuthenticated, productData, wishlistDispatch, navigate)
      : removeFromWishlist(isAuthenticated, prodId, wishlistDispatch, navigate);

  return (
    <div className="card card-v floating-shadow">
      <div className="card-body flex justify-center">
        <div className="card-header flex justify-between">
          <div
            className={`card-badge ${
              !inStock ? "badge-visible" : "badge-hidden"
            }`}
          >
            OUT OF STOCK
          </div>
          <button
            type="button"
            className="wishlist-container wishlist-btn"
            onClick={() => handleWishlist(id)}
          >
            <i
              className={`fa-heart ${
                isProductInWishlist(id, wishlistData) ? "fas" : "fal"
              }`}
            />
          </button>
          <span className="hidden">
            <i className="fal fa-times-circle" />
          </span>
        </div>
        <div className="card-overlay-text-div hidden">
          <div className="overlay-text">Out of stock</div>
        </div>
        <div className="card-img-div">
          <img src={image} className="card-img-new" alt={name} />
        </div>
      </div>
      <div className="card-footer">
        <div className="card-text product-name">{name}</div>
        <div className="flex items-center justify-center">
          <span className="card-text">
            <span className="rating-container">
              {ratings} <i className="fas fa-star" key={Math.random()} />
            </span>
          </span>
          <span className="card-text">
            {fastDelivery ? (
              <span className="fast-delivery-badge">Fast Delivery</span>
            ) : (
              <span className="normal-delivery">Normal Delivery</span>
            )}
          </span>
        </div>
        <div className="card-pricing"> ₹ {price}</div>
        {inStock ? (
          <button
            type="button"
            className="card-action-btn"
            onClick={() =>
              addToCart(isAuthenticated, productData, dispatchCart, navigate)
            }
            disabled={checkDuplicate(id, cartData)}
          >
            {!checkDuplicate(id, cartData) ? (
              <>
                <i className="far fa-shopping-cart mr-2" /> ADD TO CART
              </>
            ) : (
              "ADDED IN CART"
            )}
          </button>
        ) : (
          <button type="button" className="card-action-btn btn-disabled">
            <i className="far fa-shopping-cart" /> &nbsp; ADD TO CART
          </button>
        )}
      </div>
    </div>
  );
}
