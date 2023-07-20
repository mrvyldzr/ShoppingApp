import { CartAction, CartActionTypes, CartItem } from './types';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      const newItem: CartItem = action.payload;
      const updatedItems: CartItem[] = [...state.items, newItem];
      return {
        ...state,
        items: updatedItems,
      };
    case CartActionTypes.REMOVE_FROM_CART:
      const removedItemId: number = action.payload;
      const filteredItems: CartItem[] = state.items.filter(item => item.id !== removedItemId);
      return {
        ...state,
        items: filteredItems,
      };
    default:
      return state;
  }
};

export default cartReducer;

