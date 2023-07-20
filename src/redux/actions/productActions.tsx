import axios from 'axios';
import { Product } from 'redux/reducers/types';;
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from 'redux/reducers/rootReducer';

type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;

export enum ProductActionTypes {
  FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
}

export const fetchProductsRequest = () => ({
  type: ProductActionTypes.FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products: Product[]) => ({
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error: string) => ({
  type: ProductActionTypes.FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchProducts = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchProductsRequest());
      const response = await axios.get('https://fakestoreapi.com/products');
      const products = response.data;
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      dispatch(fetchProductsFailure("error"));
    }
  };
};






