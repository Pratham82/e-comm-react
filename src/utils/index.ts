import { SORT_LOWEST_TO_HIGHEST } from "types/product";

export const getSortedProducts = (type: any, state: any) => {
  const asc = state.sort((acc: any, product: any) => acc.price - product.price);
  return type === SORT_LOWEST_TO_HIGHEST ? asc : asc.reverse();
};

export const getFilteredProducts = (
  products: any,
  filters: any,
  sorting: any,
) => {
  const { outOfStock, fastDelivery, productRating, brands, query } = filters;
  const { pricing, priceRange } = sorting;
  let finalProducts: any = products;
  if (fastDelivery)
    finalProducts = finalProducts.filter(
      (product: any) => product.fastDelivery,
    );
  if (!outOfStock)
    finalProducts = finalProducts.filter((product: any) => product.inStock);
  if (query)
    finalProducts = finalProducts.filter((product: any) =>
      product.name.toLowerCase().includes(query),
    );
  if (pricing) {
    const asc = finalProducts.sort(
      (acc: any, product: any) => acc.price - product.price,
    );
    finalProducts = pricing === "low" ? asc : asc.reverse();
  }
  if (brands.length > 0) {
    finalProducts = finalProducts.filter(({ brand }: any) =>
      brands.includes(brand),
    );
  }
  finalProducts = finalProducts
    .filter(({ ratings }: any) => ratings >= productRating)
    .filter(({ price }: any) => Number(price) >= priceRange);

  return finalProducts;
};

const [fiveStar, fourStar, threeStar, twoStar, oneStar] = [5, 4, 3, 2, 1].map(
  (n) => Array(5).fill(0).fill(1, 0, n),
);

export const ratingsArray = [
  { id: 5, val: fiveStar },
  { id: 4, val: fourStar },
  { id: 3, val: threeStar },
  { id: 2, val: twoStar },
  { id: 1, val: oneStar },
];

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const checkDuplicate = (productId: any, cartData: any) => {
  return cartData
    .map(({ id: currId }: any) => currId === productId)
    .some((val: any) => val);
};

export const isProductInWishlist = (prodId: any, wishlistData: any) => {
  return wishlistData
    .map(({ id: currId }: any) => currId === prodId)
    .some((val: any) => val);
};

export const isEntityEmpty = (items: any) => items.length > 0 && items.length;
