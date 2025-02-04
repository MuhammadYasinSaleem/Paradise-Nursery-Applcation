export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";
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

export const decrementQuantity = (id) => {
  return {
    type: "DECREMENT_QUANTITY",
    payload: id,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
