import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, DECREMENT_QUANTITY } from '../actions/cartActions';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (addItemIndex === -1) {
        return { ...state, cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }] };
      } else {
        const updatedAddCart = [...state.cartItems];
        updatedAddCart[addItemIndex].quantity += 1;  // Increment the quantity if the item is already in the cart
        return { ...state, cartItems: updatedAddCart };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

    case DECREMENT_QUANTITY:
      const decrementItemIndex = state.cartItems.findIndex(item => item.id === action.payload);
      if (decrementItemIndex !== -1) {
        const updatedDecrementCart = [...state.cartItems];
        const item = updatedDecrementCart[decrementItemIndex];
        
        if (item.quantity > 1) {
          updatedDecrementCart[decrementItemIndex].quantity -= 1;  // Decrement the quantity
        } else {
          updatedDecrementCart[decrementItemIndex].quantity = 1; // Ensure quantity doesn't go below 1
        }

        return { ...state, cartItems: updatedDecrementCart };
      }
      return state;

    default:
      return state;
  }
};

export default cartReducer;
