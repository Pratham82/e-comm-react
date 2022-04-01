import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_PRODUCT_QUANTITY,
  DECREMENT_PRODUCT_QUANTITY,
} from "types/cart";

const cartReducer = (cart: any, { type, payload }: any) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...cart,
        cartData: [{ ...payload, quantity: 1 }, ...cart.cartData],
      };

    case REMOVE_FROM_CART:
      return {
        ...cart,
        cartData: cart.cartData.filter(({ id }: any) => id !== payload),
      };

    case INCREMENT_PRODUCT_QUANTITY:
      return {
        ...cart,
        cartData: cart.cartData.map((product: any) =>
          product.id === payload
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        ),
      };

    case DECREMENT_PRODUCT_QUANTITY:
      return {
        ...cart,
        cartData: cart.cartData.map((product: any) =>
          product.id === payload
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        ),
      };

    default:
      return cart;
  }
};

export default cartReducer;
