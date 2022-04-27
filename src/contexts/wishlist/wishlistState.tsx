import { useState, useEffect, useReducer } from "react";

// import { useState } from "react";
import axios from "axios";
import WishlistContext from ".";
import wishListReducer from "./wishListReducer";

const initialData = {
  wishlistData: [],
};
export default function WishlistProvider({ children }: any) {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { wishlist },
        } = await axios.get("/api/user/wishlist", {
          headers: { authorization: localStorage.getItem("token") },
        });
        setData({ ...initialData, wishlistData: wishlist });
      } catch (e) {
        // console.log(e);
      }
    })();
  }, []);
  const [wishlistData, wishlistDispatch] = useReducer(wishListReducer, data);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <WishlistContext.Provider value={{ data: wishlistData, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
}
