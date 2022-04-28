import axios from "axios";
import toast from "react-hot-toast";
import { LOG_IN } from "types/auth";
import { ADD_TO_CART, UPDATE_WISHLIST } from "types/cart";

export const login = async (
  dispatchAuth: any,
  dispatchCart: any,
  dispatchWishlist: any,
  credentials: any,
  navigate: any,
  location: any,
) => {
  try {
    const {
      data: { foundUser, encodedToken },
    } = await axios.post("/api/auth/login", credentials);
    dispatchAuth({
      type: LOG_IN,
      payload: foundUser,
    });
    // reset cart and wishlist
    dispatchCart({
      type: ADD_TO_CART,
      payload: foundUser.cart,
    });
    dispatchWishlist({
      type: UPDATE_WISHLIST,
      payload: foundUser.wishlist,
    });
    localStorage.setItem("token", encodedToken);
    localStorage.setItem("user", JSON.stringify(foundUser));
    navigate(location);
    toast.success("Logged in successfully");
  } catch (error) {
    toast.error("Credentials does not match with our records");
  }
};

export const signUp = async (
  dispatchAuth: any,
  credentials: any,
  navigate: any,
  location: any,
) => {
  try {
    const {
      data: { createdUser, encodedToken },
    } = await axios.post("/api/auth/signup", credentials);
    dispatchAuth({
      type: LOG_IN,
      payload: createdUser,
    });
    localStorage.setItem("token", encodedToken);
    localStorage.setItem("user", JSON.stringify(createdUser));
    navigate(location);
    toast.success("Signed in successfully");
  } catch (error) {
    toast.error("Email already present in our records");
  }
};
