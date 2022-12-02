import {
  FIREBASE_LOGIN_PENDING,
  FIREBASE_LOGIN_SUCCESS,
  FIREBASE_LOGIN_ERROR,
  MESSAGE_MODAL_OPEN,
  MESSAGE_MODAL_CLOSE,
  CONFIRM_MODAL_OPEN,
  CONFIRM_MODAL_CLOSE
} from './constants';

const INITIAL_STATE = {
  isLoading: false,
  modalContent: { title: '', content: '' },
  showModalMessage: false,
  showConfirmModal: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIREBASE_LOGIN_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case FIREBASE_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case FIREBASE_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        modalContent: { title: 'ERROR!', content: action.payload },
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

export default authReducer;
