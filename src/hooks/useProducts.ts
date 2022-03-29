import { useContext } from "react";
import ProductContext from "contexts/filter";

const useProduct = () => useContext(ProductContext);

export default useProduct;
