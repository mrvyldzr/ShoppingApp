export interface Product {
  id?: String; 
  title: String;
  price: Number;
  image?: String;
  quantity: Number;
  selectedItem: [];
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: Number;
  selectedItem: [];
}

export enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export interface AddToCartAction {
  type: CartActionTypes.ADD_TO_CART;
  payload: CartItem;
}

export interface RemoveFromCartAction {
  type: CartActionTypes.REMOVE_FROM_CART;
  payload: number;
}

export type CartAction = AddToCartAction | RemoveFromCartAction;
