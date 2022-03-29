import { useState, useEffect } from "react";
import axios from "axios";
import DataSourceContext from ".";

const initialData = {
  products: [],
  categories: [],
};
export default function DataSourceProvider({ children }: any) {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    (async () => {
      const {
        data: { products },
      } = await axios.get("/api/products");
      const {
        data: { categories },
      } = await axios.get("/api/categories");
      setData({ ...initialData, products, categories });
    })();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <DataSourceContext.Provider value={{ data }}>
      {children}
    </DataSourceContext.Provider>
  );
}
