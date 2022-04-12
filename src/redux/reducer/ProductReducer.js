// reducer  which updates the store based on action
// reducer will take two things
// 1 state and action

const intialState = {
  products: [],
  cartData: [],
};

export const ProductReducer = (state = intialState, action) => {
  switch (action.type) {
    // Handle the action
    default:
      return state;
  }
};
