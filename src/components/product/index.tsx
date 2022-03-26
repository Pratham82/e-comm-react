import img1 from "assets/images/product_listing/product_1.jpg";

type ProductProps = {
  wishList?: boolean;
};
export default function Product({ wishList }: ProductProps | any) {
  return (
    <div className="card card-v floating-shadow">
      <div className="card-body flex justify-center">
        <div className="card-header flex justify-between">
          <div className="card-badge">ON SALE</div>
          <span>
            <i className={`fa-heart ${wishList ? "fas" : "fal"}`} />
          </span>
          <span className="hidden">
            <i className="fal fa-times-circle" />
          </span>
        </div>
        <div className="card-overlay-text-div hidden">
          <div className="overlay-text">Out of stock</div>
        </div>
        <div className="card-img-div">
          <img src={img1} className="card-img" alt="" />
        </div>
      </div>
      <div className="card-footer">
        <div className="card-text">Balenciaga Grey Speed Sock Sneakers</div>
        <div className="card-pricing">
          <span style={{ textDecoration: "line-through" }}>$990</span> &nbsp;
          $800
        </div>
        <button type="button" className="card-action-btn">
          <i className="far fa-shopping-cart" /> &nbsp; ADD TO CART
        </button>
      </div>
    </div>
  );
}
