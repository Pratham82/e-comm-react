import { useContext } from "react";
import DataSourceContext from "contexts/dataSource";

const useNewProduct = () => useContext(DataSourceContext);

export default useNewProduct;
