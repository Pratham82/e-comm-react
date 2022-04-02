import staticToken from "assets/data";
import axios from "axios";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "types/cart";

const wishlistURL = "/api/user/wishlist/";
export const addToWishlist = async (product: any, wishlistDispatch: any) => {
  try {
    await axios.post(
      wishlistURL,
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
    await axios.delete(`${wishlistURL}${productId}`, {
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
