import {
  CLEAR_ALL_FILTERS,
  TOGGLE_FAST_DELIVERY,
  TOGGLE_OUT_OF_STOCK,
  SORT_HIGHEST_TO_LOWEST,
  SORT_LOWEST_TO_HIGHEST,
  FILTER_BY_RATING,
  FILTER_BY_QUERY,
  FILTER_BY_PRICE_RANGE,
  FILTER_BY_BRAND,
  REMOVE_BRAND_FILTER,
} from "types/product";

const filterReducer = (state: any, action: any) => {
  const { type, payload } = action;
  const { filters, sorting } = state;

  switch (type) {
    case SORT_LOWEST_TO_HIGHEST:
      return {
        ...state,
        sorting: {
          ...sorting,
          pricing: "low",
        },
      };

    case SORT_HIGHEST_TO_LOWEST:
      return {
        ...state,
        sorting: {
          ...sorting,
          pricing: "high",
        },
      };

    case FILTER_BY_PRICE_RANGE:
      return {
        ...state,
        sorting: {
          ...sorting,
          priceRange: payload,
        },
      };

    case TOGGLE_OUT_OF_STOCK:
      return {
        ...state,
        filters: {
          ...filters,
          outOfStock: !filters.outOfStock,
        },
      };

    case TOGGLE_FAST_DELIVERY:
      return {
        ...state,
        filters: { ...filters, fastDelivery: !filters.fastDelivery },
      };

    case FILTER_BY_RATING:
      return {
        ...state,
        filters: {
          ...filters,
          productRating: payload,
        },
      };

    case FILTER_BY_QUERY:
      return {
        ...state,
        filters: {
          ...filters,
          query: payload,
        },
      };

    case FILTER_BY_BRAND:
      return {
        ...state,
        filters: {
          ...filters,
          brands: [...filters.brands, payload],
        },
      };

    case REMOVE_BRAND_FILTER:
      return {
        ...state,
        filters: {
          ...filters,
          brands: filters.brands.filter((brand: any) => brand !== payload),
        },
      };

    case CLEAR_ALL_FILTERS:
      return {
        ...state,
        filters: {
          ...filters,
          outOfStock: false,
          fastDelivery: false,
          productRating: 0,
          brands: [],
          query: "",
        },
        sorting: {
          pricing: "",
          priceRange: 0,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
