import staticToken from "assets/data";
import axios from "axios";
import {
  ADD_TO_CART,
  DECREMENT_PRODUCT_QUANTITY,
  INCREMENT_PRODUCT_QUANTITY,
  REMOVE_FROM_CART,
} from "types/cart";

export const addToCart = async (
  product: any,
  cartDispatch: any,
  // setLoading?: any,
) => {
  try {
    // setLoading(true);
    await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: { authorization: staticToken },
      },
    );

    cartDispatch({
      type: ADD_TO_CART,
      payload: product,
    });

    // setLoading(false);
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = async (
  productId: any,
  cartDispatch: any,
  setLoading: any,
) => {
  setLoading({ type: "remove", value: true });
  try {
    await axios.delete(`/api/user/cart/${productId}`, {
      headers: { authorization: staticToken },
    });

    cartDispatch({
      type: REMOVE_FROM_CART,
      payload: productId,
    });

    setLoading({ type: "remove", value: false });
  } catch (error) {
    console.log(error);
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
    await axios.post(
      `/api/user/cart/${productId}`,
      {
        action: {
          type: typeOfUpdate,
        },
      },
      {
        headers: { authorization: staticToken },
      },
    );

    dispatchCart({
      type:
        typeOfUpdate === "inc"
          ? INCREMENT_PRODUCT_QUANTITY
          : DECREMENT_PRODUCT_QUANTITY,
      payload: productId,
    });

    setLoading({ type: "update", value: false });
  } catch (error) {
    console.log(error);
  }
};
