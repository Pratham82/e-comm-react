import "css/cart.css";
import img1 from "assets/images/product_listing/product_1.jpg";

export default function Cart() {
  return (
    <section className="flex flex-col items-center cart-section">
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
            <img src={img1} className="card-img img-h" alt="" />
          </div>
        </div>
        <div className="card-footer card-footer-h">
          <div className="flex items-center">
            <div className="card-text pr-10">
              Nike React Infinity Flyknit Running Shoes
            </div>
            <div className="text-right">
              <i className="far fa-times" />
            </div>
          </div>
          <div className="card-pricing">$900</div>
          <button className="card-action-btn btn-h" type="button">
            <i className="far fa-shopping-cart" /> &nbsp; ADD TO CART
          </button>
          <button className="card-action-btn-outline" type="button">
            <i className="far fa-bolt" /> &nbsp; BUY NOW
          </button>
        </div>
      </div>
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
            <img src={img1} className="card-img img-h" alt="" />
          </div>
        </div>
        <div className="card-footer card-footer-h">
          <div className="flex items-center">
            <div className="card-text pr-10">
              Nike React Infinity Flyknit Running Shoes
            </div>
            <div className="text-right">
              <i className="far fa-times" />
            </div>
          </div>
          <div className="card-pricing">$900</div>
          <button className="card-action-btn btn-h" type="button">
            <i className="far fa-shopping-cart" /> &nbsp; ADD TO CART
          </button>
          <button className="card-action-btn-outline" type="button">
            <i className="far fa-bolt" /> &nbsp; BUY NOW
          </button>
        </div>
      </div>
      <div className="checkout">
        <p className="flex justify-between">
          <span>Items</span> <span>2</span>
        </p>
        <p className="flex justify-between">
          <span>Subtotal</span> <span>$1800</span>
        </p>
        <p className="flex justify-between">
          <span>Delivery</span> <span>$20</span>
        </p>
        <p className="flex justify-between total">
          <span>Total</span> <span>$1820</span>
        </p>
        <button className="btn primary-filled-btn checkout-btn" type="button">
          Checkout
        </button>
        <button className="btn primary-outlined-btn shop-btn" type="button">
          Continue Shopping
        </button>
      </div>
    </section>
  );
}
