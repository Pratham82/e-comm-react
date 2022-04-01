import "css/cart.css";
import useCart from "hooks/useCart";
import ProductInCart from "components/product-in-cart";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    data: { cartData },
  } = useCart();
  const getTotal = () => {
    const subTotal = cartData.reduce(
      (total: any, { price, quantity }: any) =>
        total + Number(price) * quantity,
      0,
    );
    const deliveryCharges = cartData.length * 20;
    const totalCost = deliveryCharges + subTotal;
    return {
      subTotal,
      deliveryCharges,
      totalCost,
    };
  };
  const { subTotal, deliveryCharges, totalCost } = getTotal();
  return (
    <div className="cart-wrapper">
      <section className="flex flex-col items-center cart-section">
        {cartData.length
          ? cartData.map(
              ({
                id,
                name,
                image,
                price,
                inStock,
                fastDelivery,
                ratings,
                quantity,
              }: any) => (
                <ProductInCart
                  key={id}
                  productData={{
                    id,
                    name,
                    image,
                    price,
                    inStock,
                    fastDelivery,
                    ratings,
                    quantity,
                  }}
                />
              ),
            )
          : ""}
      </section>
      {cartData.length && (
        <div className="checkout">
          <p className="flex justify-between">
            <span>Items</span> <span>{cartData.length}</span>
          </p>
          <p className="flex justify-between">
            <span>Subtotal</span> <span>${subTotal}</span>
          </p>
          <p className="flex justify-between">
            <span>Delivery</span> <span>${deliveryCharges}</span>
          </p>
          <p className="flex justify-between total">
            <span>Total</span> <span>${totalCost}</span>
          </p>
          <button className="btn primary-filled-btn checkout-btn" type="button">
            Checkout
          </button>

          <Link to="/products">
            <button className="btn primary-outlined-btn shop-btn" type="button">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
      {!cartData.length && (
        <div>
          <div className="h6 mt-60">
            Cart is empty
            <span className="pl-6 link-tag">
              <Link to="/products">Continue shopping</Link>{" "}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
