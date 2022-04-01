import { useState, useEffect, useReducer } from "react";

// import { useState } from "react";
import axios from "axios";
import staticToken from "assets/data";
import DataSourceContext from ".";
import cartReducer from "./cartReducer";

const initialData = {
  cartData: [],
};
export default function CartProvider({ children }: any) {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { cart },
        } = await axios.get("/api/user/cart", {
          headers: { authorization: staticToken },
        });
        setData({ ...initialData, cartData: cart });
      } catch (e) {
        // console.log(e);
      }
    })();
  }, []);
  const [cartData, dispatchCart] = useReducer(cartReducer, data);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <DataSourceContext.Provider value={{ data: cartData, dispatchCart }}>
      {children}
    </DataSourceContext.Provider>
  );
}
