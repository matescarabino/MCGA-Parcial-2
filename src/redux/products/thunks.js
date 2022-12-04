import {
  getProductsPending,
  getProductsSuccess,
  getProductsError,
  getByIdProductsPending,
  getByIdProductsSuccess,
  getByIdProductsError,
  deleteProductsPending,
  deleteProductsSuccess,
  deleteProductsError,
  postProductsPending,
  postProductsSuccess,
  postProductsError,
  editProductsPending,
  editProductsSuccess,
  editProductsError
} from './actions';

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(getProductsPending());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
      const json = await response.json();
      if(response.status !== 200 ){
        dispatch(getProductsError(json.toString()))
      }else {
        dispatch(getProductsSuccess(json.data));
      }
    } catch (error) {
      dispatch(getProductsError(error.toString()));
    }
  };
};

export const getByIdProducts = (id) => {
  return async (dispatch) => {
    dispatch(getByIdProductsPending());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`);
      const json = await response.json();
      if(response.status !== 200 ){
        dispatch(getByIdProductsError(json.msg.toString()))
      }else {
        dispatch(getByIdProductsSuccess(json.data));
      }
    } catch (error) {
      dispatch(getByIdProductsError(error.toString()));
    }
  };
};

export const deleteProducts = (id, token) => {
  return async (dispatch) => {
    dispatch(deleteProductsPending());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products/delete/${id}`, {
        method: 'DELETE',
        headers: token,
      });
      const json = await response.json();
      if(response.status !== 202 ){
        dispatch(deleteProductsError(json.toString()))
      }else {
        dispatch(deleteProductsSuccess(json.data));
      }
    } catch (error) {
      dispatch(deleteProductsError(error.toString()));
    }
  };
};

export const postProducts = (name, description, price, stock, token) => {
  return async (dispatch) => {
    dispatch(postProductsPending());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products/add`,{
          method: 'POST',
          headers: {
            token,
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            description: description,
            price: price,
            stock: stock
          })
        });
        const json = await response.json();
        if (response.status === 201) {
          dispatch(postProductsSuccess(json.data));
        } else {
          dispatch(postProductsError(json.data));
        }
      } catch (error) {
        dispatch(postProductsError(error.toString()));
      }
  };
};

export const editProducts = (id, name, description, price, stock, token) => {
  return async (dispatch) => {
    dispatch(editProductsPending());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products/update/${id}`,{
          method: 'PUT',
          headers: {
            token,
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            description: description,
            price: price,
            stock: stock
          })
        });
        const json = await response.json();
        if (response.status === 202) {
          dispatch(editProductsSuccess(json.data));
        } else {
          dispatch(editProductsError(json.data));
        }
      } catch (error) {
        dispatch(editProductsError(error.toString()));
      }
  };
};
