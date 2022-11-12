import { GET_PRODUCTS_ERROR, GET_PRODUCTS_PENDING, GET_PRODUCTS_SUCCESS } from './constants';

const INITIAL_STATE = {
  isloading: false,
  error: '',
  list: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS_PENDING:
      return {
        ...state,
        isloading: true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isloading: false,
        error: '',
        list: action.payload
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        isloading: false,
        error: action.payload,
        list: []
      };
    default:
      return state;
  }
};

export default reducer;
