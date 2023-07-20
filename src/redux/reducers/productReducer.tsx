import { Product } from './types';

interface ProductState {
  products: Product[];
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  error: null,
};

interface FetchProductsSuccessAction {
  type: 'FETCH_PRODUCTS_SUCCESS';
  payload: Product[];
}

interface FetchProductsFailureAction {
  type: 'FETCH_PRODUCTS_FAILURE';
  payload: string;
}

type ProductAction = FetchProductsSuccessAction | FetchProductsFailureAction;

const productReducer = (state = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        products: action.payload,
        error: null,
      };
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        ...state,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
