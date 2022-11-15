import {
    GET_PRODUCTS_PENDING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GETBYID_PRODUCTS_PENDING,
    GETBYID_PRODUCTS_SUCCESS,
    GETBYID_PRODUCTS_ERROR,
    DELETE_PRODUCTS_PENDING,
    DELETE_PRODUCTS_SUCCESS,
    DELETE_PRODUCTS_ERROR,
    POST_PRODUCTS_PENDING,
    POST_PRODUCTS_SUCCESS,
    POST_PRODUCTS_ERROR,
    EDIT_PRODUCTS_PENDING,
    EDIT_PRODUCTS_SUCCESS,
    EDIT_PRODUCTS_ERROR,
    MESSAGE_MODAL_OPEN,
    MESSAGE_MODAL_CLOSE,
    CONFIRM_MODAL_OPEN,
    CONFIRM_MODAL_CLOSE
} from './constants';

const INITIAL_STATE = {
    isLoading: false,
    list: [],
    error: false,
    modalContent: { title: '', content: '' },
    showModalMessage: false,
    showConfirmModal: false
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
                modalContent: { title: 'ERROR!', content: `Could not GET Products!` },
                showModalMessage: true
            };
        case GETBYID_PRODUCTS_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case GETBYID_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                item: action.payload
            };
        case GETBYID_PRODUCTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                modalContent: { title: 'ERROR!', content: `Could not GET Products!` },
                showModalMessage: true
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
                list: action.payload,
                modalContent: {
                    title: 'SUCCESS!',
                    content: `Product successfully DELETED`
                  },
                showModalMessage: true
            };
        case DELETE_PRODUCTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                modalContent: {
                    title: 'ERROR!',
                    content: `Product could not be DELETED`
                },
                showModalMessage: true
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
                list: action.payload,
                showConfirmModal: false,
                modalContent: {
                    title: 'SUCCESS!',
                    content: `Product CREATED successfully`
                },
                showModalMessage: true
            };
        case POST_PRODUCTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                showConfirmModal: false,
                modalContent: {
                    title: 'ERROR!',
                    content: `Product could not be CREATED`
                },
                showModalMessage: true
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
                list: [...state.list, action.payload],
                showConfirmModal: false,
                modalContent: {
                    title: 'SUCCESS!',
                    content: `Product UPDATED successfully`
                },
                showModalMessage: true
            };
        case EDIT_PRODUCTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                showConfirmModal: false,
                modalContent: {
                    title: 'ERROR!',
                    content: `Product could not be UPDATED`
                },
                showModalMessage: true
            };
        case MESSAGE_MODAL_OPEN:
            return {
                ...state,
                modalContent: {
                    title: action.payload.title,
                    content: action.payload.content
                },
                showModalMessage: true
            };
        case MESSAGE_MODAL_CLOSE:
            return {
                ...state,
                showModalMessage: false
            };
        case CONFIRM_MODAL_OPEN:
            return {
                ...state,
                modalContent: {
                    title: 'Confirm',
                    content: action.payload
                },
                showConfirmModal: true
            };
        case CONFIRM_MODAL_CLOSE:
            return {
                ...state,
                showConfirmModal: false
            };
        default:
            return state;
    }
};

export default productReducer;
