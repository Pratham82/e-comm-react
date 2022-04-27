import { useReducer } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
import cartReducer from "./cartReducer";
import CartContext from ".";

const initialData = {
  cart: [],
  cartData: [],
};
export default function CartProvider({ children }: any) {
  // const [data] = useState(initialData);
  // useEffect(() => {
  //   (async () => {
  //     if (localStorage.getItem("token"))
  //       try {
  //         const {
  //           data: { cart },
  //         } = await axios.get("/api/user/cart", {
  //           headers: { authorization: localStorage.getItem("token") },
  //         });
  //         setData({ ...initialData, cartData: cart, cart });
  //       } catch (e) {
  //         toast.error("Something went wrong");
  //       }
  //   })();
  // }, []);
  const [cartData, dispatchCart] = useReducer(cartReducer, initialData);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CartContext.Provider value={{ data: cartData, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
}
