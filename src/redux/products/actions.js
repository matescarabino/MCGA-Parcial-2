import { GET_PRODUCTS_PENDING, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } from './constants';

export const getProductsPending = () => {
  return {
    type: GET_PRODUCTS_PENDING
  };
};

export const getProductsSuccess = (data) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: data
  };
};

export const getProductsError = (error) => {
  return {
    type: GET_PRODUCTS_ERROR,
    payload: error
  };
};
