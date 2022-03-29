import { useReducer } from "react";
import ProductContext from ".";
import filterReducer from "./filterReducer";

const initialData: any = {
  filters: {
    outOfStock: false,
    fastDelivery: false,
    productRating: 0,
    brands: [],
    query: "",
  },
  sorting: {
    pricing: "",
    priceRange: 0,
  },
};
export default function FilterProvider({ children }: any) {
  const [state, dispatch] = useReducer(filterReducer, initialData);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}
