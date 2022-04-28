import axios from "axios";
import toast from "react-hot-toast";
import {
  ADD_TO_CART,
  UPDATE_PRODUCT_QUANTITY,
  REMOVE_FROM_CART,
} from "types/cart";
import { removeDuplicateProducts } from "utils";

export const addToCart = async (
  isAuth: any,
  product: any,
  cartDispatch: any,
  navigate: any,
) => {
  if (isAuth)
    try {
      const {
        data: { cart },
      } = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: { authorization: localStorage.getItem("token") },
        },
      );
      const filtered = removeDuplicateProducts(cart);

      cartDispatch({
        type: ADD_TO_CART,
        payload: filtered,
      });
    } catch (error) {
      toast.error("Unable to add to cart");
    }
  else {
    toast.error("User not logged in");
    navigate("/login");
  }
};

export const removeFromCart = async (
  productId: any,
  cartDispatch: any,
  setLoading: any,
) => {
  setLoading({ type: "remove", value: true });
  try {
    const {
      data: { cart },
    } = await axios.delete(`/api/user/cart/${productId}`, {
      headers: { authorization: localStorage.getItem("token") },
    });

    cartDispatch({
      type: REMOVE_FROM_CART,
      payload: cart,
    });

    setLoading({ type: "remove", value: false });
  } catch (error) {
    toast.error("Unable to add to cart");
  }
};

export const updateProductQuantity = async (
  productId: any,
  typeOfUpdate: any,
  dispatchCart: any,
  setLoading: any,
) => {
  try {
    setLoading({ type: "update", value: true });
    const {
      data: { cart },
    } = await axios.post(
      `/api/user/cart/${productId}`,
      {
        action: {
          type: typeOfUpdate,
        },
      },
      {
        headers: { authorization: localStorage.getItem("token") },
      },
    );

    dispatchCart({
      type: UPDATE_PRODUCT_QUANTITY,
      payload: cart,
    });

    setLoading({ type: "update", value: false });
  } catch (error) {
    toast.error("Unable to update cart");
  }
};
