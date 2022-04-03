import { allBrands } from "components/filters";
import { brandLogos } from "utils";
import "css/homepage.css";
import { Link } from "react-router-dom";
import useProduct from "hooks/useProducts";
import { FILTER_BY_BRAND } from "types/product";

export default function Home() {
  const { dispatch } = useProduct();
  return (
    <main className="main-home">
      <section className="homepage-section">
        <div className="backdrop">
          <div className="backdrop-tint">
            <div className="cta-header">
              <h1 className="h1">GET BEST SNEAKERS IN TOWN</h1>
              <h2 className="h2">Curated collection by the Sneakerheads</h2>
              <Link to="/products">
                <button className="cta-btn mt-10" type="button">
                  Shop Now
                  <i className="far fa-arrow-right pl-10" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="categories-container">
          <div className="brands">
            <h2 className="h2 mt-32">Shop by Brands</h2>
            <div className="flex flex-wrap justify-center cta-categories mt-10">
              {allBrands.map((brand, i) => (
                <button
                  type="button"
                  className="cta-brand"
                  onClick={() =>
                    dispatch({
                      type: FILTER_BY_BRAND,
                      payload: brand,
                    })
                  }
                  key={Math.random()}
                >
                  <Link to="/products">
                    {brand}
                    <img src={brandLogos[i]} className="brand-logo" alt="" />
                  </Link>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
