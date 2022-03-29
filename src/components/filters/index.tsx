import {
  FILTER_BY_BRAND,
  REMOVE_BRAND_FILTER,
  TOGGLE_FAST_DELIVERY,
  TOGGLE_OUT_OF_STOCK,
} from "types/product";
import useProduct from "hooks/useProducts";
import Rating from "components/rating";

export default function Categories() {
  const { state, dispatch } = useProduct();
  const { filters } = state;
  const { outOfStock, fastDelivery, brands } = filters;
  const allBrands = ["Nike", "Air Jordan", "Adidas", "Puma"];
  const filterBrands = (brand: any) => {
    return !brands.includes(brand)
      ? dispatch({
          type: FILTER_BY_BRAND,
          payload: brand,
        })
      : dispatch({
          type: REMOVE_BRAND_FILTER,
          payload: brand,
        });
  };

  return (
    <div className="text-left">
      <h5 className="text-left h6 mt-10 mb-10">Categories</h5>
      <label className="checkbox-container text-left mb-4" htmlFor="fast-del">
        <span className="ml-10">Fast Delivery</span>
        <input
          id="fast-del"
          type="checkbox"
          checked={fastDelivery}
          onChange={() =>
            dispatch({
              type: TOGGLE_FAST_DELIVERY,
            })
          }
        />
        <span className="checkmark" />
      </label>
      <label className="checkbox-container text-left mb-4" htmlFor="out-of-box">
        <span className="ml-10">Include out of stock</span>
        <input
          id="out-of-box"
          type="checkbox"
          checked={outOfStock}
          onChange={() =>
            dispatch({
              type: TOGGLE_OUT_OF_STOCK,
            })
          }
        />
        <span className="checkmark" />
      </label>

      <h5 className="text-left h6 mt-10 mb-10">Brands</h5>
      {allBrands.map((brand: string) => (
        <label
          className="checkbox-container text-left mb-4"
          htmlFor={brand}
          key={Math.random()}
        >
          {/* <span className="ml-10">{brand}/span> */}
          <span className="ml-10">{brand}</span>
          <input
            id={brand}
            type="checkbox"
            checked={brands.includes(brand)}
            onChange={() => filterBrands(brand)}
          />
          <span className="checkmark" />
        </label>
      ))}
      <Rating />
    </div>
  );
}
