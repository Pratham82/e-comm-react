import { useAuth } from "contexts/auth/authState";
import useCart from "hooks/useCart";
import useWishlist from "hooks/useWishlist";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeFromCart, updateProductQuantity } from "services/cart";
import { addToWishlist, removeFromWishlist } from "services/wishlist/indext";
import {
  DECREMENT_PRODUCT_QUANTITY,
  INCREMENT_PRODUCT_QUANTITY,
} from "types/cart";
import { isProductInWishlist } from "utils";

export default function ProductInCart({ productData }: any) {
  const { id, name, price, qty, image } = productData;
  const { dispatchCart } = useCart();
  const {
    data: { wishlistData },
    wishlistDispatch,
  } = useWishlist();
  const {
    authState: { isAuthenticated },
  } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState({ type: "", value: false });
  const handleWishlist = (prodId: any) =>
    !isProductInWishlist(prodId, wishlistData)
      ? addToWishlist(isAuthenticated, productData, wishlistDispatch, navigate)
      : removeFromWishlist(isAuthenticated, prodId, wishlistDispatch, navigate);

  return (
    <div className="card card-h flex floating-shadow m-10">
      <div className="card-body flex justify-center">
        <div className="card-header flex justify-between hidden">
          <div className="card-badge">ON SALE</div>
          <span>
            <i className="fal fa-heart" />
          </span>
          <span className="hidden">
            <i className="fal fa-times-circle" />
          </span>
        </div>
        <div className="card-overlay-text-div hidden">
          <div className="overlay-text">Out of stock</div>
        </div>
        <div className="card-img-div">
          <img src={image} className="img-h" alt="" />
        </div>
      </div>
      <div className="card-footer card-footer-h">
        <div className="flex items-center">
          <div className="card-text pr-10">{name}</div>
        </div>
        <div className="h6">
          <span className="pr-16">
            <span className="pr-6">Quantity</span>
            <button
              type="button"
              className="qty-action"
              onClick={() =>
                updateProductQuantity(
                  id,
                  INCREMENT_PRODUCT_QUANTITY,
                  dispatchCart,
                  setLoading,
                )
              }
            >
              <i className="fas fa-plus-circle" />
            </button>
            <span className="pr-10 pl-10">{qty}</span>
            <button
              type="button"
              className="qty-action"
              onClick={() =>
                updateProductQuantity(
                  id,
                  DECREMENT_PRODUCT_QUANTITY,
                  dispatchCart,
                  setLoading,
                )
              }
              disabled={qty === 1}
            >
              <i className="fas fa-minus-circle" />
            </button>
          </span>
        </div>
        <div className="card-pricing">₹ {price}</div>
        <button
          className="card-action-btn btn-h"
          type="button"
          onClick={() => handleWishlist(id)}
        >
          {isProductInWishlist(id, wishlistData) ? (
            <>
              <i className="fa-heart far  pr-6" />
              REMOVE FROM WISHLIST
            </>
          ) : (
            <>
              <i className="fa-heart fas  pr-6" />
              ADD TO WISHLIST
            </>
          )}
        </button>
        <button
          className="card-action-btn-outline"
          type="button"
          onClick={() => removeFromCart(id, dispatchCart, setLoading)}
        >
          <i className="fas fa-times pr-6" />
          REMOVE FROM CART
        </button>
      </div>
      {loading.value && (
        <div className="loader-styles flex justify-center items-center">
          <div className="h2 text-light">
            {loading.type === "remove"
              ? "Removing Product..."
              : "Updating quantity.."}
          </div>
        </div>
      )}
    </div>
  );
}
