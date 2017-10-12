// Action Types
import { FETCH_PRODUCTS, FETCH_PRODUCT } from './actionTypes';

const initialState = {
  products: [],
  product: []
};

export default function mlReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_PRODUCTS.success(): {
      return {
        ...state,
        products: action.payload
      };
    }

    case FETCH_PRODUCT.success(): {
      return {
        ...state,
        product: action.payload
      };
    }

    default:
      return state;
  }
}
