import {combineReducers} from "redux";
import {RECEIVE_PRODUCTS, ADD_TO_CART} from "../constants/ActionTypes";

// Reducers for corresponding Actions
const initialState = {products: [], byId: {}};
export default (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.productId) {
            product.inventory -= 1;
          }
          return product;
        }),
      };
    case RECEIVE_PRODUCTS:
      let byId = {};
      action.products.forEach((product) => {
        byId[product.id] = {id: product.id, price: product.price};
      });
      return {...state, products: [...action.products], byId};

    default:
      return state;
  }
};
export const getProduct = (state, index) => {
  return state.products[index - 1];
};
export const getVisibleProducts = (state) =>
  state.products.filter((product) => product.inventory > 0);
