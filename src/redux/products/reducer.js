import {
    GET_PRODUCTS_PENDING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    DELETE_PRODUCTS_PENDING,
    DELETE_PRODUCTS_SUCCESS,
    DELETE_PRODUCTS_ERROR,
    POST_PRODUCTS_ERROR,
    POST_PRODUCTS_PENDING,
    POST_PRODUCTS_SUCCESS,
    EDIT_PRODUCTS_ERROR,
    EDIT_PRODUCTS_PENDING,
    EDIT_PRODUCTS_SUCCESS
} from './constants';

const INITIAL_STATE = {
    isLoading: false,
    list: [],
    error: false,
};

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCTS_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                list: action.payload
            };
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case DELETE_PRODUCTS_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case DELETE_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                list: action.payload
            };
        case DELETE_PRODUCTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case POST_PRODUCTS_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case POST_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                list: action.payload
            };
        case POST_PRODUCTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case EDIT_PRODUCTS_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case EDIT_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                list: action.payload
            };
        case EDIT_PRODUCTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;
