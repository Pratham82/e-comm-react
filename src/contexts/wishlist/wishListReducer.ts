import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "types/cart";

const wishListReducer = (wishlist: any, { type, payload }: any) => {
  switch (type) {
    case ADD_TO_WISHLIST:
      return {
        ...wishlist,
        wishlistData: [payload, ...wishlist.wishlistData],
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...wishlist,
        wishlistData: wishlist.wishlistData.filter(
          ({ id }: any) => id !== payload,
        ),
      };

    default:
      return {
        ...wishlist,
      };
  }
};

export default wishListReducer;
