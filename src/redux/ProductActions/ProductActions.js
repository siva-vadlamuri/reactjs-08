// These are js functions which returns a plain object (type, payload)

import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

const setProducts = (products) => {
  return {
    type: ACTION_TYPES.SET_PRODUCTS,
    payload: products,
  };
};

const addToCart = (product) => {
  return {
    type: ACTION_TYPES.ADD_TO_CART,
    payload: product,
  };
};

const removeFromCart = (id) => {
  return {
    type: ACTION_TYPES.REMOVE_FROM_CART,
    payload: id,
  };
};
