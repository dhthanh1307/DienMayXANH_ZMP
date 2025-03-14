import { RootState } from "@store/store";
import { createSelector } from "reselect";

const selectCart = (state: RootState) => state.cart;

export const cartReselector = createSelector(
  [selectCart],
  (cart) =>
    cart.products.reduce(
      (total, product, index) =>
        total + (product.price * (100 - product.discountPercentage) / 100) * cart.counts[index],
      0
    )
);
