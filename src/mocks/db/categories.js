import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

// https://superkicks.in/wp-content/uploads/2021/10/Men.jpg
// https://superkicks.in/wp-content/uploads/2021/10/Apparel.jpg
export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    description: "Men's wear",
    image: "https://superkicks.in/wp-content/uploads/2021/10/Men.jpg",
  },

  {
    _id: uuid(),
    categoryName: "Women",
    description: "Women's wear",
    image: "https://superkicks.in/wp-content/uploads/2021/10/Womenn.jpg",
  },

  {
    _id: uuid(),
    categoryName: "Apparel",
    description: "Apparel",
    image: "https://superkicks.in/wp-content/uploads/2021/10/Apparel.jpg",
  },
];
