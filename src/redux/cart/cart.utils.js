export const addItemToCart = (cartItems, cartItemTobeAdded ) => {
    const existingCartItems = cartItems.find(cartItem => cartItem.id === cartItemTobeAdded.id)

    if(existingCartItems){
        return cartItems.map(cartItem => cartItem.id === cartItemTobeAdded.id ? {...cartItem, quantity : cartItem.quantity + 1 } : cartItem)
        }
    
    return [...cartItems, {...cartItemTobeAdded, quantity : 1}]
}