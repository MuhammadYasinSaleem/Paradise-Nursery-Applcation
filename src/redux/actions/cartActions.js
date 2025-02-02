export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

export const addToCart = (plant) => {
  return {
    type: ADD_TO_CART,
    payload: plant,
  };
};

export const removeFromCart = (plantId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: plantId,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
