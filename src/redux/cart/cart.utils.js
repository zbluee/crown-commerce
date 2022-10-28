export const addItemToCart = (cartItems, cartItemTobeAdded) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === cartItemTobeAdded.id
  );

  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemTobeAdded.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemTobeAdded, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  if(cartItemToRemove.quantity === 1) return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity : cartItem.quantity - 1} : cartItem)
}
