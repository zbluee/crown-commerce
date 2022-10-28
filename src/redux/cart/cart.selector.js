import { createSelector } from "@reduxjs/toolkit";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  selectCart,
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  selectCart,
  (cart) => cart.hidden
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

export const selectCartTotalPrice = createSelector(
  selectCartItems,
  (cartItems) =>
    cartItems.reduce(
      (accumulatedCartItemsPrice, currCartItem) =>
        accumulatedCartItemsPrice + currCartItem.price * currCartItem.quantity,
      0
    )
);
