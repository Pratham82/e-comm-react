import axios from "axios";
import toast from "react-hot-toast";
import { UPDATE_WISHLIST } from "types/cart";
import { removeDuplicateProducts } from "utils";

const wishlistURL = "/api/user/wishlist/";
export const addToWishlist = async (
  isAuth: any,
  product: any,
  wishlistDispatch: any,
  navigate: any,
) => {
  if (isAuth)
    try {
      const {
        data: { wishlist },
      } = await axios.post(
        wishlistURL,
        { product },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        },
      );
      wishlistDispatch({
        type: UPDATE_WISHLIST,
        payload: removeDuplicateProducts(wishlist),
      });
    } catch (e) {
      toast.error("Unable to add to wishlist");
    }
  else {
    toast.error("User not logged in");
    navigate("/login");
  }
};

export const removeFromWishlist = async (
  isAuth: any,
  productId: any,
  wishlistDispatch: any,
  navigate: any,
) => {
  if (isAuth)
    try {
      const {
        data: { wishlist },
      } = await axios.delete(`${wishlistURL}${productId}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      wishlistDispatch({
        type: UPDATE_WISHLIST,
        payload: wishlist,
      });
    } catch (e) {
      toast.error("Unable to remove from wishlist");
    }
  else {
    toast.error("User not logged in");
    navigate("/login");
  }
};
