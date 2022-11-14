import { GET_PRODUCTS_ERROR, GET_PRODUCTS_PENDING, GET_PRODUCTS_SUCCESS ,
        POST_PRODUCTS_ERROR, POST_PRODUCTS_PENDING, POST_PRODUCTS_SUCCESS,
        EDIT_PRODUCTS_ERROR, EDIT_PRODUCTS_PENDING, EDIT_PRODUCTS_SUCCESS} from './constants';

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
    case POST_PRODUCTS_PENDING:
      return {
        ...state,
        isloading: true
      };
    case POST_PRODUCTS_SUCCESS:
      return {
        ...state,
        isloading: false,
        error: '',
        list: action.payload
      };
    case POST_PRODUCTS_ERROR:
      return {
        ...state,
        isloading: false,
        error: action.payload,
        list: []
      };
    case EDIT_PRODUCTS_PENDING:
      return {
        ...state,
        isloading: true
      };
    case EDIT_PRODUCTS_SUCCESS:
      return {
        ...state,
        isloading: false,
        error: '',
        list: action.payload
      };
    case EDIT_PRODUCTS_ERROR:
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
