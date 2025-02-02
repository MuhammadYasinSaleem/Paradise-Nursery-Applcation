import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../actions/cartActions';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (itemIndex === -1) {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      } else {
        const updatedCart = [...state.cartItems];
        updatedCart[itemIndex].quantity += 1;  // Increment the quantity if the item is already in the cart
        return { ...state, cartItems: updatedCart };
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

    default:
      return state;
  }
};

export default cartReducer;
