import { ADD_ITEM} from './actions';
// import { addItemToCart } from './utils';

const INITIAL_STATE = {
  cartItems: []
};

export default function cartReducer(state = INITIAL_STATE, action)  {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: (state.cartItems, action.payload)
        // addItemToCart
      };
    default:
      return state;
  }
};

