import { getProductsPending, getProductsSuccess, getProductsError } from './actions';

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(getProductsPending());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
      const json = await response.json();
      dispatch(getProductsSuccess(json.data));
      return json.data;
    } catch (error) {
      dispatch(getProductsError(error.toString()));
      // error should be display in a modal
    }
  };
};
