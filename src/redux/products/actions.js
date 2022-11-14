import {
    GET_PRODUCTS_PENDING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    DELETE_PRODUCTS_PENDING,
    DELETE_PRODUCTS_SUCCESS,
    DELETE_PRODUCTS_ERROR
} from './constants';

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

export const deleteProductsPending = () => {
    return {
      type: DELETE_PRODUCTS_PENDING
    };
  };

  export const deleteProductsSuccess = (data) => {
    return {
      type: DELETE_PRODUCTS_SUCCESS,
      payload: data
    };
  };

  export const deleteProductsError = (error) => {
    return {
      type: DELETE_PRODUCTS_ERROR,
      payload: error
    };
  };
