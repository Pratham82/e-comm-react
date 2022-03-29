import { FILTER_BY_RATING } from "types/product";
import useProduct from "hooks/useProducts";
import { useState } from "react";
import Stars from "components/rating/Stars";
import { ratingsArray } from "utils";

export default function Rating() {
  const { state, dispatch } = useProduct();
  const { filters } = state;
  const { productRating } = filters;
  const [, setRating] = useState(productRating);

  const handleOnChange = (e: any) => {
    const {
      target: { value: currentRating },
    } = e;
    setRating(currentRating);
    dispatch({
      type: FILTER_BY_RATING,
      payload: currentRating,
    });
  };
  return (
    <div className="pt-32">
      <h5 className="h6">Rating</h5>
      {ratingsArray.slice(1).map(({ id, val }) => (
        <div className="flex items-center" key={id}>
          <label htmlFor={`${id}-star`}>
            <input
              type="radio"
              name="rating"
              id={`${id}-star`}
              value={id}
              checked={id === Number(productRating)}
              onChange={(e) => handleOnChange(e)}
            />
            <Stars stars={val} isText />
          </label>
        </div>
      ))}
    </div>
  );
}
