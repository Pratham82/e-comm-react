import Product from "components/product";
import "css/wishlist.css";

export default function WishList() {
  return (
    <main>
      <section className="flex flex-wrap">
        {Array(6)
          .fill("product")
          .map(() => (
            <Product wishList />
          ))}
        <div className="card-new" />
      </section>
    </main>
  );
}
