import {
  getProductsPending,
  getProductsSuccess,
  getProductsError,
  deleteProductsPending,
  deleteProductsSuccess,
  deleteProductsError,
} from './actions';

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(getProductsPending());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
      const json = await response.json();
      dispatch(getProductsSuccess(json.data));
    } catch (error) {
      dispatch(getProductsError(error.toString()));
    }
  };
};

export const deleteProducts = (id) => {
  return async (dispatch) => {
    dispatch(deleteProductsPending());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/product/delete/${id}`, {
        method: 'DELETE'
      });
      const json = await response.json();
      dispatch(deleteProductsSuccess(json.data));
    } catch (error) {
      dispatch(deleteProductsError(error.toString()));
    }
  };
};
