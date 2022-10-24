// import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";

export const rootReducer = {
  user : userReducer,
  cart : cartReducer 
};


