import {
  EMPTY_WISHLIST,
  // ADD_TO_WISHLIST,
  // REMOVE_FROM_WISHLIST,
  UPDATE_WISHLIST,
} from "types/cart";

const wishListReducer = (wishlist: any, { type, payload }: any) => {
  switch (type) {
    case UPDATE_WISHLIST:
      return {
        ...wishlist,
        wishlistData: payload,
      };

    case EMPTY_WISHLIST:
      return {
        ...wishlist,
        wishlistData: [],
      };

    default:
      return {
        ...wishlist,
      };
  }
};

export default wishListReducer;
