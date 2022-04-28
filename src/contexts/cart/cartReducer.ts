import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  UPDATE_PRODUCT_QUANTITY,
} from "types/cart";

const cartReducer = (cartState: any, { type, payload }: any) => {
  switch (type) {
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
    case UPDATE_PRODUCT_QUANTITY:
      return {
        cartData: payload,
        cart: payload,
      };

    case EMPTY_CART:
      return {
        cartData: [],
        cart: [],
      };

    default:
      return cartState;
  }
};

export default cartReducer;
