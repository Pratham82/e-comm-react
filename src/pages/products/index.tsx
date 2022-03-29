import Categories from "components/filters";
import Sorting from "components/sorting";
import Product from "components/product";
import "css/homepage.css";
import "css/product-listing.css";
import { CLEAR_ALL_FILTERS } from "types/product";
import { getFilteredProducts } from "utils";
import useProduct from "hooks/useProducts";
import useNewProduct from "hooks/useDataSource";

export default function Products() {
  const {
    state: { filters, sorting },
    dispatch,
  } = useProduct();
  const {
    data: { products },
  } = useNewProduct();

  const modifiedData = getFilteredProducts(products, filters, sorting);
  return (
    <main>
      <aside>
        <div className="flex justify-between items-center ">
          <h5 className="h5">Filters</h5>
          <button
            className="h6 clear-btn"
            onClick={() =>
              dispatch({
                type: CLEAR_ALL_FILTERS,
              })
            }
            type="button"
          >
            Clear
            <i className="ml-8 fal fa-" />
          </button>
        </div>
        <Sorting />
        <Categories />
      </aside>
      <section className="flex flex-wrap product-section">
        {modifiedData.map(
          ({ id, name, image, price, inStock, fastDelivery, ratings }: any) => (
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
        )}
      </section>
    </main>
  );
}
