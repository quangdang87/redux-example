import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  CHECKOUT_SUCCESS,
} from "../constants/ActionTypes";

const initialState = {
  addedIds: [],
  quantityById: {},
};

// Reducers for corresponding Actions
const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let addedArr = [...state.addedIds];
      if (!state.addedIds.find((id) => id === action.productId)) {
        addedArr.push(action.productId);
      }

      return {
        addedIds: addedArr,
        quantityById: {
          ...state.quantityById,
          [action.productId]: !state.quantityById[action.productId]
            ? 1
            : state.quantityById[action.productId] + 1,
        },
      };
    case CHECKOUT_REQUEST:
      if (Object.keys(state).length === 0) {
        return initialState;
      } else return state;
    case CHECKOUT_FAILURE:
      return "cart state";
    case CHECKOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default cart;

export const getCartProducts = (state) => {
  let products = [];
  if (state.cart.addedIds) {
    Object.keys(state.cart.quantityById).forEach((id) => {
      if (state.products.products) {
        let product = state.products.products.find(
          (product) => product.id === parseInt(id)
        );
        if (product) {
          product.quantity = state.cart.quantityById[id];
          products.push(product);
        }
      } else {
        let product = state.products.byId[id];
        if (product) {
          product.quantity = state.cart.quantityById[id];
          products.push(product);
        }
      }
    });
  }
  return products;
};
export const getTotal = (state) => {
  let products = getCartProducts(state);
  let total = 0;

  if (products)
    products.forEach((product) => {
      total += parseFloat(product.price) * parseFloat(product.quantity);
    });

  return total.toFixed(2);
};
