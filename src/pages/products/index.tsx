import Product from "components/product";
import "css/homepage.css";
import "css/product-listing.css";

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function Products() {
  return (
    <main>
      <aside>
        <div className="flex justify-between items-center">
          <h5 className="h6">Filters</h5>
          <p className="h6">Clear</p>
        </div>

        {/* <!-- Price range --> */}
        <div className="pt-32">
          <h5 className="h6">Price range</h5>
          <input
            type="range"
            className="price-range"
            min="0"
            max="4000"
            value="1000"
            step="500"
          />
          <span className="selected-price" />
        </div>

        {/* <!-- Sorting --> */}
        <div className="pt-32">
          <h5 className="h6">Sort by</h5>
          <div className="pt-6">
            <input type="radio" name="pricing" id="low" />
            <label htmlFor="low" className="pl-2">
              {" "}
              Price - Low to high{" "}
            </label>
          </div>
          <div>
            <input type="radio" name="pricing" id="high" />
            <label htmlFor="high" className="pl-2">
              {" "}
              Price - High to low{" "}
            </label>
          </div>
        </div>

        {/* <!-- Rating --> */}
        <div className="pt-32">
          <h5 className="h6">Rating</h5>
          <div className="flex items-center">
            <input type="radio" name="rating" id="4star" />
            <label htmlFor="4star">
              <div className="rating-div pl-6">
                <i className="fas fa-star"> </i>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fal fa-star" />& up
              </div>
            </label>
          </div>

          <div className="flex items-center">
            <input type="radio" name="rating" id="3star" />
            <label htmlFor="3star">
              <div className="rating-div pl-6">
                <i className="fas fa-star"> </i>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fal fa-star" />
                <i className="fal fa-star" />& up
              </div>
            </label>
          </div>

          <div className="flex items-center">
            <input type="radio" name="rating" id="2star" />
            <label htmlFor="2star">
              <div className="rating-div pl-6">
                <i className="fas fa-star"> </i>
                <i className="fas fa-star" />
                <i className="fal fa-star" />
                <i className="fal fa-star" />
                <i className="fal fa-star" />& up
              </div>
            </label>
          </div>

          <div className="flex items-center">
            <input type="radio" name="rating" id="1star" />
            <label htmlFor="1star">
              <div className="rating-div pl-6">
                <i className="fas fa-star"> </i>
                <i className="fal fa-star" />
                <i className="fal fa-star" />
                <i className="fal fa-star" />
                <i className="fal fa-star" />& up
              </div>
            </label>
          </div>
        </div>

        {/* <!-- Category --> */}
        <div className="pt-32">
          <h5 className="h6">Category</h5>
          {/* <!-- <input type="checkbox" name="category" id="men" />
          <label htmlFor="men" class="pl-2">Men</label>
          <br />
          <input type="checkbox" name="category" id="women" />
          <label htmlFor="women" class="pl-2">Women</label> --> */}

          <label className="checkbox-container">
            Men
            <input type="checkbox" checked />
            <span className="checkmark" />
          </label>
          <label className="checkbox-container">
            Women
            <input type="checkbox" checked />
            <span className="checkmark" />
          </label>
        </div>
      </aside>
      <section className="flex flex-wrap product-section">
        {/* <!-- Cards --> */}
        {Array(6)
          .fill("product")
          .map(() => (
            <Product />
          ))}

        <div className="card-new" />
      </section>
    </main>
  );
}
