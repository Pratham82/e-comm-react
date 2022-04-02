import WishlistContext from "contexts/wishlist";
import { useContext } from "react";

const useWishlist = () => useContext(WishlistContext);

export default useWishlist;
