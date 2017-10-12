// Api
import MlApi from './api';

// Action Types
import { FETCH_PRODUCTS, FETCH_PRODUCT } from './actionTypes';

// ALL ITEMS
export const fetchProducts = (fetchingFrom, query) => dispatch => {

  //console.log('[i] TYPEGET 2: ',typeGet);
  //console.log(query);

  const requestProducts = () => ({
    type: FETCH_PRODUCTS.request()
  });

  const receivedProducts = products => ({
    type: FETCH_PRODUCTS.success(),
    payload: products
  });

  dispatch(requestProducts());

  return MlApi.getAllProducts(query, fetchingFrom)
    .then(products => dispatch(receivedProducts(products)));
};

// SINGLE ITEM
export const fetchProduct = (fetchingFrom, query) => dispatch => {

  //console.log('[i] TYPEGET 2: ',typeGet);
  //console.log(query);

  const requestProduct = () => ({
    type: FETCH_PRODUCT.request()
  });

  const receivedProduct = product => ({
    type: FETCH_PRODUCT.success(),
    payload: product
  });

  dispatch(requestProduct());

  return MlApi.getProduct(query, fetchingFrom)
    .then(product => dispatch(receivedProduct(product)));
};

