export default function Product({
  productData: { name, image, price, inStock, ratings, fastDelivery },
}: any) {
  return (
    <div className="card card-v floating-shadow">
      <div className="card-body flex justify-center">
        <div className="card-header flex justify-between">
          {!inStock && <div className="card-badge">OUT OF STOCK</div>}
          <span className="wishlist-container">
            <i className={`fa-heart ${fastDelivery ? "fas" : "fal"}`} />
          </span>
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
              {ratings} <i className="fas fa-star" key={Math.random()} />{" "}
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
        <div className="card-pricing">$ {price}</div>
        {inStock ? (
          <button type="button" className="card-action-btn">
            <i className="far fa-shopping-cart" /> &nbsp; ADD TO CART
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
