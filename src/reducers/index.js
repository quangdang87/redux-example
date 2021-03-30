import {combineReducers} from "redux";
import cart, * as fromCart from "./cart";
import products, * as fromProducts from "./products";

// Reducers for corresponding Actions

export default combineReducers({
  cart,
  products,
});
export const getCartProducts = fromCart.getCartProducts;
export const getTotal = fromCart.getTotal;
