// These are js functions which returns a plain object (type, payload)

import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

export const setProducts = (products) => {
  return {
    type: ACTION_TYPES.SET_PRODUCTS,
    payload: products,
  };
};

export const addToCart = (product) => {
  console.log(product);
  return {
    type: ACTION_TYPES.ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (id) => {
  return {
    type: ACTION_TYPES.REMOVE_FROM_CART,
    payload: id,
  };
};
