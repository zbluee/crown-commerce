import { createSelector } from "@reduxjs/toolkit";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
  selectCartItems,
  (cartItems) =>
    cartItems.reduce(
      (accumulatedCartItemsQuantity, currCartItem) =>
        accumulatedCartItemsQuantity + currCartItem.quantity,
      0
    )
);
