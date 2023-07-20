import { Product } from 'redux/reducers/types';

export enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART'
}

export interface AddToCartAction {
  type: CartActionTypes.ADD_TO_CART;
  payload: Product;
}

export interface RemoveFromCartAction {
  type: CartActionTypes.REMOVE_FROM_CART;
  payload: number;
}

export const addToCart = (product: Product): AddToCartAction => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId: number): RemoveFromCartAction => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload: productId,
});

