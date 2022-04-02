import staticToken from "assets/data";
import axios from "axios";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "types/cart";

export const addToWishlist = async (product: any, wishlistDispatch: any) => {
  try {
    await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: staticToken,
        },
      },
    );
    wishlistDispatch({
      type: ADD_TO_WISHLIST,
      payload: product,
    });
  } catch (e) {
    //
  }
};

export const removeFromWishlist = async (
  productId: any,
  wishlistDispatch: any,
) => {
  try {
    await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: {
        authorization: staticToken,
      },
    });
    wishlistDispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: productId,
    });
  } catch (e) {
    //
  }
};
