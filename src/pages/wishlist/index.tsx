import Product from "components/product";
import "css/wishlist.css";
import useWishlist from "hooks/useWishlist";
import { Link } from "react-router-dom";

export default function WishList() {
  const {
    data: { wishlistData },
  } = useWishlist();
  return (
    <div className="main">
      <section className="flex flex-wrap">
        {wishlistData.length
          ? wishlistData.map(
              ({
                id,
                name,
                image,
                price,
                inStock,
                fastDelivery,
                ratings,
              }: any) => (
                <Product
                  key={id}
                  productData={{
                    id,
                    name,
                    image,
                    price,
                    inStock,
                    fastDelivery,
                    ratings,
                  }}
                />
              ),
            )
          : ""}
        {!wishlistData.length && (
          <div>
            <div className="h6 mt-60">
              Wishlist is empty
              <span className="pl-6 link-tag">
                <Link to="/products">Check products</Link>{" "}
              </span>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
