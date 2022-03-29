import { useState } from "react";
import {
  FILTER_BY_PRICE_RANGE,
  SORT_HIGHEST_TO_LOWEST,
  SORT_LOWEST_TO_HIGHEST,
} from "types/product";
import useProduct from "hooks/useProducts";

export default function Sorting() {
  const {
    dispatch,
    state: {
      sorting: { pricing, priceRange },
    },
  } = useProduct();
  const [, setSortOption] = useState(pricing);
  const [, setRange] = useState(priceRange);

  const handleSorting = (e: any) => {
    // const dict = {
    //   high: SORT_HIGHEST_TO_LOWEST,
    //   low: SORT_LOWEST_TO_HIGHEST,
    // };

    const {
      target: { value: sortingType },
    } = e;

    dispatch({
      // type: dict[sortingType],
      type:
        sortingType === "high"
          ? SORT_HIGHEST_TO_LOWEST
          : SORT_LOWEST_TO_HIGHEST,
    });

    setSortOption(sortingType);
  };
  return (
    <>
      <div className="pt-32">
        <h5 className="h6">Price range</h5>
        <div className="flex justify-between">
          <span>0</span>
          <span>20000</span>
        </div>
        <input
          type="range"
          className="price-range"
          min={0}
          max={20000}
          value={priceRange}
          onChange={(e) => {
            dispatch({
              type: FILTER_BY_PRICE_RANGE,
              payload: e.target.value,
            });
            setRange(Number(e.target.value));
          }}
          step={100}
        />
        <span className="selected-price text-left">{priceRange}</span>
      </div>
      <div className="pt-32 text-left">
        <h5 className="h6">Sort by</h5>
        <div className="pt-6">
          <input
            type="radio"
            name="pricing"
            id="low"
            value="low"
            checked={pricing === "low"}
            onChange={(e) => handleSorting(e)}
          />
          <label htmlFor="low" className="pl-8">
            Price - Low to high{" "}
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="pricing"
            id="high"
            value="high"
            checked={pricing === "high"}
            onChange={(e) => handleSorting(e)}
          />
          <label htmlFor="high" className="pl-8">
            Price - High to low{" "}
          </label>
        </div>
      </div>
      <br />
    </>
  );
}
