import { getProductsPending, getProductsSuccess, getProductsError,postProductsPending, postProductsSuccess, postProductsError,editProductsPending, editProductsSuccess, editProductsError } from './actions';

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
    }
  };
};

export const postProducts = (name,description,price,stock) => {
  return async (dispatch) => {
    dispatch(postProductsPending());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/product/add`,{
          method: 'POST',
          headers: {
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
          console.log('Product added');
        } else {
          //dispatch(postProductsError(error.toString()));
          console.log('Product could not be Added.');
        }
      } catch (error) {
        dispatch(postProductsError(error.toString()));
        console.log('Product could not be Added.');
      }
  };
};

export const editProducts = (id,name,description,price,stock) => {
  return async (dispatch) => {
    dispatch(editProductsPending());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/product/update/${id}`,{
          method: 'PUT',
          headers: {
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
          console.log('Product Added.');
        } else {
          //dispatch(postProductsError(error.toString()));
          console.log('Product could not be Added.');
        }
      } catch (error) {
        dispatch(editProductsError(error.toString()));
        console.log('Product could not be Added.');
      }
  };
};
